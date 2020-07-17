import React, { Component } from 'react'
import {login} from './UserFunctions';

 class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password : '',
            errors : {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({ [e.target.name] : e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const user ={
            email : this.state.email , 
            password : this.state.password
        }
        login(user).then(res=> {

            console.log("cc"+res)
        //     if(res) {
        //     this.props.history.push(`/detail` )
        // }
        this.props.history.push(`/TotalLocation`)
        })
    }
    render() {
        return (
            <div className="container">
                 <div className="row">
                 <div className="col-md-6">
                     <form  onSubmit={this.onSubmit}>
                         <h1>
                             Sign in 
                         </h1>
                         <div className="form-group">
                             <label htmlFor="email">
                              email Adress    
                             </label>
                             <input type="email" className="form-control" name="email"
                            //  value={this.state.email }
                             onChange={this.onChange}
                             />
                
                          </div>
                          <div className="form-group">
                             <label htmlFor="pass">
                              Passport    
                             </label>
                             <input type="password" className="form-control" name="password"
                            //  value={this.state.password }
                             onChange={this.onChange}
                             />
                
                          </div>
                          <button type="submit" className="btn btn-primary">Sign in </button>
                     </form>
                
                </div>
                
                </div>
            </div>
        )
    }
}
 export default Login