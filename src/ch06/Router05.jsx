import { BrowserRouter, Link, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

// params - useParmas()
function Router05() {
    return <BrowserRouter>
    <div>
        <Link to={"/p1/ohminseok/25"}>p1</Link>
        <div></div>
        <Link to={"/p2/yookminseok/26"}>p2</Link>
    </div>
        <Routes>
            <Route path="/p1/:name/:age" element={<Page1/>}/>
            <Route path="/p2/:name/:age" element={<Page2/>}/>
        </Routes>
    </BrowserRouter>
}

function Page1() {
    // const params = useParams();
    // console.log(params);
    const { name, age} = useParams();

    return <div>
        <h3>이름: {name}</h3>
        <h3>나이: {age}</h3>
    </div>
    
}

function Page2() {
    const { name, age} = useParams();

    // const location = useLocation();
    // console.log(location);
    const {pathname} = useLocation();

    return <div>
        <h3>이름: {name}</h3>
        <h3>나이: {age}</h3>
    </div>
}

export default Router05;