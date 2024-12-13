import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from "@/components/ui/avatar"

const UserInfo = ({ data }: { data: any }) => {
    return (
        <Flex width={'100%'} paddingTop={'8'} paddingBottom={'2'} gap={'4'} alignItems={'center'} direction={'column'}>
            <Flex gap={'16'} justifyContent={'space-between'}>
                <Avatar name="avatar" src={data.avatar_url} size="2xl" />
                <Box>
                    <Flex direction={'column'}>
                        <Flex width={'full'} justifyContent={'space-evenly'} alignItems={'center'} gap={4}>
                            <Text fontWeight={'bold'}>{data.name ? data.name : '---'} </Text><Text fontSize={'small'}>{`(${data.username})`}</Text>
                        </Flex>
                        <Box>
                            <Text>{data.bio}</Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Box>
                    <Flex gap={'8'}>
                        <Flex direction={'column'}>
                            <Text>Followers</Text>
                            <Text fontWeight={"bold"}>{data.followers}</Text>
                        </Flex>

                        <Flex direction={'column'}>
                            <Text>Location</Text>
                            <Text fontWeight={"bold"}>{data.location ?? '__'}</Text>
                        </Flex>
                        <Flex direction={'column'}>
                            <Text>Blog</Text>
                            <Text fontWeight={"bold"}>{data.blog ? data.blog : '__'}</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default UserInfo