import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <div className="min-h-screen">
      <div className="gradient text-white min-h-screen flex items-center">
        <div className="container mx-auto p-4 flex flex-wrap items-center">
          <div className="w-full md:w-5/12 text-center p-4"></div>
          <div className="w-full md:w-7/12 text-center md:text-left p-4">
            <div className="text-6xl font-medium">404</div>
            <div className="text-xl md:text-3xl font-medium mb-4">
              <img
                className=" w-96 h-96"
                src="https://www.google.com/search?q=image&oq=image&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIMCAEQABhDGIAEGIoFMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTISCAQQABhDGIMBGLEDGIAEGIoFMhIIBRAAGBQYgwEYhwIYsQMYgAQyEggGEAAYFBiDARiHAhixAxiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABDIHCAkQABiABNIBBzg2N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#vhid=Q53WJiavu6IJtM&vssid=l"
                alt="Not Found"
              />
              Oops. This page has gone missing.
            </div>
            <div className="text-lg mb-8">
              You may have mistyped the address or the page may have moved.
            </div>
            <Link href="/" className="border border-white rounded p-4">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
