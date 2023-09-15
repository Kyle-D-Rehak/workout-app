import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";

const ExerciseTracker = (props) => {
  return (
    <Box bg="gray.600" borderRadius="lg" p={4} mb={4}>
      <Flex mb="2">
        <Heading as="h2" size="md">
          {props.exercise.name}
        </Heading>
      </Flex>
      <Grid gridTemplateColumns="1fr 4fr 4fr 4fr 1fr" gap={2}>
        <GridItem justifySelf="center">
          <Heading as="h3" size="xs" textTransform="uppercase" color="gray.300">
            Set
          </Heading>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="xs" textTransform="uppercase" color="gray.300">
            Prev.
          </Heading>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="xs" textTransform="uppercase" color="gray.300">
            Wt.
          </Heading>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="xs" textTransform="uppercase" color="gray.300">
            Reps
          </Heading>
        </GridItem>
        <GridItem justifySelf="center">
          <Heading as="h3" size="xs" textTransform="uppercase" color="gray.300">
            Done
          </Heading>
        </GridItem>
        <GridItem placeSelf="center">1</GridItem>
        <GridItem placeSelf="center start">100lbs x 5</GridItem>
        <GridItem>
          <NumberInput size="sm" min={0} max={9999}>
            <NumberInputField />
          </NumberInput>
        </GridItem>
        <GridItem>
          <NumberInput size="sm" min={0} max={999}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </GridItem>
        <GridItem placeSelf="center">
          <Checkbox size="lg" colorScheme="green"></Checkbox>
        </GridItem>
      </Grid>
      <Flex justifyContent="center" alignItems="center">
        <Button colorScheme="blue" mt={8} w="100%" size="sm">
          Add Set
        </Button>
      </Flex>
    </Box>
  );
};

export default ExerciseTracker;
