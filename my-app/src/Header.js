import './App.css';

export default function Header() {
  return  (
    <header>
    <img src="images/Logo.svg" alt="logo"></img>
    <div className="left-header">
      <div className="header-txt">
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
      </div>
      <div>
        <button className="reserve-TblBtn">Reserve a Table</button>
      </div>
     </div>
    <div>
      <img src="images/icons/restaurantFood.jpg" alt="header-img"></img>
    </div>
    </header>
  )

}