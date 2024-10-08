/**
 * ====解説====
 * 自作カスタムバリデーションつきのスキーマをつくってみよう！
 *
 * zod標準のバリデーションでは足りない場合、カスタムバリデーションを追加することができます。
 * カスタムバリデーションを実装する関数に`refine`, `superRefine`があります。
 * 主に複数フィールド間で値をチェックするときに利用します。
 *
 * `refine`・・・エラーメッセージをシンプルにカスタマイズすることができます。
 * `superRefine`・・・エラーメッセージに加え、ZodErrorの詳細情報を追加することができます。
 *
 * また、複数フィールド間の関係性をチェックする際、`path`を利用してエラーが発生したフィールドを記録することができます。
 * (example参照)
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
 * Q. パスワードと確認用パスワードが一致しない場合に「パスワードが一致しません」と出力しよう
 * また、エラーメッセージはconfirmフィールドのみに追加しよう
 */
export const example = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: 'パスワードが一致しません',
      path: ['confirm'], // confirmフィールドがエラーであることを記録
    });

  return passwordFormSchema;
};

// ==== <<👌基礎👌>> ==== //
/**Q. example()と同じバリデーションをsuperRefineで書いてみよう */
export const b1 = () => {
  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .superRefine(/* ここに書く */);

  return passwordFormSchema;
};

/**
 * Q. value1,2,3でいずれかの値が重複したときにエラーメッセージ「重複しています」と出力しよう
 * エラーメッセージはvalue1,2,3のうち、重複しているフィールドすべてに追加しよう
 *
 * 例：value1とvalue2が重複している場合のzod errors
 * [
 *   {
 *     code: 'custom',
 *     message: '重複しています',
 *     path: ['value1'],
 *   },
 *   {
 *     code: 'custom',
 *     message: '重複しています',
 *     path: ['value2'],
 *   },
 * ]
 */
export const b2 = () => {
  const valueFormSchema = z
    .object({
      value1: z.string(),
      value2: z.string(),
      value3: z.string(),
    })
    .superRefine(/* ここに書く */);

  return valueFormSchema;
};

// ==== <<🤯発展🤯>> ==== //
/**
 * Q. Exampleと同じ条件のスキーマを関数に切り出して、再利用可能なカスタムバリデーションを作成しよう
 */
export const a1 = () => {
  // ↓で切り出した関数を完成させよう
  const passwordMatch = () => {};

  const passwordFormSchema = z
    .object({
      password: z.string(),
      confirm: z.string(),
    })
    .superRefine(passwordMatch);

  return passwordFormSchema;
};
