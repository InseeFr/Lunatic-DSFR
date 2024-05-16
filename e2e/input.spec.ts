import { test } from "@playwright/test";
import { expectCollectedData, goToStory } from "./utils";

test(`can complete pairwise form`, async ({ page }) => {
    await goToStory(page, "components-input--default");
    await page.getByLabel("your name").fill("John");
    await expectCollectedData(page, "NAME", "John");
});
