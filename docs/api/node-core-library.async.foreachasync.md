---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [Async](./node-core-library.async.md) &gt; [forEachAsync](./node-core-library.async.foreachasync.md)

## Async.forEachAsync() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
>

Given an input array and a `callback` function, invoke the callback to start a promise for each element in the array.

<b>Signature:</b>

```typescript
static forEachAsync<TEntry>(array: TEntry[], callback: (entry: TEntry, arrayIndex: number) => Promise<void>, options?: IAsyncParallelismOptions | undefined): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  array | TEntry\[\] | the array of inputs for the callback function |
|  callback | (entry: TEntry, arrayIndex: number) =&gt; Promise&lt;void&gt; | a function that starts an asynchronous promise for an element from the array |
|  options | [IAsyncParallelismOptions](./node-core-library.iasyncparallelismoptions.md) \| undefined | options for customizing the control flow |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

This API is similar to the system `Array#forEach` .

If `callback` throws a synchronous exception, or if it returns a promise that rejects, then the loop stops immediately. Any remaining array items will be skipped, and overall operation will reject with the first error that was encountered.
