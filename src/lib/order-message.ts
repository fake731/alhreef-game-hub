import { DELIVERY_FEE, type Product } from "./store-data";

export type OrderDetails = {
  address?: string;
  coords?: string;
  name?: string;
};

export function buildOrderMessage(
  items: { product: Product; qty: number }[],
  details: OrderDetails = {},
) {
  if (items.length === 0) {
    return "مرحبًا الحريف ستور 👋 أريد الاستفسار عن الأجهزة المتوفرة.";
  }

  const total = items.reduce((s, i) => s + i.qty * i.product.price, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const lines = items
    .map(
      (i, idx) =>
        `${idx + 1}) ${i.product.name} (${i.product.subtitle}) × ${i.qty} = ${i.qty * i.product.price} د.أ`,
    )
    .join("\n");

  const extras: string[] = [];
  if (details.name?.trim()) extras.push(`الاسم: ${details.name.trim()}`);
  if (details.address?.trim()) extras.push(`عنوان المنزل: ${details.address.trim()}`);
  if (details.coords?.trim())
    extras.push(
      `إحداثيات المنزل: ${details.coords.trim()}\nرابط الموقع: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        details.coords.trim(),
      )}`,
    );

  return [
    "مرحبًا الحريف ستور 👋",
    "أريد إتمام الطلب التالي:",
    "",
    lines,
    "",
    `عدد القطع: ${count}`,
    `مجموع الأجهزة: ${total} د.أ`,
    `رسوم التوصيل: ${DELIVERY_FEE} د.أ`,
    `الإجمالي النهائي: ${total + DELIVERY_FEE} د.أ`,
    ...(extras.length ? ["", "تفاصيل التوصيل:", ...extras] : ["", "أرجو تزويدي بتفاصيل التوصيل."]),
  ].join("\n");
}
