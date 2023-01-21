import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import './content.css'
export default function content() {
  return (
    <div className='container-content'>
        <Text
            bgGradient='linear(to-l, #3B3204, #3B3204)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold' textAlign={"center"}
            >
            ¿Quienes somos?
        </Text>

    </div>
  )
}
