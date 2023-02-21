import {
  Box,
  Button,
  HStack,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "../../assets/envelope-open.svg";
import { Link } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
function Header() {
  return (
    <Box
      p={4}
      rounded={"2%"}
      borderBottom={"2px solid #d3d3d3"}
      marginLeft={"1rem"}
      marginRight={"1rem"}
      justifyContent={"center"}
    >
      <Flex
        flexDirection={{ sm: "column", md: "column", lg: "row" }}
        as={"nav"}
        alignItems={{ sm: "center", md: "center" }}
        p={2}
        w={"100%"}
      >
        <HStack mb={"0.5rem"} spacing={4}>
          <Image
            maxWidth={"100%"}
            height={"2rem"}
            src={Logo}
            alt="estatery logo"
          />
          <Text paddingTop={"5px"} fontSize={"1.3rem"} fontWeight={"bold"}>
            Estatery
          </Text>
        </HStack>
        <HStack width={"auto"}>
          <Box>
            <Flex
              justifyContent={"space-around"}
              flexWrap={"wrap"}
              gap={"2"}
              alignItems={"center"}
            >
              <Link
                href="#"
                _hover={{
                  w: "5rem",
                  textDecor: "none",
                  p: "5px",
                  bgColor: "#9370db",
                  rounded: "lg",
                }}
                marginInline={{ sm: "0.8rem", md: "1rem", lg: "1.5rem" }}
              >
                <Text
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight={"semibold"}
                >
                  Rent
                </Text>
              </Link>
              <Link
                href="#"
                _hover={{
                  w: "5rem",
                  textDecor: "none",
                  p: "5px",
                  bgColor: "#9370db",
                  rounded: "lg",
                }}
                marginInline={{ sm: "0.8rem", md: "1rem", lg: "1.5rem" }}
              >
                <Text
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight={"semibold"}
                >
                  Buy
                </Text>
              </Link>
              <Link
                href="#"
                _hover={{
                  w: "5rem",
                  textDecor: "none",
                  p: "5px",
                  bgColor: "#9370db",
                  rounded: "lg",
                }}
                marginInline={{ sm: "0.8rem", md: "1rem", lg: "1.5rem" }}
              >
                <Text
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight={"semibold"}
                >
                  Sell
                </Text>
              </Link>
              <HStack spacing={{ sm: "1", md: "5", lg: "12" }}>
                <Menu marginInline={{ sm: "0.8rem", md: "1rem", lg: "1.5rem" }}>
                  <MenuButton
                    marginLeft={"1rem"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    <Text fontSize="1.2rem" fontWeight={"semibold"}>
                      Manage Property
                    </Text>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Buy
                      </Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Rent
                      </Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Sell
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Menu marginInline={{ sm: "0.8rem", md: "1rem", lg: "1.5rem" }}>
                  <MenuButton
                    marginLeft={"1rem"}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    <Text fontSize="1.2rem" fontWeight={"semibold"}>
                      Resources
                    </Text>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Zillow
                      </Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Redfin
                      </Text>
                    </MenuItem>
                    <MenuItem>
                      <Text fontSize="1.2rem" fontWeight={"medium"}>
                        Realtor
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Flex>
          </Box>
        </HStack>
        <Spacer />
        <HStack spacing={"2"} mt={{ sm: "1rem", md: "1rem", lg: "0rem" }}>
          <Button color={"#7f00ff"}> Login </Button>
          <Button _hover={{}} bg="#7f00ff" color={"white"}>
            Sign up
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
