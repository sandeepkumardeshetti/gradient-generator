// Write your code here
import * as S from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, activeButton, activeButtonChange} = props
  const isActive = activeButton === eachItem.directionId
  console.log(isActive)
  const changeActiveStatus = () => {
    activeButtonChange(eachItem)
  }

  return (
    <S.StyledButton onClick={changeActiveStatus} isActive={isActive}>
      {eachItem.displayText}
    </S.StyledButton>
  )
}

export default GradientDirectionItem
