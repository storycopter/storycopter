import React from "react";
import styled from "styled-components";

import { color, font } from "@storycopter/styleguide/src/config";
import { setType } from "@storycopter/styleguide/src/mixins";

const Label = styled(({ ...props }) => <label {...props} />)`
  ${setType("x")};
  color: ${color.mono700};
  font-family: ${font.sans};
  font-weight: 600;
`;

export default Label;
