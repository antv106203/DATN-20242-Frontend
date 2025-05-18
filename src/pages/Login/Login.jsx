/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Image from "../../assets/image.png"
import Logo from "../../assets/logo.png"
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./Login.css"
import { loginAccount } from "../../service/AccountAPI";
import { notification} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {


    // const [api, contextHolder] = notification.useNotification();
    // const openNotificationWithIcon = (type, message) => {
    //     api[type]({
    //         message: message,
    //         description: message,
    //     });
    // };


    const [ showPassword, setShowPassword ] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // const login = async () => {
    //     try {
    //         const res = await loginAccount(email, password);
    //         console.log("sknksd", res);
    //     } catch (error) {
    //         console.error("Login failed:", error.response );
    //     }
    // };

    const doLogin = async () =>{

            const res = await dispatch(login(email, password));
            if (res.status_code === 200) {
                // openNotificationWithIcon("success", res.message);
                toast.success(res.message);
            } else {
                // openNotificationWithIcon("error", res.message || "Login failed");
                toast.error(res.message);
            }
    }


    useEffect(() => {
        if(isAuthenticated){
            navigate("/")
        }
    }, [isAuthenticated, navigate])
  
    return (
        <>
            <div className="login-main">
                <div className="login-left">
                    <img src={Image} alt="" />
                </div>
                <div className="login-right">
                <div className="login-right-container">
                    <div className="login-logo">
                    <img src={Logo} alt="" />
                    </div>
                    <div className="login-center">
                    <h2>Welcome back!</h2>
                    <p>Please enter your details</p>
                    <form>
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="pass-input-div">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                        </div>
                        <div className="login-center-buttons">
                        <button type="button" onClick={doLogin}>Log In</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
  };
  
  export default Login;