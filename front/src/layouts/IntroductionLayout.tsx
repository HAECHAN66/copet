"use client";
import MainContainer from "@/components/common/MainContainer";
import Whatiscopet from "../../public/assets/whatisCopet.svg";
import React from "react";

const IntroductionLayout = () => {
  return (
    <MainContainer>
      <div className="m-auto">
        <h1 className="text-6xl font-bold"> 코펫이란 무엇인가? </h1>
        <h1 className="text-4xl m-2">반려동물과 보호자를 위한 어플{"!"}</h1>
        <h2>
        반려동물을 키우는 사용자들끼리 지식과 경험을 공유하고, 소통할 수 있는 커뮤니티 플랫폼.
        사용자들이 서로 도움을 주고 받으며, 반려동물에 대한 애정과 책임을 공유할 수 있도록 합니다.
        </h2>
      </div>
    </MainContainer>
  );
};

export default IntroductionLayout;
