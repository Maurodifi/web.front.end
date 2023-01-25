import React from 'react'
import { Text, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter} from '@chakra-ui/react'
import './content.css'
export default function content() {
  return (
    <div className='container-content'>
        <div className='container-textImg'>
          <div className='title-img'>
            <h3>Amamos a los perros</h3>
            <p>Asi como cada uno ama a las personas nosotros le damos el mismo amor a los animales</p>
            <p>Es por eso que nos embarcamos en la busqueda de perros en situacion de abandono y darle la oportunidad de darles una nueva vida</p>
          </div>
          <img src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Foto_perro" className='img-content'/>
        </div>
        <h3>Testimonios</h3>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    <Card>
    <CardHeader>
      <Heading size='md'> Almendra</Heading>
    </CardHeader>
    <CardBody>
      <img src="https://images.pexels.com/photos/5951991/pexels-photo-5951991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="perra-almendra" />
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
</SimpleGrid>
    </div>
  )
}
