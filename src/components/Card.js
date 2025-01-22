import { Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <VStack spacing={3} bgColor="white" rounded="lg">
        <Image rounded="md" src={imageSrc} />
        <VStack p={3} pt={1}color="black" align="start">
          <Heading size="xs">{title}</Heading>
          <Text fontSize="xs" color="gray.500">{description}</Text>
          <Link fontSize="xs" variant="plain" href="/#">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </VStack>
      </VStack>
    </div>
  );
};

export default Card;
