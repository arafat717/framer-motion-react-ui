import bannerOne from "../../assets/photos/banner-part-1.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-5">
      <div className="grid grid-cols-[65%_35%] justify-between gap-5">
        <div>
          <img src={bannerOne} alt="" />
        </div>
        <div className="">
          <h1>card</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
