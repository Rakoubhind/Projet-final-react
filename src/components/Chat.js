import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import SuccessAlert from "./SuccessAlert";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      user_id: "",
      product_id: "",
      description:"",
      id: this.props.match.params.id,
      products: [],
      
    };
  }

  onChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)

}
onSubmit=(e)=> {

  e.preventDefault()
  const newNotif = {
      // name: this.state.name,
      // email: this.state.email,
      product_id:this.state.products.id,
      description: this.state.description,
     
  };
  axios
    .post('http://localhost:8000/api/notifications/store' , newNotif, {
      headers: { Authorization: `Bearer ${localStorage.usertoken}` },
    }).then((res) => {
      console.log(res);
      this.setState({
        alert_message:"success"
      })

    })
    .catch(err =>{
      console.log(err.response)
    }) 
}
componentDidMount() {
  const $id = this.state.id;
  axios.get("http://localhost:8000/api/products/" + $id).then((response) => {
    console.log(response);
    this.setState({
      products: response.data.product,
      name: localStorage.name,
      email: localStorage.email,
      user:response.data.product.user.name 
      

    });

    console.log(this.state.products);
  });
}
  render() {
    return (
<div className="body">
{this.state.alert_message=="success"?<SuccessAlert />:null}
<div className="container mbm">
      <div className="firstcontact_container">
        
        <div className="contact_form_card span8">
          {" "}
          <p className="title">Envoyer un message à « {this.state.user} »</p>{" "}
          <form
           onSubmit={this.onSubmit}
            
          >
            <div className="form-group">
              <label>Nom</label>
              <div>
                {" "}
                <span>
                  {" "}
                  <svg className="iconSvg" style={{marginLeft:"10px"}}>
                    {" "}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" />{" "}
                  </svg>{" "}
                </span>{" "}
                <input
                  type="text"
                  className="form-control inp1"
                  name="name"
                  onChange={this.onChange}
                  defaultValue={this.state.name}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label>Email</label>{" "}
              <div>
                {" "}
                <span>
                  {" "}
                  <svg className="iconSvg" style={{marginLeft:"10px"}}>
                    {" "}
                    <path
                      id="a"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
                    />{" "}
                  </svg>{" "}
                </span>{" "}
                <input
                  type="email"
                  className="form-control inp1"
                  onChange={this.onChange}
                  name="email"
                  value={this.state.email}
                  readOnly="readonly"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label>Description</label>{" "}
              <textarea
                rows={6}
                className="form-control area"
                name="description"
                placeholder="Ecrire votre message ici"
                onChange={this.onChange}
                
              />{" "}
            </div>{" "}
            <div className="btn_row">
              {" "}
              <div className="col-md-4">
                {" "}
                <button type="submit" className="btn_send_message">
                  {" "}
                  Envoyer votre message{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
          <div className="attention_space">
            {" "}
            <b>Attention:</b>{" "}
            <p className="attention_text">
              {" "}
              Il ne faut jamais envoyer de l’argent par virement bancaire ou à
              travers les agences de transfert d’argent lors de l’achat des
              biens disponibles sur le site. Avito.ma n’est pas garant des
              transactions et ne joue pas le rôle d’intermédiaire.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className=" contact_form_card span8">
          {" "}
          <p className="title">Résumé de l'annonce</p>{" "}
          <div className="details">
            {" "}
            <b className="ads_title_desc">{this.state.products.titre}</b>{" "}
            <br />
            <b className="ads_price">{this.state.products.prix} Dhs</b>{" "}
            <p className="ads_date">{this.state.products.created_at}</p>{" "}
          </div>{" "}
       
          <hr />
          <div className="seperator" />{" "}
          <div className="details">
            {" "}
            <b>Description</b>{" "}
            <br />
            <br />

            <p className="ads_desc">{this.state.products.description}</p>{" "}
          </div>{" "}
          
            <hr />
          <div className="seperator" />{" "}
          <div className="details">
            {" "}
            <b>Localisation</b> 
            <br />

            <p className="ads_location">{this.state.products.adresse}</p>{" "}
          </div>{" "}
        </div>
      </div>
      </div>
      <Footer />

      </div>
    );
  }
}
