import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, HStack, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import { MButton, PagButton } from '../components/PageJumper'
import { selectProducts } from '../redux/productsSlice'

function Home() {
  // const [productData, setProductData] = useState([])
  const products = useSelector(selectProducts)
  // useEffect(() => {
  //   // getData()
  //   console.log(products)

  //   return () => {

  //   }
  // }, [])

  // function getData() {
  //   fetch('https://demo-e-comm-data.herokuapp.com/products?_page=1').then(res => res.json()).then((data) => {
  //     setProductData(data);
  //     console.log(data)
  //   })
  // }
  return (
    <>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <HStack>
          <PagButton>
            <Icon
              as={IoIosArrowBack}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>
          <PagButton>1</PagButton>
          <PagButton active>2</PagButton>
          <PagButton>3</PagButton>
          <PagButton>4</PagButton>
          <PagButton>5</PagButton>
          <MButton right />
          <PagButton>50</PagButton>
          <PagButton>
            <Icon
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
              boxSize={4}
            />
          </PagButton>
          <Menu>
            <MenuButton ml={1} as={Button} rightIcon={<ChevronDownIcon />}>
              10 / page
            </MenuButton>
            <MenuList>
              <MenuItem>20 / page</MenuItem>
              <MenuItem>30 / page</MenuItem>
              <MenuItem>40 / page</MenuItem>
              <MenuItem>50 / page</MenuItem>
            </MenuList>
          </Menu>
          <HStack>
            <Text wordBreak="unset">Go to:</Text>
            <Input w="50px" />
          </HStack>
        </HStack>
      </Flex>

      <div>
        {
          products?.map(prod => (
            <div key={prod._id.$oid}>
              <Card data={prod} />
            </div >
          ))
        }
      </div>
    </>
  )
}

export default Home

