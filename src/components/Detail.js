import React, { Component } from 'react'
import {getProfile} from './UserFunctions'
import Mylocation from './Mylocation'

export default class Detail extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            email : ''
           
        }
    }
    componentDidMount(){
        getProfile().then(res=>{
            console.log(res)
            this.setState({

               name: res.success.name,
               email:res.success.email
            })
           })
    }
    render() {
        return (
           
//  <div className="container">
//                 <div className="jumbotron mt-5">
//                 <div className="col-sm-4 mx-auto">
//                 <h1 className="text-center">Profile</h1>        
//                 </div>
//                 <table className="table col-md-4 mx-auto">
//                     <tbody>
//                         <tr>
//                             <td>Name</td>
//                             <td>{this.state.name}</td>
//                         </tr>
//                         <tr>
//                             <td>Email</td>
//                             <td>{this.state.email}</td>
//                         </tr>
//                     </tbody>
//                 </table>
                
//                 </div>
                
//             </div> 
<div>
    
</div>
        )
    }
}
