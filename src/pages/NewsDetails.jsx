import React from "react";
import ClassicBg from "../components/ClassicBg";
import YoutubeEmbed from "../components/YoutubeEmbed";
import newshead from "../images/newshead.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import gmail from "../images/gmail.png";
import link from "../images/link.png";
import CommentForm from "../components/CommentForm";
import NewsDetailsThumb from "../components/NewsDetailsThumb";

const NewsDetails = () => {
  return (
    <>
      <ClassicBg headline="News Details" bgClass="bg-classic" />
      <div className="flex flex-col items-center">
        <img src={newshead} alt="news" />
        <div className="w-3/4 flex flex-col items-center lg:px-10 py-8 md:py-12 text-center -mt-[10%] z-20 bg-white">
          <div className="bg-brand px-5 py-2 text-center my-5">
            <h1 className="font-poppins">Banani club hall room</h1>
          </div>
          <div className="flex flex-col items-center sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <h1 className="font-brand text-subBrand text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-8 md:my-16">
              Trendy paint color ideas for every room in the house
            </h1>
            <p className="font-poppins text-[#6A6E71] leading-8 py-5 text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="font-poppins text-[#6A6E71] leading-8 py-5 text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout.
            </p>

            <div className="aspect-video w-full relative">
              <YoutubeEmbed embedId="z-krSTXYshM" />
            </div>

            <p className="font-poppins text-[#6A6E71] leading-8 py-5 text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived
            </p>
            <div className="flex flex-wrap w-full justify-center py-5 my-10 border-y border-black border-dashed">
              <img src={twitter} alt="twitter" className="p-3 md:p-5" />
              <img src={facebook} alt="facebook" className="p-3 md:p-5" />
              <img src={gmail} alt="gmail" className="p-3 md:p-5" />
              <img src={link} alt="link" className="p-3 md:p-5" />
            </div>

            <div className="w-full my-10">
              <CommentForm />
            </div>

            <div className="w-full py-8 md:py-16">
              <h1 className="font-brand text-subBrand text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                You May Also Like
              </h1>
              <div className="flex flex-wrap mt-5">
                <NewsDetailsThumb
                  venue="Banani club hall room"
                  date="Dec 29, 2021"
                  newsHeadline="Trendy paint color ideas for every room in the house"
                />

                <NewsDetailsThumb
                  venue="Banani club hall room"
                  date="Dec 29, 2021"
                  newsHeadline="Trendy paint color ideas for every room in the house"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
