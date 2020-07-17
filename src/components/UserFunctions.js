import axios from 'axios'

export const register = newUser=> {
    console.log(newUser)
    return axios
    // https://cors-anywhere.herokuapp.com/
    .post('http://localhost:8000/api/register' , newUser, {
         headers : { 'Content-Type' : 'application/json'}
    })
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{
      console.log(err.response)
    })
}
    export const login = user=> {
        return axios
        .post('http://localhost:8000/api/login' ,  {
            email : user.email , 
            password : user.password
        } , {
             headers : { 'Content-Type' : 'application/json'}
        })
        .then(res => {
            
            localStorage.setItem('usertoken' , res.data.success.token)
            console.log(localStorage.usertoken)
            localStorage.setItem('name' , res.data.user.name)
            localStorage.setItem('email' , res.data.user.email)
            localStorage.setItem('avatar' , res.data.user.avatar)
            localStorage.setItem('adress' , res.data.user.adress)
            localStorage.setItem('mobile' , res.data.user.mobile)
            localStorage.setItem('phone' , res.data.user.phone)


            // localStorage.setItem('usertoken' , res.data.user.email)
            
            console.log(res)
            return res;
        })
        .catch(err =>{
          console.log(err)
        })
        
    
}
export const getProfile = () => {
    console.log("cc")
    return axios
    .get('http://localhost:8000/api/details' ,  {
         headers : { Authorization  : `Bearer ${localStorage.usertoken }` }
        
    })
    .then(res =>{
        console.log(res.data)
        console.log(res.data.success.id)
        localStorage.setItem('userId' , res.data.success.id)
        return res.data
        console.log(localStorage.usertoken)
    })
    .catch(err =>{
      console.log(err)
    })
}