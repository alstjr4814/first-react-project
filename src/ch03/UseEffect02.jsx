function UseEffect02() {

    let v = undefined;

    const useState = (initValue) => { //상태값 0
        v = initValue;
        const setter = (value) => {
            v = value;
        } 
        return [v, setter]; //
    }

    const Component = () => {
        const [num, setNum] = useState(0);
        console.log(num);

        const onClick = () => {
            setNum(num + 1);
            console.log(Number);
        }
    }

    return <div>{num}</div>
}

export default UseEffect02;