import instance from "./config";

const register = (user) => {
    console.log(user);
    return instance.post("/register", user);
  };
  const login = (user) => {
    return instance.post("/login", user);
  };
  
  export { register, login };