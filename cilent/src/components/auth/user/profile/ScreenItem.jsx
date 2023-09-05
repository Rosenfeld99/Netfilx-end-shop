import { useEffect } from "react";
import { TbPencil } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ScreenItem = ({
  setAvatar,
  item,
  fetchItem,
  hwoWatch,
  setHwoWatch,
  getSingleScreen,
}) => {
  const nav = useNavigate();
  const onClickEdit = () => {
    {
      hwoWatch
        ? // if is hwowatch do
          (console.log("hwoWatch is true"),
          getSingleScreen(item._id),
          setHwoWatch(false),
          nav("/home")
          )
        : // if is profile manage do
          (console.log("hwoWatch is fales"),
          fetchItem(item),
          setAvatar(item.imageScreen));
    }
    console.log(item);
  };

  useEffect(() => {}, [hwoWatch]);

  return (
    <div className=" flex-col hover:text-white">
      <div
        onClick={onClickEdit}
        className=" cursor-pointer relative w-[20vw] max-w-[120px] min-w-[70px] mx-3 mt-5 rounded-md hover:border-2 overflow-hidden"
      >
        <img src={item.imageScreen} alt="avatar" />
        <div>
          {!hwoWatch && (
            <div className=" absolute top-0 bg-[#00000052] w-full h-full">
              <img
                className=" w-10 absolute top-[30%] ml-[40%] "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OOjs_UI_icon_edit-ltr-gray.svg/1024px-OOjs_UI_icon_edit-ltr-gray.svg.png"
                alt=""
              />
              {/* <TbPencil className=" text-5xl w-20 absolute top-[30%] ml-[20%] text-white" /> */}
            </div>
          )}
        </div>
      </div>
      <span className=" text-[#747474]">{item.nameScreen}</span>
    </div>
  );
};

export default ScreenItem;
