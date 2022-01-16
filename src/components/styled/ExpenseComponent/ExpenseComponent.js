import styled from '@emotion/styled';
import { getColor } from '../../../constants';

const ExpenseComponent = styled.div`
  background-color: ${({ category }) => getColor(category)};
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  &:hover: {
    width: 50%;
  }
`;

export default ExpenseComponent;