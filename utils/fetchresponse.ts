'use client'
export async function fetchChatResponse(prompt: String, model: String) {
    const apiUrl =
      "https://openai-endpoints-60026948054.development.catalystserverless.in/server/openai_endpoints_function/chat";
    // const apiUrl = "https://api.restful-api.dev/objects";
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",

        },
        body: JSON.stringify({ prompt, model }),
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