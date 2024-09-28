/**
 * ====解説====
 * バリデーションつきのスキーマをつくってみよう！
 *
 * zodでは型定義だけでなく、バリデーションも行うことができます。
 * 型定義のあとにメソッドチェーンの形でバリデーションを追加します。
 *
 * ```
 * // 文字列の長さが5文字であることをバリデーション
 * const schema1 = z.string().length(5);
 * schema.safeParse("hello"); // => { success: true; data: "hello" }
 * schema.safeParse("hoge"); // => { success: false; error: ZodError }
 *
 * // 数値が0以上100以下であることをバリデーション
 * const schema2 = z.number().min(0).max(100);
 * schema.safeParse(50); // => { success: true; data: 50 }
 * schema.safeParse(101); // => { success: false; error: ZodError }
 * ```
 *
 * ====問題====
 * `Q.`のあとの指示に従って、z.xxxx()の形でバリデーションつきスキーマを定義しよう
 * `npm run test zod/level3`ですべてのテストが通ることを確認しよう
 *
 * ====ヒント====
 * https://zod.dev/?id=strings
 * https://zod.dev/?id=numbers
 *
 */

import z from 'zod';

// ==== <<✅例題✅>> ==== //
/**Q. 長さ2が最大となる文字列のスキーマをつくろう */
export const example = () => {
  return z.string().max(2);
};

// ==== <<👌基礎👌>> ==== //
/**Q. 長さが最大10、最小5となる文字列のスキーマをつくろう */
export const b1 = () => {
  return z.xxxx();
};

/**Q. 'https://'始まるの文字列のみ許容するスキーマをつくろう */
export const b2 = () => {
  return z.xxxx();
};

/**Q. 最大10、最小5となる数値型のスキーマをつくろう */
export const b3 = () => {
  return z.xxxx();
};

/**Q. 0と正の数を許容する数値型のスキーマをつくろう */
export const b4 = () => {
  return z.xxxx();
};

/**Q. 長さが5となる数値型配列のスキーマをつくろう */
export const b5 = () => {
  return z.xxxx();
};

// ==== <<🤯発展🤯>> ==== //
/**Q. 文字列"fish","chicken","pork"のみ許容する文字列のスキーマをつくろう */
export const a1 = () => {
  return z.xxxx();
};

/**Q. 文字列、または`undefined`のみ許容するスキーマをつくろう */
export const a2 = () => {
  return z.xxxx();
};

/**Q. 文字列、または`null`のみ許容するスキーマをつくろう */
export const a3 = () => {
  return z.xxxx();
};

// ==== <<👹鬼👹>> ==== //
/**Q.次のバリデーションを持つオブジェクトのスキーマをつくろう
 * {
 *   name: "hoge" // 文字列-最小5文字、最大10文字
 *   age: 30 // 数値
 *   gender: 'male' // 文字列-最大10文字、undefined許容
 *   agree: true // 真偽値
 * }
 */
export const o1 = () => {
  return z.xxxx();
};
