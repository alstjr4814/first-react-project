🅔 E. useEffect / 렌더링 사이클 / 마운트
1. 기본 구조
useEffect(() => {
  // 실행 코드
}, []);

2. 동작 원리

컴포넌트가 렌더링된 후 실행됨

마운트 시점에서 동작하는 유일한 함수

3. 감시 배열(deps)
● 빈 배열 []

→ 마운트 시 1번만 실행

● 값이 있을 때 [num]

→ num이 “변할 때만” 실행

예:

useEffect(() => {
  console.log("num 변화 감지!");
}, [num]);

4. cleanup (언마운트 시 실행)
useEffect(() => {
  return () => {
     console.log("컴포넌트 사라짐");
  };
}, []);

5. 마운트 개념

타이어를 차에 끼우면 “장착 완료되는 순간”

React에서 컴포넌트가 화면에 처음 등장하는 순간

6. useEffect 즉시 실행처럼 보이는 이유
useEffect(() => {
   console.log("실행");
}, []);


렌더링 → 그림 완성 → useEffect 실행

JS의 즉시실행(IIFE)와는 다름

단지 호출 순서가 렌더링 직후라 “즉시 실행처럼 보이는 것”

7. 스프레드 / 구조분해 / rest
● 스프레드(…)
const obj = { a: 1, b: 2 };
const copy = { ...obj }; // obj 복사

● 배열 구조분해 + rest
const arr = [1,2,3,4];
const [a1, a2, ...rest] = arr; // rest = [3,4]