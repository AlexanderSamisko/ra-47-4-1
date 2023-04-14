import React, { useState } from "react";

export default function ColorChanger() {
    const [backColor, setBackColor] = useState("#505050");
    const [currentValue, setCurrentValue] = useState("");
    const [rgbValue, setRGBValue] = useState("");

    const hadleHex = (event) => {
        // event.preventDefault();
        
        if (event.target.value.length === 7 ) {
            try {
                let rgb = hexToRGB(event.target.value);
                if(rgb.includes('NaN')) {
                    throw Error
                }
                setBackColor(rgb);
                setRGBValue(rgb);
                event.target.value = "";
            } catch (error) {
                setBackColor("#ff0e0e");
                setRGBValue("Ошибка!");
            }
            
           
        } 

        setCurrentValue(event.target.value);
    }


    // честно стыренный с оверфло однолайник - пришлось разбираться как работает - занятно.
    const hexToRGB = (hex) => {
        return 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }) + ')';
    }

    return <div className="container" style={{backgroundColor: backColor}}>
        {/* так как в целом у нас нет отправки на сервер - form кажется излишним */}
        <div className="input-group"> 
            <input onChange={hadleHex} value={currentValue} />
            <input disabled value={rgbValue} />
        </div>

    </div> 
}