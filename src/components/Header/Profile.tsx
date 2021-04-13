import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Allexis Figueiredo</Text>
        <Text color="gray.300" fontSize="small">
          allex@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Allexis Figueiredo"
        src="https://github.com/allexis096.png"
      />
    </Flex>
  );
}