# Design Doc

## 目的
browserAPIを利用して、ファイルを操作するためのサービスを提供する。厳密にはファイルではないが、ファイルのように扱えるものも扱う(indexedDBなど)。
PWAなどオフラインでも動作するアプリケーションを想定している。データスキーマ―の変更なども考慮する。

## 技術調査

### ブラウザAPI

- File
  - File System Access API
  - Origin private file system
- DB
  - IndexedDB
  - LocalStorage
  - Cache API
  - SQLite wasm

