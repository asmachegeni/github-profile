'use client'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { redirect } from 'next/navigation'
import { Field } from "@/components/ui/field"
import { useForm } from "react-hook-form"
import { ColorModeToggle } from './ColorModeToggle'

interface FormValues {
    username: string
}

const SearchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({
        mode: 'onChange',
    })

    return (
        <>
            <Box marginBottom={1} alignSelf={'center'}>
                <ColorModeToggle />
            </Box>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'8'}>
                <Box>
                    <Field invalid={!!errors.username}>
                        <Input
                            placeholder="Enter username"
                            variant={'subtle'}
                            size={'lg'}
                            width={'340px'}
                            {...register("username", {
                                required: "Username is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38}[a-zA-Z0-9])?$/,
                                    message: "Username is invalid",
                                },
                            })}
                        />
                        {errors.username && (
                            <Text color="red.500" mt="2" fontSize="sm">
                                {errors.username.message}
                            </Text>
                        )}
                    </Field>
                </Box>
                <Box>
                    <Button variant={'solid'} colorPalette={{ base: 'teal' }} size={'lg'} width={'340px'} disabled={!isValid} onClick={handleSubmit((data) => redirect(`/profile/${data.username}`))} >
                        Search User
                    </Button>
                </Box>
            </Flex>
        </>
    )
}

export default SearchForm
