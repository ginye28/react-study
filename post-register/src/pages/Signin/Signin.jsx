import * as s from "./styles";
import TextInput from "../../components/Textinput/TextInput"
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Signin() {
    const navigate = useNavigate();

    const [ InputValues, setInputValues ] = useState({
        email: "test1234@gmail.com",
        password: "1q2w3e4r!",
    });

    const requestSignin = async (email, password) => {
        const users = JSON.parse(localStorage.getItem("users"));
        const foundUser = users.find(user => user.email === email && user.password === password); 
        if (!foundUser) {
            throw {
                status: 401,
                data: "로그인 실패",
            };
        }
        return {
            status: 200,
            data: {
                accessToken: JSON.stringify({secret: "abcd1234", userId: foundUser.id}),
            }  // 나중에 JWT로 대체
        }
    }

    const handleInputOnChange = (e) => {
        //나중에 setter만 입력 가능하도록 
        setInputValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSigninOnClick = async () => {
        try {
            const response = await requestSignin(InputValues.email, InputValues.password);
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/", {
                replace: true,
            })
        } catch(error) {
            alert(error.data);
        }


        //크롬 안에 정보가 저장되어서 어디에서도 꺼낼 수 있음(껐다켜도 유지)
        // localStorage.setItem("loginUser", JSON.stringify(tempUser));
        // const userJson = localStorage.getItem("loginUser");
        // const user = JSON.parse(userJson);
        // console.log(user);
    }

    return (
        <div>
            <Link to={"/auth/signup"} >회원가입</Link>
            <TextInput title={"이메일"} name={"eamil"} value={InputValues.email} onChange={handleInputOnChange}/>
            <PasswordInput title={"비밀번호"} name={"password"} value={InputValues.password} onChange={handleInputOnChange}/>
            <button onClick={handleSigninOnClick}>로그인</button>
        </div>
    )
}

export default Signin;