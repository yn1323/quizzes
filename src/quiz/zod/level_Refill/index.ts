/**
 * ====解説====
 *
 * TypeScriptには構造的部分型が採用されていて、型の互換性は型の構造に基づいて判定されます。
 * 一方、JavaやC#の型システムに見られる公称型は型の名前に基づいて区別され、構造に同じであろうが型名が異な
 * れば互換性がないとみなされます。
 *
 * このような言語仕様がある上で、TypeScript と zod を用いて型を区別化してみましょう！
 *
 * 型の区別化がないとどうなるのか？
 * 例えば、以下のようなProduct型があるとします。
 */

import { z } from 'zod';

interface Product {
  productId: string; // 商品ID: UUIDであること
  price: number; // 商品価格: 1000円から10万円の範囲内の整数
  expirationDate: string; // 2024-11-12 などの日付日付文字列で未来の日付を期待している
}

function addProductFunction(_product: Product) {
  // 引数であるproductは正常なフォーマットで渡ってくるのか？
}

interface AnotherProduct {
  productId: string;
  price: number;
  expirationDate: string;
}

// エラーが発生しない
addProductFunction({
  productId: '123',
  price: -1000,
  expirationDate: '2000-11-12',
});

const another: AnotherProduct = {
  productId: '123',
  price: 1000,
  expirationDate: '2024-11-12',
};

// 全く別のインターフェースであるAnotherProduct型を引数に渡してもエラーが発生しない
addProductFunction(another);

/**
 * ====問題====
 *
 * 以下の制約を持つ Product型 を作成し、スキーマの検証に成功した Product型 のみが引数として addProductFunction に渡されるようにしましょう。
 *
 * 1. 商品ID(id): UUIDであること
 * 2. 商品価格(price): 1000円から10万円の範囲内の整数
 * 3. 有効期限(expirationDate): YYYY-MM-DD という日付文字列で未来の日付を期待
 */

export const productSchema = z.object({
  // zodのスキーマを上記の制約に応じて作成しましょう
  id: z.xxxxx,
  price: z.xxxxx,
  expirationDate: z.xxxxx,
});

export type Product = z.infer<typeof productSchema>;

// productSchemaというスキーマで検証された Product型 のみを引数として受け取るようにしましょう。
function addProductFunction(product: Product) {
  return null;
}
