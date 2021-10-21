---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [TypeUuid](./node-core-library.typeuuid.md)

## TypeUuid class

Provides a version-independent implementation of the JavaScript `instanceof` operator.

<b>Signature:</b>

```typescript
export declare class TypeUuid
```

## Remarks

The JavaScript `instanceof` operator normally only identifies objects from a particular library instance. For example, suppose the NPM package `example-lib` has two published versions 1.2.0 and 1.3.0, and it exports a class called `A` ; one for each version.

The `TypeUuid` facility provides a way to make `a instanceof A` return true for both prototypes of `A` , by instead using a universally unique identifier (UUID) to detect object instances.

You can use `Symbol.hasInstance` to enable the system `instanceof` operator to recognize type UUID equivalence:

```ts
const uuidWidget: string = '9c340ef0-d29f-4e2e-a09f-42bacc59024b';
class Widget {
  public static [Symbol.hasInstance](instance: object): boolean {
    return TypeUuid.isInstanceOf(instance, uuidWidget);
  }
}

```
// Example usage:

```ts
import { Widget as Widget1 } from 'v1-of-library';
import { Widget as Widget2 } from 'v2-of-library';
const widget = new Widget2();
console.log(widget instanceof Widget1); // prints true

```

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [isInstanceOf(targetObject, typeUuid)](./node-core-library.typeuuid.isinstanceof.md) | <code>static</code> | Returns true if the <code>targetObject</code> is an instance of a JavaScript class that was previously registered using the specified <code>typeUuid</code>. Base classes are also considered. |
|  [registerClass(targetClass, typeUuid)](./node-core-library.typeuuid.registerclass.md) | <code>static</code> | Registers a JavaScript class as having a type identified by the specified UUID. |
