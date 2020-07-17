import React from 'react'
import Efficace from '../images/efficace.png';
import Puzzle from '../images/puzzle.jpg';
import Price from '../images/price.jpg';

export default function Section3() {
    return (
        <div>
    <section id="avantages">
		<div className="widthMax center ptm pbm">
			<div className="center ptm pbm plm prm">
				<h2>Les avantages de LocService</h2>
				<div className="d-flex txtcenter has-gutter-xl">
					<div className="block">
						<img src={Efficace} style={{width:"100px" , height:"100px" }} />
						<h3>Efficace</h3>
				        <p>Vous êtes contacté uniquement en fonction de vos souhaits et de votre budget. Vous évitez les sites avec offres de professionnels ou annonces périmées. Vous ne tombez plus sur des messageries saturées et  ne perdez plus votre temps au téléphone pour entendre "C'est déjà loué !". </p>
					</div>
                    <div className="block">
						<img src={Puzzle} style={{width:"80px" , height:"100px"}} />
						<h3>Evolutif</h3>
				        <p>Votre demande de location reste active tout au long de votre recherche pendant 1 an.  Vous pouvez modifier vos critères afin d'augmenter ou réduire les contacts avec les particuliers. Plus votre demande est précise et plus vous obtenez des contacts utiles et évitez les visites inadaptées.</p>
					</div>	
					<div className="block">
						<img src={Price}  style={{width:"150px" , height:"100px"}}/>
						<h3>Economique</h3>
				        <p>Vous évitez de payer les frais d'agence souvent équivalents à un mois de loyer. Vous évitez les sites avec abonnement Premium ou N° surtaxés (08 99 ...). Vous réglez une seule fois 29 € (24 € pour les étudiants) jusqu'à ce que vous trouviez votre location. </p>
					</div>
				
				</div>
            </div>
		</div>
		 
	</section>
   
                <section id="comment-ca-marche" className="bg-second-light pts pbs txtleft section1">
		<div className="widthMax center">
			<h2>Comment louer facilement un logement avec LocService ?</h2>
			<ul className="grid-4 d-flex">
				<li className="d-flex"><span className="number">1</span> <span className="text">Le locataire décrit sa location <br/> idéale en quelques clics</span><span class="clearfix"></span></li>
				<li className="d-flex"><span className="number">2</span> <span className="text">Sa demande est transmise aux <br/> propriétaires concernés</span><span class="clearfix"></span></li>
				<li className="d-flex"><span className="number">3</span> <span className="text">Les propriétaires contactent les <br/> locataires </span><span class="clearfix"></span></li>
				<li className="d-flex"><span className="number">4</span> <span className="text">Propriétaires et locataires <br/> louent sans frais </span><span class="clearfix"></span></li>
			</ul>
		</div>
	</section>
    {/* <div class="cta-block pbm">
		<a href="/locataires/inscription.html" class="cta cta-bleu animated-horizontal ">Créer ma Demande de location</a>	</div>
    </div> */}
     </div>
    )
}
