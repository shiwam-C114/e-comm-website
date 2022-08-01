import { Box, Flex, Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, useColorMode, Center, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/productsSlice";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useSelector(selectProducts)

  function findCategory() {
    let category = {}
    for (let i = 0; i < products.length; i++) {
      if (category[products[i].genre]) {
        category[products[i].genre]++
      }
      else{
        category[products[i].genre] = 1
      }
      
    }
    let categoryArr = []
    for (const key in category) {
     categoryArr.push(key)
    }

    return categoryArr
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.200", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box onClick={onOpen}>
            <HamburgerIcon />

          </Box>
          
          <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                <Flex justifyContent={"space-between"}>
                Category
                <CloseIcon onClick={onClose} />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                {
                  findCategory().map(cat=>(
                    <Button colorScheme={"gray"} color="black" margin={"10px 0"} width={"full"}>{cat}</Button>
                  ))
                }
              
                
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>

              <Menu>
                <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                  <Avatar size={"sm"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"https://avatars.dicebear.com/api/male/username.svg"} />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

// export function Drawer() {

//   return (
//     <>

//       <Button colorScheme='blue' onClick={onOpen}>
//         Open
//       </Button>
//       <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
//           <DrawerBody>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//             <p>Some contents...</p>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   )
// }
