"use client";
import ExerciseSelectionModal from "@/components/ExerciseSelectionModal";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Page() {
  return (
    <Flex direction="column" gap="4" p="4">
      <Heading as="h1" size="xl">
        Start Workout
      </Heading>
      <Box>
        <Heading as="h2" size="sm" mb="1">
          Quick Start
        </Heading>
        <Button colorScheme="blue">Start an Empty Workout</Button>
      </Box>
      <Box>
        <ExerciseSelectionModal />
      </Box>
    </Flex>
  );
}

export default Page;
