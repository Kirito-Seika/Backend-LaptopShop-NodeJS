const setupPasswordToggle = (inputId, toggleIconId) => {
   const input = document.getElementById(inputId);
   const icon = document.getElementById(toggleIconId);

   if (!input || !icon) return;

   icon.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";

      // Toggle eye icon class
      icon.classList.toggle("ri-eye-fill", !isPassword);
      icon.classList.toggle("ri-eye-off-fill", isPassword);
   });
};

// ================= INIT FUNCTION ON DOM LOAD =================
document.addEventListener("DOMContentLoaded", () => {
   // Login form
   setupPasswordToggle("password", "loginPassword");

   // Register form
   setupPasswordToggle("passwordRegister", "registerPassword");

   // Nếu bạn có thêm trường xác nhận mật khẩu:
   setupPasswordToggle("passwordConfirm", "confirmPasswordEye");
});
