import React, { Component } from "react";

export default class Landing2 extends Component {
  render() {
    return (
      <div>
        <section id="locprop_landing" className="locataire">
          <div className="widthMax center">
            <div id="cta_page" className="cta_bleu">
              <div className="tst">
                <div className="innerLink">
                  <h1 style={{ color: "#555555" }}>
                    Trouvez une location sans frais d'agence avec LocService
                  </h1>
                  <p>
                    En quelques clics vous diffusez une demande de location
                    détaillée aux propriétaires.
                  </p>
                  <p>
                    Vous êtes contacté directement par des particuliers qui
                    proposent un logement sans frais d'agence.
                  </p>
                  <p>
                    Vous ne perdez plus votre temps au téléphone pour entendre «
                    c’est déjà loué ! ».
                  </p>
                  <div id="cta_action">
                    {/* <a href="/register" title="" className="cta btn2">Entrez vos critéres de recherche </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
