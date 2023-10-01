import React from 'react';
import NavbarComp from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <NavbarComp />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;