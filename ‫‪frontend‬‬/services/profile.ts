import octokit from "@/libs/utils";
import { IProfile } from "@/types/profile";

export const fetchProfile = async (username: string):Promise<IProfile|null> => {
    try {
        const { data } = await octokit.request('GET /users/{username}', {
            username,
        });
        return {
            login: data.login,
            avatar_url: data.avatar_url,
            name: data.name,
            bio: data.bio,
            followers: data.followers,
            location: data.location,
            blog: data.blog
        }

    } catch (error: any) {
        if (error.status === 404) {
            return null
        }
        throw error;
    }
};