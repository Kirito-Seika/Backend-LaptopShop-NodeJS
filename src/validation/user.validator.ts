import { checkEmail } from "services/admin/admin.service";
import { z } from "zod";

// Hàm tái sử dụng cho số điện thoại
const preprocessPhoneField = (
    fieldName: string,
    minLength: number,
    minErrorMessage: string
) =>
    z.preprocess(
        (val) => {
            if (typeof val !== "string") return undefined;
            return val.trim() === "" ? undefined : val.trim();
        },
        z
            .string({
                required_error: `${fieldName} không được để trống`,
                invalid_type_error: `${fieldName} phải là chuỗi số`,
            })
            .regex(/^\d+$/, { message: `${fieldName} chỉ được chứa chữ số` })
            .min(minLength, { message: minErrorMessage })
    );

// ✅ Email validator
const emailValidator = z.preprocess(
    (val) => {
        if (typeof val !== "string") return undefined;
        const trimmed = val.trim();
        return trimmed === "" ? undefined : trimmed;
    },
    z
        .string({ required_error: "Email không được để trống" })
        .email({ message: "Email không đúng định dạng" })
        .refine((val) => val.endsWith("@gmail.com"), {
            message: "Email phải có đuôi @gmail.com",
        })
);

export const userValidator = z
    .object({
        username: z
            .string()
            .trim()
            .regex(/^[A-Za-z]/, {
                message: "Username phải bắt đầu bằng chữ cái",
            })
            .min(1, { message: "Username không được để trống" }),

        email: emailValidator,

        password: z
            .string()
            .regex(/^[A-Za-z]/, {
                message: "Mật khẩu phải bắt đầu bằng chữ cái",
            })
            .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),

        phone: preprocessPhoneField(
            "Số điện thoại",
            10,
            "Số điện thoại phải ít nhất 10 ký tự"
        ),

        address: z
            .string()
            .trim()
            .min(1, { message: "Địa chỉ không được để trống" }),
    })
    .superRefine(async (data, ctx) => {
        const exist = await checkEmail(data.email);
        if (exist) {
            ctx.addIssue({
                path: ["email"],
                code: z.ZodIssueCode.custom,
                message: "Email đã tồn tại",
            });
        }
    });


export const userDetailValidator = z
    .object({
        username: z
            .string()
            .trim()
            .regex(/^[A-Za-z]/, {
                message: "Username phải bắt đầu bằng chữ cái",
            })
            .min(1, { message: "Username không được để trống" }),

        phone: preprocessPhoneField(
            "Số điện thoại",
            10,
            "Số điện thoại phải ít nhất 10 ký tự"
        ),

        address: z
            .string()
            .trim()
            .min(1, { message: "Địa chỉ không được để trống" }),
    })
export type TRegisterSchema = z.infer<typeof userValidator>;