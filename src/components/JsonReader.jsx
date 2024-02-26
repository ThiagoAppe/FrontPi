import { useEffect, useState } from 'react';

const JsonReader = () => {
    const jsonFilePath = '../assets/users.json';
    const [jsonData, setJsonData] = useState(null);

    const loadJsonData = async () => {
        try {
            const response = await fetch(jsonFilePath);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    };


    useEffect(() => {
        loadJsonData();
    }, []);

    return (
        <div>
            <h2>Usuario</h2>
            {jsonData ? (
                <div>
                    <p>ID: {jsonData.id}</p>
                    <p>Nombre: {jsonData.name}</p>
                    <p>Nombre de usuario: {jsonData.username}</p>
                    <p>Email: {jsonData.email}</p>
                    <p>Dirección: {jsonData.address}</p>
                    <p>Teléfono: {jsonData.phone}</p>
                    <p>Sitio web: {jsonData.website}</p>
                    <p>Compañía: {jsonData.company}</p>
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default JsonReader;
