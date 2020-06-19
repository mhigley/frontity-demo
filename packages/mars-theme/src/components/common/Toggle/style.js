import { styled } from "frontity";

export const Container = styled.div`
  display: flex;
`
export const StyledButton = styled.button`
  padding: 10px;
  border: 0;
  background-color: ${({isSelected}) => (!isSelected ? '#ccc' : '#fff')}
`


