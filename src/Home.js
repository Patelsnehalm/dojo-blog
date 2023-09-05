import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (<div>
        <div className="flex-container">

            <div className="flex-child  home" style={{ width: 400 }}>
                <h1>Midnight </h1>
                <h1 style={{ marginTop: 0 }}>Frappiccino</h1>
                <p>The Midnight Mint Mocha Cappiccino</p>
                <p style={{ marginTop: 0 }}>features Extra Dark Cocoa Blended With</p>
                <p style={{ marginTop: 0 }}>Cappiccino Roast coffee.</p>
                <h1 style={{ marginTop: 10 }}>$8.77</h1>
            </div>

            <div className="flex-child  image" style={{ width: 600 }}>
                <img src={require('./logo.jpg')} alt="Logo" height={400} width={350}></img>
            </div>

            <div className="grid-container " style={{ marginLeft: 80 }}>
                <div className="grid-item ">
                    <img src={require('./Caramel Ribbon.jpg')} alt="Logo" ></img>
                    <h1>Caramel Ribbon</h1>
                    <p>Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce, whipped cream, caramel drizzle and a crunchy .</p>
                </div>

                <div className="grid-item " >
                    <img src={require('./Caramel Ribbon.jpg')} alt="Logo1"></img>
                    <h1>Strawberry Funnel</h1>
                    <p>Funnel cake flavored syrup blended with coffee, milk and ice, layered with strawberry puree, whipped cream and powdered-sugar-funnel-cake pieces.</p>
                </div>

                <div className="grid-item ">
                    <img src={require('./Caramel Ribbon.jpg')} alt="Logo2" ></img>
                    <h1>Caramel Frapuccino</h1>
                    <p>Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top.</p>
                </div>
            </div>
        </div>


        <div className="menu">
            <h1 >Menu</h1>
        </div>

        <div class="grid-container-element">
            <div class="grid-child-element img1">
                <Link to={'Coffee/'}>
                    <img src={require('./cold_beverage.png')} alt="Logo2" height={200} width={250} ></img>
                </Link>
                <h2>Cold Beverage</h2>
            </div>
            <div class="grid-child-element img2"><img src={require('./hot_beverage.png')} alt="Logo2" height={200} width={250} ></img>
                <h2>Hot Beverage</h2></div>
            <div class="grid-child-element img3"><img src={require('./breakfast.png')} alt="Logo2" height={200} width={250} ></img>
                <h2>Breakfast</h2></div>
            <div class="grid-child-element img4"><img src={require('./donut.png')} alt="Logo2" height={200} width={250} ></img>
                <h2>Donut</h2></div>
            <div class="grid-child-element img5"><img src={require('./bagel.png')} alt="Logo2" height={200} width={250} ></img>
                <h2>Bagel</h2></div>
        </div>

    </div>
    );

}

export default Home;