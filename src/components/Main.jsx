import CommonSection from "./Shared/CommonSection";
import arrow from "../../public/Group28.png";
import WhoWeAre from "./Sections/WhoWeAre";
import Empowering from "./Empowering";

const Main = () => {
  return (
    <section>
      {/* <WhoWeAre/> */}
      <CommonSection
        backgroundImage="Rectangle24.png"
        buttonText="Who we are"
        title="We Help To Get Solutions"
        description="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve."
        text="Learn More"
        width="395px"
        height="210px"
        bg="#343268"
        borderRadius="32px"
        left="-57px"
        bottom="-40px"
        divTitle="Our mission is simple"
        fontSize="26px"
        textColor="#fff"
        padding="47px 18px 47px 30px"
        paragraph="To provide high-quality healthcare services that are accessible, personalized, and patient-centered."
        marginTop="5px"
      />
      <CommonSection
        backgroundImage="Rectangle27-2.png"
        buttonText="Service"
        title="Empowering Health, Enriching Lives"
        description="We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness."
        text="Appointment"
        width="321px"
        height="144px"
        bg="rgba(2, 0, 67, 0.7)"
        opacity="0.7"
        borderRadius="32px"
        left="20px"
        bottom="20px"
        divTitle="Advanced Technology"
        fontSize="20px"
        textColor="#fff"
        padding="18px 18px 18px 18px"
        paragraph="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
        paragraphWidth="219px"
        marginTop="1px"
        pText="12px"
        icon={arrow}
      ></CommonSection>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-[50px] mb-[90px] md:mb-[200px]">
        <div
          className="bg-cover bg-center relative w-full lg:w-[500px] h-[400px] lg:h-[415px] rounded-md md:rounded-[32px]"
          style={{
            backgroundImage: `url('Rectangle 27-1.png')`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute lg:w-[321px] lg:h-[144px]  left-[10px] lg:left-[20px] bottom-[20px] rounded-md md:rounded-[32px]"
            style={{
              
              backgroundColor: "rgba(2, 0, 67, 0.7)",
              
            }}
          >
            <div className="p-5 md:p-[18px]"
             
            >
              <div className="relative bg-transparent">
                <h4
                  className="font-semibold"
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                 Meet
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    width: "219px",
                    marginTop: "1px",
                    color: "#FFFFFFCC",
                  }}
                >
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <img
                  src={arrow}
                  alt="Group28.png"
                  className="absolute right-[-2px] lg:right-0 bottom-[-18px] w-[48px] h-[48px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative w-full lg:w-[500px] h-[400px] lg:h-[415px] rounded-md  md:rounded-[32px]"
          style={{
            backgroundImage: `url('Rectangle27.png')`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute lg:w-[321px] lg:h-[144px]   left-[10px] md:left-[20px] bottom-[20px] rounded-md md:rounded-[32px]"
            style={{
              
              backgroundColor: "rgba(2, 0, 67, 0.7)",
             
            }}
          >
            <div className="p-5 lg:p-[18px]"
              
            >
              <div className="relative bg-transparent">
                <h4
                  className="font-semibold"
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Consultancy your health
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    width: "219px",
                    marginTop: "1px",
                    color: "#FFFFFFCC",
                  }}
                >
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <img
                  src="Group28.png"
                  alt=""
                  className="absolute right-[-2px] lg:right-0 bottom-[-18px] w-[48px] h-[48px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
