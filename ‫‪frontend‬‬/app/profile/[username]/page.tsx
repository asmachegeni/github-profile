import React from 'react'
import Custom404 from '@/components/Custom404';
import RepositoryList from '@/components/RepositoryList';
import UserInfo from '@/components/UserInfo';
import { Flex } from '@chakra-ui/react';
import { fetchProfile } from '@/services/profile';
import { IProfile } from '@/types/profile';

const page = async (
    {
        params,
        searchParams
    }: {
        params: Promise<{ username: string }>,
        searchParams: any
    }

) => {
    const username = (await params).username
    const user: IProfile |null= await fetchProfile(username)
    const page = parseInt((await searchParams).page || '1', 10);
    if (user) {
        return (
            <Flex justifyContent={'center'} width={'100%'} m={'auto'} paddingTop={'16'} paddingX={'8'} direction={{ base:'column',xl:'row' }} height={'100%'}>
                <UserInfo data={user} />
                <RepositoryList username={username} page={page} />
            </Flex>
        )
    }
    return (
        <Custom404 username={username} />
    )
}
export default page