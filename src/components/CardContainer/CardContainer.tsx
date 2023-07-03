import Card from "../Card/Card";

import "./style.css";

const CardContainer = () => {
  return (
    <>
      <div className="container">
        <div className="images">
          <Card />
        </div>
        <div className="slideshow-buttons">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <p className="tag">Don't miss out! #NFT #Facebook</p>
        <div className="product">
          <p>NFT's</p>
          <h1>Facebook Badge</h1>
          <h2>$150</h2>
          <p className="desc">Rare Facebook Icon NFT: Own a digital masterpiece! Vibrant, detailed "f" symbolizing social media evolution. Embrace tech, connect, and collect. Limited edition, iconic piece of digital history.</p>
          <div className="buttons">
            <button className="add">Add to Cart</button>
            <button className="like"><span>♥</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardContainer;