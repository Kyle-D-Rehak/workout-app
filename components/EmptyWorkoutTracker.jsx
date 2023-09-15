"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import ExerciseTracker from "./ExerciseTracker";
import React, { useState } from "react";

const EmptyWorkoutTracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [workout, setWorkout] = useState({ exercises: [] });
  const btnRef = React.useRef();

  const addExercise = (newExercise) => {
    let tempState = { ...workout };
    tempState.exercises.push({
      name: newExercise,
      sets: [{ weight: "", reps: "", done: false }],
    });
    setWorkout(tempState);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Start an Empty Workout
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent h="100vh">
          <DrawerCloseButton />
          <DrawerHeader>New Workout</DrawerHeader>

          <DrawerBody>
            {workout.exercises.map((exercise, i) => (
              <ExerciseTracker exercise={exercise} key={`exercise${i}`} />
            ))}

            <Flex justifyContent="center">
              <Button
                colorScheme="red"
                w="100%"
                onClick={() => addExercise("test")}
              >
                Add Exercise
              </Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => setWorkout({ exercises: [] })}
            >
              Clear
            </Button>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Finish</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EmptyWorkoutTracker;
