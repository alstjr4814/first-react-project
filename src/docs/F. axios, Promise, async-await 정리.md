🅕 F. axios / Promise / async-await 정리
1. axios GET 요청
axios.get("URL")
  .then(res => { console.log(res.data); });

2. 비동기 함수(async/await)
const res = await axios.get("URL");
console.log(res.data);

3. Promise 직접 생성 예시
return new Promise((rs, rj) => {
  setTimeout(() => {
    rs({ status: 200, data: [10,20] });
  }, 2000);
});

4. 공통 API 요청 패턴
const getRequest = async (url) => {
  const r = await axios.get(url);
  return r;
};

5. 병렬 요청 패턴
const r1 = await getRequest("/users");
const r2 = await getRequest("/names");

6. SweetAlert2 예시
await Swal.fire({
  title: "타이틀",
  input: "text"
});