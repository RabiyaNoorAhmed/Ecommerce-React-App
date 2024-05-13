import PaymentIcons from '../../assets/images/icons.png'
const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className="bg-Black flex justify-between align-center px-16">
        <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
        <img src={PaymentIcons} className="items-center py-3 hidden md:block"/>
        <p className="text-white items-center py-3 px-1 cursor-pointer">Scroll To Top</p>
      </div>
    );
  };
  export default FooterBottom


  

