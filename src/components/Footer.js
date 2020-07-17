import React from 'react'
import FB from '../images/fb.png'
import TW from '../images/tw.jpg'
export default function Footer() {
    return (
        <div>
            <div className="bg-third  txtcenter" id="footer-1">
                <div className="widthMax d-flex center">
                    <a href="/infos/qui-sommes-nous.html" className="">Qui sommes-nous ?</a>
                    <a href="/presse/espace-presse.html" className="">Espace Presse</a>
                    <a href="/infos/notice-legale.html" className="">Notice légale</a>
                    <a href="/infos/contact.html" className="">Nous écrire</a>
                    <span>
                        <a style={{ "display": "inline" }} href="">
                            <img src={FB} style={{ width: "35px", height: "35px" }} alt="fbb" />
                        </a>
                     &nbsp;<a style={{ "display": "inline" }} href="">
                            <img src={TW} style={{ width: "30px", height: "30px" }} alt="twit" /></a>
                    </span>
                </div>
            </div>
            <div className="bg-dark">
                <div className="widthMax center ptm pbm" id="footer-2">
                    <p>©2020 LocService - RCS Vannes n° B 414 438 192 -
                                 <a href="/plan-du-site">Plan du site</a>
                                  - Reproduction interdite
                            </p><a href="/location-appartement.html" title="">Appartement</a>&nbsp;|&nbsp;
                            <a href="/location-maison.html" title="">Maison</a>
                            &nbsp;|&nbsp;<a href="/location-studio.html" title="">Studio</a>&nbsp;
                            |&nbsp;<a href="/location-chambre.html" title="">Chambre</a>
                            &nbsp;|&nbsp;<a href="/location-meuble.html" title="">Location Meublé</a>
                            &nbsp;|&nbsp;<a href="/logement-etudiant.html" title="">Logement Etudiant
                            </a><br/><p><a href="https://blog.locservice.fr">Blog LocService</a>
                    </p>
                           
                </div>
            </div>
            </div>
    )
}
