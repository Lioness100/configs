# configs

> Note: This package is incredibly opinionated and I strongly recommend you
> don't use it. It's also not on npm, because I don't want to change
> the version and publish every time I change something.

This repository exports shareabe & extendable configuration files for the following services:

-   [`tsup`](./tsup.config.js)
-   [`eslint`](./.eslintrc.json)
-   [`prettier`](./.prettierrc.json)
-   [`typescript`](./tsconfig.json)

It also contains copy-pasteable (but not exported) content in:

-   [`.gitattributes`](./.gitattributes)
-   [`.gitignore`](./.gitignore)
-   [`tsconfig.eslint.json`](./tsconfig.eslint.json)
-   [`.editorconfig`](./.editorconfig)
-   [`.yarnrc.yml`](./.yarnrc.yml) (and [`.yarn/`](./.yarn/))
-   [`.github/`](./.github/)

## Usage

Run:

```sh
yarn add -D configs@Lioness100/configs eslint prettier typescript tsup
```

And configure the individual services like so:

<details>

<summary><code>tsup</code></summary>

`package.json`:

```ts
{
    "scripts": {
        "build": "tsup --config configs/tsup.config.js"
    }
}
```

</details>

<details>
<summary><code>eslint</code></summary>

`package.json`:

```json
{
    "eslintConfig": {
        "extends": ["./node_modules/configs/.eslintrc.json"]
    }
}
```

</details>

<details>
<summary><code>prettier</code></summary>

`package.json`:

```json
{
    "prettier": "configs/prettier"
}
```

</details>

<details>
<summary><code>typescript</code></summary>

`tsconfig.json`:

```json
{
    "extends": "configs/tsconfig",
    "compilerOptions": {
        "outDir": "dist",
        "rootDir": "src"
    },
    "include": ["src"]
}
```

`tsconfig.eslint.json`:

```json
{
    "extends": "./tsconfig.json",
    "include": ["**/*.ts", "**/*.js", "**/*.json"]
}
```

</details>
