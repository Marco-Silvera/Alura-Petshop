import React from 'react'
import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

function Page404() {
    return (
        <main className='container404'>
            <img className='dog-image' src={image} alt="Doguito" />
            <p className='notfound-text'>Esta página no existe</p>
        </main>
    )
}

export default Page404