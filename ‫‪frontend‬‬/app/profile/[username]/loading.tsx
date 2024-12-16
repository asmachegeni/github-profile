import { Stack } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <Stack gap="6" paddingTop={'24'} display={'flex'} direction={{ base: 'column', xl: 'row' }} width={'100%'} justifyContent={{ base: 'center', xl: 'space-between' }}>
            <Stack paddingBottom={'12'} display={'flex'} direction={'column'} justifyContent={{ base: 'center' }} alignItems={{ base: 'center' }} width={{ base: 'full', xl: '40%' }}>
                <SkeletonCircle size="48" />
                <SkeletonText noOfLines={2} />
                <SkeletonText noOfLines={2} />
            </Stack>
            <Stack gap={'12'} display={'flex'} direction={{ base: 'column', xl: 'row' }} width={{ base: 'full', xl: '55%' }} justifyContent={'center'} alignItems={{ base: 'center' }} >
                <Skeleton height="400px" width={{ base: '80%', xl: '40%' }} />
                <Skeleton height="400px" width={{ base: '80%', xl: '40%' }} />
            </Stack>
        </Stack >
    )
}
export default Loading