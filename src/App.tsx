import React, { Suspense } from "react";
import "./App.scss";
import Routes from "./routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  );
}

export default App;
