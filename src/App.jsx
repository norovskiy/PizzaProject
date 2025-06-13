import React from 'react'
import Card from './components/card'
import Headers from './components/header'
import img1 from "./img/pizzashop.png"
import "./App.css"
import img2 from './img/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1 (1).png'
import img3 from './img/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1 (2).png'
import img4 from './img/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1 (3).png'
import img5 from './img/1617249653_40-p-pitstsa-na-belom-fone-krasivo-51 1 (5).png'
import Card2 from './components/card2'
import imgc1 from './img/Rectangle 10 (1).png'
import imgc2 from './img/Rectangle 10 (2).png'
import imgc3 from './img/Rectangle 10 (3).png'
import imgc4 from './img/Rectangle 10 (4).png'

const App = () => {
  return (
    <>
    <header>
      <Headers img={img1} ab="About" abc="Menu" abcd ="Events" abcde="About Us"/>
      <button className='LogBtn' >log In</button>
    </header>

    <section>
      <div className="leftSide">
        <h1>The Fastest <br /> Pizza 🍕 Delivery</h1>
      <p>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - pizza is free!</p>
      <p>Cooking process:</p>
      <img style={{width:"200px"}} src="/src/img/shourav-sheikh-a66sGfOnnqQ-unsplash 1.png" alt="" />
      </div>
      <img style={{height:"600px", width:"400px"}} src="/src/img/shourav-sheikh-xLfqx4Psf94-unsplash 1.png" alt="" />
    </section>

    <section className='seconSection' style={{color:"white"}}>
      <h1>Menu</h1>
      <div className="Btns">
        <button className='hoBtn'>Show All</button>
        <button className='hoBtn'>Meat</button>
        <button className='hoBtn'>Vegetarian</button>
        <button className='hoBtn'>Sea products</button>
        <button className='hoBtn'>Mushroom</button>
      </div>
      <div className="Cards">
        <Card img={img2} name="Italian" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="8.45$"/>
        <Card  img={img5} name="Venecia" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="7.35$" />
        <Card img={img3} name="Meat" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="9.35$"/>
        <Card img={img4} name="Cheese" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="9.35$"/>
      </div>
    </section>
    <img style={{width:"85%", marginLeft:"90px"}} src="/src/img/Group 54.png" alt="" />

       <div className="Cards">
        <Card img={img2} name="Italian" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="8.45$"/>
        <Card  img={img5} name="Venecia" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="7.35$" />
        <Card img={img3} name="Meat" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="9.35$"/>
        <Card img={img4} name="Cheese" desc="Filling: onion, potato, tomato, mushrooms, cheese, olives, meat..." price="9.35$"/>
      </div>

      <section className="MoreCards">
        <Card2 img={imgc1} text="HOW WE COOKING"/>
        <Card2 img={imgc2} text="OUR BLOG"/>
        <div className="nextCard">
          <h1>Events</h1>
          <p>There are regular events in our pizzeria that will allow you to eat delicious food for a lower price!</p>
        </div>
        <br />
        
        <Card2 img="/src/img/alex-haney-CAhjZmVk5H4-unsplash 1.png" text="TWO PIZZA FOR 1 PRICE"/>
        <Card2 img="/src/img/Rectangle 11 (1).png" text="KITCHEN TOUR"/>
        <Card2 img="/src/img/Rectangle 10 (1).png" text="FREE COFFEE FOR 3 PIZZA"/>
        <Card2 img="/src/img/Rectangle 11.png" text="OUR INSTAGRAM"/>
        <Card2 img="/src/img/Rectangle 10 (4).png" text="WHERE ARE YOU CHOOSE US?"/>
        <Card2 img="/src/img/Rectangle 10 (2).png" text="KITCHEN TOUR"/>
      </section>

      <section>
        <div className="leftSide">
        <h1>About us</h1>
      <p>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
      <img style={{width:"300px"}} src="/src/img/Group 60.png" alt="" />
      <p>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>
      </div>
      <img src="/src/img/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden 1.png" alt="" />
      </section>

      <footer>
        <div className="" style={{display:"flex", alignItems:"start", justifyContent:"space-between"}}>
          <img src="/src/img/pizzashop.png" alt="" />
          <div className="">
            <h4>Home</h4>
            <p>To Order</p>
            <p>About Us</p>
            <p>Events</p>
            <p>Menu</p>
          </div>
          <div className="">
            <h4>Events</h4>
            <p>3 Pizza 1 Free Coffee</p>
            <p>2 Pizza for 1 Price</p>
            <p>Kitchen Tour</p>
          </div>
          <div className="">
            <h4>Menu</h4>
            <p>Show All</p>
            <p>Seaproducts</p>
            <p>Vegan</p>
            <p>Meat</p>
          </div>
          <div className="">
            <h4>About Us</h4>
            <p>Our History</p>
            <p>Why We?</p>
          </div>
        </div>
        <div className="LastDiv">
          <h2>+7 (937) 333-55-33</h2>
          <img src="/src/img/Group 46.svg" alt="" />
        </div>
      </footer>
    </>
  )
}

export default App