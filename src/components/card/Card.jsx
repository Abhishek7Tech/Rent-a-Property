/* eslint-disable no-unused-expressions */
import {
  Box,
  Card,
  Text,
  CardBody,
  Badge,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import PROPERTY_DATA from "../../property-data";
import HeartFill from "../../assets/heart-fill.svg";
import HeartEmpty from "../../assets/heart.svg";
import BathRoom from "../../assets/bathtub-2.svg";
import Bed from "../../assets/bed-double.svg";
import House from "../../assets/house.svg";

import { useCallback, useEffect, useState } from "react";
function PropertyCard(props) {
  let Data = PROPERTY_DATA;
  const searchBarInput = props.search;
  const searchFilters = props.filter;

  let [data, setData] = useState(Data);

  const dataHandler = (e) => {
    console.log(e.target.id);
    let property = data.filter((property) => property.id === +e.target.id);
    property[0].isLiked = !property[0].isLiked;
    const filteredData = data.filter((property) => property.id !== +e.target.id);
    const updatedData = [...filteredData,property[0]];
   const sorted = updatedData.sort((a,b) => a.id - b.id);
    setData(sorted);
   

  };

  if (searchBarInput) {
    const input = searchBarInput.trim().toLowerCase();
    const searchBarData = Data.filter(
      (data) =>
        data.address.toLowerCase().trim().includes(input) ||
        data.location.toLowerCase().trim().includes(input) ||
        data.name.toLowerCase().trim().includes(input)
    );
    data = searchBarData;
  }

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);
  if (searchFilters.length) {
    const location = searchFilters[0].location.trim().toLowerCase();
    const date = searchFilters[0].date.trim() || new Date();
    const price = searchFilters[0].price.split("-");
    const lowerPrice = price[0].trim().slice(1, price[0].length);
    const upperPrice = price[1].trim().slice(1, price[1].length);

    const property = searchFilters[0].property.trim().toLowerCase();
    const searchFiltersData = Data.filter((data) => {
      const rentalPrice = data.rentalPrice
        .trim()
        .slice(1, data.rentalPrice.length);
      const first = rentalPrice.slice(0, 1);
      const second = rentalPrice.slice(2, rentalPrice.length);
      const priceInt = first + second;
      return (
        data.propertyType.trim() === property &&
        data.location.trim().toLowerCase().includes(location) &&
        new Date(data.availableFrom) > new Date(date) &&
        +upperPrice > +priceInt &&
        +lowerPrice <= +priceInt
      );
    });

    console.log("POOO", searchFiltersData);
    console.log("HOOO", location, date, upperPrice, lowerPrice, property);
    data = searchFiltersData;
    console.log("DATA", data);
  }

  return (
    <Box
      w={"81%"}
      padding={"0.5rem"}
      rounded={"1%"}
      border={"2px solid #d3d3d3"}
      marginTop={"2rem"}
      marginLeft={"10%"}
      marginRight={"10%"}
    >
      <Flex flexWrap={"wrap"} justifyContent="center" alignContent={"center"}>
        {data.length > 1 ? (
          data.sort().map((property) => {
            return (
              <Flex>
                <Box margin={"0.5rem"} id={property.id}>
                  <Box rounded={"5%"}>
                    <Card maxW="sm">
                      <CardBody p={"0%"}>
                        <Image
                          zIndex={1}
                          height={"18rem"}
                          position={"relative"}
                          src={property.imageUrl}
                        />
                        {property.popular ? (
                          <Box>
                            <Badge
                              fontSize={"1rem"}
                              height={"1.5rem"}
                              textAlign={"center"}
                              variant="solid"
                              colorScheme="purple"
                              zIndex={1}
                              position={"absolute"}
                              top={"52%"}
                            >
                              Popular
                            </Badge>
                          </Box>
                        ) : (
                          ""
                        )}
                      </CardBody>

                      <Box marginTop={"1rem"}>
                        <Flex>
                          <Text
                            color={"#7f00ff"}
                            fontWeight={"semibold"}
                            fontSize={"1.8rem"}
                            marginLeft={"1rem"}
                          >
                            {property.rentalPrice}
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            opacity={"0.8"}
                            marginTop={"0.5rem"}
                          >
                            /month
                          </Text>
                          <Spacer />
                          <Flex
                            marginRight={"20px"}
                            marginTop={"0.5rem"}
                            cursor={"pointer"}
                            rounded={"50%"}
                            padding={"0.5rem"}
                            border={"1px solid #a9a9a9"}
                          >
                            {
                              <Image
                                id={property.id}
                                onClick={dataHandler}
                                src={property.isLiked ? HeartFill : HeartEmpty}
                              />
                            }
                          </Flex>
                        </Flex>
                      </Box>
                      <Box>
                        <Text
                          fontWeight={"semibold"}
                          marginLeft={"1rem"}
                          fontSize={"1.5rem"}
                        >
                          {property.propertyName}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontWeight={"semibold"}
                          marginLeft={"1rem"}
                          color={"#a9a9a9"}
                        >
                          {property.address}
                        </Text>
                      </Box>
                      <Flex
                        marginTop={"1rem"}
                        marginBottom={"1rem"}
                        borderTop={"1px solid #a9a9a9"}
                        marginLeft={"1rem"}
                        marginRight={"1rem"}
                      >
                        <Flex marginTop={"0.5rem"}>
                          <Image src={Bed} />
                          <Box
                            color={"#a9a9a9"}
                            fontWeight={"semibold"}
                            marginLeft={"7px"}
                          >
                            {property.bedRooms}
                          </Box>
                        </Flex>
                        <Spacer />
                        <Flex marginTop={"0.5rem"}>
                          <Image src={BathRoom} />
                          <Box
                            color={"#a9a9a9"}
                            marginLeft={"7px"}
                            fontWeight={"semibold"}
                          >
                            {property.bathrooms}
                          </Box>
                        </Flex>
                        <Spacer />

                        <Flex marginTop={"0.5rem"}>
                          <Image src={House} marginRight={"6px"} />
                          <Box color={"#a9a9a9"} fontWeight={"semibold"}>
                            {property.areaSqM}
                          </Box>
                        </Flex>
                      </Flex>
                    </Card>
                  </Box>
                </Box>
              </Flex>
            );
          })
        ) : (
          <Box>
            <Text fontSize={"6xl"} fontWeight={"bold"}>
              No Property Matches your Search Criteria!{" "}
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default PropertyCard;
