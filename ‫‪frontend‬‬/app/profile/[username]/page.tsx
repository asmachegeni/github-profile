import React from 'react'
import octokit from "@/app/utils/octokit";
import Custom404 from '@/app/components/Custom404';
import Repository from '@/app/components/Repository';

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
    }: {
        params: Promise<{ username: string }>
    }
) => {
    const username = (await params).username
    const user = await fetchData(username)
    if (user) {
        return (
            <div>
                {user.data.name}
                <Repository username={username} />
            </div>
        )
    }
    return (
        <Custom404 username={username} />
    )
}
export default page