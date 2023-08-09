'use client'
import { CalendarIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Spacer, Link, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const MenuBar = () => {
  return (
    <Box pos="absolute" top={0} h="100vh" w="100vw" zIndex={-99}>
    <Flex p='6' pos="absolute" bottom={0} w="100%">
        <Link as={NextLink} href='/workout'><EditIcon boxSize={6}/></Link>
        <Spacer></Spacer>
        <Link as={NextLink} href='/history'><CalendarIcon boxSize={6}/></Link>
        <Spacer></Spacer>
        <Link as={NextLink} href='/settings'><HamburgerIcon boxSize={8}/></Link>
    </Flex>
    </Box>
  )
}

export default MenuBar