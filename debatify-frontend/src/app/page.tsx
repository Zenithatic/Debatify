import Image from "next/image";
import { Nav } from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import EventCard from "./components/EventCard/EventCard";

export default function Home() {
  const sampleEvent = {
    title: "Midnight Madness",
    date: "April 10, 2025",
    location: "Downtown Toronto",
    image: "/events/midnight.jpg", // Make sure this exists in /public/events/
    description: "A night of lights, beats, and unforgettable memories.",
    details: "Starts at 10PM. 19+ event. BYOB. Bring your wild side.",
  };

  return (
    <div>
      <Navbar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <Search />
        <EventCard event={sampleEvent} />
      </div>
    </div>
  );
}
