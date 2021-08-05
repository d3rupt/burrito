import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import cloud from './images/cloud.png';
import './App.css';
import './Home.css';

function App() {
  return (
    <div className="App parallax col-12">
       <div className='home parallax-group col-12'>
           <Header/>
           <div className='parallax-layer home-parallaxBack home-back flex col-12'>
                <div className='home-sun' />
               <img src={cloud} id='cloud1' />
               <img src={cloud} id='cloud2' />

           </div>
           <div className='parallax-layer home-parallaxMid col-12'>
               <div className='home-background col-12' />
               <img src={cloud} id='cloud3' />
           </div>
           <div className='darkFilter' />
           <div className='parallax-layer home-parallaxFront home-base flex col-12'>
               <div className='home-banner col-12 col-m-9 col-l-6'></div>
           </div>
       </div>

      <Menu />
        <div className='footer parallax-group col-12 col-m-12 col-l-12'>
            <div className='footer-borderContainer flex col-12 col-m-12 col-l-12'>
                <div className='footer-border footer-borderTop col-12 col-m-12 col-l-12'>

                </div>
                <div className='footer-border footer-borderBottom col-12 col-m-12 col-l-12'>

                </div>
            </div>
            <div className='footer-left parallax-layer parallax-back col-12 col-m-6 col-l-6'>
                
            </div>
            <div className='footer-right parallax-layer parallax-back col-12 col-m-6 col-l-6'>

            </div>
        </div>
    </div>
  );
}

export default App;
