import * as React from "react"

const FolderIcon = (props) => (
  <svg
    width={16}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.08 4.3v8.667a.722.722 0 0 1-.722.723h-13a.722.722 0 0 1-.722-.723V3.578h13.722a.722.722 0 0 1 .722.723ZM8.157 2.135H.636v-.722a.722.722 0 0 1 .722-.723h5.355l1.444 1.445Z"
      fill={props.fill}
    />
  </svg>
)

export default FolderIcon
