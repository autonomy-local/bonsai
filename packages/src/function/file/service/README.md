# Design Doc

## 目的
browserAPIを利用して、ファイルを操作するためのサービスを提供する。厳密にはファイルではないが、ファイルのように扱えるものも扱う(indexedDBなど)。
PWAなどオフラインでも動作するアプリケーションを想定している。データスキーマ―の変更なども考慮する。
各プロダクトがパッケージを利用することで、ファイル操作を容易に行えるようにする。

## 要件

### 最低限度
- 各種の永続層からファイルを読み込む
- ファイル操作に必要なユーザーインターフェースを提供する
- プロダクトへ取得したデータを提供する

### ブラウザAPI

- File
  - File System Access API
  - Origin private file system
- DB
  - IndexedDB
  - LocalStorage
  - Cache API
  - SQLite wasm

