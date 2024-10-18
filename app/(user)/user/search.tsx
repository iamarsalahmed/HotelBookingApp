"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// "use client";
// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

interface SubscribeSectionProps {
  onSearch: (searchTerm: string) => void;
}

const SubscribeSection = () => {

  return (
    <div className="flex items-center justify-center mt-5 bg-gray-100 p-4">
      <div className="flex w-full max-w-lg items-center space-x-2">
        <Input
          type="text"
          placeholder="Your City Name"
          className="max-w-screen-xl px-4 py-2 border rounded-md text-gray-700"
        />
        <Button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SubscribeSection;
