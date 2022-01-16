import styled from "@emotion/styled";
import { Tooltip, Typography } from "@mui/material"
//import { getColor } from '../../../constants';



export default function CategoryComponent({ category }) {

  const CategroyDivStyled = styled.div({
    width: '100%',
    heigth: '100%',
    borderRadius: '0 0 10px 10px',
    marginTop: '10px',
    textAlign: 'center',
    //backgroundColor: getColor(category),
    backgroundColor: 'rgba(0,0,0, 0.5)',
    position: 'relative',
    bottom: -15,
    color: '#f2f2f2',
    '&:hover': {
      transition: '500ms',
      backgroundColor: 'rgba(0,0,0, 0.9)',
    }
  })

  const capitilizedCategroyStr = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Tooltip title={'This expense belongs to the ' + category + ' category.'}>
      <CategroyDivStyled>
        <Typography> {capitilizedCategroyStr} </Typography>
      </CategroyDivStyled>
    </Tooltip>
  )
}