import Image from "next/image";
import { Nav } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <Search />
      </div>
    </div>
  );
}
