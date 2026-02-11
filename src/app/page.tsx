"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">Homepage</h1>
      <Button
        variant="default"
        onClick={() => {
          console.log("Button to click korchi bhai");
        }}
      >
        Click me
      </Button>
    </main>
  );
};

export default page;
