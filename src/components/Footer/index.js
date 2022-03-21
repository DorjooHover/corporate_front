import Image from "next/image";
export default function Footer() {
     return (
          <div className="flex flex-col items-center room_wrapper">
               <div className="py-12 w-auto h-32">
                    <Image
                         src="/img/log.png"
                         alt="logo"
                         width={400}
                         height={376}
                    />
               </div>
               <p className="text-xs py-8">
                    <b>Lorem ipsum dolor sit amet consectetur.</b>
                    Lorem ipsum dolor sit.
               </p>
               <div className="flex justify-between items-center pb-8 pt-4">
                    <div className="flex">
                         <div className="w-auto h-12 mr-8">
                              <Image
                                   src="img/logo.png"
                                   alt="logo"
                                   width={400}
                                   height={376}
                              />
                         </div>
                         <div className="w-auto h-12 mr-8">
                              <Image
                                   src="img/logo.png"
                                   alt="logo"
                                   width={400}
                                   height={376}
                              />
                         </div>
                         <div className="w-auto h-12 mr-8">
                              <Image
                                   src="img/logo.png"
                                   alt="logo"
                                   width={400}
                                   height={376}
                              />
                         </div>
                         <div className="w-auto h-12 mr-8">
                              <Image
                                   src="img/logo.png"
                                   alt="logo"
                                   width={400}
                                   height={376}
                              />
                         </div>
                    </div>
                    <div className="w-auto h-12 mr-8">
                         <Image
                              src="img/logo.png"
                              alt="logo"
                              width={400}
                              height={376}
                         />
                    </div>
                    <div>
                         <ul className="flex justify-between">
                              <li>
                                   <Link href="/" />
                                   <a>lorem</a>
                              </li>
                              <li>
                                   <Link href="/" />
                                   <a>lorem</a>
                              </li>
                              <li>
                                   <Link href="/" />
                                   <a>lorem</a>
                              </li>
                              <li>
                                   <Link href="/" />
                                   <a>lorem</a>
                              </li>
                              <li>
                                   <Link href="/" />
                                   <a>lorem</a>
                              </li>
                         </ul>
                         <p className="mt-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Sequi, veniam.
                         </p>
                    </div>
               </div>
          </div>
     );
}
