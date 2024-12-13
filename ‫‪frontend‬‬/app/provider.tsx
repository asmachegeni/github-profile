'use client'
import React, { ReactNode } from 'react'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
const Provider = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ChakraProvider value={defaultSystem}>
            {children}
        </ChakraProvider>
    )
}

export default Provider