'use client';

import * as React from 'react';
import { spacing } from '@mui/system';
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

import { Typography } from "@mui/material";
import Container from '@mui/material/Box';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { theme } from '@/constants/theme';
import { file, pony } from '@/img/beargif.js';

import BearHug from '../img/bearhug.gif'

export default function Home() {


const [answer, setAnswer] = useState('')


function handleNoClick() {
  setAnswer('no');
}

function handleYesClick(){
  setAnswer('yes');
}

function handleResetClick(){
  setAnswer('')
}


  return (
    <main className={styles.main}>
     
      <Container alignItems={"center"} justifyContent={"center"} sx={{ minHeight: '100%' }}>
        <Box sx={{mb: 4}}>
          <Typography fontSize={25}>
            ella will you be my valentine? 
          </Typography>          
        </Box>


        <Box sx={{mb: 4}} >
          <Grid container columns={25} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={5}>
                <ThemeProvider theme={theme}>
                  <Button color='primary' 
                          variant="contained" 
                          sx={{textTransform:'lowercase'}}
                          onClick={()=>{
                            handleYesClick()
                          }}
                          >
                    yes
                  </Button>
                </ThemeProvider>
            </Grid>
            <Grid item xs={15}>   
              <ThemeProvider theme={theme}>

                <Button color='secondary'
                        variant="contained"
                        sx={{textTransform:'lowercase'}}
                        onClick={()=>{
                          handleNoClick()
                        }}
                        >                        
                        no wtf is wrong with you.</Button>
              </ThemeProvider>            
            </Grid>
            <Grid item xs={5} >
              <Button     variant="outlined"
                          sx={{textTransform:'lowercase'}}
                          onClick={()=>{
                            handleResetClick()
                          }}
                          > 
                reset
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box >

        {/* <img src={BearHug} alt="hug" />  */}


          {
              answer === 'yes' ? 
              <img src='https://media.tenor.com/008My4n0eLYAAAAi/tkthao219-bubududu.gif' alt="hug" /> 
              :
              answer === 'no' ?
              <img src='https://i.pinimg.com/originals/43/ff/e1/43ffe16a0deb6681d0e4074dfda2dc0b.gif' alt="hug" height={214} width={299}/> 
              :
              <p>please click a button :&#41; </p>
            }
        </Box>
      </Container>

    </main>
  );
}
