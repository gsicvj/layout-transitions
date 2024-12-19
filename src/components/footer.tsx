"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getActiveClassName } from "../app/utilities/helper-functions";
import { Link } from "next-view-transitions";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        <span className={getActiveClassName(pathname, "/")}>Index</span>
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/other"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        <span className={getActiveClassName(pathname, "/other")}>Other</span>
      </Link>
    </footer>
  );
}
