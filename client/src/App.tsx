import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Checkout from "@/pages/checkout";
import NotFound from "@/pages/not-found";

import WhyCCCEdu from "@/pages/why-ccc-edu";
import BlogsResources from "@/pages/blogs-resources";
import HowItWorks from "@/pages/how-it-works";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/why-ccc-edu" component={WhyCCCEdu} />
      <Route path="/blogs-resources" component={BlogsResources} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout/:packageId" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
