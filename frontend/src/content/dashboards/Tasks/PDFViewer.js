/* eslint-disable no-unused-vars */
import React from "react";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";

// import PDFViewerContainer from "./PDFViewerContainer";
// import PdfViewerComponent from "./PdfViewerComponent";

// import "./styles.css";
// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });

const styles = StyleSheet.create({
  page: {
    margin:"auto",
    width: "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
    border:3 
    // backgroundImage: 'logo_layer8.jpg', /* The image used */
    // backgroundColor: "#cccccc", /* Used if the image is unavailable */
    // height: "500px", /* You must set a specified height */
    // backgroundPosition: "center", /* Center the image */
    // backgroundRepeat: "no-repeat", /* Do not repeat the image */
    // backgroundSize: "cover", /* Resize the background image to cover the entire container */
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'blue',
   // border: "solid",
    textDecoration: "underline overline #FF3028",
  }, 
  title_:{
    color : "blue",
    fontWeight: "bold",

  } ,
  title__:{
    color : "red",
    fontWeight: "bold",

  } ,
  summary: {
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    color: 'red',
    width: "100%",
 },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  image: {
    width: "50%",
    padding: 10
  },
  centerImage: {
    alignItems: "center",
    flexGrow: 1
  },
  text: {
    width: "100%",
    // backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "#212121"
  },
  text_: {
    width: "100%",
    // backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "black"
  },
  level: {
    width: "100%",
    // backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "red"
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }
});



export default function PDFViewerGlobal ({vulnerabilities,reachedLevel}){
  const MyDocument  = () =>(
    <Document>
      <Page  size="A4" style={styles.page}>
        {/* <View style={styles.centerImage}>
          <Image style={styles.image} src="/pspdfkit-logo.png" />
        </View> */}
        <Text style={styles.header} fixed>
          ~ Auditing Results ~
        </Text>
        <Text style={styles.title}> Audit Report </Text>
        <Image
          style={styles.image}
          src="/static/images/placeholders/covers/logo_layer8.png"
        />
        {/* <Image
          style={styles.image}
          src="/static/images/placeholders/covers/logo_.png"
        /> */}
        <Text style={styles.summary}> Summary of what a report is ? </Text>
        
        <Text style={styles.text}>
        The concretization of an audit is materialized through a report including the various analyses
        and findings that have emerged during the audit. 
        </Text>
        <Text style={styles.text}>
        First of all, the report will list all the problems found.
        It will then present a series of recommendations to improve the network.
        A set of specifications including concrete projects to implement the recommendations can also be written.
        These measures should be classified according to the performance and safety gain.
        The overall action plan should evaluate the financial and human resources required to implement all these
        improvements.
        </Text>
        <Text style={styles.text}>
        The associated four SLs are defined as:
        </Text>
        <Text style={styles.text}>
            • SL 1 – Prevent the unauthorized disclosure of information via eavesdropping or casual
            exposure.
        </Text>
        <Text style={styles.text}>
            • SL 2 – Prevent the unauthorized disclosure of information to an entity actively searching
            for it using simple means with low resources, generic skills and low motivation.
        </Text>
        <Text style={styles.text}>
            • SL 3 – Prevent the unauthorized disclosure of information to an entity actively searching
            for it using sophisticated means with moderate resources, IACS specific skills and moderate
            motivation.
        </Text>
        <Text style={styles.text}>
            • SL 4 – Prevent the unauthorized disclosure of information to an entit y actively searching
            for it using sophisticated means with extended resources, IACS specific skills and high
            motivation.
        </Text>
        <Text style={styles.level}>
        {reachedLevel}
        </Text>
        <div style={styles.text}>
        { vulnerabilities && vulnerabilities.map((vulnerability,index) =>
        
        <div key={index}>
          <Text style={styles.title__}>
            Vulnerability N° {index + 1} details:
          </Text>
          <Text style={styles.title_}>
              ----------------------------------------------------------
          </Text>
          <Text style={styles.title_}>
              CONDITION:
          </Text>
          <Text style={styles.text_}>
              {vulnerability.condition}
          </Text>
          <Text style={styles.title_}>
              CAUSE:
          </Text>
          <Text style={styles.text_}>
              {vulnerability.cause}
          </Text>
          <Text style={styles.title_}>
              EFFECT:
          </Text>
          <Text style={styles.text_}>
              {vulnerability.effect}
          </Text>
          <Text style={styles.title_}>
              RECOMMENDATION:
          </Text>
          <Text style={styles.text_}>
              {vulnerability.recommendation}
          </Text>
        </div>
    ) 
    }
        </div>


        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} 
        fixed />
      </Page>
    </Document>
  );
  return (
    // <BlobProvider document={MyDocument}>
    // {({ blob, url, loading, error }) => {
    //  console.log(blob)
    //   if (blob) {
    //     // return <PSPDFKit blob={blob} />;
    //     return <PdfViewerComponent document={blob} />
    //   }

    //   if (error) {
    //     return error;
    //   }

    //   return <div>The PDF is rendering...</div>;
    // }}
    // </BlobProvider>
    <>
    <PDFViewer width="100%" height="100%" style={{height: '690px'}}>
      <MyDocument/>
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="Audit_Report.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : <Button
                                                // sx={{ mt: 1, mr: 1 }}
                                                // color="warning"
                                              >
                                                Download Now !
                                           </Button>
      }
    </PDFDownloadLink>

    </>
    // <div>
    //   <PDFViewerContainer document={document} />
    // </div>
  )
}
// // Render the PDF using React DOM
// ReactDOM.render(
    
// //     create a dialog that contain the pdf ( dialog that call other component)
// //     or to render it in other page ?? how ?? 
// //     pass the needed info to MyDocument variable
// //     the other component contains the blob provider and MyDoc var also 
// //     call this component in stepper component (in dialog) and pass documents as props

//   <BlobProvider document={MyDocument}>
//     {({ blob, url, loading, error }) => {
//       if (blob) {
//         return <PSPDFKit blob={blob} />;
//       }

//       if (error) {
//         return error;
//       }

//       return <div>The PDF is rendering...</div>;
//     }}
//   </BlobProvider>,
//   document.getElementById("root")
// );
