import React from "react";

const CommentForm = () => {
  return (
    <form action="">
      <label htmlFor="" className="flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Your Name *"
          className="basis-full md:basis-1/2 border border-brand placeholder:text-brand font-brand my-2 md:mr-2 px-10 py-3"
        />
        <input
          type="text"
          placeholder="Your Email *"
          className="basis-full md:basis-1/2 border border-brand placeholder:text-brand font-brand my-2 md:ml-2 px-10 py-3"
        />
      </label>
      <textarea
        placeholder="Your Comment *"
        name="Your Comment"
        id=""
        cols="30"
        rows="10"
        className="w-full border border-brand placeholder:text-brand font-brand my-5 px-10 py-3"
      ></textarea>
      <button
        type="submit"
        className="border-2 border-subBrand uppercase py-3 px-8 w-full md:w-auto md:px-16 font-brand tracking-widest"
      >
        leave a comment
      </button>
    </form>
  );
};

export default CommentForm;
