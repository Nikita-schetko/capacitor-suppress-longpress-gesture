export interface SuppressLongpressGesturePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  activateService(): Promise<string>;
  setWebviewBackground(color: 'Black'|'White'): Promise<string>;
}
