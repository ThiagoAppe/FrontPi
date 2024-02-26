import React, { useState } from 'react';
import Logo_Leon_Navbar from '../assets/Leon_JPH.png'

const Footer = () => {

    return (
        <>
            <footer className='flex justify-between mt-auto'>
                <div className='ml-4 p-2 flex items-center'>
                    <span className='mr-4'>&copy; 2024 JPH LIONS</span>
                    <img
                        className="w-auto h-8"
                        src={Logo_Leon_Navbar}
                        alt="Imagen del Leon JPH"
                    />
                </div>
                <div className='mr-4 flex items-center'>
                    <span className='p-2'>Designed By Laboratorio de Desarollo</span>
                </div>
            </footer>
        </>)

}

export default Footer;