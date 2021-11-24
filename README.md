# capacitor-suppress-longpress-gesture
This plugin allows to suppress longpress gesture in iOs system. Designed for capacitor v3

## Install

```bash
npm install capacitor-suppress-longpress-gesture
npx cap sync
```


## Usage 

Just import it in your 'app' component, and call activateService() method! 

```
import { SuppressLongpressGesture } from 'capacitor-suppress-longpress-gesture';
SuppressLongpressGesture.activateService();
```

Optionally, you can use **setWebviewBackground** func, to set Black or White background for WKWebView (You can see on the phase of start of your app, in case you don't have splashscreen, or after memory termination WKWebView Reload)

## API

<docgen-index>

- [capacitor-suppress-longpress-gesture](#capacitor-suppress-longpress-gesture)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
    - [echo(...)](#echo)
    - [activateService()](#activateservice)
    - [setWebviewBackground(...)](#setwebviewbackground)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### activateService()

```typescript
activateService() => any
```

**Returns:** <code>any</code>

--------------------


### setWebviewBackground(...)

```typescript
setWebviewBackground(color: 'Black' | 'White') => any
```

| Param       | Type                            |
| ----------- | ------------------------------- |
| **`color`** | <code>"Black" \| "White"</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>
