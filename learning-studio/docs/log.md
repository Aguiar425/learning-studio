# Week 1

- **package.json** this file shows the project details, such as its name, visibility, version, etc.
  It also shows scripts, dependencies and dev dependencies with acceptable versions.
- **tsconfig.app.json** has rules for type-checking. Since Vite does not check types, this file tells the TS compiler (tsc) how strict to be and which files to check.
- **vite.config.ts** shows settings for the tool (Vite) that runs and builds the app. Currently only the react plugin is here.
- **eslint.config.js** rules for linting. Many rules can added or tweaked for the desired code quality standards.
- **index.html** Is the entry point to the app. Vite follows the script tag (currently has the src as /src/main tsx) meaning the app will run inside the div named root
