const Footer = () => {
  return (
    <footer className="px-[166px] py-[120px] bg-[#020043] mt-[160px]">
      <div>
        <div>
          <img src="logo light.png" alt="" />
        </div>
        <div className="flex flex-col lg:flex-row text-[#FFFFF5]/70 mt-[33px] gap-[130px]">
          <div className="w-[297px] ">
            <p>
              123 Main Street Anytown, USA Postal Code: 12345 <br />
              <br />
              Support: support@oyolloo.com (Available : 10:00am to 07:00pm)
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Success Page</a>
              </li>
              <li>
                <a href="">Terms and Condition</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Scheduling</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Patient Portal</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h5>Follow Us</h5>
            <div className="mb-10 mt-3">
             <img src="/social.png" alt=""  className="w-full "/>
            </div>
            <small className="capitalize ">@docplus 2024</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
