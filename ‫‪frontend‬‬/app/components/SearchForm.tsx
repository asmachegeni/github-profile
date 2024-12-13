'use client'
import { Button, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import Image from 'next/image'
import { redirect } from 'next/navigation'


const SearchForm = () => {
    const [value, setValue] = useState<string>()
    return (
        <Stack direction={'column'} >
            <Input placeholder='search usename' value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
            <Button variant={'solid'} colorPalette={'teal'} size={'lg'} onClick={() => redirect(`/profile/${value}`)}>
                Search User
                <BsSearch />
            </Button>
            <Image src={'/search.svg'} alt='search picture' width={'300'} height={'200'} />
        </Stack>

    )
}

export default SearchForm