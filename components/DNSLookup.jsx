import React from "react";

const DNSLookup = () => {
  return (
    <div className="rounded-lg border shadow-sm max-w-md mx-auto p-6 sm:p-8 ">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold ">
          DNS Lookup
        </h3>
        <p className="text-sm">
          Enter a domain name and select a TLD to perform a DNS lookup.
        </p>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <input
              type="text"
              className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter domain name"
            />
            <div className="relative inline-block w-full">
              <select
                className="flex relative h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
                defaultValue=""
              >
                <option value="" disabled>
                  Select TLD
                </option>
                <option value="com">.com</option>
                <option value="net">.net</option>
                <option value="org">.org</option>
                <option value="co">.co</option>
                <option value="conz">.co.nz</option>
                <option value="nz">.nz</option>
                <option value="in">.in</option>
                <option value="us">.us</option>
                <option value="uk">.uk</option>
                <option value="au">.au</option>
                <option value="de">.de</option>
              </select>
            </div>
          </div>
          <button
            className="inline-flex bg-blue-700 text-white items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-blue-500 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Lookup
          </button>
        </form>
      </div>
    </div>
  );
};

export default DNSLookup;
