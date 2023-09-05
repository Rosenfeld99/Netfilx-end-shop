import { useForm } from "react-hook-form";
import City from "../../../../components/components/register/address/City";
import Street from "../../../../components/components/register/address/Street";
import ZipCode from "../../../../components/components/register/address/ZipCode";
import Enterance from "../../../../components/components/register/address/Enterance";
import Num from "../../../../components/components/register/address/Num";
import Phone from "../../../../components/components/register/address/Phone";
import Btn from "./Btn";
import useShop from "../../../../hooks/useShop";
import useScreen from "../../../../hooks/useScreen";
import useUser from "../../../../hooks/useUser";

const Form = ({ singleAddress }) => {
  const { user } = useUser();
  const { singleScreen } = useScreen();
  const { handelrAddAddress, handelrEditAddress, handelrGestAddress } =
    useShop();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(user);

  const onSubmit = (bodyData) => {
    {
      user
        ? ((bodyData.userId = user?._id),
          (bodyData.screenId = singleScreen?._id))
        : null;
    }
    {
      singleAddress ? (bodyData.addressId = singleAddress._id) : null;
    }
    {
      user
        ? singleAddress
          ? handelrEditAddress(bodyData)
          : handelrAddAddress(bodyData)
        : handelrGestAddress(bodyData);
    }
    console.log(bodyData);
    // handelrAddAddress(bodyData);
  };
  console.log(singleAddress);

  return (
    <div
      dir="rtl"
      className="py-10 flex mt-14 sm:mt-[100px] items-center justify-center flex-col min-h-screen"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[#000000d4] p-10 rounded-lg max-w-md p-30 rounded-6  "
      >
        <h1 className="py-5 text-white text-3xl font-bold">
          {singleAddress ? " עריכת כתובת" : "הוספת כתובת"}
        </h1>
        {/* city */}
        <City register={register} singleAddress={singleAddress} />
        {errors.city && (
          <span className="text-red-500">{errors.city.message}</span>
        )}

        <div className=" flex gap-3">
          {/* street */}
          <div>
            <Street register={register} singleAddress={singleAddress} />
            {errors.street && (
              <span className="text-red-500">{errors.street.message}</span>
            )}
          </div>

          {/* zipCode */}
          <div>
            <ZipCode register={register} singleAddress={singleAddress} />
            {errors.street && (
              <span className="text-red-500">{errors.zipCode.message}</span>
            )}
          </div>
        </div>

        <div className=" flex gap-3">
          {/* entrance */}
          <div>
            <Enterance register={register} singleAddress={singleAddress} />
            {errors.entrance && (
              <span className="text-red-500">{errors.entrance.message}</span>
            )}
          </div>

          {/* num  */}
          <div>
            <Num register={register} singleAddress={singleAddress} />
            {errors.num && (
              <span className="text-red-500">{errors.num.message}</span>
            )}
          </div>
        </div>

        {/* num  */}
        <Phone register={register} singleAddress={singleAddress} />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        {/* Btn contriler */}
        <Btn singleAddress={singleAddress} />
      </form>
    </div>
  );
};

export default Form;
