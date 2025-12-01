🅓 D. 이벤트 / 상태 / props 흐름 정리
1. onChange → 상태 변경 흐름
<input
  value={name}
  onChange={handleOnChange}
/>


전체 흐름:

사용자가 input에 글 입력

onChange 이벤트 발생

handleOnChange(event) 실행

setName(event.target.value) 실행

상태 name 변경

컴포넌트 리렌더링

value={name}가 다시 적용되어 화면 업데이트

2. 핸들러 함수 전달 방식

{handleOnChange}
→ 함수 자체를 전달하는 뜻
(실행하는 게 아님)

3. props 흐름 (부모 → 자식)

예시(App02_2 구조):

App02_2 (부모)
 ├ InputBox (자식)
 ├ ButtonBox (자식)
 └ DisplayBox (자식)

● 부모에서 state 생성
const [displayName, setDisplayName] = useState("");

● 부모가 자식에게 props로 전달
<InputBox name={displayName} />

● 자식에서 받아서 UI에 사용
function InputBox({ name }) {
    return <input value={name} />;
}

4. App02 전체 동작 요약

부모가 상태(state) 보유

자식(InputBox)에서 값 입력

onChange → 부모의 setState 실행

부모 컴포넌트 리렌더링

새 state가 다시 자식에게 props로 전달

DisplayBox에서 새로운 값 출력

5. 이벤트 vs 상태 변수 차이
개념	의미
이벤트	사용자 행동(입력, 클릭 등)을 감지
상태(state)	화면이 바뀌는 “데이터 저장소"
렌더링	상태가 변경 → 화면 다시 그림