import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useState } from "react";
function Search(props) {
  const [input,setInput] = useState("");

 const inputHandler = (e) =>{
 e.preventDefault();
 const search = e.target.value;
 console.log("NAME IN SEARCH", search);
  setInput(search);
}
props.setSearch(input);

  return (
    <Box
      w={"80%"}
      rounded={"2%"}
      border={"2px solid #d3d3d3"}
      padding={"1rem"}
      marginTop={"2rem"}
      marginLeft={"10%"}
      marginRight={"10%"}
    >
      <Flex  flexWrap={"wrap"} justifyContent={"center"} >
        <Box width={{"breakpoints.xsm":"100%",sm:"100%",md:"auto"}} textAlign={"center"}>
          <Text  fontSize={{sm:"1.5rem", md:"1.8rem", lg:"2.5rem"}} fontWeight={"semibold"}>
            Search properties to rent
          </Text>
        </Box>
        <Spacer />
        <Box paddingTop={"10px"}>
          <Flex >
            <Box>
              <Input onChange={inputHandler} fontSize={{sm:"1rem",md:"auto"}}  height={{md:"2rem"}} placeholder="Search with Search Bar" pos={"relative"} />
            </Box>
            <Box paddingTop={{sm:"0.3rem",md:"0.5rem",lg:"0.7rem"}}>
              <ChevronDownIcon
                pos={"absolute"}
                cursor={"pointer"}
                right={{base:"30%",sm:"35%",md:"14%",lg:"12%"}}
                zIndex={"1"}
                
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Search;
