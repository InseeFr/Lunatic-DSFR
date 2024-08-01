<p align="center">
 <img src="https://raw.githubusercontent.com/InseeFr/Lunatic-DSFR/main/overview-light.png#gh-light-mode-only" />
 <img src="https://raw.githubusercontent.com/InseeFr/Lunatic-DSFR/main/overview-dark.png#gh-dark-mode-only" />
</p>

<p align="center">
  <a href="https://inseefr.github.io/Lunatic-DSFR/storybook/" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>
</p>

Lunatic-DSFR is a library of customised [Lunatic](https://github.com/InseeFr/Lunatic) components built with TypeScript and [React-DSFR](https://react-dsfr.etalab.studio/).

This library is designed to be an opt-in solution to replace the native style of Lunatic with the style of the [French Design system](https://systeme-de-design.gouv.fr/).

> WARNING: This Design System is only meant to be used for official French's public service websites.  
> Its main purpose is to make it easy to identify governmental websites for citizens. [See terms](https://www.systeme-de-design.gouv.fr/cgu/).

### Getting Started

**To visualise the Storybook**

The storybook is deployed [here](https://inseefr.github.io/Lunatic-DSFR/storybook/). In order to visualise and test the components you can launch the storybook locally. It is also recommended that any proposed changes to any components or any new components be tested in the storybook before proposing a PR.

To launch the storybook locally, ensure that you have cloned the repository.

```bash
git clone https://github.com/InseeFr/Lunatic-DSFR.git
```

Once you have the repository cloned locally, navigate to the folder containing the repository and ensure that the necessary packages are available.

```bash
cd lunatic-dsfr
yarn install
yarn storybook
```

Now you are ready to launch the storybook, which will be accessible at [localhost:6006](http://localhost:6006/)

**Connect Lunatic-DSFR with Lunatic**

In any application that uses the [Lunatic components library](https://github.com/InseeFr/Lunatic), it is possible to override the native Lunatic components by injecting **Lunatic-DSFR** ones. These process is detailed in Lunatic Documentation [here](https://inseefr.github.io/Lunatic/docs/components/personnalisation).

To use Lunatic-DSFR, first install theses packages into your application :

```bash
yarn add @inseefr/lunatic-dsfr @codegouvfr/react-dsfr tss-react @emotion/react
```

Import the Lunatic-DSFR components in the file where you use `LunaticComponents`:

```js
import { slotComponents } from "@inseefr/lunatic-dsfr";
```

Then inject `slotComponents` into `LunaticComponents`

```js
<LunaticComponents slots={slots} />
```

If you use `Suggester` component you will need to add these dependencies for [MUI](https://mui.com/) :

```bash
yarn add @mui/material @emotion/styled

```

Finally surround the `LunaticComponents` by the `MuiDsfrThemeProvider` provided by [`@codegouvfr/react-dsfr`](https://react-dsfr.codegouv.studio/mui)

```js
<MuiDsfrThemeProvider>
    {/*...*/}
    <LunaticComponents slots={slots} />
    {/*...*/}
</MuiDsfrThemeProvider>
```
