import React from "react";
import styles from "./style";
import {
  Navbar,
  Welcome,
  Features,
  Brands,
  About,
  Testimonials,
  Stats,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "./components/index";




const App = () => {
  return (
    <div className=" bg-smoke w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>

        <div>
          <div className={`${styles.boxWidth}`}>
            <Welcome />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Features />
            <Brands />
            <About />
            <Testimonials />
            <Stats />
           
           
          </div>
        </div>
      </div>
      <Pricing />
      <FAQ/>
      <CTA />
      <Footer/>
    </div>
    
  );
};

export default App;
