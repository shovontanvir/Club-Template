import React from "react";
import ClassicHeader from "../../components/ClassicHeader";
import { getApiData } from "../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import ECMemberList from "./partials/ECMemberList";

const ECMembers = ({ headline, url }) => {
  const getMembersList = () => {
    return getApiData(url);
  };

  const { isLoading, isError, error, data } = useQuery(
    ["members"],
    getMembersList
  );

  if (isLoading) return "Loading Data...";
  if (isError) return error.meassage;

  const members = data;
  return (
    <>
      <ClassicHeader headline={headline} bgClass="bg-classic" />
      <div className="px-10">
        {members.map((member) => (
          <ECMemberList
            name={member.name}
            image={member.image}
            role={member.role}
            details={member.details}
          />
        ))}
      </div>
    </>
  );
};

export default ECMembers;
