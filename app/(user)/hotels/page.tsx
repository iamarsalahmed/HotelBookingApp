import "../../globals.css";
import React, { useState } from "react";
import SubscribeSection from "../user/search";
import { hotels } from "../user/data";
import { Card } from "../user/card";
import { Navbar } from "../user/navbar";

export default async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <>
      <div className="mt-5">
        <div className="">
          <SubscribeSection />
        </div>
        <Card hotels={hotels} />
      </div>
    </>
  );
};
