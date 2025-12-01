🅒 C. useState 정리
1. 기본 형태
const [value, setValue] = useState(초기값);

2. 구조 상세

useState는 배열을 리턴함
[0] = 상태값
[1] = 상태 업데이트 함수

예:

let numState = useState(0);
let num = numState[0];
let setNum = numState[1];


아래는 동일한 축약:

let [num, setNum] = useState(0);

3. 타입 구조 이해

(alias) 형태로 보이는 구조:

useState<number>(initialState: number | (() => number)):
[number, Dispatch<SetStateAction<number>>]


해석:

초기값은 숫자 또는 숫자를 반환하는 함수

리턴 값은
number(상태) + Dispatch<(number)=>void>(setter)

4. setter 호출 → 리렌더링
setNum(10);


상태 num 변경

React가 컴포넌트 다시 호출

화면이 새로운 num을 기반으로 다시 그림

5. undefined 예시

useState가 배열을 반환하기 때문에
[undefined] 라면 배열이므로 undefined 타입이 아니라 배열타입임