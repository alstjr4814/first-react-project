import { useState, useEffect } from "react";

function UseEffect04() {

    const [num1, setNum1] = useState(0);

    useEffect(() => {
        if (num1 === 0) {
            alert("현재 값은 0입니다.");
        }
    }, [num1]);

    const upOnClick = () => {
        setNum1(num1 + 1);
    };

    const downOnClick = () => {
        if (num1 === 0) return; //조건이 참일 때, 함수 실행을 즉시 중단하고 나가라 ; -1이 안되게 하게 만드는 코드
        setNum1(num1 - 1);
    };

    return (
        <>
            <h2>현재값: {num1}</h2>
            <h2>제곱값: {num1 * num1}</h2>

            <button onClick={upOnClick}>1 증가</button>
            <button onClick={downOnClick}>1 감소</button>
        </>
    );
}

export default UseEffect04;

    // num 상태
    // num 상태의 재곱 값을 화면에 출력하시오.
    // 단 처음 num이 0일 때에는 
    //라는 안내 메세지를 alert으로 출력하기.
    //최소값 0 밑으로는 내려갈 수 없음.

    //page가 처음 떳을때 alert가 떠야 함
    //처음에 0일때만이고 그 뒤로 증가 시킬 떄는 안띄워져야 함
    //또한 숫자가 0이 되면 alert메세지가 다시 떠야 함.
    //버튼을 만들었고 버튼감지할때마다 num1이 낮아지고 높아지는 기능도 있어 그리고 useeffect로 
    // “특정 상태가 변했을 때 실행되는 코드 저장공간”

