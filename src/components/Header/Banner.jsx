

const Banner = () => {
    return (
        <div className="w-full h-[300px] md:h-[470px] bg-cover bg-center rounded md:rounded-[48px] relative"
        
        style={{backgroundImage:"url('/Rectangle5.png')"}}>
            <div className="absolute inset-0 rounded-md md:rounded-[48px]"
            style={{background:'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)'}}
            >

            </div>
            
        </div>
    );
};

export default Banner;