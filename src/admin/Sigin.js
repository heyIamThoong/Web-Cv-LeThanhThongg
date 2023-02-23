import { useEffect , router } from "../lib";
import { register } from "../api/auth";
const Sigin = () => {
    useEffect(() => {
        const sform = document.querySelector("#form");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        sform.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
              const user = {
                email: email.value,
                password: password.value,
              };
              await register(user);
              router.navigate("#/admin/login");
              alert("Đăng ký thành công!");
            } catch (error) {
              alert("Đăng ký thất bại!");
              console.log(error);
            }
          });
        });
    
    return `
    <form id="form" class="register-form">
     <div class="register-container">
        <h2 class="register-title">Create an Account</h2>
        <div class="input-container">
        <input type="email" id="email" class="register-input" placeholder="Email" required>
        </div>
        <div class="input-container">
        <input type="password" id="password" class="register-input" placeholder="Password" required>
        </div>
        <button type="submit" class="register-btn">Register</button>
        <div class="register-bottom-text">
        <span>Already have an account?</span>
        <a href="#/admin/login" class="login-link">Log in</a>
        </div>
     </div>
    </form>

  `
}

export default Sigin