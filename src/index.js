import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.REACT_APP_ENABLE_LOGGING_SERVICE) {
  console.log(process.env.REACT_APP_ENABLE_LOGGING_SERVICE);
  Sentry.init({
    dsn: "https://022ce63c7ff946c0b564e7b91f5dead7@o219755.ingest.sentry.io/5816430",
    integrations: [new Integrations.BrowserTracing()],
    environment: process.env.NODE_ENV,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
