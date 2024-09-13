# Zod

## Zodとは

特定の値、オブジェクトの型を定義するライブラリです。
TypeScriptの型定義を補強し、ランタイム時にも型情報を利用できるようにします。

## TypeScript vs Zod

TypeScriptはJavaScriptにトランスパイルしてアプリケーションで利用します。
ランタイム時は必ずJavaScriptで実行されてしまい、型情報が消えてしまいます。

そこでZodによる

## ランタイム時の型情報

ソースコードで管理されていないランタイムの型情報にはどんなものがあるでしょうか？？

- Formの入力値
- APIのレスポンス
- LocalStorageの値 .. など

これらの情報を扱うときにZodによる型付けが役立ちます。

## Zod問題集

Zodを愛してやまないみなさまに朗報です！
ここにZodの問題集があります！免許皆伝を目指しましょう！

### 問題の解き方

子階層にzod/level1, zod/level2, zod/level3, ... というディレクトリがあります。
zod/levelの中には、`index.ts`, `index.test.ts`の2つがあります。

`index.ts`・・・問題の入っているファイルです。
`index.test.ts`・・・解答が正しいか確認するためのファイルです。（**編集しないでください**）

```bash
zod
├ level1
| ├index.ts
| └index.test.ts
├ level2
| ├index.ts
| └index.test.ts
└ level3
```

### 進め方

1. `index.ts`の指示にしたがって問題を解いてください。
2. `index.test.ts`を実行して、解答が正しいか確認してください。

```bash
npm run test zod/level1  # levelのあとの文字は進行に合わせて変更してください
```

#### 問題作者向けテンプレ

``` ts
// index.ts
import z from 'zod';
/**
 * =====解説=====
 *
 * ====問題====
 *
 * ====ヒント====
 * https://zod.dev/....
 */

/**
 * Q. string型のスキーマを定義してみよう
 * ↓ z.xxxxx()のxxxxの部分のみ変更してください
 */
export const example = () => {
  return z.string();
};

// ==== <<👌基礎👌>> ==== //
/**Q. 文字列型のスキーマを返却しよう */
export const b1 = () => {
  return z.string();
};

/** Q. 数値型のスキーマを返却しよう */
export const b2 = () => {
  return z.number();
};

/** Q. 真偽値型のスキーマを返却しよう */
export const b3 = () => {
  return z.boolean();
};

// ==== <<🤯応用🤯>> ==== //
/**
 * Q. 文字列のみ入る配列のスキーマを返却しよう
 * 例: ['a', 'b', 'c'] => OK / [1, 2, 3] => NG
 */
export const a4 = () => {
  return z.boolean();
};

```
