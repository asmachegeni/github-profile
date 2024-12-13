'use client'
import React, { ReactNode } from 'react'
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
const Provider = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider>{children}</ColorModeProvider>
        </ChakraProvider>
    )
}

export default Provider