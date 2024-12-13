import React from 'react'
import octokit from "@/utils/octokit";
import Custom404 from '@/components/Custom404';
import Repository from '@/components/Repository';
import UserInfo from '@/components/UserInfo';
import { Flex } from '@chakra-ui/react';

const fetchData = async (username: string) => {
    try {
        const response = await octokit.request('GET /users/{username}', {
            username,
        });
        return response;
    } catch (error: any) {
        if (error.status === 404) {
            return null
        }
        throw error;
    }
};
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
    const user = await fetchData(username)
    const page = parseInt(searchParams.page || '1', 10);
    if (user) {
        return (
            <Flex direction={'column'} alignItems={'center'} width={'100%'}>
                <UserInfo data={{ ...user.data, username }} />
                <Repository username={username} page={page} />
            </Flex>
        )
    }
    return (
        <Custom404 message={`${username} not found!!!`} />
    )
}
export default page