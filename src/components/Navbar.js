import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
     return (
          <div className="flex w-screen absolute fixed top-0 left-0 z-50">
               <div className="flex justify-between items-center navbar px-10 py-2">
                    <div className="flex justify-bewteen items-center">
                         <div className="w-20 h-auto">
                              <Image
                                   src="/img/logo.png"
                                   alt="logo"
                                   width={400}
                                   height={286}
                                   //  layout="responsive"
                              />
                         </div>
                         <ul className="flex items center">
                              <li className="mx-3 py-2 px-3">
                                   <Link href="/#home">
                                        <a className="uppercase text-white">
                                             home
                                        </a>
                                   </Link>
                              </li>
                              <li className="mx-3 py-2 px-3">
                                   <Link href="/#about">
                                        <a className="uppercase text-white">
                                             about
                                        </a>
                                   </Link>
                              </li>
                              <li className="mx-3 py-2 px-3">
                                   <Link href="/#rooms">
                                        <a className="uppercase text-white">
                                             rooms
                                        </a>
                                   </Link>
                              </li>
                              <li className="mx-3 py-2 px-3">
                                   <Link href="/#service">
                                        <a className="uppercase text-white">
                                             service
                                        </a>
                                   </Link>
                              </li>
                              <li className="mx-3 py-2 px-3">
                                   <Link href="/#contacts">
                                        <a className="uppercase text-white">
                                             contacts
                                        </a>
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="flex-1 flex justify-end">adf</div>
               </div>
          </div>
     );
}
