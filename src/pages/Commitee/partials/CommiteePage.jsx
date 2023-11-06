import React from "react";
import MemberItem from "../../../components/MemberItem";
import { useQuery } from "@tanstack/react-query";
import { getApiData } from "../../../Services/apiFunctions";

const CommiteePage = ({ url }) => {
  // query data
  const getCommitteeMembers = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["committee-members"],
    getCommitteeMembers
  );

  if (isLoading) return "Loading Data... ... ...";
  if (isError) return error.meassage;

  const committee = data;
  console.log(committee);
  return (
    <div className="flex flex-wrap flex-row items-center justify-center">
      {committee.map((item) => (
        <div className="overflow-hidden relative group basis-1/3 sm:basis-1/4 p-1">
          <MemberItem
            name={item.name}
            role={item.role}
            image={item.image}
            key={item.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CommiteePage;
