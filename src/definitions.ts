export interface SuppressLongpressGesturePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
