import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Text } from '@chakra-ui/react'
const Custom404 = ({ message }: { message: string }) => {
    return (

        <Flex direction={'column'} justifyContent={'center'} width={'100%'} alignItems={'center'} height={'100vh'} >
            <Box>
                <Text fontSize={'4xl'}>{message}</Text>

            </Box>
            <Box>
                <Image alt="404 error" src={'/404.svg'} width={'350'} height={'350'} />
            </Box>
        </Flex>
    )
}

export default Custom404