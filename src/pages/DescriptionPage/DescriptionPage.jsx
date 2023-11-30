import React from "react";
import ClassicHeader from "../../components/ClassicHeader";

const DescriptionPage = ({ headline, url }) => {
  return (
    <>
      <ClassicHeader headline={headline} bgClass="bg-classic" />

      <div className="flex flex-col sm:flex-row px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-28 relative ">
        {/* <div className="basis-1/4">
          <div className="after:absolute after:h-full relative after:left-4 after:border-2 after:-top-4 after:border-brand after:opacity-50 after:w-1/2 sm:after:w-full">
            <img
              src={history.image}
              alt="person avatar"
              className="w-1/2 sm:w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div> */}
        <div className=" sm:pl-16 mt-5 sm:mt-0 flex flex-col justify-between">
          <div className="text-justify">
            <p
              className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base"
              //   dangerouslySetInnerHTML={{ __html: history.history }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a
              ipsum corrupti dolorem vero impedit veniam natus repellat
              provident corporis odit, suscipit dolore porro eaque, officiis
              alias beatae, nostrum voluptas exercitationem doloremque ea
              aliquam? Dolorum vitae commodi iure, velit, placeat id natus
              repellendus incidunt asperiores mollitia ut officia illum tempore
              libero consectetur amet vero provident quisquam culpa aliquid
              rerum perspiciatis esse accusantium temporibus. Veniam placeat
              nihil, minus ad at eius harum aspernatur ea non voluptate
              assumenda voluptates minima quia unde, atque aliquam error totam
              commodi nemo beatae velit? Id nisi asperiores nulla accusamus
              maiores, quasi culpa sunt porro ipsum? Laborum dolore vero quos
              tempora obcaecati harum dicta illum nostrum praesentium
              perspiciatis dolores qui nesciunt recusandae quas, quisquam
              suscipit excepturi sunt facilis. Reprehenderit tempora nihil
              similique ab voluptatem voluptatum ut ipsa quibusdam dolorem.
              Veniam magni accusantium impedit at cum. Possimus laboriosam unde
              voluptas, repudiandae, vitae aperiam reprehenderit sequi nostrum
              quae dolores tempora, mollitia cumque repellat ex eaque officia
              obcaecati aspernatur non in. Tempore ex excepturi accusantium
              sapiente, quae optio, atque delectus dolor, ullam reiciendis magni
              tenetur! Obcaecati repudiandae sequi saepe maxime numquam
              voluptatibus illo cum eius dicta perspiciatis odit reiciendis odio
              modi cupiditate labore impedit, molestias officia provident ipsa
              in magnam, optio laudantium ducimus animi. Sit esse aliquid vitae
              laboriosam deserunt sint maxime quo velit exercitationem rerum
              asperiores iste sapiente, provident eveniet consequatur alias eius
              officia fugiat omnis itaque quisquam hic quasi. Labore consequatur
              voluptas alias qui. Suscipit consectetur velit magni ipsam dolore,
              vitae blanditiis qui eligendi, cupiditate, laboriosam veritatis
              nisi?
            </p>

            <br />
            <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam
              ipsam corporis. Dolor laudantium consequuntur libero quos
              provident repudiandae natus similique omnis velit quo rerum unde
              ducimus doloribus reiciendis, dicta voluptas eius incidunt, illum
              minima ratione suscipit officia autem. Fuga, commodi enim illo
              facilis recusandae delectus sequi adipisci ratione animi vero
              ipsum reprehenderit dolore, natus cum libero assumenda ab ipsa
              est, velit atque qui asperiores dolor. Minus at possimus ut
              ratione nulla laboriosam alias quasi impedit magni delectus
              similique molestias suscipit soluta, illo officiis asperiores in?
              Repudiandae saepe unde id quam repellat molestiae? Rerum, cum!
              Reiciendis distinctio totam assumenda optio harum, sunt tenetur
              provident rerum saepe similique consequuntur! Ipsa in ea voluptate
              optio debitis, accusamus repellendus? Sit, in ipsam quidem
              corrupti aliquam nam fuga, perspiciatis exercitationem, est
              suscipit repudiandae. Dolorem non enim nihil architecto veritatis?
              Magni aspernatur illum, quaerat mollitia numquam molestiae, enim
              voluptatum quibusdam modi doloremque id, quam ea.
            </p>
            <br />
            <p className="font-poppins font-extralight text-[#6A6E71] mt-2 leading-7 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae nostrum, quasi impedit eos, commodi deserunt sapiente
              enim aut dolor vitae voluptatibus voluptate odit quos atque quidem
              voluptates tempora! Accusantium perferendis est tenetur illum quae
              inventore expedita veniam laboriosam nihil quo illo fuga,
              laudantium dignissimos ut recusandae ducimus quas excepturi
              maiores ad facilis obcaecati animi voluptatum! Alias debitis
              voluptates saepe vel aliquid aliquam dolor explicabo, aperiam
              nulla quas eligendi? Quos, quam cumque eius officia perspiciatis
              sunt!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionPage;
