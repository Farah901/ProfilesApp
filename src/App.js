// import logo from './logo.svg';
// import Message from './Components/Message';
// import Action from './Components/Action';
// import TexteColoree from './Components/TexteColoree';
// import CarteImage from './Components/CarteImage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListeProfils from './Components/ListeProfils';
import FormulaireProfil from './Components/FormulaireProfil';
import { useState } from 'react';
function App() {

  const [profils, setProfil]= useState([
    {
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Bob',
      age: 30,
      profession: 'Designer',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Jack',
      age: 22,
      profession: 'Artist',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Anouar',
      age: 50,
      profession: 'barista',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  }
  ])

  const AjouterProfil=(profil)=>{
    const newProfil=[...profils, profil];
    setProfil(newProfil);
  }

  const supprProfil = (index) => {
    const newProfil = profils.filter((_, i) => i !== index);
    setProfil(newProfil);
    };
  return (
    <>
      {/* <Message text={'Le premier Message ici!'}/>
      <Message text={'Le deusieme Message ici!'}/>
      <button className='btn btn-success' onClick={Action}>Cliquez-Moi</button>
      <TexteColoree colour='green' taille='2em' text='Hello this text is green and big' />
      <TexteColoree colour='red' taille='1em' text='Hello this text is red and small' />
      <div className='d-flex'>
      <CarteImage img="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg" titre='Card 1' description='Description Card 1'/>
      <CarteImage img="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg" titre='Card 2' description='Description Card 2'/>
      <CarteImage img="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg" titre='Card 3' description='Description Card 3'/>
      <CarteImage img="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg" titre='Card 3' description='Description Card 3'/>
      </div> */}

      <h1 className='text-center'>Ajouter Profil</h1>
      <FormulaireProfil AjouterProfil={AjouterProfil}/>
      <hr />
      <h1 className="text-center mt-4">Liste des Profils</h1>
      <ListeProfils profils={profils} supprProfil={supprProfil}/>
    </>
  );
}

export default App;
