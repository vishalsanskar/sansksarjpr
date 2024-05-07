import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../css/careercoinselling.css';

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
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
    
    <Grid container spacing={0}>
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
        <Tab label="Sanskar School organized a vibrant and informative University Fair" {...a11yProps(0)} />
        <Tab label="Sanskar School organized a university fair" {...a11yProps(1)} />
        <Tab label="Session on Career Counselling – Mr. Bhuvesh Sharma" {...a11yProps(2)} />
        <Tab label="Career Counseling Session" {...a11yProps(3)} />
        <Tab label="ICAE visits Sanskar School" {...a11yProps(4)} />
        <Tab label="American University Tour held at Sanskar School" {...a11yProps(5)} />
        <Tab label="IC3 Regional Forum held at Sanskar School" {...a11yProps(6)} />
        <Tab label="Sanskar School hosts Australian Education Exhibition" {...a11yProps(7)} />
        <Tab label="Education Fair held at Sanskar School" {...a11yProps(8)} />
        <Tab label="Global Education Fair held at Sanskar School" {...a11yProps(9)} />
        <Tab label="Workshop and Interactive session with U.S. University officials" {...a11yProps(10)} />
        <Tab label="Students from classes XI and XII attend ICAE Global University Fair" {...a11yProps(11)} />


      </Tabs>
      </div>
      </Grid>
      <Grid item xs={12} md={9}>
      <TabPanel value={value} index={0}>
      vibrant and informative University Fair  
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/UF2023-1.Webp"/>

         
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-2.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-3.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-4.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-5.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-6.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-7.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/UF2023-8.Webp"/>
      </div>
      </Grid>
      
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      university fair 


      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/University Fair-1.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-2.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-3.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-4.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-5.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-6.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-7.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/University Fair-8.Webp"/>
      </div>
      </Grid>
      </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      Career Counselling – Mr. Bhuvesh Sharma 

      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Career Councelling-11.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Councelling-22.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Councelling-33.Webp"/>
      </div>
      </Grid>
     
      </Grid>



      </TabPanel>
      <TabPanel value={value} index={3}>
      Career Counseling Session  

      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Career Counseling Session-1.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-2.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-3.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-4.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-5.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-5.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-7.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-9.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-10.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Career Counseling Session-11.Webp"/>
      </div>
      </Grid>
     
      </Grid>

      </TabPanel>
      <TabPanel value={value} index={4}>
      ICAE visits Sanskar School 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University Tour_2019.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_1.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_2.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_3.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_4.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_5.Webp"/>
      </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/American University Tour_2019_6.Webp"/>
      </div>
      </Grid>
    
      </Grid>   
      </TabPanel>
      <TabPanel value={value} index={5}>
      American University Tour held at Sanskar School 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_1.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_2.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_3.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_4.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_5.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_6.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_7.Webp"/>

            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_8.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_9.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_10.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_11.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_12.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_13.Webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/American University_14.Webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
      IC3 Regional Forum held at Sanskar School 

      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-1.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-2.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-3.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-4.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-5.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-6.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-7.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-8.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-9.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-10.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-11.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-12.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-13.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-14.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-15.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-16.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-17.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-18.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-19.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-21.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-22.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-23.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-24.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-25.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-26.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-27.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-28.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-29.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-30.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-31.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-32.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-33.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ic3/IC3 Regional Forum-34.webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
      Australian Education Exhibition 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Australian Education Exhibition/Australian Education Exhibition.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
      <div className='careerCounsellingImg'>
      <img src="../img/Australian Education Exhibition/Australian Education Exhibition-1.webp"/>
      </div>
</Grid>
<Grid item xs={2} md={3}>
<div className='careerCounsellingImg'>
<img src="../img/Australian Education Exhibition/Australian Education Exhibition-2.webp"/>
</div>
</Grid>
<Grid item xs={2} md={3}>
<div className='careerCounsellingImg'>
<img src="../img/Australian Education Exhibition/Australian Education Exhibition-3.webp"/>
</div>
</Grid>
<Grid item xs={2} md={3}>
<div className='careerCounsellingImg'>
<img src="../img/Australian Education Exhibition/Australian Education Exhibition-4.webp"/>
</div>
</Grid>
<Grid item xs={2} md={3}>
<div className='careerCounsellingImg'>
<img src="../img/Australian Education Exhibition/Australian Education Exhibition-5.webp"/>
</div>
</Grid>

      </Grid>
      </TabPanel>
      <TabPanel value={value} index={8}>
      Education Fair held at Sanskar School 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Education Fair/Education Fair held at Sanskar School_1.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Education Fair/Education Fair held at Sanskar School_2.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Education Fair/Education Fair held at Sanskar School_3.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Education Fair/Education Fair held at Sanskar School_4.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Education Fair/Education Fair held at Sanskar School_5.webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={9}>
      Global Education Fair held at Sanskar School 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School-1.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School-2.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School-3.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School-4.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/Global Education Fair/Global Education Fair held at Sanskar School-5.webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={10}> 
      Workshop and Interactive session with U.S. University officials 
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/U.S.University-officials/Workshop and Interactive session with U.S. University officials.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/U.S.University-officials/Workshop and Interactive session with U.S. University officials_1.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/U.S.University-officials/Workshop and Interactive session with U.S. University officials_2.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/U.S.University-officials/Workshop and Interactive session with U.S. University officials_3.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/U.S.University-officials/Workshop and Interactive session with U.S. University officials_4.webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={11}>
      Students from classes XI and XII attend ICAE Global University Fair
      <Grid container spacing={2}>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_1.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_2.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_3.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_4.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_5.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_6.webp"/>
            </div>
      </Grid>
      <Grid item xs={2} md={3}>
            <div className='careerCounsellingImg'>
            <img src="../img/ICAE Global/CAE Global University Fair_7.webp"/>
            </div>
      </Grid>
      </Grid>
      </TabPanel>

      </Grid>
      </Grid>
    </Box>
  );
}
