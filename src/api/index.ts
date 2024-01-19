import { http } from "./http";


interface LoginParams{
    username:string,
    password:string
}
export const loginApi=(data:LoginParams)=>{
    return http.post("/park/login",data)
}
export const liebiaoApi=(data:any)=>{
    return http.get("/parking/card/list",data)
}