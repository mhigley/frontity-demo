import { styled } from "frontity";
import Link from "../common/Link";

export const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

export const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;