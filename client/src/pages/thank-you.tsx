import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-growth-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-steel-900 mb-2">Thank You!</h1>
          <p className="text-steel-600 mb-6">
            We've received your request and will contact you within 24 hours to discuss how PartShield can protect your margins.
          </p>
          
          <div className="space-y-4">
            <Button className="w-full bg-growth-500 hover:bg-growth-600 text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule a Call Now
            </Button>
            
            <p className="text-sm text-steel-500">
              Or call us directly at <span className="font-medium">1-800-PARTSHLD</span>
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-200">
            <a href="/" className="text-growth-600 hover:text-growth-700 font-medium">
              ← Back to Home
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
