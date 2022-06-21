import React, { ReactChildren } from "react";
import {
  Box,
  Image,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
} from "native-base";

import AppText from "@/components/AppText";

interface PropsTypes {
  body: string;
  imageUrl: string;
  title: string;
  subtitle?: string | null;
  time?: string | null;
  tag?: string | null;
}

function CardWithImage({
  imageUrl,
  title,
  subtitle = null,
  body,
  tag = null,
  time = null,
}: PropsTypes) {
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: imageUrl,
            }}
            alt="image"
          />
        </AspectRatio>
        {tag && (
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {tag}
          </Center>
        )}
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
          {subtitle && (
            <AppText
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {subtitle}
            </AppText>
          )}
        </Stack>
        <AppText fontWeight="400">{body}</AppText>
        {time && (
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <AppText
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {time}
              </AppText>
            </HStack>
          </HStack>
        )}
      </Stack>
    </Box>
  );
}

export default CardWithImage;
