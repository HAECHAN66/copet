"use client";

import React from "react";
import Image from "next/image";
import MapImage from "../../public/images/Map.png";
import MainContainer from "@/components/common/MainContainer";

const MapLayout = () => {
  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row w-full items-center justify-center">
        <div className="basis-1/2 md:mb-10 ">
            <Image
              src={MapImage}
              alt=""
              priority={true}
              width={367.49}
              height={769.72}
            />
        </div>
        <div className="basis-1/2 m-auto items-center justify-center text-right">
            반경 내에 뜨는 산책 거리와 시간 기록 및 경로를 시각화하여 정보 제공.
        </div>
      </div>
    </MainContainer>
  );
};

export default MapLayout;
