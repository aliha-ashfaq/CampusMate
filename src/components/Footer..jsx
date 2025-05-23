const Footer = () => {
  return (
    <footer style={{background:"#155CDE",color:"white",width:"100vw"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"10px"}}>
            <h1 style={{fontSize:"28px",fontWeight:"bold",marginTop:"30px"}}>Ready to start your journey?</h1>
            <a href="" style={{padding:"13px",background:"white",color:"#155CDE",fontWeight:"bold", borderRadius:"25px",marginTop:"60px"}}>Contact Us</a>
        </div>

      <div style={{display:"flex",justifyContent:"space-between",marginTop:"35px",paddingBottom:"5px",paddingRight:"5px"}}>
        &copy; {new Date().getFullYear()} CampusMate. All rights reserved.
        <p>Privacy Policy and Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
