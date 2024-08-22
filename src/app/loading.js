"use client";
import React from "react";
import { Hourglass } from "react-loader-spinner";

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
      <Hourglass
        visible={true}
        height="60"
        width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={[" #fedb2c", "#f49518"]}
      />
    </div>
  );
};

export default Loading;