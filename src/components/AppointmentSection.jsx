
import arrowIcon from "../../public/Arrow.png"
import Button from "./Shared/Button";

const AppointmentSection = () => {
  return (
    <div
      className="w-full h-[477px] bg-cover bg-center rounded-[48px] relative my-[160px]"
      style={{ backgroundImage: "url('/Rectangle32.png')" }}
    >
      <div
        className="absolute inset-0 rounded-[48px]"
        style={{
          background:
            "radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%)",
        }}
      >
        <div className="absolute w-[124px] h-[33px] top-[60px] right-[60px]"><img src="logo light.png" alt="" className="w-full h-full"/></div>
        <div className="w-[530px] py-[100px] pl-[60px]">
          <h1 className="text-[#FFFFF5] text-[40px] font-semibold">Get Your <br />First Appointment <br /> at 50% Off!</h1>
          <div className="flex gap-5 mt-6">
            <Button icon={arrowIcon} text="Appointment" bgColor="#FFC637" border="0" textColor="#020043"/>
            <Button icon={arrowIcon} text="Learn More" bgColor="transparent" border="#FFFFF5" textColor="#FFFFF5"/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppointmentSection;
