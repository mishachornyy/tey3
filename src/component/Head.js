import './Head.css';
import decor from"../assests/decor 1.png"
import bizon from"../assests/animals-bizon-trava-progulka-pole-152271 (1) 1.jpg"
import icon from "../assests/bizon 1.png"


function Head() {
  return (


    <div className="bizon">

      <img src={bizon} alt="bizon "/>
        <div className="bizon-h1">WELCOME TO THE SWO TAX OFFICE ON-LINE</div>
        <div className="bizon-p">
          Through this webpage, new and currently licensed vendors may request and submit their application to the SWO
          Tax Office for processing.
        </div>

        <img src={decor} alt="decor "/>

    </div>




  );

}

export default Head;
