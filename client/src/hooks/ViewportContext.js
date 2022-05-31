import React from 'react';

const ViewportContext = React.createContext({});

const ViewportProvider = (props)=> {
  const { children } = props;

  const [value, setValue] = React.useState({
    width: 0,
    height: 0,
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  });

  const updateViewportType = ()=> {
    const { innerWidth, innerHeight } = window;
    const isDesktop = innerWidth >= 1040;
    const isTablet = innerWidth < 1040 && innerWidth > 640;
    const isMobile = innerWidth <= 640;

    setValue({
      isDesktop, isTablet, isMobile, 
      width: innerWidth, height: innerHeight});
  }

  React.useEffect(()=> {
    updateViewportType();
    window.addEventListener("resize", updateViewportType);
    return ()=> window.removeEventListener("resize", updateViewportType);
  }, []);

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
}

const useViewport = ()=> {
  return React.useContext(ViewportContext);
}

export { ViewportProvider, useViewport };