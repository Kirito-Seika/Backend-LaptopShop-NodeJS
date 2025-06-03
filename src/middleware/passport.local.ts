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
                    return callback(null, false, { message: `Email ${username} không tồn tại` })
                }
                const isMatch = await comparePassword(password, user.password);
                if (!isMatch) {
                    return callback(null, false, { message: `Password không hợp lệ` })
                }
                return callback(null, user);
            }));
}
export default passportLocal;