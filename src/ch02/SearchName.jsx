//문제
// input 하나를 만들고 입력된 이름과 값과 일치하는 나이를 h2태그 안에 출력하시오.
// 이름이 없으면 '값 없음'

import { useState } from "react";

function SearchName() {
    const profiles = [
        {
            name: "김준일",
            age: 32,
        },
        {
            name: "김준이",
            age: 33,
        },
        {
            name: "김준삼",
            age: 34,
        },
    ]

    const [result, setResult] = useState("찾은 결과 없음");
    const [ inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("찾은 결과 없음")

        for(let i = 0; i < profiles.length; i++) {
            const profile = profiles[i];
            if(profile.name === e.target.value) {
                setResult(profile.age);
                break;
            }
        }

        //filter
        //find

    }

    return <>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <h2>{result}</h2>
    </>
}

export default SearchName;

// const arr = [1, 2, 3, 4];

// const result = arr.find( n=> n > 2); //배열에서 조건에 맞는 첫 번째 값 1개만 반환, 없으면 undefined
// console.log(result);

// const result = arr.filter(n => n > 2); //조건 통과한 값들을 모두 반환, 배열로 반환, 없으면 빈 배열[]
// console.log(result);

// arr.forEach(n => console.log(n)); //배열을 돌면서 하나씩 작업만 한다. 리턴없음. 

// const a = [1, 2];
// const b = [...a, 3];

// console.log(b); // [1, 2, 3]

// const profiles = [
//     { name: "김준일", age: 32, address: "부산",job: "개발자",hobby: "헬스" }, //객체 안에는 변수(속성)을 마음대로 여러 개 가능 
//     { name: "김준이", age: 33 },
//     { name: "김준삼", age: 34 } //배열 안에 객체가 3개 있으니까 길이 3 해당 객체는 index2
// ];

// profiles.push({ name: "민석", age: 26 }); //index3이 자동으로 저장 됨 

