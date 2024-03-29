const styles = {
    boxWidth: "xl:max-w-[1040px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    Pricingh2: "font-HKGroteskPro-serif  font-normal leading-snug   indent-0.5 text-[2.3rem] text-[rgba(22,28,45,1)] ",
    PricingP:  "text-[1.3rem] font-[400px] text-lightdark font-HKGroteskPro-serif leading-snug  indent-0.5 text-center  mb-[1rem]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    PricingCard: "w-[500px] rounded-md border-solid ",
    PricingBadge: "bg-primary bg-opacity-[0.1] text-primary w-[100px] text-center rounded-2xl pb-1 ",

    FooterA: "mb-4 text-lg font-HKGroteskPro-serif  text-[rgb(120,137,170)]",
    FooterH1: "text-sm mb-[10px] text-lightdark",
  };

  export const animation = {
    lift: "box-shadow: 0 0 0 rgba(22,28,45,0)",
    transition: "box-shadow .25s ease,transform .25s ease"
  }
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY} `,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    
  };
  
  export default styles;