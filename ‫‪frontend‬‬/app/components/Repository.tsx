import React from 'react'
import octokit from "@/app/utils/octokit";
import Custom404 from '@/app/components/Custom404';

const fetchData = async (username: string) => {
    try {
        const response = await octokit.request('GET /users/{username}/repos', {
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
const Repository = async (
    { username }: {
        username: string
    }
) => {
    const repos = await fetchData(username)
    console.log(repos?.data)
    if (repos) {
        return (
            <div>
                {repos?.data.map(i => <li key={i.name}>
                    {i.name}
                </li>)}
            </div>
        )
    }
    return (
        <Custom404 username={username} />
    )
}
export default Repository