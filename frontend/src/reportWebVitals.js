const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        if (getCLS) getCLS(onPerfEntry);
        if (getFID) getFID(onPerfEntry);
        if (getFCP) getFCP(onPerfEntry);
        if (getLCP) getLCP(onPerfEntry);
        if (getTTFB) getTTFB(onPerfEntry);
      });
    }
  };
  
  export default reportWebVitals;