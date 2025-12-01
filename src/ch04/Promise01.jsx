import Swal from "sweetalert2";

function Promise01() {

    const axios = {
        get: (url) => {
            return new Promise((rs, rj) => {  
                console.log(url + "로 요청");
                setTimeout(() => {
                    console.log("응답");
                    rs({
                        status: 200,
                        data: [10, 20, 30, 40],
                    });
                }, 2000);
            });
        }
    }
// retrun자료형 promise라 뜨는 순간 묻지도 따지지도 말고 .than 쓰면 된다. 매개변수명은 마음대로 그리고 해당 변수를 console.log찍어보고 가져오기
//console을 찍어봐서 구조를 보고 어떤 걸 참조할지 확인해봐라
    axios.get("http://192.168.2.101:8080/nums") 
    .then(r => { 
        console.log(r); 
        console.log(r.status); 
        console.log(r.data); 
    })

    axios.get("http://192.168.2.101:8080/users") 
    .then(r => { 
        console.log(r); 
        console.log(r.status); 
        console.log(r.data); 
    })

    const getRequest = async (url) => {
       const r =  await axios.get(url);
       console.log(r);
       console.log(r.status);
       console.log(r.data);
       return r;
    }

    const reqests = async () => {
        const r1 = await getRequest("http://192.168.2.101:8080/users");
        const r2 =await getRequest("http://192.168.2.101:8080/names");
        const r3 =await getRequest("http://192.168.2.101:8080/nums");
        const r4 =await getRequest("http://192.168.2.101:8080/products");

    }

    useEffect(async () => {
        
    }, [])

    const hanleOnclick = async () => {
    //     Swal.fire({
    //         title: "알림 내용",
    //         showCancelButton: true,
    //         input: "text",
    //     }).then((r) => {
    //         console.log(r);
    //         console.log("콘솔");
    //     })
    //     // alert("알림 내용");
    const rs = await Swal.fire({title: "타이틀:", input: "test"});
    console.log(rs);
    }

    return <>
        <button onClick={hanleOnclick}>클릭</button>
    </>
}

export default Promise01;
