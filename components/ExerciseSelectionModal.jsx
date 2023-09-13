"use client"
import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  import exercises from '@/app/exercises'
import { SearchIcon } from '@chakra-ui/icons'


const ExerciseSelectionModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchValue, setSearchValue] = useState("");

    return (
      <React.Fragment>
        <Button onClick={onOpen}>Exercises</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxH='80%'>
            <ModalHeader>
                <InputGroup >
                <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} mr={6} placeholder='Search...' />
                <InputRightElement mr={6} pointerEvents='none'>
                    <SearchIcon />
                </InputRightElement>
                </InputGroup>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody overflowX='hidden' overflowY='scroll'>
              <TableContainer overflowX='hidden'>
                <Table>
                    <Tbody>
                {exercises.map((section) => {
                    if(searchValue === "" || searchValue === undefined) {
                        return(
                            <>
                                <Tr key={section.letter}>
                                    <Th>{section.letter}</Th>
                                </Tr>
                                {section.exercises.map((index) => (
                                    <Tr key={index.exercise}>
                                        <Td _hover={{cursor: 'pointer', color: 'blue.500'}}>{index.exercise}</Td>
                                    </Tr>
                                ))}
                            </>
                    )} else return (
                        <>
                            {section.exercises.map((index) => {
                                if(index.exercise.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === "") {
                                    return (
                                        <Tr key={index.exercise}>
                                            <Td _hover={{cursor: 'pointer', color: 'blue.500'}}>{index.exercise}</Td>
                                        </Tr>
                                    )                           
                                }
                            })}
                    </>
                    )
                
})}
                    </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' w='100%' onClick={onClose}>
                Add Exercise
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </React.Fragment>
    )
}

export default ExerciseSelectionModal