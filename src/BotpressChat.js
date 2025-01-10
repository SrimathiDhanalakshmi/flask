import React, { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Inject the Botpress WebChat script
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Inject the additional script
    const customScript = document.createElement("script");
    customScript.src = "https://files.bpcontent.cloud/2025/01/06/04/20250106040533-UNE9SKYZ.js";
    customScript.async = true;
    document.body.appendChild(customScript);

    // Cleanup the scripts when the component is unmounted
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(customScript);
    };
  }, []);

  return null; // This component does not render any visible UI
};

export default BotpressChat;
