---
layout: page
navigation_source: api_nav
improve_this_button: false
---


[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [FileSystemCopyFilesAsyncFilter](./node-core-library.filesystemcopyfilesasyncfilter.md)

## FileSystemCopyFilesAsyncFilter type

Callback function type for [IFileSystemCopyFilesAsyncOptions.filter](./node-core-library.ifilesystemcopyfilesasyncoptions.filter.md)

<b>Signature:</b>

```typescript
export declare type FileSystemCopyFilesAsyncFilter = (sourcePath: string, destinationPath: string) => Promise<boolean>;
```
