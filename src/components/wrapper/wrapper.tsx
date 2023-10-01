import React from 'react';
import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;