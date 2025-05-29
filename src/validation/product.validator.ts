import { z } from "zod";

export const ProductValidator = z.object({
    name: z.string().trim().min(1, "Tên không được để trống").refine(val => {
        return !/^\d/.test(val);
    }, {
        message: "Tên không được bắt đầu bằng chữ số"
    }),

    price: z.preprocess((val) => {
        if (val === "" || val === undefined) return undefined;
        const num = Number(val);
        return isNaN(num) ? undefined : num;
    }, z.number({
        required_error: "Giá không được để trống",
        invalid_type_error: "Giá phải là số"
    }).min(0, "Giá không được âm")),

    quantity: z.preprocess((val) => {
        if (val === "" || val === undefined) return undefined;
        const num = Number(val);
        return isNaN(num) ? undefined : num;
    }, z.number({
        required_error: "Số lượng không được để trống",
        invalid_type_error: "Số lượng phải là số"
    }).min(0, "Số lượng không được âm")),

    description: z.string().trim().min(1, "Mô tả không được để trống"),

    target: z.string().trim().min(1, "Mục tiêu không được để trống"),
});

export type TProductSchema = z.infer<typeof ProductValidator>;