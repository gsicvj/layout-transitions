import Image from "next/image";
import { Link } from "next-view-transitions";

export default function Header() {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
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
        Index
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
        Other
      </Link>
    </header>
  );
}
