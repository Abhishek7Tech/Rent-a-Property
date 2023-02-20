import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Flex,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
function SearchBar(props) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [property, setProperty] = useState("");

  const properties = property || "Properties";
  const defaultPrice = price || "$1000-$5000";

  const locationHandler = (e) => {
    e.preventDefault();
    const location = e.target.value;
    setLocation(location);
  };

  const dateHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const date = e.target.value;
    setDate(date);
  };

  const priceHandler = (e) => {
    e.preventDefault();
    const price = e.target.innerHTML;
    setPrice(price);
  };

  const propertyHandler = (e) => {
    e.preventDefault();
    const propertyType = e.target.innerHTML;
    setProperty(propertyType);
  };
  const searchButtonHandler = (e) => {
    e.preventDefault();
    const searchProperties = [
      {
        location,
        date,
        price: price || defaultPrice,
        property,
      },
    ];

    if (property === "") {
      alert("Select a property type ✔");
      return;
    }

    if (!location && !date && !price && !property) {
      alert("Invalid Search Request!😒😒");
    } else {
      props.setFilters(searchProperties);
    }

    console.log("CLICKED");
  };
  return (
    <Box
      w={"80%"}
      position={"relative"}
      zIndex={"200"}
      marginTop={"2rem"}
      rounded={"2%"}
      border={"2px solid #d3d3d3"}
      padding={"1rem"}
      marginLeft={"10%"}
      marginRight={"10%"}
    >
      <Flex flexWrap={"wrap"}  justifyContent={"space-between"}>
        <Box w={"15rem"} paddingLeft={"10px"}>
          <FormLabel paddingLeft={"4px"} color={"#a9a9a9"}>
            Location
          </FormLabel>
          <Input
            onChange={locationHandler}
            fontSize={"1.3rem"}
            fontWeight={"semibold"}
            type={"text"}
            placeholder={"New York, USA"}
          />
        </Box>
        <Box opacity={"0.6"} borderRight={"2px solid #a9a9a9"}></Box>
        <Box w={"max-content"} paddingLeft={"10px"}>
          <FormLabel paddingLeft={"4px"} color={"#a9a9a9 "}>
            When
          </FormLabel>
          <Input
            cursor={"pointer"}
            fontSize={"1.3rem"}
            fontWeight={"semibold"}
            type={"date"}
            onChange={dateHandler}
          />
        </Box>
        <Box opacity={"0.6"} borderRight={"2px solid #a9a9a9"}></Box>
        <Box paddingLeft={"10px"}>
          <FormLabel paddingLeft={"4px"} color={"#a9a9a9"}>
            Price
          </FormLabel>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Text fontSize={"1.3rem"} fontWeight={"semibold"}>
                {defaultPrice}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={priceHandler}> $1000-$2000 </MenuItem>
              <MenuItem onClick={priceHandler}> $2000-$3000 </MenuItem>
              <MenuItem onClick={priceHandler}> $3000-$4000 </MenuItem>
              <MenuItem onClick={priceHandler}> $4000-$5000 </MenuItem>
              <MenuItem onClick={priceHandler}> $5000-$6000 </MenuItem>
              <MenuItem onClick={priceHandler}> $6000-$7000 </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box opacity={"0.6"} borderRight={"2px solid #a9a9a9"}></Box>
        <Box paddingLeft={"10px"}>
          <FormLabel paddingLeft={"4px"} color={"#a9a9a9 "}>
            {" "}
            Property Type{" "}
          </FormLabel>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Text fontSize={"1.3rem"} fontWeight={"semibold"}>
                {properties}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={propertyHandler}> House</MenuItem>
              <MenuItem onClick={propertyHandler}> Bungalow </MenuItem>
              <MenuItem onClick={propertyHandler}> Penthouse </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Button
          _hover={""}
          type="submit"
          onClick={searchButtonHandler}
          bg={"#7f00ff"}
          color={"white"}
          p="1.6rem"
          marginTop={"10px"}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
