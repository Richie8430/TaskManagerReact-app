import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
  movieContainer: {
    display: 'flex',
    flexWrap: 'flex',
    justifyContent: 'space-between',
    overflow: 'auto',
     [Theme.breakpoints.down('sm')]:{
        justifyContent:'center',
     },
  }

}))