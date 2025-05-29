import { z } from "zod";

// ✅ Hàm tái sử dụng cho các trường số không âm
const preprocessNumberField = (
    fieldName: string,
    minErrorMessage: string
) =>
    z.preprocess(
        val => {
            const num = Number(val);
            return val === "" || isNaN(num) ? undefined : num;
        },
        z.number({
            required_error: `${fieldName} không được để trống`,
            invalid_type_error: `${fieldName} phải là số`,
        }).min(0, { message: minErrorMessage })
    );

export const ProductValidator = z.object({
    name: z
        .string()
        .trim()
        .min(1, { message: "Tên không được để trống" })
        .refine(val => !/^\d/.test(val), {
            message: "Tên không được bắt đầu bằng chữ số",
        }),

    price: preprocessNumberField("Giá", "Giá không được âm"),

    quantity: preprocessNumberField("Số lượng", "Số lượng không được âm"),

    description: z
        .string()
        .trim()
        .min(1, { message: "Mô tả không được để trống" }),

    target: z
        .string()
        .trim()
        .min(1, { message: "Mục đích không được để trống" }),
});

export type TProductSchema = z.infer<typeof ProductValidator>;
