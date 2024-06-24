"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function AboutUS() {
  return (
    // <section>
        <div className="grid grid-cols-5 bg-[#FAF6F2]">
          <div className="col-span-2">
            <img
              alt=""
              src="/images/Home/img_submain.png"
              className="object-contain"
            />
          </div>

          <div className="col-span-3 my-auto mx-48  divide-dashed px-8">
            <article className="space-y-4 text-gray-600">
              <h2 className="text-2xl font-medium">About US</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
              </p>
            </article>
          </div>
        </div>
    // </section>
  );
}
export default AboutUS;
