import React from "react";
import Button from "../components/Button";
import ClassicBg from "../components/ClassicBg";
import FoodnBeverage from "../components/FoodnBeverage";

const FoodnBeveragesPage = (props) => {
  return (
    <div>
      <ClassicBg headline={props.headline} bgClass={props.bgClass} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8 md:py-16">
        {props.dummy.map((item) => (
          <div className="group p-5">
            <FoodnBeverage image={item.image} name={item.name}>
              <div className="flex justify-center sm:justify-end">
                {item.name.includes("Bar") ? null : (
                  <Button name="Menu" class="m-2 bg-brand" />
                )}
                <Button name="Order" class="m-2" />
              </div>
            </FoodnBeverage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodnBeveragesPage;
