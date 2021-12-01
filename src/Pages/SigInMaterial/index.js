import {Box, TextField} from '@mui/material';

export defalt function SigUpMaterial(){
 return(
     <Box maxWidth="sm" sx={{display:'flex', flexDirectio: 'column', width:1/3, jusJustifyContent:'center', alignItems:'center' }}>
     <TextField id="Standard-basic" label="Username" variant="standard"/>
     <TextField id="Standard-basic" label="Confirm Password" variant="standard"/>
     <TextField id="Standard-basic" label="Password" variant="standard"/>
     </Box>
 )   
}