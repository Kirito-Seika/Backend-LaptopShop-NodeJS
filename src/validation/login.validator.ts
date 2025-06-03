import { Request, Response, NextFunction } from 'express';

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
    const errors: Record<string, string> = {};
    const { email, password } = req.body;

    if (!email || email.trim() === '') {
        errors.email = 'Email không được để trống';
    }

    if (!password || password.trim() === '') {
        errors.password = 'Mật khẩu không được để trống';
    }

    if (Object.keys(errors).length > 0) {
        // gán lỗi vào session để render lại form
        (req.session as any).formErrors = errors;
        return res.redirect('/login');
    }

    next();
};