import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ECJJA</title>
        <meta name="description" content="East Coast Jiu Jitsu Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="md:mx-20 lg:mx-40 pt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
