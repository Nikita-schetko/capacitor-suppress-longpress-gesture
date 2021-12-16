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

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`activateService()`](#activateservice)

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

</docgen-api>
