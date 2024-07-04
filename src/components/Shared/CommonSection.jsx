import Button from "./Button";
import arrowIcon from "../../../public/Arrow.png"
const CommonSection = ({ backgroundImage,buttonText,title,description,text,width,height,borderRadius,bottom,left,bg,divTitle,fontSize,textColor,padding,paragraph,opacity,paragraphWidth,marginTop,pText,icon }) => {
  return (
    <div className="">
      <div className="my-16 md:mt-[160px] flex flex-col lg:flex-row gap-8 md:gap-[60px] bg-white">
      <div className="bg-white">
        <button className="bg-[#FFFFF5] rounded-[25px] border border-[#343268] w-[139px] h-[43.399px] text-[#020043] mb-[15px]">{buttonText}</button>
        <h1 className="lg:w-[396px] text-[#020043] font-semibold text-2xl md:text-[36px] mb-4 md:leading-[54px]">{title}</h1>
        <p className="w-full lg:w-[470px] text-[#4D4C7B] mb-[45px]">{description}</p>
        <Button icon={arrowIcon} text={text} bgColor="#FFC637" border="0" textColor="#020043"/>
      </div>
      <div className="bg-cover bg-center relative w-full rounded-md md:rounded-[32px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="absolute hidden lg:flex" style={{
            width:width,

            height:height,
            left:left,
            bottom:bottom,
            backgroundColor:bg,
            borderRadius:borderRadius,

        }}>
            <div style={{
              padding:padding,
             
            
            }}>
                <div className="relative bg-transparent">
                <h4 className="font-semibold" style={{
                  color:textColor,
                  fontSize:fontSize,
                  
                  
              }}>{divTitle}</h4>
              <p  style={{
              fontSize:pText,
                width:paragraphWidth,
                marginTop:marginTop,
                color:"#FFFFFFCC",
              }}>{paragraph}</p>
              {icon && <img src={icon} alt="" className="absolute right-[-3px] lg:right-[-50px] bottom-[-18px]"/>}
                </div>
            </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default CommonSection;
