import { WebPlugin } from '@capacitor/core';

import type { SuppressLongpressGesturePlugin } from './definitions';

export class SuppressLongpressGestureWeb
  extends WebPlugin
  implements SuppressLongpressGesturePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async activateService(): Promise<string> {
    console.warn('activateLongPressSuppression not supported for web');
    return 'activateLongPressSuppression not supported for web';
  }

  async setWebviewBackground(color: 'Black'|'White'): Promise<string> {
    console.warn('setWebviewBackground not supported for web; requested color: ', color);
    return 'setWebviewBackground not supported for web';
  }
}
