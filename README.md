# Lunatic-DSFR

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

Currently the storybook is not deployed. In order to visualise and test the components you can launch the storybook locally. It is also recommended that any proposed changes to any components or any new components be tested in the storybook before proposing a PR.

To launch the storybook locally, ensure that you have cloned the repository.

```bash
git clone https://github.com/InseeFr/Lunatic-DSFR.git
```

Once you have the repository cloned locally, navigate to the folder containing the repository and ensure that the necessary packages are available.

```bash
cd lunatic-dsfr
yarn install
```

Now you are ready to launch the storybook, which will be accessible at [localhost:6006](http://localhost:6006/)

**Connect Lunatic-DSFR with `useLunatic()`**

In any application that uses the [Lunatic components library](https://github.com/InseeFr/Lunatic), it is possible to over-ride the native Lunatic components by injecting **Lunatic-DSFR** as an argument in the `uselunatic()` function.

To use Lunatic-DSFR, first install the package into your application that calls `useLunatic()`:

```bash
yarn add @inseefr/lunatic-dsfr
```

Import the Lunatic-DSFR components in the file where you call `useLunatic()`:

```js
import { customComponents } from "@inseefr/lunatic-dsfr";
```

Then inject `custom: customComponents` as an argument of the `useLunatic()` function:

```js
const {
    getComponents,
    goPreviousPage,
    goNextPage,
    isFirstPage,
    isLastPage,
    goToPage,
    getData,
    Provider,
    compileControls,
    pageTag,
} = useLunatic(source, data, {
    getReferentiel,
    preferences,
    features,
    savingType,
    autoSuggesterloading,
    onChange,
    custom: customComponents,
});
```
