export async function fetchChatResponse(prompt: String, model: String) {
    const apiUrl =
      "https://openai-endpoints-60026948054.development.catalystserverless.in/server/openai_endpoints_function/chat";
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, model }),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return response.json();
    } catch (error) {
      console.error("Error fetching chat response:", error);
      throw new Error("Error fetching chat response");
    }
  }
  