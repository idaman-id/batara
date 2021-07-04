import express from 'express';
import IApplication from './interface/application.interface';
import ILanguage from './interface/validation-language.interface';
declare global {
    var __basedir: string;
    namespace Express {
        interface Request {
            _language: ILanguage;
        }
    }
}
export default class Application {
    instance: express.Application;
    private setting;
    constructor(setting: IApplication);
    start(): void;
}
