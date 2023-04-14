import {Component} from 'react'
import * as S from './styledComponents'
import GradientGeneratorItem from '../GradientDirectionItem/index'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {activeButton: gradientDirectionsList[0].directionId}

  activeButtonChange = item => {
    this.setState({activeButton: item.directionId})
  }

  render() {
    const {activeButton} = this.state
    return (
      <S.Wrapper>
        <S.ResponsiveWrapper>
          <S.StyledHeading>Generate a Css Color Gradient</S.StyledHeading>
          <S.StyledParagraph>Choose Direction</S.StyledParagraph>

          <S.DirectionWrapper>
            {gradientDirectionsList.map(eachItem => (
              <GradientGeneratorItem
                eachItem={eachItem}
                activeButton={activeButton}
                key={eachItem.directionId}
                activeButtonChange={this.activeButtonChange}
              />
            ))}
          </S.DirectionWrapper>
        </S.ResponsiveWrapper>
      </S.Wrapper>
    )
  }
}

export default GradientGenerator
