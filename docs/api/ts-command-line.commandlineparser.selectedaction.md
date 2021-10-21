---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/ts-command-line](./ts-command-line.md) &gt; [CommandLineParser](./ts-command-line.commandlineparser.md) &gt; [selectedAction](./ts-command-line.commandlineparser.selectedaction.md)

## CommandLineParser.selectedAction property

Reports which CommandLineAction was specified on the command line.

<b>Signature:</b>

```typescript
selectedAction: CommandLineAction | undefined;
```

## Remarks

The value will be assigned before onExecute() is invoked.
