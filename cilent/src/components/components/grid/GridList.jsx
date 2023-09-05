import GridItem from "./GridItem";
import SkeletonGrid from "../animation/skeletons/SkeletonGrid";

const GridList = ({ titleList, renderMovies, loading,type }) => {
  // console.log(renderMovies);
  return (
    <>
      {!loading ? (
        <div dir="rtl" className="p-3 overflow-hidden min-h-screen">
          <p className="pt-20 pb-10 text-xl pr-2 font-bold text-white">
            {titleList}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {renderMovies?.map((item, i) => (
              <GridItem type={type} item={item} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <SkeletonGrid num={renderMovies} />
      )}
    </>
  );
};

export default GridList;
