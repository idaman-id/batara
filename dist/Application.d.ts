import express from 'express';
import IApplication from './contracts/interface/Application';
import ILanguage from './contracts/interface/ValidationLanguage';
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
