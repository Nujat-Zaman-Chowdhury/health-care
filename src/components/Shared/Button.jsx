

const Button = ({text,icon,bgColor,textColor,border}) => {
    return (
        <button className={`w-[174px] h-[48px] rounded-[12px] font-medium flex justify-center items-center gap-2`}
        style={{
            backgroundColor:bgColor,
            color:textColor,
            border:border? `1px solid ${border}`: 'none'
        }}
        >{text}
        {icon && <img src={icon} alt="" />}
        </button>
    );
};

export default Button;