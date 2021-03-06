import React from 'react';
import{NavLink} from 'react-router-dom';
import ButterfliesAnim from '../components/ButterfliesAnim';


const levelArray = [
    {id: 'visit', txt: 'Visiteurs', link:'/Home'}, 
    {id: 'adher', txt: 'Adhérents', link:'/Identification'}, 
    {id: 'admin', txt:'Administrateurs', link:'/Identification'}, 
    {id: 'child', txt: 'Le Coin Des Enfants', link:'/Identification'}
]

const Intro = () => {
    return (
        <div>
            <ButterfliesAnim />
        <div className = "header">
            <img src='./assets/logos/logo.png' alt="Logo de l'association"></img>
            <h1>
                Association des  familles d'accueil <br/>
                de La Mayenne
            </h1>
        </div>
        <main>
            <div className='bg-img'>
                <p className='citation'>
                "Au sein d'une famille d'accueil,<br/>
                l'enfant grandit et s'épanouit<br/>
                dans le respect de son histoire et de sa culture,<br/>
                pour mieux prendre son envol."
                </p>
                {levelArray.map((level)=>
                <NavLink key={level.id} to ={level.link}>
                    <h2  className={'level level--'+level.id}>
                        {level.txt}
                    </h2>   
                </NavLink> 
                )}
                <div className='partner'>
                    <img src='./assets/logos/icone-fnaf.png' alt='logo fnaf'/>
                    <img src='./assets/logos/logo-mayenne-petit.png' alt='logo département Mayenne'/>
                    <img src='./assets/logos/icone-udaf.png' alt='logo udaf'/>
                </div>
                
                   
            </div>
        </main>
        </div>
    );
};

export default Intro;