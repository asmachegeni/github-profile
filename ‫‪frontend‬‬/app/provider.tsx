'use client'
import React, { ReactNode } from 'react'
import { ThemeProvider } from "next-themes"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
const Provider = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default Provider