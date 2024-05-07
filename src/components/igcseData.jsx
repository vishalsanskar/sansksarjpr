import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


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
          <Tab label="CAMBRIDGE LOWER SECONDARY" {...a11yProps(0)} />
          <Tab label="CAMBRIDGE UPPER SECONDARY" {...a11yProps(1)} />
          <Tab label="THE IGCSE CURRICULUM AT SANSKAR" {...a11yProps(2)} />
  
  
        </Tabs>
        </div>
        </Grid>
        <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
        <div className=''>
        <h1>CAMBRIDGE LOWER SECONDARY</h1>
        <h3>CHECKPOINT (GRADE VI –VIII)</h3>
        <p>Cambridge Lower Secondary is an international curriculum for grades VI to VIII for developing skills and understanding in English, Mathematics and Science. There is a curriculum framework for each subject – English, Mathematics and Science.</p>
        <p>Each curriculum framework is designed to engage learners in an active and creative learning journey.</p>
        </div>

        <div className='lower-secondary-table'>
        <h3>The following are the subject Choices for Classes VI to VIII:</h3>

        <div className='box-table'>
        <div className='box'>
        <h3>Group 1 Languages</h3>
        </div>
        </div>
        </div>
       
        </TabPanel>
        <TabPanel value={value} index={1}>
        University Placement
  
  
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
              <div className='careerCounsellingImg'>
              <img src="../img/placements/university-placement/Lakshay-Pratap-Singh-Shekhawat.Webp"/>
              <div className=''>
              <h5>Lakshay Pratap Singh Shekhawat</h5>
              <p>Les Roches Marbella,Spain</p>
              <p> (BBA in global hospitality management)</p>
              </div>
              </div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div className='careerCounsellingImg'>
        <img src="../img/placements/university-placement/Kavya-Chandra.Webp"/>
        <div className=''>
        <h5>Kavya Chandra</h5>
        <p>Bachelor of Science in Forensic Science and Psychology</p>
        <p>Trent University, Toronto, Canada (4 years)</p>
        <p>University of Kent, London, UK</p>
        </div>
        </div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div className='careerCounsellingImg'>
        <img src="../img/placements/university-placement/Vaishali-Sharma.Webp"/>
        <div className=''>
        <h5>Vaishali Sharma</h5>
        <p> Wichita State University Mechanical Engineering</p>
        </div>
        </div>
        </Grid>
        </Grid>
        </TabPanel>
        </Grid>
        </Grid>
      </Box>
    );
  }
  