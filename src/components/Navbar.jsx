import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-transparent py-5 md:py-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li className="text-[#020043]"><a >Home</a></li>
        <li className="text-[#020043]"><a >Services</a></li>
        <li className="text-[#020043]"><a >Blog</a></li>
        <li className="text-[#020043]"><a >About us</a></li>
        
      </ul>
    </div>
    <Link to="/"><img src="logo dark.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#020043]">
    <li className="text-[#020043]"><a >Home</a></li>
        <li className="text-[#020043]"><a >Services</a></li>
        <li className="text-[#020043]"><a >Blog</a></li>
        <li className="text-[#020043]"><a >About us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="w-[174px] h-[48px] rounded-[12px] border border-[#343268] text-[#020043] font-medium flex justify-center items-center gap-2">Appointment <img src="Arrow.png" alt="" /></button>
  </div>
</div>
    );
};

export default Navbar;