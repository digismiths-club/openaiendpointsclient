import React from "react";

const OutputDNS = () => {
  return (
    <div className="px-16 md:py-6 py-2 bg-zinc-200 rounded-lg border shadow-sm max-w-md mx-auto md:p-6 p-2 sm:p-8 md:min-w-96">
      <div className="result flex flex-col gap-4">
        <h3 className="text-xl font-bold">Output</h3>
        <div className="result_content bg-white p-4 text-sm rounded-lg">
          <p>Domain: example.com</p>
          <p>IP Address: 192.168.1.1</p>
          <p>DNS Server: 8.8.8.8</p>
          <p>Lookup Time: 50ms</p>
        </div>
      </div>
    </div>
  );
};

export default OutputDNS;
