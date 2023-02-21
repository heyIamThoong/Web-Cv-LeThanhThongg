import axios from "axios";
import { useEffect , useState , router } from "../lib";

const login = () => {
    const [users, setUser] = useState([]);
    useEffect(function () {
        axios.get(`http://localhost:3000/users`).then(({ data }) => setUser(data))
    }, [])
    console.log(users);
    useEffect(() => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const form = document.getElementById('form');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // users.map((item) => {
            //     if(item.email == username.value && item.pass == password.value) {
            //         alert("Đăng nhập thành công");
            //     }else {
            //         alert("mật khẩu hoặc tài khoản không đúng");
            //     }
            // })
            for (const item of users) {
                if (item.name == username.value && item.password == password.value) {
                    router.navigate("admin/projectListAdmin");
                } else {
                    alert("Đăng Nhập không thành công")
                    break;
                }
            }
        })
    })
    return `<form id="form" class="login-form">
  <div class="login-container">
    <h2 class="login-title">Log In</h2>
    <div class="input-container">
      <input type="text" id="username" class="login-input" placeholder="Username" required>
    </div>
    <div class="input-container">
      <input type="password" id="password" class="login-input" placeholder="password" required>
    </div>
    <button type="submit" class="login-btn">Log In</button>
    <div class="login-bottom-text">
      <span>Don't have an account?</span>
      <a href="/admin/sigin" class="signup-link">Sign up</a>
    </div>
  </div>
  </form>
  
    `
};

export default login
