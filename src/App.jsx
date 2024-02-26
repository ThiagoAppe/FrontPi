import { useEffect, useState } from 'react'
import './App.css'

const endpoint = 'https://raw.githubusercontent.com/ThiagoAppe/FrontPi/main/src/assets/configHBL.json'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      const data = await fetch(endpoint)
        .then(res => res.json())

      setUsers(data)
    })()
  }, [])

  return (
    <pre>{JSON.stringify(users, null, 4)}</pre>
  )
}

export default App