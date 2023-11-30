import React from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import MemberItem from "../../../components/MemberItem";

const Committe = ({ url, heading }) => {
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

  const committee = data?.data?.memberPage?.members;
  // console.log(committee);

  return (
    <div className="md:pt-20">
      <h1 className="font-brand text-subBrand text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-32">
        {heading}
      </h1>
      <div className="flex flex-wrap my-3 sm:my-5 lg:my-1 px-1 justify-center">
        {committee?.map((member, index) => (
          <div
            className="overflow-hidden relative group basis-1/3 sm:basis-1/4 md:basis-1/5 p-1"
            key={member.name + index}
          >
            <MemberItem
              image={member.image}
              name={member.name}
              role={member.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committe;
