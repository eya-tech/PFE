import React from 'react'
// Import the main component
import { Viewer, Worker } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library

export default function PDFViewerContainer ({document}){

  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const url = URL.createObjectURL(document);
  return ( 
    <div className='container'>
    <br/>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */} 
        {document && <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={url}
              plugins={[defaultLayoutPluginInstance]} />
          </Worker></>} 
      </div>

    </div>
  )
}

