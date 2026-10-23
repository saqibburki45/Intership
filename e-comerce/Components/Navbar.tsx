import React from "react";
import Link from "next/link";
import { Handbag, Heart, UserRound } from "lucide-react";
export default function Navbar(): React.ReactElement {
  interface InterfaceNav {
    id: number;
    title: string;
    path: string;
  }
  const navLinks: InterfaceNav[] = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Child", path: "/child" },
    { id: 3, title: "Womens", path: "/womens" },
    { id: 4, title: "Mens", path: "/mens" },
  ];

  return (
    <div className="flex  justify-between p-4">
      <div>
        <span className="font-black text-amber-300 text-2xl  text-italic hover:cursor-pointer hover:text-white ">
        </span>
        <ul className="flex gap-3">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.path}>
                <li className="lg:grid hidden font-black text-amber-300 hover:cursor-pointer hover:text-white">
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-3">
        <span className="bg-black rounded-full p-5 lg:p-6">
          <Heart />
        </span>
        <span className="bg-black rounded-full p-3 lg:p-4">
            <Handbag  size={40} strokeWidth={2}  className="bg-white rounded-full text-black p-2" />
        </span>
        <span className="bg-black rounded-full p-5 lg:p-6">
          <UserRound />
        </span>
      </div>
    </div>
  );
}
