import React from "react";
import Button from "../../components/shared/Button";
import resume from "../../assets/resume/kazi_towfiq_web_developer_resume.pdf";
const HeroHeader = () => {
  const downloadPdf = () => {
    const pdfUrl = "kazi_towfiq_web_developer_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-between w-full pt-8 items-center h-[12%]">
      <img
        src="./assets/logo.png"
        alt=""
        className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%]"
      />
      <div>
        <a href={resume} download="kazi_towfiq_web_developer_resume">
          <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white text-white text-[10px] md:text-base px-5 py-1">
            RESUME
            {/*  kazi_towfiq_web_developer_resume */}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
