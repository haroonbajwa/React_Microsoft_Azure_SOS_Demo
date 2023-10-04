import { LogLevel } from "@azure/msal-browser";

// Configuration object to be passed to MSAL instance on creation.
export const msalConfig = {
  auth: {
    clientId: "185e506a-a2e8-427e-a7dd-4b1dbb13e699",
    authority: "https://login.microsoftonline.com/consumers",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

// Scopes you add here will be prompted for user consent during sign-in.
// By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add here the scopes to request when obtaining an access token for MS Graph API.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
