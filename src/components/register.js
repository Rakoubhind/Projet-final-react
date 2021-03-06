import React, { Component } from 'react'
import { register } from './UserFunctions';

class Register extends Component {


    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            adress:'',
            phone:'',
            mobile:'',
            adress:'',
            password: '',
            c_password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)

    }
    onSubmit(e) {

        e.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            phone: this.state.phone,
            adress: this.state.adress,
            password: this.state.password,
            c_password: this.state.c_password
        }
        console.log(newUser);
        register(newUser).then(res => {
            this.props.history.push(`/login`)
            // const { history } = this.props;
            //     history.push("/login")

        })
    }
    render() {
        return (
//             <div className="ptl bg-prim pbl" id="FormCreationEspace">
//                  <h1 className="h1_recap_vert">Création de mon Espace Propriétaire</h1>
//                 <div className="widthMax center bg-white ptm mbm" id="FormCreationEspace">
//                     <div id="introcoach2">
//                         <p className="pbs pts">
//                             Bonjour, je suis Sophie, votre Coach LocService, et je vais vous aider à créer votre Location.<br/><br/></p> </div>
                                              
//                <form onSubmit={this.onSubmit}>
//                  <table className="centered bg-white " cellPadding="0" cellSpacing="8" align="center">
//                    <tbody>
//                        <tr>
//                            <td className="txtright">Nom : </td>
//                            <td className="txtleft"><input type="text" className="owner_text" name="name"  maxlength="128" size="20" onChange={this.onChange}/></td>
//                        </tr>
//                         <tr>
//                             <td className="txtright">Email : </td>
//                             <td className="txtleft"><input type="email" className="owner_text" name="email"  maxlength="128" size="20" onChange={this.onChange} /></td>
//                         </tr>
//                          <tr>
//                             <td className="txtright">Choisissez un mot de passe : </td>
//                             <td className="txtleft"><input type="password" className="owner_text" name="password"  maxlength="64" size="20" onChange={this.onChange} /></td>
//                         </tr>
//                         <tr>
//                            <td className="txtright">Saisissez ce mot de passe à nouveau&nbsp;: </td>
//                            <td className="txtleft"><input type="c_password" className="owner_text" name="c_password"  maxlength="64" size="20" onChange={this.onChange} /></td>
//                         </tr>
//                         <tr>
//                             <td className="txtcenter" colspan="2">
//                             <input id="infos" type="checkbox" name="Infos" value="2"/><label for="infos">&nbsp;Je souhaite bénéficier d'informations pratiques réservées aux bailleurs particuliers</label>               
//                            </td>
//                         </tr>
//                </tbody>
//                </table>
              
               
//                <div id="conditionutilisation" className="bg-vert-light ptm pbs">
// 			<h4 className="txtcenter">Conditions d'utilisation</h4>
// 			<p className="txtcenter txtVert">Je reconnais ne pas travailler pour un professionnel de l'immobilier (agence, marchand de liste, notaire, ...)</p>
// 			<p className="txtcenter txtVert">Je reconnais ne contacter les locataires que pour leur proposer une location sans frais d'intermédiaires</p>
// 			<p className="txtcenter txtVert">Je m'engage à ne pas proposer de locations saisonnières ou de vacances</p>
// 			<div className="txtcenter txtBold txtVertt"><input id="Accept" type="checkbox" name="Accept" /><label for="Accept">&nbsp;J'accepte les conditions d'utilisation et la notice légale</label>
//             </div>
//      		</div>
//                <div className="txtcenter  di">
// 		<button type="submit" className="cta cta-vert prl pll  pbs">Créer mon Espace Propriétaire</button>
	 
//      </div>
     
//        </form>
//        </div> 
               

           
// </div>
<div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" className="img-fluid mb-3 d-none d-md-block" />
            <h1>Create an Account</h1>
            
          </div>
          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input id="name" onChange={this.onChange} type="text" name="name" placeholder="Full Name" className="form-control bg-white border-left-0 border-md" />
                 
                </div>
               
                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input id="email" type="email" name="email" onChange={this.onChange} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted" />
                    </span>
                  </div>
                  
                  <input id="phoneNumber" type="tel" name="phone"  onChange={this.onChange} placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
                </div>.
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted" />
                    </span>
                  </div>
                  
                  <input id="phoneNumber" type="tel" name="mobile"  onChange={this.onChange} placeholder="Mobile Number" className="form-control bg-white border-md border-left-0 pl-3" />
                </div>.
                {/* Job */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input id="adress" type="text" name="adress"  onChange={this.onChange} placeholder=" Address" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input id="password" type="password"  onChange={this.onChange} name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Password Confirmation */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input id="passwordConfirmation"  onChange={this.onChange} type="password" name="c_password" placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md" />
                </div>
                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button type="submit" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">Create your account</span>
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
 export default Register
 