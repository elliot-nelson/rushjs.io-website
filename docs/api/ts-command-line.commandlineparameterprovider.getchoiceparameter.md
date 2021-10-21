---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineParameterProvider](./ts-command-line.commandlineparameterprovider.md) &gt; [getChoiceParameter](./ts-command-line.commandlineparameterprovider.getchoiceparameter.md)

## CommandLineParameterProvider.getChoiceParameter() method

Returns the CommandLineChoiceParameter with the specified long name.

<b>Signature:</b>

```typescript
getChoiceParameter(parameterLongName: string): CommandLineChoiceParameter;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parameterLongName | string |  |

<b>Returns:</b>

[CommandLineChoiceParameter](./ts-command-line.commandlinechoiceparameter.md)

## Remarks

This method throws an exception if the parameter is not defined.
