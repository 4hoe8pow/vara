# 開発環境の準備

コラボレーター用です.
コントリビューターだとフォーク形式ですが, 招待されたコラボレータはここのブランチを直接好きにできます.

1. Rust をセットアップ

<https://learn.microsoft.com/ja-jp/windows/dev-environment/rust/setup>

1. Tauri をインストール

`cargo install tauri-cli`

1. yarn をインストール

`npm install -g yarn`

## 確認

とりあえず以下がうまくいってればOK.

```cmd

$ rustc -V
rustc 1.67.0 (fc594f156 2023-01-24)

$ node -v
v19.6.0

$ yarn -v
1.22.19

$ cargo-tauri -V
tauri-cli 1.2.3
```

## ビルド

1. リポジトリクローン

`git clone git clone https://github.com/kustham/dharma`

1. node_modules つくる

`cd dharma && yarn`

1. ビルドしてみる

`yarn tauri build && yarn tauri dev`

最初めちゃくちゃ長い. 8~9分くらい．

## データの取り扱い

開発用のsqlite をそのままリポジトリに上げているが、これはいつかやめる。
