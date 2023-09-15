"use client";
import React, { useState } from "react";
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
  Select,
  IconButton,
} from "@chakra-ui/react";
import exercises from "@/app/exercises";
import { EditIcon, SearchIcon } from "@chakra-ui/icons";

const ExerciseSelectionModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState();

  return (
    <React.Fragment>
      {props.isButton ? (
        <Button colorScheme="red" w="100%" onClick={onOpen}>
          Add Exercise
        </Button>
      ) : (
        <IconButton
          aria-label="Select exercise"
          icon={<EditIcon />}
          onClick={onOpen}
          size="sm"
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxH="80%">
          <ModalHeader>
            <InputGroup>
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                mr={6}
                placeholder="Search..."
              />
              <InputRightElement mr={6} pointerEvents="none">
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Exercise type"
            >
              <option value="Any">Any</option>
              <option value="Abductors">Abductors</option>
              <option value="Abs">Abs</option>
              <option value="Adductors">Adductors</option>
              <option value="Biceps">Biceps</option>
              <option value="Calves">Calves</option>
              <option value="Cardio">Cardio</option>
              <option value="Chest">Chest</option>
              <option value="Core">Core</option>
              <option value="Forearms">Forearms</option>
              <option value="Glutes">Glutes</option>
              <option value="Hamstrings">Hamstrings</option>
              <option value="Lats Back">Lats Back</option>
              <option value="Lower Back">Lower Back</option>
              <option value="Middle Back">Middle Back</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Neck">Neck</option>
              <option value="Plyometrics">Plyometrics</option>
              <option value="Quadriceps">Quadriceps</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Stretching">Stretching</option>
              <option value="Traps">Traps</option>
              <option value="Triceps">Triceps</option>
            </Select>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody overflowX="hidden" overflowY="scroll">
            <TableContainer overflowX="hidden">
              <Table>
                <Tbody>
                  {exercises.map((section) => {
                    if (
                      (searchValue === "" || searchValue === undefined) &&
                      (type === undefined || type === "Any" || type === "")
                    ) {
                      return (
                        <>
                          <Tr key={section.letter}>
                            <Th>{section.letter}</Th>
                          </Tr>
                          {section.exercises.map((index) => (
                            <Tr key={index.exercise}>
                              <Td
                                _hover={{
                                  cursor: "pointer",
                                  color: "blue.500",
                                }}
                              >
                                {index.exercise}
                              </Td>
                            </Tr>
                          ))}
                        </>
                      );
                    } else {
                      if (
                        (searchValue === "" || searchValue === undefined) &&
                        type !== undefined &&
                        type !== "Any" &&
                        type !== ""
                      ) {
                        return (
                          <>
                            {section.exercises.map((index) => {
                              if (type === index.muscle) {
                                return (
                                  <Tr key={index.exercise}>
                                    <Td
                                      _hover={{
                                        cursor: "pointer",
                                        color: "blue.500",
                                      }}
                                    >
                                      {index.exercise}
                                    </Td>
                                  </Tr>
                                );
                              }
                            })}
                          </>
                        );
                      } else
                        return (
                          <>
                            {section.exercises.map((index) => {
                              if (
                                index.exercise
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase()) &&
                                (type === undefined ||
                                  type === "Any" ||
                                  type === "" ||
                                  type === index.muscle)
                              ) {
                                return (
                                  <Tr key={index.exercise}>
                                    <Td
                                      _hover={{
                                        cursor: "pointer",
                                        color: "blue.500",
                                      }}
                                    >
                                      {index.exercise}
                                    </Td>
                                  </Tr>
                                );
                              }
                            })}
                          </>
                        );
                    }
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" w="100%" onClick={onClose}>
              Add Exercise
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ExerciseSelectionModal;
