'use client'
import { CalendarIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Spacer, Link, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const MenuBar = () => {
    let path = usePathname();


  return (
    <Box pos="absolute" top={0} h="100vh" w="100vw" zIndex={-99}>
    <Flex p='6' pos="absolute" bottom={0} w="100%">
        <Link as={NextLink} href='/workout'>{path === '/workout' ? <EditIcon boxSize={6} color="red"/> : <EditIcon boxSize={6} />}</Link>
        <Spacer></Spacer>
        <Link as={NextLink} href='/history'>{path === '/history' ? <CalendarIcon boxSize={6} color="red"/> : <CalendarIcon boxSize={6} />}</Link>
        <Spacer></Spacer>
        <Link as={NextLink} href='/settings'>{path === '/settings' ? <HamburgerIcon boxSize={8} color="red"/> : <HamburgerIcon boxSize={8} />}</Link>
    </Flex>
    </Box>
  )
}

export default MenuBar