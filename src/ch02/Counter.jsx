import { useState } from "react";

function Counter() {
    let num = 0;
    // let numberState = useState(0);
    // let number = numberState[0];
    // let setNumber = numberState[1]; // 해당 세줄 적을 거let [number, setNumber] = useState(0); 해당 한줄로 만들 수 있다.
    let [number, setNumber] = useState(0); //메모리공간이 저장이 되기 떄문에 기존의 것을 들고와 연속저장을 할 수 있다. ic. useState는 리셋되지 않는다.
    //앞에 use로 시작하는 함수는 hook함수 앞에 대문자로 시작하면 component 함수 그리고 이외에는 일반함수
    //let [number, setNumber] = useState(0); number라는 것이 

    console.log(number);

    const increease = () => { //해당 함수를 호출해봤자 Counter함수가 호출 되질 않는다.
        num += 1;
        console.log(num);

    }

    const dicrease = () => {
        num -= 1;
        console.log(num);
    }

    const increeaseNumber = () => {
        setNumber(number + 1);
    }

    const dicreaseNumber = () => {
        setNumber(number - 1);
    }

    console.log("카운터 화면 렌더링");

    return <div>
        <h1>{num}</h1>
        <button onClick={increease}>+1</button>
        <button onClick={dicrease}>-1</button>

        <h1>{number}</h1>
        <button onClick={increeaseNumber}>+1</button>
        <button onClick={dicreaseNumber}>-1</button>
    </div>
}

export default Counter;

// 왜 페인팅이 안되나.? Counter라는 함수가 호출이 된거지 페인팅자체는 한번밖에 안돼서 렌더링이 안된다는 것
//