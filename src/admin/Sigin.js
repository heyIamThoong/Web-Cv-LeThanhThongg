import { useEffect , router } from "../lib";
import axios from "axios";

const Sigin = () => {
    useEffect(function () {
        const form = document.querySelector("#form");
        const username = document.querySelector("#username");
        const password = document.querySelector("#password");
        const email = document.querySelector("#email");
        
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const projectAdd =
            {
                name: username.value,
                password: password.value,
                email: email.value,
            }
            console.log(projectAdd);
            axios.post("http://localhost:3000/users", projectAdd)
                .then(() => router.navigate("/admin/login"))
                .catch(() => alert("Add to Fail !"))
        })
    })
    return `
                <form id="form" class="register-form">
                <div class="register-container">
                    <h2 class="register-title">Create an Account</h2>
                    <div class="input-container">
                    <input type="text" id="username" class="register-input" placeholder="Username" required>
                    </div>
                    <div class="input-container">
                    <input type="email" id="email" class="register-input" placeholder="Email" required>
                    </div>
                    <div class="input-container">
                    <input type="password" id="password" class="register-input" placeholder="Password" required>
                    </div>
                    <button type="submit" class="register-btn">Register</button>
                    <div class="register-bottom-text">
                    <span>Already have an account?</span>
                    <a href="#" class="login-link">Log in</a>
                    </div>
                </div>
                </form>

  `
}

export default Sigin