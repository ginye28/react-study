
function App() {

  const getPromise = (name) => {
    
    return new Promise((resolve, reject) => {
      console.log("프로미스 생성");
      console.log(name);
      if (!!name) {
        resolve(name + "님");
      } else {
        reject(new Error("이름이 입력되지 않았습니다."));
      }
    });
  }

  const getPromise2 = async (name) => {
    //줄여서 쓰기 위함. 비동기 안에서의 동기 동작
    console.log("프로미스 생성");
    console.log(name);
    //return이 resolve가 됨
    if (!!name) {
      return name + "님";
    } else {
      throw new Error("이름이 입력되지 않았습니다.");
    }
  }
  
  const handle1 = () => {
    //프로미스만 return (async)
    const promise1 = getPromise("jhj");
    promise1
    .then((name) => {console.log(name + "환영합니다.")})
    .catch((error) => {console.error(error)});
  
  }

  const handle2 = () => {
    const promise1 = getPromise2("jhh");
    promise1
    .then((name) => {console.log(name + "수고하셨습니다.")})
    .catch((error) => {console.error(error)});
  }

  return (
    <>
      <button onClick={handle1}>프로미스 생성</button>
      <button onClick={handle2}>프로미스 생성2</button>
    </>
  )
}

export default App;