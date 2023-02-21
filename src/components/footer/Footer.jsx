import {
  Box,
  Text,
  Spacer,
  Flex,
  UnorderedList,
  Link,
  ListItem,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box w={{sm:"100%"}} borderTop={"2px solid #d3d3d3"} marginTop={"2rem"} marginLeft={"1rem"} marginBottom={"0.5rem"} marginRight={"1rem"}>
      <Box
        rounded={"15px"}
        color={"#7f00ff"}
        backgroundColor={"#f4f0ec"}
        marginRight={{md:"1rem"}}
        marginLeft={{md:"1rem"}}
        marginTop={"1rem"}
        marginBottom={"0.2rem"}
        p={4}
      >
        <Flex>
          <Box paddingLeft={"10%"}>
            <Link href="#" fontWeight={"semibold"}>
              Home
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link href="#" fontWeight={"semibold"}>
              About
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link href="#" fontWeight={"semibold"}>
              Services
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link href="#" fontWeight={"semibold"}>
              Team
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link href="#" fontWeight={"semibold"}>
              Contact
            </Link>
          </Box>
          <Spacer />
        </Flex>
        <Box textAlign={"center"} marginTop={"1rem"}>
          <Text fontWeight={"semibold"}>
            &copy; All Rights Reserved By Abhishek{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
