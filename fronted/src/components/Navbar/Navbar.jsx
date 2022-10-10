import React from 'react'
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from '@mui/material'
import { Handshake } from '@mui/icons-material'
import { minHeight } from '@mui/system'
function Navbar() {
  return (
    <>
      <AppBar sx={{ background: '#fff5ed', minHeight: '128px' }}>
        <Toolbar>
          <Handshake
            sx={{ color: '#16382c', marginTop: '40px', marginLeft: '20px' }}
          />
          <Typography sx={{ color: '#16382c', marginTop: '40px' }}>
            COOPERATIVA
          </Typography>
          <Tabs sx={{ marginTop: '40px' }} value={2} indicatorColor='secondary'>
            <Tab label='Home' textColor='#16382c' />
            <Tab label='Service' textColor='#16382c' />
            <Tab label='Contact us' textColor='#16382c' />
          </Tabs>
          <Tabs sx={{ marginLeft: 'auto', marginTop: '40px' }}>
            <Button
              sx={{
                backgroundColor: '#16382c',
                margin: '5px',
                marginRight: '20px',
              }}
              variant='contained'
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: '#ff7334',
                margin: '5px',
                marginRight: '50px',
              }}
              variant='contained'
            >
              Sing Up
            </Button>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
