"use client";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full flex justify-center h-screen">
      <ProgressBar
        visible={true}
        height="80"
        width="160"
        barColor="#6F00FF"
        borderColor="#36FFB5"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
