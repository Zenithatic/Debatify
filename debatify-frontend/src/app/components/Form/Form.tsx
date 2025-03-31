import styles from '../Form/Form.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function Form() {
    return (

        <Box
            component="form"
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#374151', // your custom gray
                    },
                    '&:hover fieldset': {
                        borderColor: '#374151',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#374151',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#374151',
                },
                '& .MuiInputBase-input': {
                    color: '#374151',
                },
                '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
              
                />
                <TextField
                    id="outlined-Middle name"
                    label="Middle Name"
                   
                   
                />
                <TextField
                    required
                    id="outlined-Middle name"
                    label="Last Name"
                    
        
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <TextField 
                    required
                    id="outlined-Age"
                    label="Age"
                    
                    defaultValue={0}
                    type = "number"
                    inputProps={{ 
                        min: 0,
                        inputMode: 'numeric',
                    }}

                />


            </div>

        </Box>
    );
}

export default Form;