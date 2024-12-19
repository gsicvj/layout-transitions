import Header from "../../components/header";
import Footer from "../../components/footer";
import { Code } from "bright";
import AnimatedImage from "../../components/AnimatedImage";

Code.theme = "github-dark";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-center">
        <h1 className="text-xl">Other page</h1>
        <AnimatedImage
          src="/undraw_reading.svg"
          alt="Undraw reading icon"
          width={320}
          height={320}
        />
        <Code lang="py" title="phone.py" lineNumbers>
          print("phones are cool")
        </Code>
      </main>
      <Footer />
    </div>
  );
}
