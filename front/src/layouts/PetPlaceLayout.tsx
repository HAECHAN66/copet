"use client";

import MainContainer from "@/components/common/MainContainer";
import React from "react";
import Image from "next/image";
import petPlacePhone from "../../public/assets/phone.svg";
import petPlace from "../../public/assets/petplace.svg";

const PetPlaceLayout = () => {
  return (
    <MainContainer>
      <div className="m-auto m-0 w-full flex flex-col md:flex-row md:mx-auto">
        <div className="my-5 md:my-auto mx-0 w-full text-left">
          
        <div className="mr-16 md:w-full flex flex-row-reverse">
          <Image
            src={petPlace}
            alt=""
            priority={true}
            width={439.54}
            height={430}
          />
          </div>
          <h2 className="text-l md:text-xl">
          반경 내에 뜨는 어플 타이용자의 프로필 상세보기 및 팔로우
          기능. 거리, 시간 기록 및 산책경로를 시각화하여 확인해요.
          </h2>
        </div>
        <div className="mr-16 md:w-full flex flex-row-reverse">
          <Image
            src={petPlacePhone}
            alt=""
            priority={true}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default PetPlaceLayout;
