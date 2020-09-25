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
        console.log(e.target.value)

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
            // <div className="container">
            //      <div className="row">
            //      <div className="col-md-6">
            //          <form  onSubmit={this.onSubmit}>
            //              <h1>
            //                  Sign in 
            //              </h1>
            //              <div className="form-group">
            //                  <label htmlFor="email">
            //                   email Adress    
            //                  </label>
            //                  <input type="email" className="form-control" name="email"
            //                 //  value={this.state.email }
            //                  onChange={this.onChange}
            //                  />
                
            //               </div>
            //               <div className="form-group">
            //                  <label htmlFor="pass">
            //                   Passport    
            //                  </label>
            //                  <input type="password" className="form-control" name="password"
            //                 //  value={this.state.password }
            //                  onChange={this.onChange}
            //                  />
                
            //               </div>
            //               <button type="submit" className="btn btn-primary">Sign in </button>
            //          </form>
                
            //     </div>
                
            //     </div>
            // </div>
            <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
            <h1>Access to your  Account</h1>
            
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={this.onSubmit}>
              <div className="row">
           {/* Email Address */}
           <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input id="email" type="email" name="email" onChange={this.onChange} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Password */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input id="password" type="password"  onChange={this.onChange} name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button type="submit" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">Login</span>
                  </button>
                </div>
               
              </div>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
 export default Login