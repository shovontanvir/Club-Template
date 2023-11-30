import React from "react";
import ClassicHeader from "../../../components/ClassicHeader";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import MemberItem from "../../../components/MemberItem";
const ElectionBoard = ({ url }) => {
  const getBoardMemebers = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["election-board", url],
    getBoardMemebers
  );

  if (isLoading) return "Loading data... ... ";
  if (isError) return error.message;

  const chairman = data.data.boards[0].boardMembers.filter(
    (member) => member.layer === 1
  );

  const members = data.data.boards[0].boardMembers.filter(
    (member) => member.layer === 2
  );
  console.log(chairman);

  const mediaPath = data.data.mediaPath;

  return (
    <>
      <ClassicHeader
        headline={`${data.data.boards[0].boardType} (${data.data.boards[0].electionYear})`}
        bgClass="bg-classic"
      />
      <div className="flex flex-wrap my-3 sm:my-5 lg:my-1 px-1 justify-center">
        <div className="w-full flex justify-center items-center">
          <div className="overflow-hidden relative group basis-1/2 md:basis-1/4 p-1 m-2">
            <MemberItem
              image={mediaPath + chairman[0].image}
              name={chairman[0].name}
              role={chairman[0].designation}
              memberId={chairman[0].clubAcNo}
              mobile={chairman[0].mobile}
            />
          </div>
        </div>
        {members?.map((member, index) => (
          <div
            className="overflow-hidden relative group basis-1/2 md:basis-1/5 p-1 md:m-2"
            key={member.name + index}
          >
            <MemberItem
              image={mediaPath + member.image}
              name={member.name}
              role={member.designation}
              memberId={member.clubAcNo}
              mobile={member.mobile}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ElectionBoard;
