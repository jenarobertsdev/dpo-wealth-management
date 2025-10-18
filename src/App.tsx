import { useState } from "react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExplainerVideo from "./components/ExplainerVideo";
import WhatWeDo from "./components/WhatWeDo";
import OurProcess from "./components/OurProcess";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ExplainerVideo />
      <WhatWeDo />
      <OurProcess />
    </div>
  );
}

export default App;
