### v0.0.14: Jul 4, 2021
 * Add `Command` and `Factory` interface
 * Change `AccessLog` factory to implement `Factory` interface
 * Remove `lodash` depedency
 * Change `Folder structure` to `lowercase` and `File name` to `kebap-case` followed by it's type, e.g: `ValidationError.ts` to `validation.error.ts`, `AccessLog.ts` to `access-log.factory.ts`

### v0.0.13: Jul 3, 2021
 * Add `errorHandler` abstract method in `RouteProvider`
 * Fix message valiadation not replacing default translation

### v0.0.12: Jul 1, 2021
 * Add `ErrorType` constant
 * Middleware returning `next();`

### v0.0.11: Jul 1, 2021
 * Change Authorized and Validation Error type: `any`

### v0.0.10: Jul 1, 2021
 * Add `type` guard for `SystemError` class

### v0.0.8 & v0.0.9: Jul 1, 2021
 * Add `ErroHandler` for Authorize and Validation

### v0.0.7: Jul 1, 2021
 * Add `*.d.ts` declaration files on build project
 
### v0.0.6: Jul 1, 2021
 * Remove `LanguageCode` and add flexibility to extend new language translation
 