"use client";
import { Button } from "@material-tailwind/react";

function Service() {
  return (
    <div className="relative flex sm:min-h-screen flex-col justify-center overflow-hidden bg-white py- sm:py-12">
      <div className="min-h-28 ">
        <div className="max-w-screen-xl mx-auto py-4 ">
          <div className="ms-4 sm:ms-0">
            <h6 className="font-bold text-start uppercase font-serif font-thin text-3xl text-gray-400">
              Our Services
            </h6>
          </div>
         

          <div className="rounded-sm overflow-hidden mt-10 relative">
            {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
            <img src="/images/Home/img_type_main.png" className="sm:w-full sm:h-[700px] h-[600px] object-center object-cover" alt="" />
            
            <div className="absolute sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/2 inset-x-0 bottom-0 h-1/2 w-full bg-gray-700/75" >
              <div className="sm:my-48 my-5 mx-20">
                <p className="font-serif italic font-thin sm:text-4xl text-2xl uppercase sm:my-16" color="white">
                  CABELO NATURAL
                </p>
                <p color="white" className="font-sans text-sm sm:mt-8 mt-3 w-full md:max-w-full lg:max-w-3xl">
                  Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleções, disponíveis em diversas texturas e cores para combinar com o seu estilo único
                </p>
                <div className="sm:mt-12 mt-3 gap-8 flex mb-5">
                  <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-[#A5775E]">FAZER MARCAÇÃO</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            <article className="hidden sm:block sm:flex bg-[#FAF3F2] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#EFEDE7] transition hover:shadow-xl">
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#FAF6F2] transition hover:shadow-xl">
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#FAF6F2] transition hover:shadow-xl">
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#EFEDE7] transition hover:shadow-xl">
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                    pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                    atque dignissimos. Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>

            <article className="flex bg-[#A5775E] transition hover:shadow-xl">
              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  
                  <h3 className="text-4xl font-serif font-sans uppercase text-white">
                    −15% DESCONTO
                  </h3>

                  <p className="mt-2 line-clamp-3 italic text-xl uppercase font-thin text-white">
                    na sua primeira visita
                  </p>

                  <p className="mt-8 line-clamp-3 text-xl text-white font-thin">
                    FAZER MARCAÇÃO
                  </p>

                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
