// Style your elements here
import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100px;
  color: #1e293b;
  padding: 8px 20px;
  border-radius: 5px;
  background-color: #fff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};

  outline: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
`
