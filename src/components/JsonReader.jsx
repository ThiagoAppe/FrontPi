import { useEffect, useState } from 'react'

const endpoint = 'https://jsonplaceholder.typicode.com/users'

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint)
                .then(res => res.json())

            setUsers(data)
        })()
    }, [])

    return (null)
}

export default App