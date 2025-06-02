/*=============== SHOW HIDE PASSWORD FOR LOGIN AND REGISTER ===============*/
const passwordToggle = (inputId, eyeId) => {
   const input = document.getElementById(inputId);
   const eyeIcon = document.getElementById(eyeId);

   if (!input || !eyeIcon) return;

   eyeIcon.addEventListener('click', () => {
      input.type = input.type === 'password' ? 'text' : 'password';
      eyeIcon.classList.toggle('ri-eye-fill');
      eyeIcon.classList.toggle('ri-eye-off-fill');
   });
};

window.addEventListener('DOMContentLoaded', () => {
   passwordToggle('password', 'loginPassword'); // login password
   passwordToggle('passwordRegister', 'registerPassword'); // register password
   passwordToggle('passwordConfirm', 'confirmPasswordEye'); // confirm password
});
