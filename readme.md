# Batara ๐
Javascript framework for laravel users

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  
[![Quality gate][quality-image]][quality-url]

๐คฉ Motivations
---
1. Provide easy to use `laravel like` folder architecture on top of express application
2. Provide boilerplate for my internal works

๐ Usage
---
### Development 
It's should be something like:
```md
1. npm install -g garuda
2. garuda batara new [project-name]
3. cd [project-name]
4. npm install
5. npm run dev
6. enjoy! 
```
Coming soon, our scaffolding tools: [garuda][garuda-repository]

### Contribution
1. Install packages: `npm install`
2. Available commands
- Check development: `npm run dev`
- Test with coverage: `npm run test`
- Test with watcher: `npm run test:watch`
- Build: `npm run build`
3. Enjoy

๐งพ Structure
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
    |   |-- contract
    |   |-- controller
    |   |-- entity
    |   |-- error
    |   |-- middleware
    |   |-- provider
    |   |-- router
    |   |-- validator
    |-- test
    |   |-- unit
    |   |-- integration
```

โ๏ธ Test & Coverages
---
![Test coverages][coverage-url]

๐ Docs
---
Complete documentations are available [here][document-url]

**Legends:**
- โ๏ธ Available with test
- โ ๏ธ Available without test (Use with your own risk ๐)
- โ Unavailable yet
- โ Ideation/request

| Status | Feature   | Description |
| --- | ------       | ------      |
| โ๏ธ | Contract      | definition of application shape |
| โ๏ธ | Controller    | last place to retrieve request and returning response |
| โ๏ธ | Entity        | class containing business logic |
| โ๏ธ | Error         | library defined error, feel free to extend the `SystemError` |
| โ๏ธ | Logger        | built in logger |
| โ๏ธ | Middleware    | intermediary between request and controller |
| โ๏ธ | Provider      | class to activate/inactivate certain configuration |
| โ๏ธ | Router        | define how and by who certain request will be handled |
| โ๏ธ | Validator     | built in request validator, support multi-lingual according to client preferred configuration |

โ Questions
---
Any question related to this library please refer to [discussion][discussion-url]

๐ Issues
---
1. There's issue with `nodemon ^2.0.9` when restarting app causing port is already in use, so we downgrade to the previous version `nodemon v2.0.7`. Hope they fix it in the future so we can enjoy using nodemon newer version again. 

๐ Roadmaps
---
To understand more about our progress please see [changelog][changelog-url]

[v0.0.20] - Jul 30, 2021
1. write integration test
2. write complete documentation

[v0.0.21] - TBA
1. Add static type checking during runtime 
- https://learning-notes.mistermicheels.com/javascript/typescript/runtime-type-checking/
- https://medium.com/weekly-webtips/how-to-get-runtime-type-checking-in-typescript-ec06e88046f4

[v0.0.22] - TBA
1. replace `express-validator` with custom `declarative-validator`
- implementation one of: `validator.js`, `joi`, `indicative(adonis)`

๐คฉ Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute][contribute-url]

๐ Support
---
Feel free to contributes and supporting us through: 
[Patreon][patreon-url]

๐ License
---
MIT

[npm-image]: https://img.shields.io/npm/v/batara.svg
[npm-url]: https://npmjs.org/package/batara
[downloads-image]: https://img.shields.io/npm/dm/batara.svg
[downloads-url]: https://npmcharts.com/compare/batara?minimal=true
[coverage-url]: https://github.com/idaman-id/batara/blob/master/asset/image/coverage.png?raw=true
[document-url]: https://github.com/idaman-id/batara/tree/master/doc
[changelog-url]: https://github.com/idaman-id/batara/blob/master/doc/CHANGELOG.md
[contribute-url]: https://github.com/idaman-id/batara/blob/master/doc/CONTRIBUTE.md
[discussion-url]: https://github.com/idaman-id/batara/blob/master/doc/DISCUSSION.md
[garuda-repository]: https://github.com/idaman-id/garuda
[quality-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=idaman-id_batara
[quality-url]: https://sonarcloud.io/dashboard?id=idaman-id_batara
[patreon-url]: https://patreon.com/idaman
