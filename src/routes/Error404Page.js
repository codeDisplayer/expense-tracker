import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error404Page() {
  return (
    <>
      <Typography>
        Oops, seems like we couldn't find the page you're looking for.
        It can be moved somewhere else or deleted permenetly. You can go to the <Link to='/'>homepage</Link> if 
        you prefer.
      </Typography>
    </>
  )
}