import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "./partials/NewsCard";

const News = () => {
  const getNewsList = () => {
    return getApiData("news");
  };
  const { isLoading, isError, error, data } = useQuery(
    ["news-list"],
    getNewsList
  );

  if (isLoading) return "Loading... ... ...";
  if (isError) return error.message;

  const news = data;
  return (
    <>
      <ClassicHeader headline="News" bgClass="bg-classic" />

      <div className="flex flex-wrap px-4 sm:px-8 md:px-12 lg:px-16 xl:p-32">
        {news.map((news, index) => (
          <NewsCard
            venue={news.venue}
            date={news.date}
            newsHeadline={news.newsHeadline}
            image={news.image}
            key={news.newsHeadline + index}
          />
        ))}
      </div>
    </>
  );
};

export default News;
