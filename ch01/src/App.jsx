import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const [name, setName] = [ 10, (n) => {} ];   //비구조할당(구조분해)


    // const numberState = useState(10);    //한 번 대입하고 바뀌면 안 됨. 상수로 고정
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const [number, setNumber] = useState(10);

    const hadleOnClick = () => {
        setNumber(number + 10);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={hadleOnClick}>증가</button>
        </div>
    )
}

export default App
