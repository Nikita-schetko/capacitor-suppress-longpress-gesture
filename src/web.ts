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

  async deactivateService(): Promise<string> {
    console.warn('deactivateLongPressSuppression not supported for web');
    return 'deactivateLongPressSuppression not supported for web';
  }
}
