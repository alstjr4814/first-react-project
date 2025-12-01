import { useState } from "react";

function SimpleInput() {
    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h3>박스</h3>
            <input 
                type="text" 
                value={text} 
                onChange={handleOnChange} 
            />
            <p>입력값: {text}</p>
        </div>
    );
}

export default SimpleInput;
