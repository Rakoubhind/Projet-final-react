import React, { Component } from "react";
import { getProfile } from "./UserFunctions";
import Axios from "axios";

export default class Cordonnes extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      user_id: "",
      avatar: "image",
      phone: "",
      mobile: "",
      adress: "",
      datas: {},
    };
  }
  componentDidMount() {
    this.setState({
      datas: {
        name: localStorage.name,
        email: localStorage.email,

        avatar: localStorage.avatar,
        phone: localStorage.phone,
        mobile: localStorage.mobile,
        adress: localStorage.adress,
      },
    });
    // getProfile().then((res) => {
    //   console.log(res);
    //   this.setState({
    //     name: res.success.name,
    //     email: res.success.email,
    //   });
    // });
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      datas: { ...this.state.datas, [e.target.name]: e.target.value },
    });
    console.log(this.state.datas);
  };
  onSubmit = (e) => {
    e.preventDefault();

    // const profile = {
    //   phone: this.state.phone,
    //   mobile: this.state.mobile,
    //   adress: this.state.adress,
    //   avatar: this.state.avatar,
    // };
    console.log(this.state.datas);
    Axios.post("http://localhost:8000/api/user/update", this.state.datas, {
      headers: { Authorization: `Bearer ${localStorage.usertoken}` },
    }).then((res) => {
      console.log(res);
      localStorage.setItem("name", res.data.success.name);
      localStorage.setItem("email", res.data.success.email);
      localStorage.setItem("avatar", res.data.success.avatar);
      localStorage.setItem("adress", res.data.success.adress);
      localStorage.setItem("mobile", res.data.success.mobile);
      localStorage.setItem("phone", res.data.success.phone);
      console.log("hind");

      this.props.history.push(`/totallocation`);
    });
  };
  render() {
    return (
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10">
            <h1>{this.state.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            {/*left col*/}
            <div className="text-center">
              <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <br />
              <br />
              <br />
              <input
                type="file"
                className="text-center center-block file-upload"
                name="image"
              />
            </div>
            <br />
            <br />
            <br />

            <div className="panel panel-default">
              <div className="panel-heading">Social Media</div>
              <div className="panel-body">
                <i className="fa fa-facebook fa-2x" />{" "}
                <i className="fa fa-github fa-2x" />{" "}
                <i className="fa fa-twitter fa-2x" />{" "}
                <i className="fa fa-pinterest fa-2x" />{" "}
                <i className="fa fa-google-plus fa-2x" />
              </div>
            </div>
          </div>
          {/*/col-3*/}
          <div className="col-sm-9">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <hr />
                <form
                  onSubmit={this.onSubmit}
                  className="form"
                  action="##"
                  method="post"
                  id="registrationForm"
                >
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="first_name">
                        <h4>Full name</h4>
                      </label>
                      {/* ***************************************** input[0] */}
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        onChange={this.onChange}
                        value={this.state.datas.name}
                        // value={localStorage.name}

                        placeholder="enter your full name"
                        title="enter your first name if any."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="phone">
                        <h4>Phone</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        onChange={this.onChange}
                        placeholder="enter phone"
                        value={this.state.datas.phone}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="mobile">
                        <h4>Mobile</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        onChange={this.onChange}
                        placeholder="enter mobile number"
                        title="enter your mobile number if any."
                        value={this.state.datas.mobile}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Email</h4>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.datas.email}
                        placeholder="you@email.com"
                        title="enter your email."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <label htmlFor="email">
                        <h4>Location</h4>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={this.onChange}
                        id="adress"
                        name="adress"
                        placeholder="somewhere"
                        title="enter a location"
                        value={this.state.datas.adress}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-12">
                      <br />
                      <button className="btn2" type="submit">
                        <i className="glyphicon glyphicon-ok-sign" /> Save
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
              </div>
              {/*/tab-pane*/}
            </div>
            {/*/tab-pane*/}
          </div>
          {/*/tab-content*/}
        </div>
        {/*/col-9*/}
      </div>
    );
  }
}
