import { prisma } from "config/client";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { comparePassword } from "services/admin/admin.service";

const passportLocal = () => {
    passport.use(
        new LocalStrategy(
            { usernameField: 'email' },
            async function verify(username, password, callback) {
                console.log('Check User: ', username, password)
                const user = await prisma.user.findUnique({
                    where: { email: username }
                })
                if (!user) {
                    return callback(null, false, { message: `Thông tin tài khoản không chính xác` })
                }
                const isMatch = await comparePassword(password, user.password);
                if (!isMatch) {
                    return callback(null, false, { message: `Thông tin tài khoản không chính xác` })
                }
                return callback(null, user);
            }));

    passport.serializeUser(function (user: any, callback) {
        process.nextTick(function () {
            return callback(null, {
                id: user.id,
                email: user.email
            });
        });
    });

    passport.deserializeUser(function (user, callback) {
        process.nextTick(function () {
            return callback(null, user);
        });
    });
}
export default passportLocal;