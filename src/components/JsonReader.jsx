import React, { useEffect, useState } from 'react';

const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json';

const JsonReader = ({ data }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleCategoriaClick = (key) => {
        if (categoriaSeleccionada === key) {
            setCategoriaSeleccionada(null);
        } else {
            setCategoriaSeleccionada(key);
        }
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

    return (
        <div>
            <ul className='border-4 border-principal p-2 text-2xl font-mono flex justify-between'>
                {Object.entries(data).map(([key], index) => (
                    <li key={index}>
                        <button
                            className={`text-white bg-botones hover:bg-gray-700 rounded-lg text-sm px-5 py-2.5 ${categoriaSeleccionada === key ? 'border-b-4 border-principal' : ''}`}
                            onClick={() => handleCategoriaClick(key)}
                        >
                            <strong>{key}</strong>
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
