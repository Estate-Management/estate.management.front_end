"use client";
import React from "react";
import { Hourglass, Vortex, RotatingTriangles} from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <RotatingTriangles
  visible={true}
  height="150"
  width="150"
  color="#fedb2c"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    {/* <Vortex
  visible={true}
  height="120"
  width="120"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  /> */}
      {/* <Hourglass
        visible={true}
        height="60"
        width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={[" #fedb2c", "#f49518"]}
      /> */}
    </div>
  );
};

export default Loading;