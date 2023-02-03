import { execSync } from "child_process";
import { join as pathJoin, relative as pathRelative } from "path";
import { exclude } from "tsafe/exclude";
import * as fs from "fs";

const lunaticDsfrDirPath = pathJoin(__dirname, "..", "..");

fs.writeFileSync(
    pathJoin(lunaticDsfrDirPath, "dist", "package.json"),
    Buffer.from(
        JSON.stringify(
            (() => {
                const packageJsonParsed = JSON.parse(
                    fs.readFileSync(pathJoin(lunaticDsfrDirPath, "package.json")).toString("utf8"),
                );

                return {
                    ...packageJsonParsed,
                    "main": packageJsonParsed["main"].replace(/^dist\//, ""),
                    "types": packageJsonParsed["types"].replace(/^dist\//, ""),
                };
            })(),
            null,
            2,
        ),
        "utf8",
    ),
);

const commonThirdPartyDeps = (() => {
    const namespaceModuleNames = ["@emotion"];
    const standaloneModuleNames = ["react", "@types/react"];

    return [
        ...namespaceModuleNames
            .map(namespaceModuleName =>
                fs
                    .readdirSync(pathJoin(lunaticDsfrDirPath, "node_modules", namespaceModuleName))
                    .map(submoduleName => `${namespaceModuleName}/${submoduleName}`),
            )
            .reduce((prev, curr) => [...prev, ...curr], []),
        ...standaloneModuleNames,
    ];
})();

const yarnHomeDirPath = pathJoin(lunaticDsfrDirPath, ".yarn_home");

fs.rmSync(yarnHomeDirPath, { "recursive": true, "force": true });
fs.mkdirSync(yarnHomeDirPath);

const execYarnLink = (params: { targetModuleName?: string; cwd: string }) => {
    const { targetModuleName, cwd } = params;

    const cmd = ["yarn", "link", ...(targetModuleName !== undefined ? [targetModuleName] : [])].join(
        " ",
    );

    console.log(`$ cd ${pathRelative(lunaticDsfrDirPath, cwd) || "."} && ${cmd}`);

    execSync(cmd, {
        cwd,
        "env": {
            ...process.env,
            "HOME": yarnHomeDirPath,
        },
    });
};

const testAppPaths = (() => {
    const arg = process.argv[2];

    const testAppNames = arg !== undefined ? [arg] : ["test-lunatic-dsfr"];

    return testAppNames
        .map(testAppName => {
            const testAppPath = pathJoin(lunaticDsfrDirPath, "..", testAppName);

            if (fs.existsSync(testAppPath)) {
                return testAppPath;
            }

            console.warn(`Skipping ${testAppName} since it cant be found here: ${testAppPath}`);

            return undefined;
        })
        .filter(exclude(undefined));
})();

if (testAppPaths.length === 0) {
    console.error("No test app to link into!");
    process.exit(-1);
}

testAppPaths.forEach(testAppPath => execSync("yarn install", { "cwd": testAppPath }));

console.log("=== Linking common dependencies ===");

const total = commonThirdPartyDeps.length;
let current = 0;

commonThirdPartyDeps.forEach(commonThirdPartyDep => {
    current++;

    console.log(`${current}/${total} ${commonThirdPartyDep}`);

    const localInstallPath = pathJoin(
        ...[
            lunaticDsfrDirPath,
            "node_modules",
            ...(commonThirdPartyDep.startsWith("@")
                ? commonThirdPartyDep.split("/")
                : [commonThirdPartyDep]),
        ],
    );

    execYarnLink({ "cwd": localInstallPath });
});

commonThirdPartyDeps.forEach(commonThirdPartyDep =>
    testAppPaths.forEach(testAppPath =>
        execYarnLink({
            "cwd": testAppPath,
            "targetModuleName": commonThirdPartyDep,
        }),
    ),
);

console.log("=== Linking in house dependencies ===");

execYarnLink({ "cwd": pathJoin(lunaticDsfrDirPath, "dist") });

testAppPaths.forEach(testAppPath =>
    execYarnLink({
        "cwd": testAppPath,
        "targetModuleName": "lunatic-dsfr",
    }),
);

export {};
