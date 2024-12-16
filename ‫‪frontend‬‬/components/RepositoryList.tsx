import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from './Pagination';
import { Grid, Heading, Text } from '@chakra-ui/react';
import { fetchNumberOfRepositories, fetchRepositories } from '@/services/repository';
import RepositoryItem from './RepositoryItem';
import { IRepository } from '@/types/repository';

const RepositoryList = async ({ username, page }: { username: string, page: number }) => {
    const repos: IRepository[] = await fetchRepositories(username, page);
    const totalCount = await fetchNumberOfRepositories(username)
    return (
        <Flex flex={3} direction={'column'}>
            {repos.length > 0 ? (
                <>
                    <Box p={4}>
                        <Heading as="h3" size="lg" mb={4}>
                            Repositories
                        </Heading>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                            gap={4}
                            p={4}
                        >
                            {repos.map((repo: IRepository, index: number) => (
                                <RepositoryItem key={index} item={repo} />
                            ))}
                        </Grid>
                    </Box>
                    <Pagination username={username} total={totalCount} />
                </>
            ) : (
                <Text alignSelf={'center'}>There is no repository</Text>
            )}
        </Flex>
    );
};

export default RepositoryList;
