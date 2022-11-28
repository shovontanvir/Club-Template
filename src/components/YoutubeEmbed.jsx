import React from "react";

const YoutubeEmbed = (props) => {
  return (
    <div className="my-5 sm:my-7 md:my-8 lg:my-10 absolute inset-0">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${props.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
