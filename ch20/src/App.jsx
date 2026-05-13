function App() {
  //동기 (then 비동기)
  new Promise((resolve, reject) => {
    console.log(7);
    if(false) {
      resolve("성공데이터");
    } else {
      reject(new Error("실패데이터"));
    }
    
    //리졸브가 then의 함수 호출, 리졸브가 없으면 호출 안 됨
    // resolve();
    //resoleve나 reject가 하나만 있어야 함
    // reject();

    //promise를 return
  }).catch((reason) => {
    console.log(9);
    // console.log(reason);
    console.Error(reason);
  }).then((value) => {
    console.log(8);
    console.log(value);
  });

  new Promise((resolve, reject) => {
    console.log(10);
    if(true) {
      resolve();
    } else {
      reject();
    }
    //위에 있는 then을 무시하지 않고 동등한 위치라서 먼저 실행(11) -> 위 then과 catch의 위치를 바꿔주면 9 실행
    //비동기 함수의 호출 순서
  }).then(() => {
    console.log(11);
  }).catch(() => {
    console.log(12);
  });

  console.log(1); //10초
  console.log(2); //1시간
  console.log(3); //30분
  console.log(4); //1초

  setTimeout(() => {
    console.log(5);
  }, 5000);

  setTimeout(() => {
    console.log(6);
  }, 2000);


  return (
    <>
      home
    </>
  )
}

export default App;