import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWM1YmNiNTU4NDdkOTc3MDQ5NzU3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0OTQ0NzQwNiwiZXhwIjoxNzQ5NjIwMjA2fQ.JcLtYeXam_ddQNgeSX_9HCYP0NmuLnJ_toNsrITb2f8";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
});