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

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name (Username)</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name} ({user.username})</td>
            <td>
              <a href={`mailto:${user.email}`}>
                {user.email}
              </a>
            </td>
            <td>{user.phone}</td>
            <td>
              <a href={`https://${user.website}`} target="_blank">
                {user.website}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App