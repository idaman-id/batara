
import { Handler } from 'express';
import moment from 'moment';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';

import { AccessLogSetting } from '../type/access-log-setting.type';
import LogFormat from './log-format.factory';
import Factory from '../interface/factory.interface';

export default class AccessLog implements Factory<Handler>
{

  public make(setting: AccessLogSetting)
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