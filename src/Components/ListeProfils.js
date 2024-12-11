import React from 'react'
import CarteProfil from './CarteProfil';

export default function ListeProfils({profils, supprProfil}) {
    // const profils = [
    //     {
    //         nom: 'Alice',
    //         age: 25,
    //         profession: 'Développeuse',
    //         image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
    //     },
    //     {
    //         nom: 'Bob',
    //         age: 30,
    //         profession: 'Designer',
    //         image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
    //     },
    //     {
    //         nom: 'Jack',
    //         age: 22,
    //         profession: 'Artist',
    //         image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
    //     },
    //     {
    //         nom: 'Anouar',
    //         age: 50,
    //         profession: 'barista',
    //         image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
    //     }
    //     ];
  return (
    <div>
        {profils.map((profil, index) => (
        <div key={index} style={{'margin':'10px'}}>
        <CarteProfil
        nom={profil.nom}
        age={profil.age}
        profession={profil.profession}
        image={profil.image}
        className='card' />
        <div className='w-100'>
          <button onClick={() =>
          supprProfil(index)}  className='btn btn-danger' style={{'marginLeft':'46%'}}>Supprimer</button>
        </div>
        </div>
        ))}
    </div>
  )
}
