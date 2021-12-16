export interface SuppressLongpressGesturePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  activateService(): Promise<string>;
  deactivateService(): Promise<string>;

}
