import axios from 'axios'

export const Category =() => {
    console.log('Category')
    return axios
  
    .get('http://localhost:8000/api/categories' , {
         headers : { 'Content-Type' : 'application/json'}
    })
    .then(res =>{
        // console.log(res)
        return res.data
    })
    .catch(err =>{
      console.log(err.response)
    })
}