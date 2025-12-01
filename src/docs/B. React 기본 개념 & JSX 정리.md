🅑 B. React 기본 개념 & JSX 정리
1. JSX = JS + HTML

React에서 쓰는 문법

HTML처럼 보이지만 실제로는 JS객체로 변환됨

변환은 babel/swc가 담당

2. JSX 문법 규칙

태그는 반드시 닫혀야 한다

HTML: <input>

JSX: <input />

여러 태그는 하나의 부모 태그로 감싸야 한다

❌

<h1></h1>
<h2></h2>


⭕

<div>
  <h1></h1>
  <h2></h2>
</div>


class → className

onclick → onClick

3. 컴포넌트 개념

함수로 만든 “UI 조각”

반드시 대문자로 시작

반드시 return 안에 JSX 있어야 함

예시:

function Hello() {
    return <div>안녕</div>;
}
export default Hello;

4. React 렌더링 구조

index.html → root 제공

main.jsx → createRoot(root).render(<App />)

App.jsx → 여러 컴포넌트 조립

JSXStudy.jsx / Hello.jsx → 실제 UI 코드

5. SPA vs MPA

MPA: HTML 파일 여러 개

SPA: HTML 1개(index.html) 안에서 React가 화면만 갈아끼우는 방식

6. Element / Component / Page
구조	설명
Element	<div>, <h1> 같은 최소 단위
Component	하나의 기능(UI 덩어리), 함수로 구성
Page	여러 컴포넌트를 묶은 큰 화면