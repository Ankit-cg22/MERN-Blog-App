// here we define the template for taking inputs

import React from 'react'

import { TextField , Grid , InputAdornment , IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


export default function Input( {handleChange ,label, name , half , autoFocus , type , handleShowPassword  } ) {
    return (
        <Grid item xs={12} sm = {half ? 6 : 12} >
            <TextField
                name={name}
                label={label}
                handleChange={handleChange}
                required
                fullWidth
                autoFocus = {autoFocus}
                type={type}
                InputProps={name  === 'password' ? {
                    endAdornment:(
                        <InputAdornment position = "end">
                            <IconButton onClick ={handleShowPassword}>
                                {type==='password' ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    )
                    } : null}
            />
        </Grid>
    )
}
