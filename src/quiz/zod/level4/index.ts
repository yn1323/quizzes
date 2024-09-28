/**
 * ====解説====
 * 自作カスタムバリデーションつきのスキーマをつくってみよう！
 *
 * zod標準のバリデーションでは足りない場合、カスタムバリデーションを追加することができます。
 * カスタムバリデーションを実装するときは`refine`, `superRefine`を利用します。
 * `refine`・・・エラーメッセージをシンプルにカスタマイズすることができます。
 * `superRefine`・・・エラーメッセージに加え、ZodErrorの詳細情報を追加することができます。
 *
 * 基本は`refine`, エラーメッセージの詳細情報が必要な場合は`superRefine`を利用します。
 *
 * ====問題====
 * `Q.`のあとの指示に従って、カスタムバリデーションをつくろう
 * `npm run test zod/level4`ですべてのテストが通ることを確認しよう
 *
 * ====ヒント====
 * https://zod.dev/?id=refine
 * https://zod.dev/?id=superrefine
 *
 */

import z from 'zod';

/**
 * Q. パスワードと確認用パスワードが一致しているかを確認するスキーマを返却しよう
 */
export const exampleRefine = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ['confirm'], // confirmフィールドにエラーを追加
    });

  return passwordFormSchema;
};

// ==== <<👌基礎👌>> ==== //
/**Q. exampleRefine()と同じバリデーションをsuperRefineで書いてみよう */
export const b1 = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .superRefine(/* ここを修正する */);

  return passwordFormSchema;
};

/** Q. 数値型のスキーマを返却しよう */
export const b2 = () => {
  return z.xxxx();
};

/** Q. 真偽値型のスキーマを返却しよう */
export const b3 = () => {
  return z.xxxx();
};

// ==== <<🤯応用🤯>> ==== //
/**
 * Q. 文字列のみ入る配列のスキーマを返却しよう
 * 例: ['a', 'b', 'c'] => OK / [1, 2, 3] => NG
 */
export const a1 = () => {
  return z.boolean();
};

// ==== <<👹鬼👹>> ==== //
/**
 * Q. 文字列配列のスキーマを返却しよう
 * 例: ['a', 'b', 'c'] => OK / [1, 2, 3] => NG
 */
export const o1 = () => {
  return z.xxxx();
};
