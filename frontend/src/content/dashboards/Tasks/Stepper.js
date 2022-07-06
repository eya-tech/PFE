/* eslint-disable camelcase */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slide from '@mui/material/Slide';
import useRefMounted from 'src/hooks/useRefMounted';
import axios from 'axios';

// import CloseIcon from '@mui/icons-material/Close';

import {
    CardHeader,
    IconButton,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    DialogActions
} from '@mui/material';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import PDFViewerGlobal from "./PDFViewer";

// import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function VerticalLinearStepper({fr,cr,tests}) {

  
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep1, setActiveStep1] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  // const [testsLength, setTestsLength] = React.useState([])


  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const isMountedRef = useRefMounted();

  // eslint-disable-next-line no-unused-vars
  const getVulnerability = React.useCallback(async (id) => {
   // try {
      const response = await axios.get(`http://localhost:5000/vulnerability/${id}`);
     // if (isMountedRef.current) {
        return response.data.vulnerability
     // }
    //   return false ;
    // } catch (err) {
    //   console.error(err);
    // }
  }, [isMountedRef]);

  const [vulnerabilities,setVulnerabilities] = React.useState([])
  
  const [checkedState, setCheckedState] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [checkedList, setCheckedList] = React.useState([]);
  
  const handlefinished = () =>{
      // if (index === fr.length - 1 )
        checkedList.map(async (table) => {
          // if(table.includes(id)){
            console.log(table)
            if (!table.includes(true)){
              //  if (!Object.values(table).includes(true)){
              let res 
              // eslint-disable-next-line no-unused-vars
              res = await getVulnerability(table.id_cr)
              // console.log(res)
              // declare a variable [vulnerabilities,setVulnerabilities] = React.useState([])
              setVulnerabilities(vulnerabilities => [{...res} , ...vulnerabilities])
              // console.log("vulnerabilities : ",vulnerabilities)
 
            }
            
            // console.log(res)
        })
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }

  const handleChangeOpen = () => {
    setOpen(true);
  };

  const handleChangeClose = () => {
    setOpen(false);
  };


  // eslint-disable-next-line no-unused-vars
  const setTestLength = (test) => {
    // while (i < 1){
      if(checkedState.length === 0){
        setCheckedState(new Array(test.testsList.length).fill(false))
        // setCheckedList(list => [new Array(test.testsList.length).fill(false),...list])
        // if(index_fr === 0 && index_cr === 0){
        // console .log(index_cr, index_fr)
        // setTestsLength(testL => [...testL, test.testsList.length])
        // }
      // break
      }
      // console.log("last index of point " ,test.testsList[index_test]
                                              // .lastIndexOf("."))
      // let level=""


    // }
  }

  const handleChange = (index_test,index_cr,id_cr,event,test) => {

      // setCheckedState(new Array(test.testsList.length).fill(false))

      let newChecked = checkedState.map((state,i) =>
        {if(i === index_test){
            return event.target.checked
        }
        return state;}
        // i === index ? event.target.checked : state
      );
      console.log(newChecked,test.testsList.length);
      setCheckedState(newChecked);

      let newCheckedList = checkedList.map((state,i) => {
          if(i === index_cr){
              return [id_cr,...newChecked]
          }
          return state
      })
      setCheckedList(newCheckedList);
      
      console.log("CheckedList",checkedList);

      // l new checked ywali fi bblaset l 9dim li houwa 
      // identifier bl index cr
  
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleReset1()
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  };
  const handleNext1 = async (id_cr,index) => {
    // eslint-disable-next-line no-alert
    setCheckedList(list => [[id_cr,...checkedState],...list])
    // console.log("checkedList",checkedList);

    console.log("checkedState",checkedState,index);

    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
    // setCheckedState([])

    // if(!checkedState.includes(true)){
    //   await getVulnerability(id)
    // }
    // naamel test si l id taa cr mawjoud fil grand table wela 
    // naamel loop bel index taa l cr mawjoud
    // 5ater l id fl table l kbir bch yji bdhbt maa l indice taa l cr mawjoud
    // triee 
    // nadi l index taa l cr bch naamel table[index cr].include(id_cr)

   // if(checkedList && !checkedList[index].includes(id)){

    // console.log(checkedList);
  };

  const handleBack1 = () => {
    setActiveStep1((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset1 = () => {
    setActiveStep1(0);
  };

  return (
    // <ThemeProvider theme={theme}>
    <Box style={{ backgroundColor : 'white' }}>
        <CardHeader
        sx={{
          px: 0,
          pt: 0
        }}
        action={
          <Tooltip arrow title='Refresh list'>
            <IconButton size="small" color="primary" onClick={handleReset}>
              <RefreshTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title='Auditing your device using IEC 62443-4-2 standard'
        />
      <Box mx={4.5}>
       <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor : 'white' }}>
        {fr && fr.map((_fr, index_fr) => (
          <Step key={_fr.name}>
            <StepLabel
              optional={
                index_fr === fr.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              variant="h4"
            >
              <Typography variant="h3">{_fr.name}</Typography> 
            </StepLabel>
            <StepContent>
              {/* begin of cr stepper */}
              <Tooltip arrow title='Refresh list'>
                <IconButton size="small" color="primary" onClick={handleReset1}>
                  <RefreshTwoToneIcon />
                </IconButton>
              </Tooltip>
              <Stepper activeStep={activeStep1} orientation="vertical" style={{ backgroundColor : 'white' }}>
                { cr && cr.map((_cr, index_cr) => (
                  _cr.id_fr._id === _fr._id &&
                  <Step key={_cr.name}>
                    <StepLabel
                      optional={
                        index_cr === cr.length - 1 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                      variant="h5"
                    >
                    <Typography variant="h4">{_cr.name}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography >{_cr.description}</Typography>
                      <Box sx={{ display: 'flex' }}>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                          <FormGroup>
                            { tests  && tests.map((test) =>
                              { 

                                return  _cr._id === test.id_cr._id ? test.testsList.map((tst,index_test) => {
                                   if (checkedState.length===0 && index_test === 0){
                                    return setCheckedState(new Array(test.testsList.length).fill(false)) 
                                   }
                                   // setTestLength(test,index_test,index_cr,index_fr)
                                   console.log(checkedState)
                                   return checkedState.length > 0 ? 
                                      <div key={index_test}><FormControlLabel
                                       // key={index}
                                         control={
                                         <Checkbox
                                            checked={checkedState[index_test]}
                                            onChange={(event) => handleChange(index_test,index_cr,_cr._id,event,test)}
                                            name={tst}
                                            // onClick={() => console.log("clicked : ",tst,checkedState[index_test])}
                                            id={tst}
                                            // value={tst}
                                         />
                                         }
                                         label={tst} 
                                         />
                                         <Box px={1} pt={3}
                                          hidden={index_test !== test.testsList.length || checkedState.length === 0}
                                         >
                                         <TextField
                                           // key={index}
                                           label='Additional informations'
                                           multiline
                                           placeholder='Write here any additional informations you might have...'
                                           fullWidth
                                           minRows={3}
                                           maxRows={8} />
                                       </Box>
                                       </div>
                                     : null
                                }
                                ) : null
                              }
                            )
                            
                            }
                              <Box px={1} pt={3}>
                                <TextField
                                  label='Additional informations'
                                  multiline
                                  placeholder=
                                    'Write here any additional informations you might have...'
                                  fullWidth
                                  minRows={3}
                                  maxRows={8}
                                />
                              </Box>
                          </FormGroup>
                        </FormControl>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={()=>handleNext1(_cr._id,index_cr)}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index_cr === cr.length - 1 ? 'Finish' : 'Continue'}
                          </Button>
                          <Button
                            disabled={index_cr === 0}
                            onClick={handleBack1}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                          {/* <Button
                              onClick={handleChangeOpen}
                              sx={{ mt: 1, mr: 1 }}
                              variant="contained"
                            >
                              Preview Results
                          </Button> */}
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
        
              {cr && activeStep1 === cr.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed</Typography>
                  <Button onClick={handleReset1} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
              {/* end of cr stepper */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button 
                    variant="contained"
                    onClick={() => index_fr === fr.length - 1 ? handlefinished(): handleNext()}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index_fr === fr.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index_fr === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
       </Stepper>
        {activeStep === fr.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;ve finished</Typography>
            {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} variant="contained" >
              Generate Report
            </Button> */}
            <Button
               onClick={handleChangeOpen}
               sx={{ mt: 1, mr: 1 }}
               variant="contained"
            >
              Preview Results
            </Button>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
                  <Dialog
                      fullScreen
                      maxWidth="md"
                      open={open}
                      onClose={handleChangeClose}
                      TransitionComponent={Transition}
                    >
                      <DialogTitle
                        sx={{
                          p: 0
                        }}
                      >
                        {/* <IconButton
                          edge="start"
                          color="inherit"
                          onClick={handleChangeClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton> */}
                        <DialogActions
                              sx={{
                                p: 0
                              }}
                            >
                              <Button color="error" onClick={handleChangeClose} sx={{ mr: 4}}>
                                Exit
                              </Button>
                        </DialogActions>
                        {/* <Typography sx={{ ml: 2 }} component="div" variant="h4" gutterBottom>
                          Your Auditing Results
                        </Typography> */}
                      </DialogTitle>
                            <DialogContent
                              dividers
                              sx={{
                                p: 0
                              }}
                            >
                              <Grid container >
                                <Grid item xs={12}>
                                    <PDFViewerGlobal text="hello world" vulnerabilities={vulnerabilities}/>
                                </Grid>
                              </Grid>
                            </DialogContent>
                            {/* <DialogActions
                              sx={{
                                p: 1
                              }}
                            >
                              <Button color="error" onClick={handleChangeClose} sx={{ mr: 4}}>
                                Exit
                              </Button>
                            </DialogActions> */}
                    </Dialog>
          </Paper>
        )}
      </Box>
    </Box>
    // </ThemeProvider>
  );
}