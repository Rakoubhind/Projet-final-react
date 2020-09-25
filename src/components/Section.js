import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        const noauth =(
            <div className=" div2 hvr-curl-top-left ">
                        <button className="btn2 buzz-out-on-hover"><a href="/Proposelo" className="a2">JE PROPOSE UNE LOCATION</a></button>
                    </div>
        );
        const auth =(
            <div className=" div2 hvr-curl-top-left ">
                        <button className="btn2 buzz-out-on-hover"><a href="/totallocation" className="a2 link buzz-out-on-hover">JE PROPOSE UNE LOCATION</a></button>
                    </div>
        );
        return (
            <div>
                <div className="d-flex col-lg-12">
                    <div className=" div1 hvr-curl-top-left  ">
                        <button className="btn1 buzz-out-on-hover"><a href="/Demandelo" className="a1" >JE CHERCHE UNE LOCATION</a></button>
                    </div>
                    {/* <div className=" div2">
                        <button className="btn2"><a href="/Proposelo" className="a2">JE PROPOSE UNE LOCATION</a></button>
                    </div> */}
                     {localStorage.usertoken ? auth : noauth}
           
                </div>
                <section id="comment-ca-marche" className="bg-second-light pts pbs txtleft section1">
		<div className="widthMax center">
			<h2>Comment louer facilement un logement avec LocService ?</h2>
			<ul className="grid-4 d-flex">
				<li className="d-flex"><span className="number">1</span> <span className="text">Le locataire décrit sa location <br/> idéale en quelques clics</span><span className="clearfix"></span></li>
				<li className="d-flex"><span className="number">2</span> <span className="text">Sa demande est transmise aux <br/> propriétaires concernés</span><span className="clearfix"></span></li>
				<li className="d-flex"><span className="number">3</span> <span className="text">Les propriétaires contactent les <br/> locataires </span><span className="clearfix"></span></li>
				<li className="d-flex"><span className="number">4</span> <span className="text">Propriétaires et locataires <br/> louent sans frais</span><span className="clearfix"></span></li>
			</ul>
		</div>
	</section>
   
</div>
            
        )
    }
}
