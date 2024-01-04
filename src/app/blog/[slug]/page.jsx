"use client";
import Link from "next/link";
import React from "react";
import image from "./image.jpg";
export default function SlugPage() {
  return (
    <div className="min-h-screen w-full">
      <section className="text-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <img src="./image.jpg" alt="" />
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold dark:text-white">
              Our Blog
            </h2>
            <p className="font-light  sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
