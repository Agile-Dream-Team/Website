const GlobalSettings = {
  development: {
    siteEnvironment: "Dev",
    LogRegBaseURL: "http://localhost:8080",
  },
  staging: {
    siteEnvironment: "Staging",
    // LogRegBaseURL: "https://devapp.offilawyer.com",
  },
  production: {
    siteEnvironment: "Production",
     LogRegBaseURL: "https://agiledreamteam.netlify.app/",
  },
};

export { GlobalSettings };
