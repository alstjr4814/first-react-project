import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

//로딩 중인게 true인거임 
const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    if (!!accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;

    }
    return config;
});

// 전역 상태 관리(서버) - 서버 응답데이터 캐싱
//일반 상태는 useState사용한다. jus
function ReactQuery01() {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>
        <Box1></Box1>
        <Box2></Box2>   
    </QueryClientProvider>
}

export default ReactQuery01;

function Box1() {
    const principalQuery = useQuery({
        queryKey:["principalQuery"],
        queryFn: async () => {
            return await api.get("/api/auth/principal");
        },
    });

    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);

    return <div>

    </div>
}

function Box2() {
    const principalQuery = useQuery({
        queryKey:["principalQuery"],
        queryFn: async () => {
            return await api.get("/api/auth/principal");
        },
    });

    console.log(principalQuery.isLoading);
    console.log(principalQuery.data);

    return <div>

    </div>
}