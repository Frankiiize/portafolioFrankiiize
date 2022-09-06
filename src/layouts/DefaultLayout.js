import React from "react";

const DefaultLayout = ({children}) => {
  return ( 

    <div className="windowContainer">
      <div className="windowContainer__window">

        {children}
      </div>
    </div>

  )
}

export { DefaultLayout };