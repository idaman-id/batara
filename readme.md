# Batara 😇
Javascript framework for laravel users

🤩 Motivations
---
1. Provide easy to use laravel like pattern on javascript
2. Provide boilerplate for my internal works and jobs
3. 

🖖 Usage
---
## How to use
1. Install packages: `npm install batara`
2. Import package
```ts

import { Application } from 'batara';

const app = new Application({
  name: "service",
  version: "1.0",
  debug: true,
  environment: "local",
  timezone: "+07:00",
  host: "localhost",
  port: 3000,
});

app.start();

```
3. Enjoy

## How to develop
1. Install packages: `npm install`
2. Setup `.env` from `.env.example`
3. Run: `npm run dev`
4. Enjoy

## How to test
1. Install packages: `npm install`
2. Setup `.env.test` from `.env.example`
3. Run: `npm run test`
4. Enjoy

✔️ Test & Coverages
---
![Test coverages](https://github.com/gurisa/batara/blob/master/assets/image/coverage.png?raw=true)

📋 Docs
---
Complete documentations are available [here](https://github.com/gurisa/batara/tree/master/docs)

**Legends:**
- ✔️ Available with test
- ⚠️ Available without test (Use with your own risk 😆)
- ❌ Unavailable yet
- ❓ Ideation/request

| Status | Feature   | Description |
| --- | ------       | ------      |
| ⚠️ | Contract      | Constant, Interface, Type |
| ⚠️ | Controller    |  |
| ⚠️ | Entity        |  |
| ⚠️ | Error         |  |
| ⚠️ | Middleware    |  |
| ❌ | Model         |  |
| ⚠️ | Provider      |  |
| ❌ | Repository    |  |
| --- | ------       | ------ |

❓ Questions
---
1. When to use `Union type: object | array` and `Generic type: <T, S>`
- Answer: With union type we get mixed type (object or array or both), with generic we get one of them (object or array)
2. When to use `Literal type: ADMIN | AUTHOR` and `Enum type: enum { ADMIN = "ADMIN", AUTHOR = "AUTHOR" }`

👀 Issues
---
1. write declaration `d.ts` for usage as library (if necessary)
2. write unit and integration tests

🚀 Roadmaps
---
1. implementation of middleware: authenticate, logger
2. implementation of: model database, model messaging, repository pattern

🤩 Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute](https://github.com/gurisa/batara/pulls)

💖 Support
---
This is open source project feel free to contributes and supporting us through: [Idaman](https://idaman.id)


📜 License
---
MIT
