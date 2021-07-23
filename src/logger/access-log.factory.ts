
import moment from 'moment';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';

import { LogSetting } from './log.type';
import { Handler } from '../router/http.interface';
import LogFormat from './log-format.factory';
import Factory from '../contract/factory.interface';

export default class AccessLog implements Factory<Handler>
{

  public make(setting: LogSetting)
  {
    const formats = new LogFormat().make();
    const fileName = setting.fileName || `${moment().format('YYYY-MM-DD')}.log`;
    const options = {
      stream: createStream(fileName, {
        interval: setting.interval,
        path: setting.path
      })
    };
    return morgan(formats, options);
  }

}