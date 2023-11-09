import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import NewsCard from "./partials/NewsCard";
import facebook from "../../assets/images/globals/facebook.png";
import twitter from "../../assets/images/globals/twitter.png";
import gmail from "../../assets/images/globals/gmail.png";
import link from "../../assets/images/globals/link.png";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import newsImage from "../../assets/images/news/news.jpg";
import ReactPlayer from "react-player";
const NewsDetails = () => {
  const getNewsDeatails = () => {
    return getApiData("news-details");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["news-details"],
    getNewsDeatails
  );

  if (isLoading) return "Loading... ...";
  if (isError) return error.message;

  const newsDetails = data;
  const descriptionOne = newsDetails.description.split("(#)").shift();
  const descriptionTwo = newsDetails.description.split("(#)").pop();
  console.log(descriptionTwo);

  return (
    <>
      <ClassicHeader headline="News Details" bgClass="bg-classic" />
      <section className="bg-container bg-repeat bg-contain">
        <div className="flex flex-col items-center">
          <img src={newsDetails.headerImage} alt={newsDetails.headline} />
          <div className="w-3/4 flex flex-col items-center lg:px-10 py-8 md:py-12 text-center -mt-[10%] z-20 !bg-container bg-repeat bg-contain">
            <div className="bg-brand px-5 py-2 text-center my-5">
              <h1 className="font-poppins">{newsDetails.venue}</h1>
            </div>
            <div className="flex flex-col items-center sm:px-8 md:px-12 lg:px-16 xl:px-24">
              <h1 className="font-brand text-subBrand text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-8 md:my-16">
                Trendy paint color ideas for every room in the house
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: descriptionOne }}
                className="!text-justify"
              />
              <div className="aspect-video w-full my-16">
                {/* <YoutubeEmbed embedId="z-krSTXYshM" /> */}
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=31wzhvz0vsw"
                  width="100%"
                  height="100%"
                />
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: descriptionTwo }}
                className="!text-justify"
              />

              <div className="flex flex-wrap w-full justify-center py-5 my-10 border-y border-black border-dashed">
                <a href={newsDetails.twitterUrl}>
                  <img src={twitter} alt="twitter" className="p-3 md:p-5" />
                </a>
                <a href={newsDetails.facebookUrl}>
                  <img src={facebook} alt="facebook" className="p-3 md:p-5" />
                </a>
                <a href={newsDetails.gmailUrl}>
                  <img src={gmail} alt="gmail" className="p-3 md:p-5" />
                </a>
                <a href={newsDetails.linkUrl}>
                  <img src={link} alt="link" className="p-3 md:p-5" />
                </a>
              </div>

              <div className="w-full my-10">{/* <CommentForm /> */}</div>

              <div className="w-full py-8 md:py-16">
                <h1 className="font-brand text-subBrand text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                  You May Also Like
                </h1>
                <div className="flex flex-wrap mt-5">
                  <NewsCard
                    venue="Banani club hall room"
                    date="Dec 29, 2021"
                    newsHeadline="Trendy paint color ideas for every room in the house"
                    image={newsImage}
                  />

                  <NewsCard
                    venue="Banani club hall room"
                    date="Dec 29, 2021"
                    newsHeadline="Trendy paint color ideas for every room in the house"
                    image={newsImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
