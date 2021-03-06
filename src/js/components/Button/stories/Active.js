import React from 'react';

import { Add } from 'grommet-icons';

import { Box, Button, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

export const Active = () => (
  <Box pad="large" gap="large">
    {/* Out of the Box Button */}
    <Grommet theme={grommet}>
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} active>
          {/*  When Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Add</Text>
          </Box>
        </Button>
      </Box>
    </Grommet>
    {/* Kind Button */}
    <Grommet
      theme={{
        global: {
          font: {
            family: `-apple-system, BlinkMacSystemFont`,
          },
        },
        button: { default: {} }, // enabling kind button functionality
      }}
    >
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} active>
          {/*  When kind Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Kind</Text>
          </Box>
        </Button>
      </Box>
    </Grommet>
  </Box>
);

export default {
  title: 'Controls/Button/Active',
};
