/*=============== SHOW HIDE PASSWORD LOGIN ONLY ===============*/
const passwordAccess = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

    if (!input || !iconEye) return;

    iconEye.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        iconEye.classList.toggle('ri-eye-fill');
        iconEye.classList.toggle('ri-eye-off-fill');
    });
};

window.addEventListener('DOMContentLoaded', () => {
    passwordAccess('password', 'loginPassword');
});