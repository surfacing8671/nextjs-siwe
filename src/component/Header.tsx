"use client";

import Link from "next/link";

import { ConnectKitButton } from "connectkit";

export const dynamic = "force-dynamic";

export default function Headers() {
  return (
    <>
      <div className="w-full px-6 border-b bg-black border-b-gray-700 py-2 flex justify-center  flex-row content-center items-center">
        <div className="gap-4 flex flex-row content-center items-center">
          
        </div>
        <ConnectKitButton />
      </div>
    </>
  );
}