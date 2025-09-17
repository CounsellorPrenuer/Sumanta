import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Checkout from "@/pages/checkout";

import WhyCCCEdu from "@/pages/why-ccc-edu";
import CorporateParentingWellbeing from "@/pages/corporate-parenting-wellbeing";
import BlogsResources from "@/pages/blogs-resources";
import BlogPost from "@/pages/blog-post";
import HowItWorks from "@/pages/how-it-works";
import Contact from "@/pages/contact";
import ThankYou from "@/pages/thank-you";
import AdminBookings from "@/pages/admin-bookings";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import ButtonDemo from "@/pages/button-demo";
import CookieConsent from "@/components/cookie-consent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/why-ccc-edu" component={WhyCCCEdu} />
      <Route path="/corporate-parenting-wellbeing" component={CorporateParentingWellbeing} />
      <Route path="/blogs-resources" component={BlogsResources} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/admin/bookings" component={AdminBookings} />
      <Route path="/checkout/:packageId" component={Checkout} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/button-demo" component={ButtonDemo} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
