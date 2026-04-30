import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 *   JSX 문법 규칙
 *   1. 꼭 하나의 묶음이어야 한다.
 *   2. 열었으면 닫아야 한다.
 *   3. 변수 또는 특정 값을 표현할 때 {} 안에 작성한다.
 */


/**
 * 컴포넌트란?
 * 1. JSX를 리턴하는 함수
 * 2. 모듈화(부품) -> 재사용의 목적, 코드 분리의 목적
 * 3. 매개변수는 properties(props)라는 객체 하나만 허용한다.
 * 4. 구조분해를 통해 props를 정희해두면 호출하는 위치에서 자동완성을 사용할 수 있다.
 */

function PBox() {
  return <div>
    <CBox a="jhj" b="21" />
  </div>
}

const props = {
  a: "jhj",
  b:"21",
}

function CBox({a, b}) { //props는 구조분해 먼저 , 하나의 객체임
  console.log(p);
  // const {a, b} = p;

  return <>
    <h1>ㅈㅎㅈ</h1>
    <h2>나이</h2>
  </>
}

createRoot(document.getElementById('root')).render(<PBox />)
