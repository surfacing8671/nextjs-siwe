import Link from "next/link";
export const dynamic = "force-dynamic";
// Define the Footer function
export default function Footer() {
  return (
    <div className="w-full px-6 border-b bg-black border-b-gray-700 py-2 flex justify-center  flex-row content-center items-center">
    <div className="gap-4 flex flex-row content-center items-center mr-10">
    
      <Link
        href="https://www.powertoexperience.com/"
        target="_blank"
        className="text-blue-500 hover:text-blue-600 text-center mr-20"
      >
        Built by the team PowerToExperience!
      </Link>
      </div>
    </div>
  );
}