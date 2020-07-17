import React, { Component } from 'react'


export default class Landing2 extends Component {
    render() {
        return (
            <div>
                <section id="locprop_landing" className="locataire">
                    <div className="widthMax center">
                        <div id="cta_page" className="cta_bleu">
                            <div className="tst">
                                <div className="innerLink">
                                    <h1 style={{ "color": "#555555" }}>Trouver gratuitement votre futur locataire avec LocService</h1>
                                    <p>Vous consultez gratuitement des demandes de locataires identifiés, sérieux  et solvables.</p>
                                    <p>Vous recevez régulièrement de nouvelles candidatures précises pour faciliter votre recherche de locataire..</p>
                                    <p>Vous êtes assurés de louer rapidement et économisez tous les frais d'agences ou d'annonces.</p>
                                    <div id="cta_action">
                                       
                                     <a href="/register" title="" className="cta btn3">Créer gratuitement mon Espace Propriétaire</a>
                                     <br/> <br/><a href="/login" className="dejainsc">Déja inscrit ?</a>
                                    </div>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </section >
                
              </div>
        )
    }
}