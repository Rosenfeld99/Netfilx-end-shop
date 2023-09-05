import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSingle from "../../hooks/useSingle";
import NotResultTrilet from "../components/watch/NotResultTrilet";
import TrilerContent from "../components/watch/TrilerContent";

const Watch = ({ setShowMenu }) => {
  const { clearSingleMovie, error, getSingle, loading, moviesSingle } =
    useSingle();

  const nav = useNavigate();
  
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    setShowMenu(false);
    clearSingleMovie();
    const keys = {
      id,type:"movie"
    }
    getSingle(keys);
    setTrailer(moviesSingle?.videos?.results[0]?.key);
  }, []);

  console.log(moviesSingle);
  //   console.log(moviesSingle?.videos?.results[0].key);

  return (
    <>
      {!trailer ? (
        <NotResultTrilet setShowMenu={setShowMenu} nav={nav} moviesSingle={moviesSingle}/>
      ) : (
        <TrilerContent nav={nav} setShowMenu={setShowMenu} moviesSingle={moviesSingle} loading={loading}/>
      )}
    </>
  );
};

export default Watch;
