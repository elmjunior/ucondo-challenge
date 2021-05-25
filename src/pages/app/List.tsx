import React from "react";
import Search from "../../components/Search";

import { HStack, VStack } from "../../layouts";

export default function List(): JSX.Element {
  return (
    <VStack flex={1} p={3}>
      <Search />
    </VStack>
  );
}
