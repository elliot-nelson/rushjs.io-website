---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/heft-config-file](./heft-config-file.md) &gt; [IPropertiesInheritance](./heft-config-file.ipropertiesinheritance.md)

## IPropertiesInheritance type

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
>


<b>Signature:</b>

```typescript
export declare type IPropertiesInheritance<TConfigurationFile> = {
    [propertyName in keyof TConfigurationFile]?: IPropertyInheritance<InheritanceType.append | InheritanceType.replace> | ICustomPropertyInheritance<TConfigurationFile[propertyName]>;
};
```
<b>References:</b> [IPropertyInheritance](./heft-config-file.ipropertyinheritance.md) , [ICustomPropertyInheritance](./heft-config-file.icustompropertyinheritance.md)
