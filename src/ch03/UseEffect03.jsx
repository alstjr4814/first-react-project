import { useState, useEffect } from "react";

function UseEffect03() {
    console.log("component 함수 호출됨");

    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(0); 
    const [result, setResult] = useState(0); 

    useEffect(() => {
        console.log("JSX 리턴 직후 실행됨 마운트"); //화면에 나타날때 장탁이된다.
    });

    useEffect(() => { //마운트 될 때 실행 내려가고 다시 useEffect가 실행이되고 
        setResult(num1 + num2);
    }, [num1, num2]);

    const handleNum1OnClick = () => {
        setNum1(num1 + 1);
    }

    const handleNum2OnClick = () => {
        setNum2(num2 + 1);
    }

     console.log("num1 또는 num2 변경됨 → result 계산");

    return (
        <>
            <button onClick={handleNum1OnClick}>num1 = {num1}</button>
            <button onClick={handleNum2OnClick}>num2 = {num2}</button>
            <h2>{num1} + {num2} = {result}</h2>
        </>
    );
}

export default UseEffect03;

// 1. useeffect는 무조건한번 실행된다
// 2. 첫 렝더링에 한번만 실행하겠다 []
// 3. 배열조차 없으면 undefined가 들어간다. undefined가되면 무조건 실행
// cf 배열이 있냐 없냐는 무조건 실행할거냐 안할거냐
