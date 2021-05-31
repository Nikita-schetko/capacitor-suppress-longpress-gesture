import { registerPlugin } from '@capacitor/core';

import type { SuppressLongpressGesturePlugin } from './definitions';

const SuppressLongpressGesture = registerPlugin<SuppressLongpressGesturePlugin>(
  'SuppressLongpressGesture',
  {
    web: () => import('./web').then(m => new m.SuppressLongpressGestureWeb()),
  },
);

export * from './definitions';
export { SuppressLongpressGesture };
