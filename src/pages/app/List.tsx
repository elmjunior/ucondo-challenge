import React from "react";
import Search from "../../components/Search";

import { VStack } from "../../layouts";

export default function List(): JSX.Element {
  return (
    <VStack flex={1}>
      <Search />
    </VStack>
  );
}
