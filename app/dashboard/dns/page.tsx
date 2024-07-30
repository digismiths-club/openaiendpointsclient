"use client";
import React, { useEffect } from "react";
import DNSLookup from "@/components/DNSLookup";
import OutputDNS from "@/components/OutputDNS";

function page() {
  useEffect(() => {
    const apiUrl =
      "https://openai-endpoints-60026948054.development.catalystserverless.in/server/test_func_/adding?num1=5&num2=2";
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex justify-center items-center h-full w-full">
      <DNSLookup />
      {/* <OutputDNS /> */}
    </div>
  );
}

export default page;
