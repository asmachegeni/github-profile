import { HStack, Stack } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <Stack gap="6" maxW="2xl" margin={'auto'} paddingTop={'24'}>
            <HStack width="full" paddingBottom={'12'}>
                <SkeletonCircle size="16" />
                <SkeletonText noOfLines={2} />
            </HStack>
            <HStack gap={'12'}>
                <Skeleton height="400px" width={'50%'} />
                <Skeleton height="400px" width={'50%'} />
            </HStack>


        </Stack>
    )
}
export default Loading