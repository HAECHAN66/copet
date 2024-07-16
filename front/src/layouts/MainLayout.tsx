"use client";

import MainContainer from "@/components/common/MainContainer";
import backComponents from "../../public/images/Image.png";
import React from "react";

interface Props {
  onClick: () => void;
}
const MainLayout = ({ onClick }: Props) => {
  return (
    <MainContainer>  
    <div className="text-6xl mt-40 text-center">
      <div className="flex">
        <h1 className="font-bold m-auto items-center">반려동물</h1>
        <h1 className="m-auto items-center">의</h1>
      </div>
      <h1 className="text-white bg-black rounded-full" > # 유대감</h1>
      <div className="flex justify-center">
        <h1 className="font-bold">코펫</h1>에서
      </div>
    </div>
      <button
        className="w-64 p-4 pb-4 m-auto border border-solid border-black bg-white text-black rounded-full shadow-lg "
        onClick={onClick}
      >
        지금 시작하기
      </button>
    </MainContainer>
  );
};

export default MainLayout;
