import React from 'react';
import {
    Box,
} from '@chakra-ui/react';
import octokit from '@/utils/octokit';
import Custom404 from '@/components/Custom404';
import Pagination from './Pagination';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const fetchData = async (username: string, page: any) => {
    try {
        const response = await octokit.request(
            'GET /users/{username}/repos?per_page=6&sort=updated&page={page}',
            {
                username,
                page

            }
        );
        return response
    } catch (error: any) {
        if (error.status === 404) {
            return null;
        }
        throw error;
    }
};
const getTotalCount = async (username: string) => {
    try {
        const response = await octokit.request(
            'GET /users/{username}/repos',
            {
                username,
            }
        );
        return response;
    } catch (error: any) {
        if (error.status === 404) {
            return null;
        }
        throw error;
    }
}
const Repository = async ({ username, page }: { username: string, page: any }) => {
    const response = await fetchData(username, page);
    const repos = response?.data || [];

    const result = await getTotalCount(username)
    const totalCount = result?.data.length;
    return (
        <Box >
            {repos.length > 0 ? (
                <>
                    <Box p={4}>
                        <Heading as="h3" size="lg" mb={4}>
                            Repositories
                        </Heading>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            {repos.map((item: any) => (
                                <GridItem key={item.id} p={2} borderWidth="1px" borderRadius="md" boxShadow="sm">
                                    <Heading as="h4" size="md" mb={2}>
                                        {item.name}
                                    </Heading>
                                    <Text>{item.description || 'No description available'}</Text>
                                    <Text mt={2} color="gray.600">
                                        Updated: {new Date(item.updated_at).toLocaleDateString()}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                    <Pagination username={username} total={totalCount} />
                </>
            ) : (
                <Text>There is no repository</Text>
            )}
        </Box>
    );
};

export default Repository;
