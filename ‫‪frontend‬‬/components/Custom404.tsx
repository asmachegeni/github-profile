import { Box, Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Text } from '@chakra-ui/react'
import Link from 'next/link'
import { IoMdArrowRoundBack } from "react-icons/io";
const Custom404 = ({ username }: { username: string }) => {
    return (

        <Flex direction={'column'} justifyContent={'center'} width={'100%'} alignItems={'center'} height={'100vh'} >
            <Flex direction={'column'} gapY={'8'} alignItems={'center'}>
                <Text fontSize={{ base: 'xl', xl: '4xl' }}>{`"${username}" not found!`}</Text>
                <Button variant={'solid'} colorPalette={{ base: 'teal' }} size={'lg'} width={{ base: '250px', xl: '340px' }}>
                    <Link href={'/'} style={{ display: 'flex', gap: '2px', alignItems: 'center' }} ><IoMdArrowRoundBack />Back to Home </Link>
                </Button>
            </Flex>
            <Box>
                <Image alt="404 error" src={'/404.svg'} width={'350'} height={'350'} />
            </Box>
        </Flex>
    )
}

export default Custom404