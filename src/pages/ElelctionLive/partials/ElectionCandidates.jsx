import React from "react";
import MemberItem from "../../../components/MemberItem";
import { useQuery } from "@tanstack/react-query";
import { getApiData } from "../../../Services/apiFunctions";
import ClassicHeader from "../../../components/ClassicHeader";

const ElectionCandidates = ({ headline, url }) => {
  const getCandidates = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["candidate-list", url],
    getCandidates
  );

  if (isLoading) return "Loading data... ... ";
  if (isError) return error.message;

  const candidates = data.data.candidates;
  console.log(candidates);

  const mediaPath = data.data.mediaPath;

  return (
    <>
      <ClassicHeader headline={headline} bgClass="bg-classic" />
      <div className="flex flex-wrap my-3 sm:my-5 lg:my-1 px-1 justify-center">
        {candidates?.map((member, index) => (
          <div
            className="overflow-hidden relative group basis-1/2 md:basis-1/5 p-1 md:m-2"
            key={member.name + index}
          >
            <MemberItem
              image={mediaPath + member.image}
              name={member.name}
              role={`Ballot No - ${member.ballotNumber}`}
              //   memberId={member.clubAcNo}
              mobile={member.mobile}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ElectionCandidates;
