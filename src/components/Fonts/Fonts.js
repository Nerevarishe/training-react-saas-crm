//import React from "react";
import styled from "styled-components";

export const BaseFont = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  color: ${(props) => props.color || "inherit"};
`;

export const BaseMediumFont = styled(BaseFont)`
  font-weight: 500;
`;

export const Semibold13Font = styled(BaseFont)`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
`;

export const Regular10Font = styled(BaseFont)`
  font-size: 10px;
  line-height: 15px;
`;

export const Regular12Font = styled(BaseFont)`
  font-size: 12px;
  line-height: 18px;
`;

export const Regular13Font = styled(BaseFont)`
  font-size: 13px;
  line-height: 19px;
`;

export const Medium11Font = styled(BaseMediumFont)`
  font-size: 11px;
  line-height: 16px;
`;

export const Medium12Font = styled(BaseMediumFont)`
  font-size: 12px;
  line-height: 18px;
`;

export const Medium13Font = styled(BaseMediumFont)`
  font-size: 13px;
  line-height: 19px;
`;

export const Medium14Font = styled(BaseMediumFont)`
  font-size: 14px;
  line-height: 21px;
`;

export const Medium15Font = styled(BaseMediumFont)`
  font-size: 15px;
  line-height: 22px;
`;

export const Medium18Font = styled(BaseMediumFont)`
  font-size: 18px;
  line-height: 27px;
`;

export const Medium20Font = styled(BaseMediumFont)`
  font-size: 20px;
  line-height: 30px;
`;
