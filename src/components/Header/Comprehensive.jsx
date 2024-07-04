

const Comprehensive = () => {
    return (
        <div className="max-w-[1160px] mx-auto px-5 md:p-0 flex flex-col lg:flex-row justify-between gap-5">
        {/* left */}
        <div className="order-2 lg:order-1 bg-white lg:h-[312px] h-72 lg:flex-1 p-5 space-y-2 rounded-3xl md:mt-10 border relative">
          <h3 className="text-4xl font-semibold">90%</h3>
          <p className="text-sm">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="absolute bottom-10 right-12">
            <img src="/Group12.png" className="" alt="" />
          </div>
        </div>


       {/* middle */}
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl md:text-3xl md:text-5xl py-5 font-semibold text-center">
            Comprehensive Care <br /> for Every Patient
          </h3>
          <div className="flex flex-col md:flex-row  gap-5 ">
            <div className="bg-[#fffff5] lg:h-[216px] flex flex-col h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative">
              <div className="flex-1">
                <h3 className="text-4xl font-semibold">500+</h3>
                <p className="text-sm">Board-certified <br /> doctors</p>
              </div>
              <div className="absolute md:bottom- bottom-5 right-5 flex-1">
                <img src="/contract.png" className="" alt="" />
              </div>
            </div>
            <div className="bg-transparent md:mt-7 flex flex-col min-h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative ">
              <div className="flex-1">
                <div className="flex gap-2 items-center"><h3 className="text-4xl font-semibold">4.8</h3><img src="fi-sr-star.png" alt="" /></div>
                <p className="text-sm">Over 20,000 Patient</p>

              </div>
              <div className="absolute bottom-10 flex-1">
                <img src="Group7.png" alt="" />
              </div>
            </div>
            <div className="bg-[#fffff5] lg:h-[216px] flex flex-col h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative">
              <div className="flex-1">
                <h3 className="text-4xl font-semibold">$5000</h3>
                <p className="text-sm">Money spend for poor patient</p>
              </div>
              <div className="absolute bottom-5 right-5 flex-1">
                <img src="/Group (4).png" className="" alt="" />
              </div>
            </div>
          </div>
        </div>

  
        <div className="order-3 bg-white md:h-[312px] h-72 lg:flex-1 p-5 space-y-2 rounded-3xl md:mt-10 border relative">
          <h3 className="text-4xl font-semibold">50+</h3>
          <p className="text-sm">
            Free lession video for <br /> patient
          </p>
          <div className="absolute bottom-10 right-12">
            <img src="/Group(3).png" className="" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Comprehensive;