import { useState } from "react";

function Inputs() {
    const [fullName, setFullName] = useState("");
    const [ age, setAge] = useState("");

    // state에 입력용과 출력용이 나눠져야 한다. ? 입력용이 필요한 이유 
    // 입력용은 todos로 전달이 된다. //그래 입력용이 todos에 전달이 된다고 하는데 todos가 필요한 이유
    // 입력된 내용들이 쌓여있게 만드는 상황이 필요하기 때문에 입력용인 todos가 필요하다.
    //jsx 안에서 반복되는 내용이 나오면 무조건 map을 사용할거다. 왜? 태그로 만들어서 보여줘야 하니까 왜? 태그로 만들어야 html에 올릴 수 있으니까


 const handlefullNameInputOnchange = (e) => { // e에 항상 변화하는 값들이 들어 온다.
        setFullName(e.target.value);
    }
    
     const handleAgeInputOnchange = (e) => {
        setAge(e.target.value);
    }

    return <>
        <input type="text" placeholder="이름" value={fullName} onChange={handlefullNameInputOnchange} />
        <input type="text" placeholder="나이" value={age} onChange={handleAgeInputOnchange} />
        <h2>이름: {fullName}</h2> //들어가는 값이 상태이어야 하는 이유
        <h2>나이: {age}</h2>
    </>
}

export default Inputs;

