import { useState } from "react";


function Hello() {
    console.log("함수호출 다시됨");
    const text = "헬로";    //일반 상수
    const [상태변수, 상태세터값] = useState("초기값"); 

    return (
        <div>
            <button onClick={() => {상태세터값(text);}}>클릭</button>
            <h1>{상태변수}</h1>
        </div>
    )
}

export function Hi() {

    const [상태, 상태바꾸는함수] = useState(0);

    const 클릭함수 = () => {
        상태바꾸는함수(상태 + 1);
    }
    const 클릭함수2 = () => {
        상태바꾸는함수(상태 - 1);
    }

    return (
        <div>
            <button onClick={클릭함수}>1증가</button>
            <button onClick={클릭함수2}>1감소</button>
            <h1>{상태}</h1>
        </div>
    )
}

export function Bye() {
    return (
        <h1>바이</h1>
    )
}



export default Hello;