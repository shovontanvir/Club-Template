import React from "react";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassicHeader from "../../components/ClassicHeader";
import NoticeListCard from "./partials/NoticeListCard";
import { Link } from "react-router-dom";

const Notice = () => {
  const getNoticeList = () => {
    return getApiData("notice-list?page=1&searchKey=&size=5");
  };

  const { isLoading, isError, error, data } = useQuery(
    ["notice-list"],
    getNoticeList
  );

  if (isLoading) return "Loading Notices... .. .. ";
  if (isError) return error.message;

  const noticeList = data?.data?.noticePage?.notices;
  console.log(noticeList);
  const mediaPath = data?.data?.mediaPath;

  const getMonthName = (month) => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return null;
    }
  };

  return (
    <>
      <ClassicHeader headline="Club Notice" bgClass="bg-classic" />
      <section className="w-screen px-48 py-16">
        <div className="bg-about py-16 px-32">
          {noticeList.map((notice, index) => (
            <a
              href={mediaPath + notice.attachment}
              target="blank"
              key={notice.message + index}
            >
              <NoticeListCard
                date={notice.createdAt.split("T")[0].split("-")[2]}
                month={getMonthName(
                  Number(notice.createdAt.split("T")[0].split("-")[1])
                )}
                noticeText={notice.title}
                noticeBody={notice.body}
                name={notice.createdBy.name}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Notice;
