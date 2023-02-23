import axios from "axios";
import { useEffect , useState , router } from "../lib";

const login = () => {
    const [users, setUser] = useState([]);
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
          await login(user);
          router.navigate("#/admin/projectListAdmin");
          alert("Đăng nhập thành công!");
        } catch (error) {
          alert("Đăng nhập thất bại!");
          console.log(error);
        }
      });
    });
    return `
    <form id="form" class="login-form">
  <div class="login-container">
    <h2 class="login-title">Log In</h2>
    <div class="input-container">
      <input type="email" id="email" class="login-input" placeholder="Email" required>
    </div>
    <div class="input-container">
      <input type="password" id="password" class="login-input" placeholder="password" required>
    </div>
    <button type="submit" class="login-btn">Log In</button>
    <div class="login-bottom-text">
      <span>Don't have an account?</span>
      <a href="#/admin/sigin" class="signup-link">Sign up</a>
    </div>
  </div>
  </form>
  
    `
};

export default login
