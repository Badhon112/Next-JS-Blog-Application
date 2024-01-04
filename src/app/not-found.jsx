import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <div className="min-h-screen">
      <h1>Not Found</h1>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
}
