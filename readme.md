# Batara 😇
Javascript framework for laravel users

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  
[![Quality gate][quality-image]][quality-url]

🤩 Motivations
---
1. Provide easy to use laravel like pattern on express application
2. Provide boilerplate for my internal works

🖖 Usage
---
## Development 
1. Coming soon! [garuda scaffolding][garuda-repository]

## Contribution
1. Install packages: `npm install`
2. Available commands
- Check development: `npm run dev`
- Test with coverage: `npm run test`
- Test with watcher: `npm run test:watch`
- Build: `npm run build`
3. Enjoy

🧾 Structure
---
```text
|-- Workspace
    |-- jest.config.js
    |-- nodemon.json
    |-- package.json
    |-- README.md
    |-- tsconfig.build.json
    |-- tsconfig.json
    |-- tsconfig.test.json
    |-- .github
    |-- asset
    |-- dist
    |-- doc
    |-- example
    |-- src
    |   |-- controller
    |   |-- entity
    |   |-- error
    |   |-- middleware
    |   |-- provider
    |-- test
    |   |-- unit
    |   |-- integration
```

✔️ Test & Coverages
---
![Test coverages][coverage-url]

📋 Docs
---
Complete documentations are available [here][document-url]

**Legends:**
- ✔️ Available with test
- ⚠️ Available without test (Use with your own risk 😆)
- ❌ Unavailable yet
- ❓ Ideation/request

| Status | Feature   | Description |
| --- | ------       | ------      |
| ✔️ | Entity        |  |
| ✔️ | Error         |  |
| ✔️ | Middleware    |  |
| ✔️ | Provider      |  |
| ✔️ | Controller    |  |

❓ Questions
---
1. Unit and Integration testing boundary?

👀 Issues
---
1. There's issue with `nodemon ^2.0.9` when restarting app causing port is already in use, so we downgrade to the previous version `nodemon v2.0.7`. Hope they fix it in the future so we can enjoy using nodemon newer version again. 

🚀 Roadmaps
---
To understand more about our progress please see [changelog][changelog-url]

1. refactor into `mini-package`
2. write integration test
3. write complete documentation
4. Add static type checking during runtime 
- https://learning-notes.mistermicheels.com/javascript/typescript/runtime-type-checking/
- https://medium.com/weekly-webtips/how-to-get-runtime-type-checking-in-typescript-ec06e88046f4
5. replace `express-validator` with custom `declarative-validator`
- implementation one of: `validator.js`, `joi`, `indicative(adonis)`

🤩 Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute][contribute-url]

💖 Support
---
Feel free to contributes and supporting us through: [Idaman][website-url]

📜 License
---
MIT

[npm-image]: https://img.shields.io/npm/v/batara.svg
[npm-url]: https://npmjs.org/package/batara
[downloads-image]: https://img.shields.io/npm/dm/batara.svg
[downloads-url]: https://npmcharts.com/compare/batara?minimal=true
[coverage-url]: https://github.com/idaman-id/batara/blob/master/asset/image/coverage.png?raw=true
[document-url]: https://github.com/idaman-id/batara/tree/master/doc
[changelog-url]: https://github.com/idaman-id/batara/blob/master/doc/CHANGELOG.MD
[contribute-url]: https://github.com/idaman-id/batara/blob/master/doc/CONTRIBUTE.MD
[website-url]: https://idaman.id
[garuda-repository]: https://github.com/idaman-id/garuda
[quality-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=idaman-id_batara
[quality-url]: https://sonarcloud.io/dashboard?id=idaman-id_batara
