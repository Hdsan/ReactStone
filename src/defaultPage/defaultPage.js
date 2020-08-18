import React from 'react';
import Header from './Header/defaultHeader';
import Footer from './Footer/defaultFooter';

function DefaultPage({ children }) {
    return (
      <>
        <Header />
          
           
           
           
           {children}

          
        <Footer />
      </>
    );
  }
  
  export default DefaultPage;