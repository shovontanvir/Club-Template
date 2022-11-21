import React from "react";
import ClassicBg from "../components/ClassicBg";
import News from "../components/News";

const NewsPage = () => {
  return (
    <div>
      <ClassicBg headline="News" bgClass="bg-classic" />

      <News />
    </div>
  );
};

export default NewsPage;
