import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JoinLevel from '../components/JoinLevel';

const Join = () => {
  return (
    <div>
      <Header />
      <div className='join'>
        <div className='join__content'>
          <h2>Pourquoi adhérer?</h2>
          <p className='join__content--p1'>Pour échanger, s’informer, se former.</p> 
          <p>Echanger lors de rencontres conviviales :</p>
          <ul>
            <li>Réunions de secteur</li>
            <li>Assemblée générale</li>
            <li>Journées de formations </li>
            <li>Sortie d’été culturelle avec les enfants.</li> 
          </ul>
          <p>Etre écouté et accompagné</p>
          <p>Etre informé des évolutions survenues ou à venir au niveau départemental et national.</p>
          <p>Bénéficier :</p>
          <ul>
            <li>De l’assurance RCP juridique professionnelle (renseignements juridiques, consultations, assistance amiable, assistance judiciaire)</li>
            <li>De la bibliothèque</li>
            <li>D’un accès au site internet</li>
            </ul>
        </div>
        <div className='join__level'>
          <h2>3 Niveaux d'adhésion vous sont proposés</h2>
          <JoinLevel />
        </div>
       

       

      </div>
      <Footer />
    </div>
  )
}

export default Join