# capacitor-suppress-longpress-gesture
This plugin allows to suppress longpress gesture in iOS system. Designed for capacitor v5 (Thanks to @mariusbolik)

latest 0.0.7 - capacitor v5 support
0.0.6 - support capacitor v4
0.0.5 - supports capacitor v3

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

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`activateService()`](#activateservice)
* [`deactivateService()`](#deactivateservice)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### activateService()

```typescript
activateService() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------


### deactivateService()

```typescript
deactivateService() => Promise<string>
```

**Returns:** <code>Promise&lt;string&gt;</code>

--------------------

</docgen-api>
