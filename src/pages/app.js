import * as React from "react";
import {
  Section,
  Container,
  Flexbox,
  H1,
  P,
  Button,
} from "@reflexjs/components";
import { Block } from "@reflexjs/gatsby-theme-block";

export default () => (
  <Section py="8|12|16|24">
    <Container variant="md">
      <Flexbox flexDirection="column" textAlign="center">
        <H1 m="0" fontWeight="extrabold" lineHeight="tight">
          This is a JSX page at /app
        </H1>
        <P fontSize="xl|2xl" mt="2">
          You can use components and blocks here.
        </P>
        <Button variant="primary lg">A button</Button>
      </Flexbox>

      <Block src="sample" />
    </Container>
  </Section>
);
