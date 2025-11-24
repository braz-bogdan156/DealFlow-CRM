
import axios from 'axios';

const baseURL =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_BACKEND_URL_INTERNAL   
    : process.env.NEXT_PUBLIC_BACKEND_URL;           

export const api = axios.create({ baseURL });

api.interceptors.response.use(
(res) => res,
(error) => {
const message =
error.response?.data?.message ||
error.response?.data?.error ||
"Server error";

if (typeof window !== "undefined") {
  alert(message);
} else {
  console.error("API error:", message);
}

return Promise.reject(error);

}
);