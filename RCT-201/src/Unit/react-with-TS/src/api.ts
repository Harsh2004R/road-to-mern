import axios, { type AxiosResponse } from "axios";
import type { dataType } from "./constants";
export const makePostReq = async (data: dataType) => {
    let res: AxiosResponse<dataType> = await axios.post("http://localhost:3000/Todos", data);
    console.log(res)
}

export const makeGetReq = async () => {
    let res: AxiosResponse<dataType[]> = await axios.get("http://localhost:3000/Todos");
    return res.data;
}
