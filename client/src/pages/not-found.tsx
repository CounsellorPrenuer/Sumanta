import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
            <p className="text-gray-600 mb-6">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-3">
              <Link href="/" data-testid="button-home">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => window.history.back()}
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/how-it-works" data-testid="link-how-it-works">
                  <Button variant="link" size="sm" className="text-[#D4AF37] hover:text-[#B8941F]">
                    How It Works
                  </Button>
                </Link>
                <Link href="/blogs-resources" data-testid="link-blogs">
                  <Button variant="link" size="sm" className="text-[#D4AF37] hover:text-[#B8941F]">
                    Blogs & Resources
                  </Button>
                </Link>
                <Link href="/contact" data-testid="link-contact">
                  <Button variant="link" size="sm" className="text-[#D4AF37] hover:text-[#B8941F]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
