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
          <Tab label="University Acceptance" {...a11yProps(0)} />
          <Tab label="University Placement" {...a11yProps(1)} />
  
  
        </Tabs>
        </div>
        </Grid>
        <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
        University Acceptance
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
              <div className='careerCounsellingImg'>
              <img src="../img/placements/university-acceptance/Tisha-Jindal.Webp"/>
              <div className=''>
              <h5>Tisha Jindal</h5>
              <ul>
              <li>University of Toronto</li>
              <li>University of Illinois, Urbana-Champagne</li>
              <li>Purdue University</li>
              <li>Rutgers University</li>
              <li>Texas A&M University</li>
              <li>Arizona State University</li>
              <li>Course- Aerospace Engineering</li>
              </ul>
              </div>
              </div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div className='careerCounsellingImg'>
        <img src="../img/placements/university-acceptance/Ayush-Aggarwal.Webp"/>
        <div className=''>
              <h5>Ayush Aggarwal</h5>
              <span>UK university</span>
              <ol>
                <li>Manchester University</li>
                <li>cass business school</li>
                <li>University of leeds</li>
                <li>University of exter</li>
              </ol>
              <span>USA university</span>
              <ol>
              <li>Airzona university</li>
              <li> Indiana University Bloomington France
              EDHEC Business school</li>
              </ol>
              </div>
        </div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div className='careerCounsellingImg'>
        <img src="../img/placements/university-acceptance/Sara-Yadav.Webp"/>
        <div className=''>
              <h5>Sara Yadav</h5>
              <ul>
              <li>King’s College London (London, UK)</li>
              <li>University of Illinois, Urbana-Champagne</li>
              <li>University of Manchester (Manchester, UK)</li>
              <li>Queen Mary University (London, UK)</li>
              <li>Royal Holloway University (London, UK)</li>
              <li>University of Reading(Reading, UK)</li>
              <li>Ashoka University (Sonipat, India)</li>
              </ul>
              <ul>
              <li><span>Under-graduation:</span></li>
              <li>King’s College London (London, UK)</li>
              <li>Course:- English with Film Studies</li>
              </ul>
              </div>
        </div>
        </Grid>
     
        </Grid>
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
  