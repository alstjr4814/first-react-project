import { useState } from "react";

function UseEffect01() {

    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    
    console.log(num1);
    console.log(num2);

    const handleNum1OnClick = () => { //클릭을 했을때만 실행이 되는 함수.
        setNum1(num1 + 1);
        setResult(num1 + num2);
    }

    const handleNum2OnClick = () => {
        setNum2(num2 + 1);
        setResult(num1 + num2);
    }



    return <>
        <button onClick={handleNum1OnClick}>num1 = {num1}</button>
        <button onClick={handleNum2OnClick}>num2 = {num2}</button>

        <h1>{num1} + {num2} = {result}</h1>
    </>
}

export default UseEffect01;

//리엑트 동작원리
//useState
// root = 리엑트에서 렌더링을 자도으로 해주는 놈 
// root한테 UseEffect01(){}을 줬다 이말이여 ; 함수는 main.jsx에 있음 
// 그럼 root한테는 상태관리사무소(num1, num2, result)가 이따 이말이여 
// Setnumber 이뒤로 설명을 이해를 못해서 메모를 못 