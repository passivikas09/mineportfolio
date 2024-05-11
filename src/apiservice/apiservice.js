import axios from "axios"
const BASE_URL="http://localhost:5000"
class apiService{
    contactAdd(data){
        return axios.post(BASE_URL+"/user/contact/add",data)
    }
    contactAll(){
        return axios.get(BASE_URL+"/admin/contact/all")
    }
    contactSingle(data){
        return axios.post(BASE_URL+"/admin/contact/single",data)
    }

    //login 
    userLogin(data){
        return axios.post(BASE_URL+"/admin/login",data)
    }
    
}

export default new apiService