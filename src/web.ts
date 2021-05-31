import { WebPlugin } from '@capacitor/core';

import type { SuppressLongpressGesturePlugin } from './definitions';

export class SuppressLongpressGestureWeb
  extends WebPlugin
  implements SuppressLongpressGesturePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
