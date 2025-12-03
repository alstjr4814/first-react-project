import axios from "axios";

function Axios04() {
    const api = axios.create({
        baseURL: "http://localhost:8080"
    });


    const reqGetnClick1 = () => {
        api.get("/req/data1?a=aaaaa&b=10");
        
    }

    const reqGetOnClick2 = () => {

        api.get("/req/data2", {
            params: {
                a: "abc",
                b: 10000,
            },
        });
    }

    const reqGetOnClick3 = () => {

        api.get("/req/data3", {
            params: {
                name: "qwer",
                age: 26,
            },
        });
    }

    const reqGetOnClick7 = () => {

        api.get("/req/abc/data7/20", { 
            params: {
                name: "abc",
                age: 20,
            },
        });
    }

    const reqPostOnClick1 = () => {
        const data = {
            name: "test",
            age: 32,
            address: "test address",
        }

        //Object -> JSON 객체를 json으로
        const jsonData =JSON.stringify(data);
        //JSON => Object json을 객체로
        const obj = JSON.parse(jsonData);

        // axios는 자동으로 JSON 변환
        api.post("/ewq/data1", data); //1url 2data 3config &&&&&&&&ewq ewq
    }
    
    //localhost사이트에서 객체보고 어떤 객체를 넣을지 확인 $$$$$$$$$$$$$$
    const reqPostOnClick2 = () => {
        api.post("/ewq/data2", {
            name: "김준일",
            age: 32,
        });
    }
    const reqPostOnClick3 = () => {
        const inputElement = document.createElement("input"); //가상의 input 
        inputElement.setAttribute("type", "file"); 

        inputElement.onchange = (e) => { //파일을 선택했을 때 동작할 것을 정의
            const {files} = e.target;
            const [file] = files; //이렇게 대괄호로 객체를 가져오면 첫번째 인덱스가 올라간다.

            const formData = new FormData();
            formData.append("file", file );

            api.post("/req/data3", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", //해당 세팅을 해야 form 데이터에 요청이 가능
                }
            });
        }

        inputElement.click();
    }

    const reqPostOnClick4 = () => {
        const inputElement = document.createElement("input"); //가상의 input 
        inputElement.setAttribute("type", "file"); 

        inputElement.onchange = (e) => { //파일을 선택했을 때 동작할 것을 정의
            const {files} = e.target;
            const [file] = files; //이렇게 대괄호로 객체를 가져오면 첫번째 인덱스가 올라간다.

            const formData = new FormData();
            formData.append("file", file );
            formData.append("name", "김준일");
            formData.append("age", 32);

            api.post("/req/data3", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", //해당 세팅을 해야 form 데이터에 요청이 가능
                }
            });
        }

        inputElement.click();
    }

    const reqPostOnClick5 = () => {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.setAttribute("multiple", true);

        inputElement.onchange = (e) => {
            const {files} = e.target;
            const fileList = Array.from(files); //list가 보이면 습관성 Array변환을 해라. 그리고나서 foreach사용

            const formData = new FormData();
            fileList.forEach(file => formData.append("files", file));

            api.post("/ewq/data5", formData);
        }

        inputElement.click();
    }

    const reqPutOnClick = () => {
        api.put("/req/data1/30", {
            name: "김준이",
            age: 33,
        });
    }

    const reqPatchOnClick = () => { //의미자체가 부분수정이라는 것 상식적으로 해당 방법말고도 있음.
        api.patch("/req/data1/30", {
            name: "김준이",
        });
    }

    const reqDeleteOnClick = () => {
        api.delete("/req/data1/20", {
            data: {
                name: "김준일",
            }
        });
    }

    return <>
        <button onClick={reqGetnClick1}>reqGet1</button>
        <button onClick={reqGetOnClick2}>reqGet2</button>
        <button onClick={reqGetOnClick3}>reqGet3</button>
        <button onClick={reqGetOnClick7}>reqGet7</button>
        <button onClick={reqPostOnClick1}>reqPost1</button>
        <button onClick={reqPostOnClick2}>reqPost9</button>
        <button onClick={reqPostOnClick3}>reqPost10</button>
        <button onClick={reqPostOnClick4}>reqPost4</button>
        <button onClick={reqPostOnClick5}>reqPost5</button>
        <button onClick={reqPutOnClick}>reqPut</button>
        <button onClick={reqPatchOnClick}>reqPatch</button>
        <button onClick={reqDeleteOnClick}>reqDelete</button>
    </>
}

export default Axios04;

