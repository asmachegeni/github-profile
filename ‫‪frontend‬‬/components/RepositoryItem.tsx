import React from 'react'
import { Badge, Box, Flex, Text } from '@chakra-ui/react';
import { IRepository } from '@/types/repository';

const RepositoryItem = ({ item }: { item: IRepository }) => {
    return (
        <Box p={4} borderRadius="md" shadow="md">
            <Text fontWeight="bold" mb={2}>
                {item.name}
            </Text>
            <Flex justify="space-between" align="center">
                <Badge bg={item.language === "TypeScript" ? "blue.400" : "purple"} color={'black'}>
                    {item.language}
                </Badge>
                <Text>⭐ {item.stargazers_count}</Text>
            </Flex>
            <Text fontSize="sm" mt={2} color="gray.400">
                {item.visibility}
            </Text>
        </Box>
    )
}

export default RepositoryItem