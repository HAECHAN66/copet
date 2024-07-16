"use client";

import React from "react";
import Image from "next/image";
import CommonButton from "@/components/common/CommonButton";
import MainContainer from "@/components/common/MainContainer";
import PhoneImage from "../../public/images/DownPhone.png";

const DownLoadLayout = () => {
  return (
    <MainContainer>
      <div className="w-full h-full flex flex-row">
        <div className="basis-1/2 w-full text-left md:p-5 m-auto">
          <h2 className="text-5xl">
          반려동물의
            <br />
            모든 것 어디서?
          </h2>
          <h1 className="text-7xl">코펫에서!</h1>
          <div className="flex flex-row">
            <CommonButton>버튼</CommonButton>
            <CommonButton>버튼2</CommonButton>
          </div>
          <section>QR코드</section>
        </div>
        <div className="basis-1/2 h-auto m-0 p-0 flex flex-col-reverse items-center">
          <Image src={PhoneImage} priority={true} alt="" width={516} />
        </div>
      </div>
    </MainContainer>
  );
};

export default DownLoadLayout;
