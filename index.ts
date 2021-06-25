
import Application from './app/Application';
import { setting } from './app/configs/Setting';

const app = new Application(setting.application);

app.start();
