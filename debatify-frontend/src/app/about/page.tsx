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
        <h1 className="text-4xl font-bold mb-4" > About Debatify </h1>
        < p className="text-lg text-gray-700 mb-6" >
          Debatify is a platform dedicated to enabling individuals to voice their opinions
          on issues ranging from a simple household matter to global politics.
          Whether you're a student, enthusiast, or professional, we aim to provide the tools
          and environment you need to sharpen your skills and engage in meaningful discussions.
        </p>
        < p className="text-lg text-gray-700" >
          Built by a passionate team of developers and thinkers, Debatify is designed
          to be intuitive, powerful, and inclusive.
        </p>
      </div>
    </div>
  );
}
