import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export const searchAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SEARCH_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});
