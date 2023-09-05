import React from "react";
import { useState } from "react";


const CaramelIced = () => {
    const [selectedOption, setSelectedOption] = useState("option1");
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };



    return (
        <div className="caramelIced">
            <div className="caramelIced Img">
                <img src={require('./CaramelIcedCapp.png')} alt="Logo2" height={150} width={150}></img>
                <h2>Caramel Iced Capp</h2>
            </div>
            <div className="form">
                <fieldset>

                    <label>
                        Select an option:
                        <select value={selectedOption} onChange={handleDropdownChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </label>
                </fieldset>

            </div>
        </div>
    );
}

export default CaramelIced;