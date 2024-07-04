

const Textimonial = () => {
    return (
        <div className="w-full">
            <div>
            <button className="bg-[#FFFFF5] rounded-[25px] border border-[#343268] w-[139px] h-[43.399px] text-[#020043] mb-[15px]">Testimonial</button>
            <h1 className="text-[#020043] font-semibold text-2xl md:text-[36px] mb-4">What they say about us</h1>
            </div>
            <div className="flex flex-col lg:flex-row w-full">
                <div className=" h-full md:h-[241px] p-3  bg-white md:w-[360px]">
                    <h4 className="md:w-[290px] text-[19px] text-[#020043] font-semibold mb-3">Expertise and Compassion Combined</h4>
                    <p className="text-[#4D4C7B] text-[12px] w-full md:w-[331px] mx-auto">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className="flex gap-3 items-center mt-5">
                        <img src="Ellipse 10.png" alt="" />
                        <div>
                            <h5 className="text-[#020043] text-[12px] font-medium">Sarah D, <span className="font-normal text-[#4D4C7B]">IT Professional</span></h5>
                            <div className="flex">
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full md:h-[241px] p-3  bg-white md:w-[371px]">
                    <h4 className="md:w-[290px] text-[19px] text-[#020043] font-semibold mb-3">Life-Saving Care, Life-Changing Experience</h4>
                    <p className="text-[#4D4C7B] w-full md:w-[331px] mx-auto text-[12px]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className="flex gap-3 items-center mt-5">
                        <img src="Ellipse 10 (1).png" alt="" />
                        <div>
                            <h5 className="text-[#020043] text-[12px] font-medium">Michael R, <span className="font-normal text-[#4D4C7B]">Business Executive</span></h5>
                            <div className="flex">
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-full md:h-[241px] p-3  bg-white md:w-[371px]">
                    <h4 className="md:w-[290px] text-[19px] text-[#020043] font-semibold mb-3">A Partner in Health and <br></br> Wellness</h4>
                    <p className="text-[#4D4C7B] text-[12px] w-full md:w-[331px] mx-auto flex flex-wrap">As a busy professional, I appreciate the convenience and quality of care I receive at<br/> [Healthcare Provider Name].<br/> From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                    <div className="flex gap-3 items-center mt-5">
                        <img src="Ellipse 10 (2).png" alt="" />
                        <div>
                            <h5 className="text-[#020043] text-[12px] font-medium">David S,<span className="font-normal text-[#4D4C7B]">Lawyer</span></h5>
                            <div className="flex">
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            <img src="Vector.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[35px] md:mt-[40px]"><img src="Frame 11.png" alt=""/></div>
        </div>
    );
};

export default Textimonial;