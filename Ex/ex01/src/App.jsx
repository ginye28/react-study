import { rules } from "eslint-plugin-react-hooks";
import { useState } from "react";

//1
function App() {

    const p = new Promise(resolve => {
        setTimeout(() => resolve("안녕하세요!"), 1000);
    });
    p.then(msg => console.log(msg));

    return (
        <>
            
        </>
    )
}

//숫자를 받아 양수이면 resolve, 음수이면 reject하는 Promise를 만드시오.



//2
function checkPositive(num) {
    return new Promise((resolve, reject) => {
        if(num >= 0) {
            resolve ("양수입니다:" + num)
        } else {
            reject ("음수입니다: " + num)
        }
    });
}


//3
Promise.resolve(10)
    .then(n => n * 2)
    .then(n => n + 5)
    .then(n => n.toString() + "원")
    .then(result => console.log(result));

// 출력: "25원"
// 과정: 10 → 20 → 25 → "25원"


//4
Promise.resolve("hello")
    .then(str => str.toUpperCase())
    .then(str => {
        throw new Error("강제 에러 발생!");
    })
    .then(str => console.log("여기 실행될까?"))
    .catch(error => console.error("에러 잡음: " + err.message))
    .finally(() => console.log("항상 실행!"))
    // .catch() 추가하시오
    // .finally() 추가하시오

// 출력:
// "에러 잡음: 강제 에러 발생!"
// "항상 실행!"


//5
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject("유효하지 않은 ID");
            } else {
                resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
            }
        }, 1000);
    });
}

fetchUser(3).then(user => console.log(user));
// (1초 후) { id: 3, name: "유저3", age: 23 }

fetchUser(-1).catch(err => console.log(err));
// (1초 후) "유효하지 않은 ID"


//6
function E6() {
    const [ arr, setArr ] = useState([]);

    function fetchA() { 
        return new Promise(res => 
            setTimeout(() => 
                res("A 데이터"), 1000
            )
        ); 
    }

    function fetchB() { 
        return new Promise(res => 
            setTimeout(() => 
                res("B 데이터"), 2000
            )
        ); 
    }

    function fetchC() { 
        return new Promise(res => 
            setTimeout(() => 
                res("C 데이터"), 1500
            )
        ); 
    }
    
    Promise.all( [fetchA(), fetchB(), fetchC()] )
    // setArr(result);
        .then(result => console.log(result));

}

// Promise.all을 사용하여 3개 동시 실행
// 모든 결과를 배열로 출력
// 총 소요 시간: 약 2초 (가장 느린 것 기준)

// 출력: ["A 데이터", "B 데이터", "C 데이터"]



//7
//문제 6에서 fetchB가 reject하면 어떻게 되는지 확인하시오.
function E7() {
    const [ arr, setArr ] = useState([]);

    function fetchA() { 
        return new Promise(res => 
            setTimeout(() => 
                res("A 데이터"), 1000
            )
        ); 
    }

    function fetchB() {
        return new Promise((res, rej) => setTimeout(() => rej("B 실패!"), 2000));
    }

    function fetchC() { 
        return new Promise(res => 
            setTimeout(() => 
                res("C 데이터"), 1500
            )
        ); 
    }
    
    Promise.all( [fetchA(), fetchB(), fetchC()] )
        .then(result => console.log(result));
}
// Promise.all([fetchA(), fetchB(), fetchC()])
//   .then(results => console.log(results))
//   .catch(err => console.log(err));

// 출력: ???
// ★ Promise.all은 하나라도 실패하면 전체 실패! catch로 빠진다.




//8
//문제 5의 fetchUser를 .then() 대신 async/await로 호출하시오.
// .then() 방식
fetchUser(3).then(user => console.log(user));

// async/await 방식으로 변환하시오
async function main() {
    const user = await fetchUser(3);
    console.log(user);
}
main();
// function fetchUser(userId) {
//     const getPromise = async () => {
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 if (userId <= 0) {
//                     reject("유효하지 않은 ID");
//                 } else {
//                     resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
//                 }
//             }, 1000);
//         });
//         const rV = await getPromise(rV);
//     }
// }

// function fetchUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId <= 0) {
//                 reject("유효하지 않은 ID");
//             } else {
//                 resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
//             }
//         }, 1000);
//     });
// }


//9
//async/await에서 에러를 처리하시오.

async function getUser() {
    let returnValue = null;
    try {
        const user = await fetchUser(-1);
        console.log(user);
    } catch(error) {
        console.log("에러: " + error);
    } finally {
        console.log("완료")
    }
    // fetchUser(-1) 호출
    // 에러 발생 시 "에러: 유효하지 않은 ID" 출력
    // 성공/실패 상관없이 "완료" 출력
}


//10
//다음 두 코드의 차이를 설명하고, 각각의 총 소요 시간을 예측하시오.
// 방식 A: 순차 실행
async function sequential() {
    const a = await fetchA();  // 1초
    const b = await fetchB();  // 2초
    const c = await fetchC();  // 1.5초
    console.log(a, b, c);
}
// 총 소요 시간: _2_초

// 방식 B: 동시 실행
async function parallel() {
    const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
    console.log(a, b, c);
}
// 총 소요 시간: _4.5_초

//A: a가 1초 후, b가 2초 후, c가 1.5초 후에 출력되니 제일 마지막 b로 인해 총 소요 시간 2초
//B: a의 1초를 기다린 후 b -> c, 총 소요 시간 4.5초


//11
//배열의 각 ID로 유저를 순차적으로 조회하여 결과 배열을 만드시오.
async function fetchAllUsers(ids) {
    const users = [];
    for (const id of ids) {
        const user = await fetchUser(id);
        users.push(user);
    }
    // for문 + await로 순차 조회
    // 각 유저를 users에 push
    return users;
}

fetchAllUsers([1, 2, 3]).then(users => console.log(users));
// [{ id:1, name:"유저1", ... }, { id:2, ... }, { id:3, ... }]


export default App;