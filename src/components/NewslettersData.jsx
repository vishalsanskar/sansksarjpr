import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-browser-router'

import  '../css/newsletterpdf.css';

import '../css/careercoinselling.css';


// import Pdf1 from 'pdf/newsletter/ibpyp/Newsletter.pdf';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }



  export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  }}
      >
      
      <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
      <div className='box'>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="IBPYP" {...a11yProps(0)} />
          <Tab label="CAIE" {...a11yProps(1)} />
          <Tab label="IBDP" {...a11yProps(2)} />
  
  
        </Tabs>
        </div>
        </Grid>
        <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
        IBPYP
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
          <div className='newsletterpdf-box'>
          <iframe src='../img/pdf/newsletter/ibpyp/Newsletter.pdf'/>
          <h4>IBPYP Newsletter May 2020 Volume 1</h4>
          </div>
        </Grid>
       
     

        </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        CAIE
  
  
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>

        </Grid>
        <Grid item xs={2} md={3}>
    
        </Grid>
        <Grid item xs={2} md={3}>
      
        </Grid>

        </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
        IBDP
  
  
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
  
        </Grid>
        <Grid item xs={2} md={3}>

        </Grid>
        <Grid item xs={2} md={3}>

        </Grid>

        </Grid>
        </TabPanel>
        
         
      
       
    

      
  
        </Grid>
        </Grid>
      </Box>
    );
  }
  