import React from "react";

const useCheckMobileScreen = () => {
  const [initialRender, setInitialRender] = React.useState<boolean>(true);
  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      handleWindowSizeChange();
    }
  }, [initialRender]);

  // console.log(`height: ${height}`);
  // console.log(`width: ${width}`);

  return {
    width,
    height,
    isMobile: width < 900,
    isScreenHeightUnder375: height < 375,
    isScreenWidthHeightUnder375: width < 375 || height < 375,
    isScreenWidthHeightUnder900: width < 900 && height < 900,
  };
};

export default useCheckMobileScreen;
