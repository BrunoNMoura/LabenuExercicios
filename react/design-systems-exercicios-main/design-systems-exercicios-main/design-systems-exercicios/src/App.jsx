import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card'

function App() {
  
const users = [
  {
    id:1,
    name:'Bruno Moura',
    profession: 'Frontend Developer'
  },
  {
    id:2,
    name:'Danielle Moura',
    profession: 'Cradit Analist'    
  },
  {
    id:3,
    name:'Heitor Moura',
    profession: 'Student'
  }
]

  return (
    <ChakraProvider>
      {users.map((user)=>{
        return(
          <Card
          key={user.id}
          name={user.name}
          profession={user.profession}
          />
        )
      })}
      
    </ChakraProvider>
  )
}

export default App
