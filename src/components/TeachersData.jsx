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
          <Tab label="Vice Principal" {...a11yProps(0)} />
          <Tab label="PGT Coordinator" {...a11yProps(1)} />
          <Tab label="TGT Coordinator" {...a11yProps(2)} />
          <Tab label="English" {...a11yProps(3)} />
          <Tab label="Hindi" {...a11yProps(4)} />
          <Tab label="Math" {...a11yProps(5)} />
          <Tab label="Science" {...a11yProps(6)} />
          <Tab label="Social Science" {...a11yProps(7)} />
          <Tab label="Computer" {...a11yProps(8)} />
          <Tab label="Commerce" {...a11yProps(9)} />
          <Tab label="Art" {...a11yProps(10)} />
          <Tab label="Physical education" {...a11yProps(11)} />
          <Tab label="Library" {...a11yProps(12)} />
          <Tab label="Primary" {...a11yProps(13)} />
          <Tab label="Administrative Staff" {...a11yProps(14)} />
  
        </Tabs>
        </div>
        </Grid>
        <Grid item xs={12} md={9}>
        <TabPanel value={value} index={0}>
        Vice Principal
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Manisha Chandra</h1>
            <h5><span>Grade:</span> Vice Principal</h5>
            <h5><span>Qualification:</span> M.Sc. (Mathematics),B.Ed.</h5>
            </div>
            </div>
            </div>

        </Grid>
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          PGT Coordinator
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Dinesh Canad Sharma</h1>
            <h5><span>Grade:</span> PGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.(Mathematics),B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Rakshandha Haffiz</h1>
            <h5><span>Grade:</span> PGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.(English),B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Komal Pandya</h1>
            <h5><span>Grade: </span>PGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Com,(Bus.Admin),B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Namrata Joseph</h1>
            <h5><span>Grade: </span>PGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.(English),B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          TGT Coordinator
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          English
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          Hindi
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          Maths
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          Science
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={7}>
         Social Science
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={8}>
          Computer
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={9}>
        Commerce
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={10}>
        Art
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={11}>
         Physical education
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={12}>
          Library
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={13}>
      Primary
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
         </Grid>
        </TabPanel>
        <TabPanel value={value} index={14}>
        Administrative
        <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Deepika Banerjee</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>B.Sc.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Pallavi S. Goyal</h1>
            <h5><span>Grade:</span> TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.A.,B.Ed.</h5>
            </div>
            </div>
            </div>
        </Grid>
        <Grid item xs={2} md={6}>
            <div className='teacherdata-box'>
            <div  className='teacherdata-inner-box'>
            <div className='teacher-img'>
            <img src='../img/userimg.jpg'/>
            </div>
            <div className='teacher-data-box'>
            <h1>Keerti Sharma</h1>
            <h5><span>Grade: </span>TGT Coordinator</h5>
            <h5><span>Qualification: </span>M.Sc.,B.Ed.</h5>
            </div>
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