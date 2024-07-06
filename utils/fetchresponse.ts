'use client'
export async function fetchChatResponse(prompt: String, model: String) {
    const apiUrl =
      "https://digismiths-api-60026948054.development.catalystserverless.in/server/digismiths_api_function/";
    // const apiUrl = "https://api.restful-api.dev/objects";
  
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        //   "Accept":"*/*",
        // },
        // body: JSON.stringify({ prompt, model }),
      });
  
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
  
      return response;
    } catch (error) {
      console.error("Error fetching chat response:", error);
      throw new Error("Error fetching chat response");
    }
  }