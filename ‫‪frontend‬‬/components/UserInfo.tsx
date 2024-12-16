import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from "@/components/ui/avatar"
import { IProfile } from '@/types/profile'

const UserInfo = ({ data }: { data: IProfile }) => {
    return (
        <Flex direction="column" align="center" p={4} borderRadius="md">
            <Box width={'200px'} height={'200px'}>
                <Avatar size="full"  src={data.avatar_url} mb={4} />
            </Box>
            <Text fontSize="xl" fontWeight="bold">
                {data.name}
            </Text>
            <Text fontSize="md" >
                @{data.login}
            </Text>
            <Text fontSize="sm" fontWeight="light" maxWidth={'250px'} >
                {data.bio}
            </Text>
            <Text fontSize="md" fontWeight="light">
                {data.blog}
            </Text>
            <Text mt={2} >
                📍 {data.location}
            </Text>
            <Flex mt={4} gap={4}>
                <Text>{data.followers} Followers</Text>
            </Flex>
        </Flex>
    )
}

export default UserInfo