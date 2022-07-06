import PropTypes from 'prop-types';
import JsPDF from 'jspdf';
import Logo from 'src/components/LogoSign';
import BugReportIcon from '@mui/icons-material/BugReport';

import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container,
 // Tooltip,
  Button,
  styled
} from '@mui/material';
import { format } from 'date-fns';
import useAuth from 'src/hooks/useAuth';
// import Logo from 'src/components/LogoSign';
import { useTranslation } from 'react-i18next';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';

const BoxWrapper = styled(Box)(
  ({ theme }) => `
  border-radius: ${theme.general.borderRadius};
  background: ${theme.colors.alpha.black[10]};
`
);


// const LogoWrapper = styled(Box)(
//   () => `
//     width: '52px'
// `
// );

const InvoiceBody = ({ invoice }) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const LogoWrapper = styled(Box)(
    () => `
      width: '52px'
  `
  );

  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a2');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
  }

  // const [items] = useState(itemsList);

  return (
    <Container maxWidth="lg" >
      <Card
        sx={{
          p: 3,
          mb: 3,
          mr:10,
          ml:10
        }}
        width="50px"
      >
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          
        >
          <Box>
            <Typography variant="h1" gutterBottom>
              {t('Audit Report')}
            </Typography>
            <Grid item xs={12} sm={10}>
            <Grid
              container
              spacing={4}
              justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}
            >
              <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                  {t('Issued on')}:
                </Typography>
                <Typography
                  sx={{
                    pb: 2
                  }}
                  variant="h5"
                >
                  {format(invoice.issuedDate, 'dd MMMM yyyy')}
                </Typography>
                <Typography variant="h5" fontWeight="normal" color="blue">
                 Device name : ABC device
                </Typography>
                <Typography variant="h5" gutterBottom fontWeight="normal" color="blue">
                 Device Type : Software application requirements (SAR)
                    {/* • Embedded device requirements (EDR);
                    • Host device requirements (HDR); and
                    • Network device requirements (NDR). */}
                </Typography>
                <Typography variant="h5" fontWeight="normal" color="blue">
                  Device Manufacturer : Mr.Mikael Randerer
                </Typography>                
                <Typography variant="h5" fontWeight="normal" color="blue">
                  Device Version : @ABCversion.3.0.0.1
                </Typography>
              </Grid>
            </Grid>
            {/* <BoxWrapper textAlign="left" mt={1} p={3}>
              <Typography component="span" variant="h4" fontWeight="normal">
                {t('Vulnerabilities & Recommendations')}:{' '}
              </Typography>
            </BoxWrapper> */}
          </Grid>
          </Box>
          <Box display="flex" flexDirection="column">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            <Typography
              sx={{
                py: 2
              }}
              variant="h4"
            >
              {user.firstname} {user.lastname}
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              83 Laurel Lane
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight="normal">
              Fort Walton Beach, FL 32547
            </Typography>
            <Typography variant="h5" fontWeight="normal">
              New York, USA
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 4
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <Typography variant="subtitle2" gutterBottom>
              {t('Invoice for')}:
            </Typography>
            <Typography
              sx={{
                pb: 2
              }}
              variant="h5"
            >
              {invoice.clientName}
            </Typography> */}
            <Typography variant="h4" color="text.secondary">
             The concretization of an audit is materialized through a report including the various analyses
             and findings that have emerged during the audit. <br/><br/>
            </Typography>
            <Typography variant="h4" color="text.secondary">
            First of all, the report will list all the problems found.<br/>
            It will then present a series of recommendations to improve the network.<br/>
            A set of specifications including concrete projects to implement the recommendations can also be written.<br/>
            These measures should be classified according to the performance and safety gain.<br/>
            The overall action plan should evaluate the financial and human resources required to implement all these
            improvements.<br/>
            </Typography>
            <Typography variant="h4" color="text.secondary">
            <br/><br/>
            • SL 1 – Prevent the unauthorized disclosure of information via eavesdropping or casual
            exposure.<br/><br/>

            • SL 2 – Prevent the unauthorized disclosure of information to an entity actively searching
            for it using simple means with low resources, generic skills and low motivation.<br/><br/>

            • SL 3 – Prevent the unauthorized disclosure of information to an entity actively searching
            for it using sophisticated means with moderate resources, IACS specific skills and moderate
            motivation.<br/><br/>

            • SL 4 – Prevent the unauthorized disclosure of information to an entit y actively searching
            for it using sophisticated means with extended resources, IACS specific skills and high
            motivation.<br/><br/>

          </Typography>
          <BoxWrapper textAlign="left" mt={1} p={3}>
              <Typography component="span" variant="h3" fontWeight="normal" color="primary">
                {t('Vulnerabilities & Recommendations found')}:{' '}
              </Typography>
              <br/><br/>
              <Typography component="span" variant="h4" >
                <BugReportIcon/>
                    <br/>
                    Condition: 
                    <br/>
                    Authentication & identification problem, the user is not  protected and his data is open to everyone.
                    <br/>
                    Cause: 
                    <br/>
                    Absence of user identity security
                    <br/>
                    Effect: 
                    <br/>
                    The impact of authentication vulnerabilities can be very severe. Once an attacker has either bypassed authentication or has brute-forced their way into another user's account,
                    they have access to all the data and functionality that the compromised account has. If they are able to compromise a high-privileged account, such as a system administrator, they could take full control over the entire application and potentially gain access to internal infrastructure.
                    Even compromising a low-privileged account might still grant an attacker access to data that they otherwise shouldn't have, such as commercially sensitive business information. Even if the account does not have access to any sensitive data, it might still allow the attacker to access additional pages,
                    which provide a further attack surface. Often, certain high-severity attacks will not be possible from publicly accessible pages, but they may be possible from an internal page.
                    <br/>
                    Recommendation: 
                    <br/>
                        There are three common factors used for authentication: <br/><br/>
                        • Something you know (such as a password)<br/><br/>
                        • Something you have (such as a smart card)<br/><br/>
                        • Something you are (such as a fingerprint or other biometric method)<br/><br/>
            </Typography>
            <Typography component="span" variant="h4" >
              <br/>
            <BugReportIcon/>
                    <br/>
                     : <br/>
                    Risk of communication spoofing because.<br/>
                    luck of authentication when accessing APIs .<br/>
                    Cause:<br/>
                    Lack of device authentication .<br/>
                    Lack of software processes authentication when accessing APIs.<br/>
                    Effect: <br/>
                    Risk of spoofing that consists in the act of disguising a communication from an unknown source as being from a known, trusted source. 
                    Spoofing can apply to emails, phone calls, and websites, or can be more technical, such as a computer spoofing an IP address, 
                    Address Resolution Protocol (ARP), or Domain Name System (DNS) server.
                    Unauthenticated APIs are by far the worst things to detect in a public-facing API. 
                    This is especially true for APIs that handle essential business information that may 
                    contain information subject to regulatory compliance like PCI or PHI.<br/><br/>
                    Recommendation: <br/>
                    <br/>
                    Dos :<br/><br/>
                    Switch on your spam filter:<br/>
                    This will prevent most spoofed emails from coming into your inbox. <br/><br/>
                    Examine the communication:<br/>
                    If the potential spoof attack contains signs of poor grammar or unusual sentence structure, it may be an illegitimate request. 
                    Also, be sure to double-check the URL address of a website or the email sender address. <br/><br/>
                    Confirm the information:<br/>
                    If an email or call seems suspicious, send a message or make a call to the sender 
                    to confirm that the information you received is legitimate or not.<br/><br/>
                    Hover before clicking:<br/>
                    If a URL looks suspicious, hover your mouse over the link so that you’ll know exactly 
                    where the page is going to take you before you click on it.<br/><br/>
                    Set up two-factor authentication:<br/>
                     Setting up two-factor authentication is a great way to add another layer to your passcodes. 
                     However, it’s not completely foolproof, so ensure you’re considering other security precautions as well.<br/><br/>
                    Invest in cybersecurity software:<br/>
                    Installing cybersecurity software is the biggest defense when it comes to protecting yourself from scammers
                     online. If you run into trouble, download malware removal or antivirus software to protect your computer 
                     from any malicious threats or viruses. <br/><br/>
                        Don’t : <br/><br/> 
                    Don’t click unfamiliar links or downloads: <br/>
                    If a link or download file doesn’t look legitimate, refrain from clicking on them. 
                    If they’re from an attacker, they’ll usually contain malware or other viruses that can infect your computer.<br/><br/>
                    Don’t answer emails or calls from unrecognized senders: <br/>
                    If the sender is unrecognizable, don’t answer the call or email. 
                    This can help prevent any communication with a potential scammer. <br/><br/>
                    Don’t give out personal information: <br/>
                    Avoid giving out your personal and private information, such as a credit card or social security number, 
                    unless you’re sure it’s a trusted source. <br/><br/>
                    Don’t use the same password:<br/>
                    Create stronger passwords for your logins that are harder for scammers to guess.
                    Change them frequently in case a scammer gets a hold of one. Also, steer away from using the 
                    same password for most of your logins. <br/><br/>
                    </Typography>

          </BoxWrapper>
          </Grid>

        </Grid>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={4}
          >
            <Button
              
              variant="contained"
              sx={{
                mx: 2
              }}
              startIcon={<DownloadTwoToneIcon />}
              onClick={generatePDF}
            >
              {t('Download PDF')}
            </Button>
            <Button
              
              variant="outlined"
              sx={{
                mx: 2 
              }}
              startIcon={<PictureAsPdfTwoToneIcon />}
            >
              {t('Preview PDF')}
            </Button> 
          </Box>
        {/* </Tooltip> */}
      </Card>
    </Container>
  );
};

InvoiceBody.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoiceBody;
