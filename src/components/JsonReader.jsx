import { useEffect, useState } from 'react';



const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json';

const JsonReader = ({ data }) => {
    if (Array.isArray(data)) {
        return (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <JsonReader data={item} />
                    </li>
                ))}
            </ul>
        );
    } else if (typeof data === 'object' && data !== null) {
        return (
            <ul className='border-4 border-principal p-6 text-2xl font-mono'>
                {Object.entries(data).map(([key, value], index) => (
                    <li key={index} className='flex-row'>
                        <details>
                            <summary>
                                <strong>{key}:</strong>
                            </summary>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <JsonReader data={value} />
                            </div>
                        </details>
                    </li>
                ))}
            </ul>
        );
    } else {
        return <span>{JSON.stringify(data)}</span>;
    }
};





//Me devuelve  el JSON de la url que le paso como parametro y lo devuelvo como prop utilizando JsonReader
const JsonReaderWrapper = () => {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint).then((res) => res.json());
            setJsonData(data);
            console.log(data)
        })();
    }, []);

    return <JsonReader data={jsonData} />;
};

export default JsonReaderWrapper;