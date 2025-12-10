import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_2 from './ch02/App02_2';
import App02_3 from './ch02/App02_3';
import App02_4 from './ch02/App02_4';
import App02_5 from './ch02/App02_5';
import Inputs from './ch02/Inputs';
import SearchName from './ch02/SearchName';
import UseEffect01 from './ch03/UseEffect01';
import UseEffect02 from './ch03/UseEffect02';
import UseEffect03 from './ch03/UseEffect03';
import UseEffect04 from './ch03/UseEffect04';
import Axios01 from './ch04/Axios01';
import Promise01 from './ch04/Promise01';
import Axios02 from './ch04/Axios02';
import Axios03 from './ch04/Axios03';
import Axios04 from './ch04/Axios04';
import Axios05 from './ch04/Axios05';
import Auth01 from './ch05/Auth01';
import Auth02 from './ch05/Auth02';
import Router01 from './ch06/Router01';
import Router02 from './ch06/Router02';
import Router03 from './ch06/Router03';
import Router04 from './ch06/Router04';
import Router05 from './ch06/Router05';
import Css from './ch07/Css';
import Css01 from './ch07/Css01';
import Css02 from './ch07/Css02';





const currentApp = "Css02";

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    inputs: <Inputs />,
    ch02_4: <App02_4 />,
    ch02_5: <App02_5 />,
    useEffect01: <UseEffect01 />,
    useEffect02: <UseEffect02 />,
    useEffect03: <UseEffect03 />,
    counter: <Counter />,
    searchName: <SearchName />,
    useEffect04: <UseEffect04 />,
    Axios01: <Axios01 />,
    Axios02: <Axios02 />,
    Axios03: <Axios03 />,
    Axios04: <Axios04 />,
    Axios05: <Axios05 />,
    Promise01: <Promise01 />,
    Auth01: <Auth01 />,
    Auth02: <Auth02 />,
    Router01: <Router01 />,
    Router02: <Router02 />,
    Router03: <Router03 />,
    Router04: <Router04 />,
    Router05: <Router05 />,
    Css: <Css />,
    Css01: <Css01 />,
    Css02: <Css02 />,

}

const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);

