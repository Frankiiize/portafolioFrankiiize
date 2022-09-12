import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const DefaultLayout = ({children}) => {
  return ( 

    <div className="windowContainer">
      <Header />
      {children}
      <Footer />
    </div>

  )
}

export { DefaultLayout };