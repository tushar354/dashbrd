const USER_URL = "/user"
export const signinUser  = async({password, email})=>{
    try{
        const {data }=Axios.post(`${USER_URL}/signin`);
        return data;
    } catch(error){
        throw Error(error.responce.data.message);
    }
}