'use client'
import React from 'react'
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination"
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const Pagination = ({ username, total }: {
    username: string,
    total: any
}) => {
    const router = useRouter()
    return (

        <PaginationRoot
            count={total}
            pageSize={6}
            defaultPage={1}
            onPageChange={(e) => {
                router.push(`/profile/${username}?page=${e.page}`);
            }}
        >
            <Flex justify="center" mt={4} gap={4}>
                <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
                <PaginationItems />
                <PaginationNextTrigger>Next</PaginationNextTrigger>
            </Flex>
        </PaginationRoot>

    )
}

export default Pagination