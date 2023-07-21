import Image from "next/image";
import Link from "next/link";

import { Icons } from "../Icons";

export function Logo() {
  return (
    <Link href="/" className="flex justify-start items-center">
      <Icons.logo className="w-[30px] mr-2" />{" "}
      <span className="comfortaa font-bold text-primary text-2xl mt-1">
        Cliqui
      </span>
    </Link>
  );
}
