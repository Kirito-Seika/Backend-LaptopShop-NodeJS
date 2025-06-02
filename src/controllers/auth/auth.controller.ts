import { Request, Response } from 'express';
import { handleRegister } from 'services/auth/auth.service';
import { registerValidator } from 'src/validation/register.validator';

const loginPage = async (req: Request, res: Response) => {
    return res.render('client/auth/login');
}

const registerPage = async (req: Request, res: Response) => {
    const errors = [];
    const dataUser = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
    }
    return res.render('client/auth/register', {
        errors, dataUser
    });
}

const registerUser = async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword, phone, address } = req.body;
    const validate = await registerValidator.safeParseAsync(req.body);
    if (!validate.success) {
        const fieldErrors: Record<string, string> = {};
        for (const issue of validate.error.issues) {
            const field = issue.path[0] as string;
            fieldErrors[field] = issue.message;
        }
        const dataUser = {
            username, email, password, confirmPassword, phone, address
        }
        return res.render('client/auth/register', {
            fieldErrors,
            dataUser
        });
    }
    const avatar = req?.file?.filename ?? "";
    await handleRegister(
        username, email, password, phone, address, avatar
    );
    return res.redirect('/login');
}

export {
    loginPage, registerPage, registerUser
}