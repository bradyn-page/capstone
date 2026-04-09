import './App.css';

export default function Main () {
 
 return (<main >
  <section className="Specials">
    <h1>Specials</h1>
    <button className="Menu-button">Online Menu</button>
        <div className="cards">
          <div className="card">
            <img src="images/icons/greek-salad.jpg" alt="special1"  />
            <div className='card__content'>
                <h2>Greek Salad</h2>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            </div>
            <div className='card__info'>
            
              <img src="/images/bike-logo" alt="bike-logo" />
              <div>310 likes</div>
              <div>
              <a href="order-online.html" className='card__link'>Order a Delivery</a>
              </div>
            </div>
         </div>
        </div>
        <div className="specials-card">
            <img src="images/icons/bruchetta.svg" alt="special2" />
            <h2>Bruschetta</h2>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <a href="order-online.html">Order a Delivery</a>
            <img src="/images/bike-logo" alt="bike-logo" />
          </div>
          <div className="specials-card">
            <img src="images/icons/lemon dessert" alt="special3" />
            <h2>Lemon Dessert</h2>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="order-online.html">Order a Delivery</a>
            <img src="/images/bike-logo" alt="bike-logo" />
          </div>
  </section>

    <section className="Testimonials">
      <h1>Testimonials</h1>
      <div className="testimonial">
        <img src="" alt="special1" />
          <h2></h2>
          <p></p>
          <a href="order-online.html">Order a Delivery</a>
           <img src="images/bike-logo.jpg" alt="bike-logo" />
      </div>
      <div className="testimonial">
          <img src="" alt="special1" />
          <h2></h2>
          <p></p>
          <a href="order-online.html">Order a Delivery</a>
           <img src="images/bike-logo.jpg" alt="bike-logo" />
        </div>
        <div className="testimonial">
          <img src="" alt="special1" />
          <h2></h2>
          <p></p>
          <a href="order-online.html">Order a Delivery</a>
           <img src="images/bike-logo.jpg" alt="bike-logo" />
        </div>
      </section>

      <section className="About">
      <h2>Little Lemon</h2>
      <h3> Chicago</h3>
      <p>A vibrant Mediterranean kitchen where fresh ingredients, bold spices, and timeless recipes come together. From savory grilled meats and bright, herb-filled salads to warm, comforting classNameNameics, every dish is crafted to celebrate flavor, balance, and tradition. Simple, wholesome, and made to be shared.</p>
      <div classNameName="About-img">
        <img src="/images/maria.jpeg" alt="wife" />
        <img src="images/dan.jpg" alt="husbands" />
      </div>
      </section>
    </main>)

};

