import React, { useEffect, useState } from 'react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json';

const JsonReader = ({ data }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleCategoriaClick = (key) => {
        if (categoriaSeleccionada === key) {
            setCategoriaSeleccionada(null);
        } else {
            setCategoriaSeleccionada(key);
        }
        setSidebarOpen(false);
    };

    const renderDictionary = (dictionary) => {
        return (
            <ul className='grid'>
                {Object.entries(dictionary).map(([key, value]) => (
                    <li key={key} className='grid auto-rows-max'>
                        <div className='flex space-x-4'>
                            <strong>{key}:</strong>
                            {typeof value === 'object' ? renderDictionary(value) : <span>{value}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Mobile Sidebar */}
            <div className="sm:hidden">
                {/* Botón para mostrar/ocultar la barra lateral */}
                <button
                    className={`sm:hidden bg-gray-800 text-white p-2 rounded-lg ${sidebarOpen ? 'invisible' : ''}`}
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? 'Cerrar' : 'Categorias'}
                </button>

                {/* Barra lateral */}
                <div className={`rounded-r-lg sm:hidden bg-gray-800 p-4 fixed top-20 left-0 overflow-y-auto transition duration-300  ${sidebarOpen ? '' : 'ease-out -translate-x-full'}`}>
                    <nav>
                        <button
                            className="text-center text-white mb-4 bg-principal rounded-lg text-sm p-2"
                            onClick={toggleSidebar}
                        >Cerrar</button>
                        <div className='flex flex-col'>
                            {Object.entries(data).map(([key], index) => (
                                <li key={index} className='list-none p-2'>
                                    <button
                                        className={`text-white bg-principal hover:bg-botones rounded-lg text-sm px-5 py-2.5 sm:m-2 sm:text-white sm:bg-botones sm:hover:bg-gray-700 sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 ${categoriaSeleccionada === key ? 'sm:border-b-4 sm:border-principal' : ''}`}
                                        onClick={() => handleCategoriaClick(key)}
                                    >
                                        <div className='sm:invisible'>
                                            <strong>{key}</strong>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
            {/* End Mobile Sidebar */}
            <div className='flex'>
                <ul className='sm:border-4 sm:border-principal sm:p-2 sm:text-2xl sm:font-mono sm:flex-col sm:justify-between'>
                    {Object.entries(data).map(([key], index) => (
                        <li key={index}>
                            <button
                                className={`sm:m-2 sm:text-white sm:bg-botones sm:hover:bg-gray-700 sm:rounded-lg sm:text-sm sm:px-5 sm:py-2.5 ${categoriaSeleccionada === key ? 'sm:border-b-4 sm:border-principal' : ''}`}
                                onClick={() => handleCategoriaClick(key)}
                            >
                                <div className='hidden sm:block'>
                                    <strong>{key}</strong>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='ml-4 mt-2'>
                    {categoriaSeleccionada && (
                        <div>
                            <h2><strong>Configurar {categoriaSeleccionada}:</strong></h2>
                            {renderDictionary(data[categoriaSeleccionada])}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const JsonReaderWrapper = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint).then((res) => res.json());
            setJsonData(data);
            console.log(data);
        })();
    }, []);

    return <JsonReader data={jsonData} />;
};

export default JsonReaderWrapper;
