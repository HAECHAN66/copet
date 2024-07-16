"use client";

import React from "react";
import Image from "next/image";
import MainContainer from "@/components/common/MainContainer";
import textTitle from "../../public/assets/comunity.svg";
import Forum from "../../public/images/Forum.png";
import Chating from "../../public/images/Chating.png";

const ComunityLayout = () => {
  return (
    <MainContainer>
      <div className="m-auto basis-2/5 w-full flex md:flex-row flex-col">
        <div className="flex flex-col md:m-auto mt-20 text-3xl md:text-4xl">
          <Image src={textTitle} alt="" width={400} height={180}
          />
        </div>
        <div className="m-auto">
          <Image src={Chating} alt="" width={286} height={31} />
        </div>
      </div>

      <div className="basis-3/5 flex flex-col md:flex-row pb-10 md:pb-40 my-3 md:my-0 mx-10 ">
        <div className="basis-2/5 flex flex-col items-center justify-center gap-5 mb-10">
          <div className="p-3 rounded-3xl rounded-bl-none bg-white shadow-2xl">
            <Image src={Forum} alt="" width={316} height={147} />
          </div>
          <div className="p-3 rounded-3xl rounded-bl-none bg-white shadow-2xl">
            <Image src={Forum} alt="" width={316} height={147} />
          </div>
        </div>
        <div className="h-full basis-3/5 text-m justify-center flex flex-col">
          <div className="flex flex-row m-auto">
            <span className="w-4/5">
            커뮤니티를 구성해 개인간의 정보 공유 및 소통공간
커뮤니티내 키워드를 중심으로 산책알바, 임시보호등의 키워드를 이용으로 편의성 증가
보호자간 채팅 서비스를 통해 커뮤니티 활용과 소통해요{". "}
            </span>
          </div>
          <div className="flex flex-row-reverse m-auto">
            <span className="w-4/5">
            동물의 현재 상태를 설명하면 해결 방법 및 주변 병원을 알려주는 상담사 챗봇
            "귄귄이"까지{"!"}
            </span>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ComunityLayout;
