import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <div className="container">
        <div className="contact_form_card span8 col-lg-8">
          {" "}
          <p className="title">Envoyer un message à « Maroc Espion »</p>{" "}
          <form
            action="/messages/send/0"
            method="post"
            encType="multipart/form-data"
          >
            {" "}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n#oauth-error{\n  margin-top: 5px;\n  text-align: center;\n  color: indianred;\n}\n",
              }}
            />
            <div id="oauth2">
              <div id="oauth-providers">
                <div
                  scope="public_profile,email"
                  auth_type="rerequest"
                  onlogin="fbCheckLoginState();"
                  width="100%"
                  className="fb-login-button fb_iframe_widget"
                  data-size="large"
                  data-button-type="continue_with"
                  data-auto-logout-link="false"
                  data-use-continue-as="true"
                  login_text
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=290274521075349&auth_type=rerequest&auto_logout_link=false&button_type=continue_with&container_width=330&locale=fr_FR&scope=public_profile%2Cemail&sdk=joey&size=large&use_continue_as=true&width=100%25"
                >
                  <span
                    style={{
                      verticalAlign: "bottom",
                      width: "100%",
                      height: "40px",
                    }}
                  >
                    <iframe
                      name="ff0457df3ba58"
                      height="1000px"
                      data-testid="fb:login_button Facebook Social Plugin"
                      title="fb:login_button Facebook Social Plugin"
                      frameBorder={0}
                      allowTransparency="true"
                      allowFullScreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v3.2/plugins/login_button.php?app_id=290274521075349&auth_type=rerequest&auto_logout_link=false&button_type=continue_with&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1b12f52a1a979%26domain%3Dwww2.avito.ma%26origin%3Dhttps%253A%252F%252Fwww2.avito.ma%252Ffa6da5bc7bca88%26relation%3Dparent.parent&container_width=330&locale=fr_FR&scope=public_profile%2Cemail&sdk=joey&size=large&use_continue_as=true&width=100%25"
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: "100%",
                        height: "40px",
                      }}
                      className
                    />
                  </span>
                </div>
              </div>
              <div id="oauth-error" className="oauth-error form-alert" />
              <div className="text-center mts mbs">OU</div>
            </div>{" "}
            <div className="form-group">
                <div className="row">
              <label>Nom</label>{" "}
              <div>
                {/* <span>
                  <svg className="iconSvg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" />{" "}
                  </svg>
                </span>{" "} */}
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nom et prénom"
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
                  <svg className="iconSvg">
                    {" "}
                    <path
                      id="a"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
                    />{" "}
                  </svg>{" "}
                </span>{" "}
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="exemple@domaine.com"
                  required
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label>Description</label>{" "}
              <textarea
                rows={6}
                className="form-control"
                name="message_body"
                placeholder="Ecrire votre message ici"
                defaultValue={""}
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
        </div>
      </div>
    );
  }
}
