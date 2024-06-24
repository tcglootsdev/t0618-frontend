"use client";

function Instagram() {
  return (
    <section id="contact">
      <div className="container max-w-screen-xl bg-white sm:py-12">
        <div className="justify-between sm:py-12 py-4">
          <h6 className="font-bold text-start uppercase font-serif font-thin text-3xl text-gray-400">
            Follow us on Instagram
          </h6>
        </div>
        <div className="bg-[#FAF6F2] w-full sm:flex grid-flow-col">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] sm:object-cover sm:mb-1 mb-4"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover sm:block hidden"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover "
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover sm:block hidden"
          />
        </div>
        <div className="bg-[#FAF6F2] w-full">
          <div className="pt-12">
            <p className="uppercase text-5xl italic font-thin font-serif text-center mb-8 text-[#84635C]">Follow us</p>
            <p className="text-[#84635C] text-2xl uppercase font-thin font-serif text-center">ON INSTAGRAM and other social networks</p>
            <div className="flex gap-2 text-center place-content-center mt-8 pb-24">
              <button className="uppercase bg-[#84635C] text-white p-4">Instagram</button>
              <button className="uppercase bg-white text-[#84635C] p-4 border-solid-[#84635C]">Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
