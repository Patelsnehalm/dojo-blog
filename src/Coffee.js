import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Coffee = () => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/caramel');
      };
    
    return (
        <><div>
            <h1>Hello to Coffee Page</h1>
        </div>
            <div class="grid-container-element">
                <div class="grid-child-element img1">
                  
                        <img src={require('./CaramelIcedCapp.png')} onClick={handleRedirect} alt="Logo2" height={200} width={250}></img>
                   
                    <h2> Caramel Iced Capp</h2>
                </div>
                <div class="grid-child-element img2"><img src={require('./DarkChocolateCremeChill.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Dark chocolate Creme Chill</h2></div>
                <div class="grid-child-element img3"><img src={require('./Iced_Latte.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Iced Latte</h2></div>
                <div class="grid-child-element img4"><img src={require('./MangoCremeChill.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Mango Creme Chill</h2></div>
                <div class="grid-child-element img5"><img src={require('./MatchaCremeChill.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Matcha Creme Chill</h2></div>
                <div class="grid-child-element img5"><img src={require('./MochaIcedCapp.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Mocha Creme Chill</h2></div>
                    <div class="grid-child-element img5"><img src={require('./OreoStrawberry.png')} alt="Logo2" height={200} width={250}></img>
                    <h2>Oreo strawberry</h2></div>
            </div></>
    );


}
export default Coffee;