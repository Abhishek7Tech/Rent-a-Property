import {
  background,
  Box,
  Button,
  Container,
  MenuButton,
  MenuItem,
  MenuList,
  textDecoration,
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
    <Box p={4} rounded={"2%"} borderBottom={"2px solid #d3d3d3"} marginLeft={"1rem"} marginRight={"1rem"} >
      <Flex p={2} w={"100%"}>
        <Image
          maxWidth={"100%"}
          height={"2rem"}
          src={Logo}
          alt="estatery logo"
        />
        <Text paddingTop={"5px"} marginLeft={"1%"} fontSize={"1.3rem"} fontWeight={"bold"}>
          Estatery
        </Text>
        <Flex  width={"50rem"}>
          <Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
              <Link href="#"  _hover={{w:"5rem",textDecor:"none",p:"5px", bgColor:"#9370db",rounded:"lg"}}   marginInline={"1.5rem"}>
                <Text  textAlign="center" fontSize="1.3rem" fontWeight={"semibold"}>
                  Rent
                </Text>
              </Link>
              <Link href="#" _hover={{w:"5rem",textDecor:"none",p:"5px", bgColor:"#9370db",rounded:"lg"}} marginInline={"1.5rem"}>
                <Text  textAlign="center" fontSize="1.3rem" fontWeight={"semibold"}>
                  Buy
                </Text>
              </Link>
              <Link href="#" _hover={{w:"5rem",textDecor:"none",p:"5px", bgColor:"#9370db",rounded:"lg"}} marginInline={"1.5rem"}>
                <Text textAlign="center"  fontSize="1.3rem" fontWeight={"semibold"}>
                  Sell
                </Text>
              </Link>

              <Menu>
                <MenuButton marginLeft={"1rem"} as={Button} rightIcon={<ChevronDownIcon />}>
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
            
              <Menu>
                <MenuButton marginLeft={"1rem"} as={Button} rightIcon={<ChevronDownIcon />}>
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
            </Flex>
          </Box>
        </Flex>
        <Spacer />
        <Box>
          <Button color={"#7f00ff"}> Login </Button>
          <Button marginLeft={"1rem"} _hover={{}} bg="#7f00ff" color={"white"}>
            Sign up
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
