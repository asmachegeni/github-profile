import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: process.env.ACCESS_KEY,
});
export default octokit;