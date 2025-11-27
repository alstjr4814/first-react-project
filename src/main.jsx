import { createRoot } from 'react-dom/client'
import Hello from './Hello';
import { Fragment } from 'react';
import App01 from './ch01/App01';

const currentApp = "ch01_2"; //변수값이 바뀔때마다 페이지가 달라진다.

const appObj = {
  ch01: <App01 />,
  ch01_1: <h1>ch01_1 렌더링</h1>,
  ch01_2: BoxComponent(),
  ch01_3: <BoxComponent />,
  ch01_4: <BoxComponent ></BoxComponent>,
}

const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);

function BoxComponent() {
  return <div><TitleCompnent title="타이틀" title2 = "타이틀2" /></div>
}

function TitleCompnent(title, title2) {
  colsole.log(title);
  colsole.log(title2);
  return <h1>{title}</h1>
}+