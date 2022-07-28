/* eslint-disable no-unused-vars */
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function VerticalLinearStepper({fr,cr,tests,deviceInfo}) {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep1, setActiveStep1] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const SL1 = 12;
  const SL2 = 4;
  const SL3 = 5;

  const [slLevel, setSlLevel] = React.useState([])
  const [reachedLevel, setReachedLevel] = React.useState()

  const[counterSL1,setCounterSL1] = React.useState(0);
  const[counterSL2,setCounterSL2] = React.useState(0);
  const[counterSL3,setCounterSL3] = React.useState(0);

  const isMountedRef = useRefMounted();

  const getVulnerability = React.useCallback(async (id) => {
      const response = await axios.get(`http://localhost:5000/vulnerability/${id}`);
      return response.data.vulnerability

  }, [isMountedRef]);

  const [vulnerabilities, setVulnerabilities] = React.useState([])
  
  const [checkedState, setCheckedState] = React.useState([]);

  const [checkedList, setCheckedList] = React.useState([]);

  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

  const calculateLevel = () => { 
    slLevel.forEach(levels => 
      {
        setCounterSL1(counterSL1 => countOccurrences(levels,"SL1") + counterSL1)
        setCounterSL2(counterSL2 => countOccurrences(levels,"SL2") + counterSL2)
        setCounterSL3(counterSL3 => countOccurrences(levels,"SL3") + counterSL3)
      }
    )
  };

  // this.calculateLevel()

  const handlefinished = () =>{
        checkedList.map(async (table) => {
            if (!table.includes(true)){
              //  if (!Object.values(table).includes(true)){
              let res 
              res = await getVulnerability(table[0])
              setVulnerabilities(vulnerabilities => [{...res} , ...vulnerabilities])
            }
        })
        
        calculateLevel()

        if (counterSL3 === SL3){
          console.log("SL3",counterSL3)
          setReachedLevel("Gongratulations, your device reached the higher security level, security level 3 is accomplished and we are working for security level 4, we will keep you updated.")
        }
        else 
        if (counterSL2 === SL2){
          console.log("SL2",counterSL2)
          setReachedLevel("Security level 2 reached, here you find some recommendations to improve your security to reach a higher level.")
          // async await to get recommendations to improve the SL
        }
        else 
        if(counterSL1 === SL1){
          console.log("SL1",counterSL1)
          setReachedLevel("Security level 1 reached, here you find some recommendations to improve your security to reach a higher level.")
        }
        else{
          setReachedLevel("Security level 0, there are gaps in your device, here you find the vulnerabilities found and the recommendations to fix it,in purpose to improve your security to reach a higher level.")
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChangeOpen = () => {
    if (counterSL3 === SL3){
      console.log("SL3",counterSL3)
      setReachedLevel("Gongratulations, your device reached the higher security level, security level 3 is accomplished and we are working for security level 4, we will keep you updated.")
    }
    else 
    if (counterSL2 === SL2){
      console.log("SL2",counterSL2)
      setReachedLevel("Security level 2 reached, here you find some recommendations to improve your security to reach a higher level.")
      // async await to get recommendations to improve the SL
    }
    else 
    if(counterSL1 === SL1){
      console.log("SL1",counterSL1)
      setReachedLevel("Security level 1 reached, here you find some recommendations to improve your security to reach a higher level.")
    }
    else{
      setReachedLevel("Security level 0, there are gaps in your device, here you find the vulnerabilities found and the recommendations to fix it,in purpose to improve your security to reach a higher level.")
    }
    setOpen(true);
  };

  const handleChangeClose = () => {
    setOpen(false);
  };

  const setTestLength = (test,index_test,id_cr,index_cr) => {
      if(index_test === 0 && checkedState.length === 0){
        setCheckedState(new Array(test.testsList.length).fill(false))
        if(checkedList.length === 0){
          setCheckedList(list => [...list,[id_cr,...new Array(test.testsList.length).fill(false)]])
          setSlLevel(list => [...list,[...new Array(test.testsList.length).fill(0)]])
        }
      }
  };

  const handleChange = (index_test,level,index_cr,id_cr,event) => {

      let newChecked = checkedState.map((state,i) =>
        {if(i === index_test){
            return event.target.checked
        }
        return state;}
        // i === index ? event.target.checked : state
      );
      setCheckedState(newChecked);

      let newCheckedList = checkedList.map((state,i) => {
        if(i === index_cr){
          let newState = state.map((state1,index1) => {
            if(index1 === index_test + 1 ){
              return event.target.checked
            }
          return state1
          })
          return [...newState]
        }
        return state
      })
      setCheckedList(newCheckedList);

      let newLevel = slLevel.map(((state2,index2) =>{
        if(index2 === index_cr){
          let newLevelState = state2.map(((state3,index3) =>{
            if(index3  === index_test ){
              // checkedList[index2][index3 + 1] === true ? level : state3
              console.log(event.target.checked , level)
              if(event.target.checked === true){
                return level
              }
              return 0
            }
            return state3
          }))
          return [...newLevelState]
        }
        return state2
      })
        
      )
      setSlLevel(newLevel)
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleReset1()
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setCheckedState([])
    setCheckedList([])
    setActiveStep(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext1 = async (id_cr,index) => {
    setActiveStep1((prevActiveStep) => prevActiveStep + 1);
    setCheckedState([])
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
        style={{ background : 'linear-gradient(to right, #D8D8D8 50%, #BEBEBE 80%)',borderRadius : '15px' ,opacity: "0.5"}}
        title= {deviceInfo &&  (
          <div 
          style={{marginLeft:'100px'}}
          >
          <Typography variant="h3">
            <b style={{color:"red",textDecoration:"underline"}}>Name :</b> {deviceInfo.name} {" "} {" "} {" "} , {" "} {" "} {" "}
            <b style={{color:"red",textDecoration:"underline"}}>Type :</b> {deviceInfo.type} {" "} {" "} {" "} , {" "} {" "} {" "} <br/>
            <b style={{color:"red",textDecoration:"underline"}}>Manufacturer :</b> {deviceInfo.manufacturer} {" "} {" "} {" "} , {" "} {" "} {" "}
            <b style={{color:"red",textDecoration:"underline"}}>Version :</b> {deviceInfo.version}
          </Typography>
          </div>
          )}
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
                                   setTestLength(test,index_test,_cr._id,index_cr)
                                   return checkedState.length > 0 ? 
                                      <div key={index_test}><FormControlLabel
                                         control={
                                         <Checkbox
                                            checked={checkedList[index_cr][index_test + 1 ]}
                                            onChange={(event) => handleChange(index_test,tst[1],index_cr,_cr._id,event)}
                                            name={tst[0]}
                                            // onClick={() => console.log("clicked : ",tst,checkedState[index_test])}
                                            id={tst[0]}
                                            // value={tst}
                                         />
                                         }
                                         label={tst[0]} 
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
                            )}
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
                        <DialogActions
                              sx={{
                                p: 0
                              }}
                            >
                              <Button color="error" onClick={handleChangeClose} sx={{ mr: 4}}>
                                Exit
                              </Button>
                        </DialogActions>
                      </DialogTitle>
                            <DialogContent
                              dividers
                              sx={{
                                p: 0
                              }}
                            >
                              <Grid container >
                                <Grid item xs={12}>
                                    <PDFViewerGlobal vulnerabilities={vulnerabilities} reachedLevel={reachedLevel} />
                                </Grid>
                              </Grid>
                            </DialogContent>
                    </Dialog>
          </Paper>
        )}
      </Box>
    </Box>
    // </ThemeProvider>
  );
}