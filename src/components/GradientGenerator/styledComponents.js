// Style your elements here

import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #8ae323, #014f7b);
`

export const ResponsiveWrapper = styled(Wrapper)`
  width: 80%;
  height: 100%;
  flex-direction: column;
`

export const StyledHeading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const StyledParagraph = styled.div`
  color: #ededed;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const DirectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
