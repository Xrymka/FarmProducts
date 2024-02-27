import { styled } from "styled-components";
import { Title } from "../../ui/title/Title.styled";

const AdvantagesList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 100px;
  padding: 0;
`
const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 64px;
  list-style: none;
`

export const S = {
  AdvantagesList,
  StyledTitle,
  List
}