import FolderIcon from "../assets/icons/FolderIcon";
import EmailIcon from "../assets/icons/EmailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import TringleIcon  from "../assets/icons/TringleIcon"

import pngReact from "../assets/icons/png/react.png";
import pngHtml5 from "../assets/icons/png/html5.png";
import pngCss from "../assets/icons/png/css.png";
import pngJavaScript from "../assets/icons/png/javascript.png";
import pngTailwind from "../assets/icons/png/tailwind.png";
import pngExpress from "../assets/icons/png/express.png";
import pngFirebase from "../assets/icons/png/firebase.png";
import pngJquery from "../assets/icons/png/jquery.png";
import { IconComponent } from "../components/IconComponent";



export const iconList = [
  {
    folderRed: <FolderIcon fill={'#E99287'} />,
    folderGreen: <FolderIcon fill={'#43D9AD'} />,
    folderPurple: <FolderIcon fill={'#3A49A4'} />,
    emailIcon: <EmailIcon />,
    phoneIcon: <PhoneIcon />,
    tringleIcon: <TringleIcon />,

   
  },
 
];

export const newIconList = [
  {
    reactIcon: <IconComponent src={pngReact} alt={"icon-React.js"}/>,
    htmlIcon: <IconComponent src={pngHtml5} alt="html5 icon-check"/>,
    cssIcon: <IconComponent src={pngCss} alt="css icon-check"/>,
    vanillaJsIcon: <IconComponent src={pngJavaScript} alt="javascript icon-check"/>,
    tailwindIcon: <IconComponent src={pngTailwind} alt="tailwind icon-check"/>,
    expressIcon: <IconComponent src={pngExpress} alt="express icon-check"/>,
    firebase: <IconComponent src={pngFirebase} alt="express icon-check"/>,
    jquery: <IconComponent src={pngJquery} alt="express icon-check"/>,
  }
]
