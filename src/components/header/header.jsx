import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw} from '@fortawesome/free-solid-svg-icons';
export default function header() {
  return (
    
    <div className='container-header'>
    <div className='logo'>
    <FontAwesomeIcon icon={faPaw} size="2x" color="#3B3204"/>   
    </div>
    <ul className='list-header'>
        <li className='list-items'>Menu</li>
        <li className='list-items'>Perros</li>
        <li className='list-items'>Testimonios</li>
      </ul>
    <div>
      <button className='button-header'>Log in</button>
    </div>

    </div>
    
  )
}
