import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import https from "../../http";
import { fetchProfileAction } from "../../store/action/profile";
import { GET_PROFILES } from "../../store/utils";

const Profiles = (props) => {
  const profiles = useSelector((state) => state.profiles) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction());
  }, []);

  //   const fetchProfiles = async () => {
  //     const res = await https.get("/profile");
  //     const { data } = res;
  //     dispatch({ type: GET_PROFILES, payload: data });
  //   };

  return (
    <>
      {profiles.map((val) => {
        return <div>{val.name}</div>;
      })}
    </>
  );
};

export default Profiles;
