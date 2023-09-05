import { useNavigate } from "react-router-dom";
import ImagesGalery from "../components/promo/ImagesGalery";
import BtnsPromo from "../components/promo/BtnsPromo";

const FoodPromo = () => {
  const nav = useNavigate();
  
  return (
    <div className=" overflow-hidden min-h-screen z-50 absolute top-0 w-full h-fuul bg-[#141414]">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div dir="rtl" className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              מהיום אוכל מזמינים גם ב-
              <span className=" text-red-600">Netflix</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              עם אפליקציית המכירה החדשה שלנו, תוכלו ליהנות מחווית צפייה מדהימה
              בסרטים ותוכניות שונות, ובנוסף, לשלב זאת עם הזמנת מגוון מוצרים
              מזינים וטעימים ממסעדות איכותיות בסביבתכם.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <ImagesGalery />
              </div>
              {/* btns promo */}
              <div>
                <BtnsPromo nav={nav} />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPromo;
