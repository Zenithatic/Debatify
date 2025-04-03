// src/app/about/page.tsx
import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from '../components/Navbar/Navbar'

export const metadata = {
  title: "About Us | Debatify",
  description: "Learn more about the Debatify project and our mission.",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12" >
        <h1 className="text-4xl font-bold mb-4" > About Motives </h1>
        < p className="text-lg text-gray-700 mb-6" >
        Motives isn’t just an app — it’s your ultimate social plug. Find the wildest parties near you, link with new friend groups, and grow your network like never before. Whether you’re tryna turn up or level up, Motives keeps you in the loop and never out of the mix. Tap in and let the good times find you.
        </p>
        < p className="text-lg text-gray-700" >
          Built by a passionate team of developers and thinkers, Debatify is designed
          to be intuitive, powerful, and inclusive.
        </p>
      </div>
    </div>
  );
}
