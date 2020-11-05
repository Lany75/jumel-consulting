import React from 'react';
import './MentionsLegalesDesktop.css';
import './MentionsLegalesMobile.css';

const MentionsLegales = ()=>{
  const openModal = ()=> {
    let modal = document.getElementById('my-modal');  
    modal.style.display='block';
  }

  const closeModal = ()=> {
    let modal = document.getElementById('my-modal');
    modal.style.display = 'none'
  }

  return (
    <div id='mentions-legales'>
      <div onClick={openModal}>
        Mentions Legales
      </div>

      <div id="my-modal" className="modal">
        <div className="modal-content">
          <div className="close" onClick={closeModal}>&times;</div>
          <div id='text-ml'>
            <div id='titre-mentions-legales'>MENTIONS LEGALES</div>
            <div>
              <div className='titre'>IMMATRICULATION</div>
              <div className='texte'>
                <div>JUMEL CONSULTING est une société par action simplifiée à associé unique au capital social de 3000€. 
                L'entreprise est identifiée au Registre du Commerce et des Sociétés (RCS) de Paris sous le numéro 805 077 617. 
                Son siège social est situé 91 bld Soult 75012 Paris.</div>
                <div>Tel : 06.08.97.37.44 -- Mail : julien.rivat@jumel-consulting.com</div>
              </div>
            </div>
            <div> 
              <div className='titre'>REALISATION DU SITE</div>
              <div className='texte'>
                <div>Conceptrice et développeuse : Mélanie PARRY (mlanie.parry@gmail.com)</div>
                <div>Hébergeur : OVH (2 rue Kellerman 59100 Roubaix)</div>
              </div>
            </div>
            <div>
            <div className='titre'>POLITIQUE DE CONFIDENTIALITE</div>
            <div className='texte'>
              <div>L'entreprise JUMEL CONSULTING s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</div>
              <div>Les données personnelles recueillis ont pour finalité le traitement de votre demande d'information formulée sur le site.</div>
              <div>En application de la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données qui vous concernent.</div>
              <div>
                <div>Vous pouvez exercer ce droit de plusieurs façon :</div>
                <ul>
                  <li>En envoyant un courriel à julien.rivat@jumel-consulting.com</li>
                  <li>En envoyant un courrier à Jumel Consulting 91 bld Soult 75012 Paris</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales;