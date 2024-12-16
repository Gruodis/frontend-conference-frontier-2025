import { ITheme } from "survey-core";
import ViteLogo from "/vite.svg";
import ReactLogo from "/react.svg";

export const lightTheme: ITheme = {
  backgroundImage: `url(${ReactLogo})`,
  backgroundImageFit: "cover", // Use enum
  backgroundImageAttachment: "fixed", // Use enum
  backgroundOpacity: 0.5,
  isPanelless: true,
  cssVariables: {
    "--sjs-general-backcolor": "#ffffff",
    "--sjs-general-forecolor": "#000000",
    "--sjs-font-pagetitle-size": "32px",
    // Add other CSS variables for light theme
  },
  themeName: "light-theme",
  colorPalette: "light",
  header: {
    height: 224,
    inheritWidthFrom: "survey", // Ensure correct value
    textAreaWidth: 400,
    overlapEnabled: false,
    backgroundImageOpacity: 1,
    backgroundImageFit: "cover", // Use enum
    logoPositionX: "left",
    logoPositionY: "top",
    titlePositionX: "right",
    titlePositionY: "bottom",
    descriptionPositionX: "right",
    descriptionPositionY: "top",
  },
  headerView: "advanced",
};

export const darkTheme: ITheme = {
  backgroundImage: ViteLogo,
  backgroundImageFit: "cover", // Use enum
  backgroundImageAttachment: "fixed", // Use enum
  backgroundOpacity: 0.7,
  isPanelless: true,
  cssVariables: {
    "--sjs-general-backcolor": "rgba(56, 10, 83, 1)",
    "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
    "--sjs-font-pagetitle-size": "32px",
    // Add other CSS variables for dark theme
  },
  themeName: "dark-theme",
  colorPalette: "dark",
  header: {
    height: 224,
    inheritWidthFrom: "survey", // Ensure correct value
    textAreaWidth: 400,
    overlapEnabled: false,
    backgroundImageOpacity: 1,
    backgroundImageFit: "cover", // Use enum
    logoPositionX: "left",
    logoPositionY: "top",
    titlePositionX: "right",
    titlePositionY: "bottom",
    descriptionPositionX: "right",
    descriptionPositionY: "top",
  },
  headerView: "advanced",
};
