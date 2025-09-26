import AboutMe from "../components/AboutMe";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <AboutMe />
      <div className="flex justify-center mt-6">
        <Link
          href="/"
          className="bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
