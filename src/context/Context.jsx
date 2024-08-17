import { createContext } from "react";
import run from "../config/gemini";

// Create the Context
const Context = createContext();

// Context Provider Component
const ContextProvider = (props) => {
  // Function to send prompt and get response
  const onSent = async (prompt) => {
    try {
      const response = await run(prompt);
      console.log(response); // Handle the response as needed
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  // Example usage of onSent (should be triggered based on user action, not directly in the provider)
  // onSent("What is React JS?");

  // Context value to be provided
  const contextValue = {
    onSent, // Exposing the onSent function to the context
    // Add more values to the context if needed
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

// Export the Context and Provider separately
export { Context, ContextProvider };
