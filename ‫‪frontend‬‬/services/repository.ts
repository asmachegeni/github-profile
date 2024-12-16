import octokit from "@/libs/utils";

export const fetchRepositories = async (username: string, page: any) => {
    try {
        const { data } = await octokit.request(
            'GET /users/{username}/repos?per_page=6&sort=updated&page={page}',
            {
                username,
                page

            }
        );
        return data
    } catch (error: any) {
        if (error.status === 404) {
            return null;
        }
        throw error;
    }
};
export const fetchNumberOfRepositories = async (username: string) => {
    try {
        const { data } = await octokit.request(
            'GET /users/{username}/repos',
            {
                username,
            }
        );
        return data.length;
    } catch (error: any) {
        if (error.status === 404) {
            return null;
        }
        throw error;
    }
}