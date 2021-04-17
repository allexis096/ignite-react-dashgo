import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Allexis Figueiredo</Text>
          <Text color="gray.300" fontSize="small">
            allex@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Allexis Figueiredo"
        src="https://github.com/allexis096.png"
      />
    </Flex>
  );
}