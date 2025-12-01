import { useState } from "react";

function App02_2() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(""); //State화면을 다시 그리게 만드는 변수(데이터
    const [displayName, setDisplayName] = useState("");
    const [displayAge, setDisplayAge] = useState("");

    return <div>
        <InputBox name={name} setName={setName} age={age} setAge={setAge} />
        <ButtonBox setDisplayName={setDisplayName} setDisplayAge={setDisplayAge} name={name} age={age} />
        <DisplayBox displayName={displayName} displayAge={displayAge} />
    </div>
}

export default App02_2;
//component 나누는것, props, event onclick


function InputBox({ name, setName, age, setAge }) {

    const handleNameInputOnchange = (e) => {
        setName(e.target.value);
    }

    const handleAgeInputOnchange = (e) => {
        setAge(e.target.value);
    }
//onChange: 입력한 글을 React “state 창고”에 넣는 일
//value: React “state 창고에 있는 글을 input 박스에 꺼내서 보여주는 일”
//value가 없어도 화면에 글은 보이지만 value는 React에서 input을 **"제어(Controlled)"**하기 위해 필요함.
    return <div className="input-box">
        <input type="text" value={name} onChange={handleNameInputOnchange} />
        <input type="text" value={age} onChange={handleAgeInputOnchange} />
    </div>
}

function ButtonBox({ setDisplayName, setDisplayAge, name, age }) {

    //버튼이 눌리면 해당 함수 실행
    const handleOnClick = () => {
        setDisplayName(name);
        setDisplayAge(age);
    }

    //onClick: 버튼누르면 감지해서 원하는 작업 실행
    return <div className="button-box">
        <button onClick={handleOnClick}>확인</button>
    </div>
}

function DisplayBox({ displayName, displayAge }) {

    return <div className="display-box">
        <ul>
            <li>{displayName}</li>
            <li>{displayAge}</li>
        </ul>
    </div>
}
