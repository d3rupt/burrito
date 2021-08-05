import React, {useEffect, useState} from 'react';
import menuArrow from "./images/menuArrow.png";
import { Link } from "react-router-dom";
import './Menu.css';

function Menu(props) {
    const [menuChoice, setMenuChoice] = useState(0);

    const menuRender = () => {
        if (menuChoice == 0) {
            return <Burritos />
        } else if (menuChoice == 1) {
            return <Tacos />
        } else if (menuChoice == 2) {
            return <Quesadillas />
        } else if (menuChoice == 3) {
            return <BareBurrito />
        } else if (menuChoice == 4) {
            return <Salsas />
        } else if (menuChoice == 5) {
            return <Extras />
        } else if (menuChoice == 6) {
            return <Drinks />
        }
    }

    return (
        <div className='menu flex col-12 col-m-12 col-l-12'>
            <div className='menu-borderContainer flex col-12 col-m-12 col-l-12'>
                <div className='menuBorder menu-borderTop col-12 col-m-12 col-l-12' />
                <div className='menuBorder menu-borderBottom col-12 col-m-12 col-l-12' />
            </div>
            <div className='menu-lace col-12 col-m-12 col-l-12' />
            <h1>OUR MENU</h1>
            {/*<h3>SEE THE WHOLE THING</h3>*/}
            <div className='menu-optionsContainer flex col-12 col-m-12 col-l-12'>
                <div className='menu-options flex col-12 col-m-4 col-l-3'>
                    <div className='menu-option flex' onClick={() => setMenuChoice(0)}>
                        <h2>BURRITOS</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(1)}>
                        <h2>TACOS</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(2)}>
                        <h2>QUESADILLAS</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(3)}>
                        <h2>BARE BURRITO</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(4)}>
                        <h2>SALSAS</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(5)}>
                        <h2>EXTRAS</h2>
                        <img src={menuArrow} />
                    </div>
                    <div className='menu-option flex' onClick={() => setMenuChoice(6)}>
                        <h2>DRINKS</h2>
                        <img src={menuArrow} />
                    </div>
                </div>
                <div className='menu-menuContainer flex col-12 col-m-8 col-l-9'>
                    <div className='menu-menu flex'>
                        {menuRender()}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Burritos() {
    return(
        <div className='menu-container'>
        <h3>BURRITOS</h3>
    <h4>Includes your choice of filling below, with mexican rice, vegetarian black beans or refried pinto beans, cheese blend & salsa</h4>
    <div className='menu-rows flex'>
        <div className='menu-menuRow flex col-12 col-m-12 col-l-12'>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>CARNITAS mediano $9.45 grandé $12.45</h4>
                <p>pulled pork slow braised in a traditional sauce</p>
            </div>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>POLLO ACHIOTE mediano $9.45 grandé $12.45</h4>
                <p>roast chicken marinated in a citrus achiote sauce</p>
            </div>
        </div>
        <div className='menu-menuRow flex col-12 col-m-12 col-l-12'>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>VEGETARIAN mediano $9.45 grandé $12.45</h4>
                <p>vegetarian black beans with fresh guacamole or fajita veggies</p>
            </div>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>BARBACOA mediano $9.45 grandé $12.45
                </h4>
                <p>tender braised beef slow-cooked in an ancho chipotle adobo sauce</p>
            </div>
        </div>
        <div className='menu-menuRow flex col-12 col-m-12 col-l-12'>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>CAMARONES mediano $9.45 grandé $12.45</h4>
                <p>plump shrimp sautéed in a chile lime sauce</p>
            </div>
            <div className='menu-menuItem col-12 col-m-6 col-l-6'>
                <h4>FAJITA mediano add $1.25 grandé add $1.75</h4>
                <p>sautéed veggies instead of beans and your choice of meat or seafood</p>
            </div>
        </div>
    </div>
</div>
    )
}

function Tacos() {
    return(
        <div className='menu-container'>
            <h3>TACOS</h3>
            <h4>$3.75 each</h4>
                                            <h4>2 for $6.95 </h4>
            <h4>3 for $9.95</h4>
        </div>
    )
}

function Quesadillas() {
    return(
        <div className='menu-container'>
            <h3>QUESADILLAS</h3>
            <h4>Folded flour tortilla, grilled with choice of meat or shrimp filling, cheese blend, fajita veggies, salsa & sour cream</h4>
            <h3>$9.45</h3>
            <h4>Add chips & salsa to any of the
                above orders for $2.75</h4>
        </div>
    )
}

function BareBurrito() {
    return(
        <div className='menu-container'>
            <h3>BARE BURRITOS</h3>
            <h4>A burrito without the tortilla, in a bowl  $9.45</h4>
        </div>
    )
}

function Salsas() {
    return(
        <div className='menu-container'>
            <h3>SALSAS AND SAUCES</h3>
            <div className='menu-menuColumn flex col-12 col-m-4 col-l-4'>
                <h4>Salsa Fresca (fresh tomato)</h4>
                <h5>mild</h5>
            </div>
            <div className='menu-menuColumn flex col-12 col-m-4 col-l-4'>

            </div>
            <div className='menu-menuColumn flex col-12 col-m-4 col-l-4'>

            </div>
        </div>
    )
}

function Extras() {
    return(
        <div className='menu-container'>

        </div>
    )
}

function Drinks() {
    return(
        <div className='menu-container'>

        </div>
    )
}

export default Menu;
