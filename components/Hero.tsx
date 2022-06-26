// Modules
import React from 'react'

// Components
import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Image,
    Button,
} from '@chakra-ui/react'

export default function Hero() {
    // TODO: need to add hero gradient background colors , suggested to add on parent components
    return (
        <Flex minH={"100vh"} mb={15} pt={15} flexDirection={"column"}>
            <HStack justifyContent="space-between" pt={32}>
                <VStack width="lg" spacing={4} align="start" >
                    <Text fontSize={32}>
                        Komunitas Game Dev Godot
                        <Text fontWeight={"bold"}>
                            #1 di Indonesia.
                        </Text>
                    </Text>
                    <Text fontWeight="thin">
                        Gabung bersama lebih dari 200 godotters Indonesia di komunitas GodotID. Ikuti banyak event menarik seperti Game Jam dan webinar yang diselenggarakan oleh komunitas!
                    </Text>
                    <Button colorScheme={"orange"} width="xs">
                        Join Us
                    </Button>
                </VStack>
                <VStack>
                    <Box width={{ base: "lg", md: "sm" }} bg="black" boxShadow={"2xl"} rounded="md" overflow="hidden" position="relative">
                        <Image src="assets/games/lost_and_blind.png" />
                        <Box position="absolute" letterSpacing="4" bottom={0} p="3" w="full" bg="blackAlpha.800" color={"white"}>
                            <VStack spacing={2} align="start">
                                <Text fontSize={18} fontWeight={"semibold"}>Lost and Blind</Text>
                                <Text fontSize={12} color="whiteAlpha.800">by MFauzan and Kard Kardus</Text>
                            </VStack>
                        </Box>
                    </Box>
                </VStack>

            </HStack>
        </Flex>
    );
}
