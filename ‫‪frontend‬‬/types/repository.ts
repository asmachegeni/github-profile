export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    description: string | null;
    fork: boolean;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    visibility: string;
    [key: string]: any;
}