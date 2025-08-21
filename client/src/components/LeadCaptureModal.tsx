import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { useLocation } from "wouter";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'call' | 'demo';
}

export default function LeadCaptureModal({ isOpen, onClose, type }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '',
    requestType: type
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/leads', data);
      return response.json();
    },
    onSuccess: () => {
      // Track conversion event
      trackEvent(type === 'call' ? 'request_call' : 'request_demo', 'lead_generation', 'modal_form');
      
      // Invalidate leads cache
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
      
      // Show success message
      toast({
        title: "Thank you!",
        description: `We've received your ${type} request and will contact you within 24 hours.`,
      });
      
      // Close modal and redirect
      onClose();
      setLocation('/thank-you');
    },
    onError: (error) => {
      console.error('Error submitting lead:', error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitLead.mutate({ ...formData, requestType: type });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-steel-900">
            {type === 'call' ? 'Request a Call' : 'Ask for a Demo'}
          </h3>
          <button 
            onClick={onClose}
            className="text-steel-400 hover:text-steel-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="John Smith"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="ABC Manufacturing"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@abcmfg.com"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="volume">Monthly Project Volume (Optional)</Label>
              <Select onValueChange={(value) => handleInputChange('volume', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under $50K</SelectItem>
                  <SelectItem value="50k-200k">$50K - $200K</SelectItem>
                  <SelectItem value="200k-500k">$200K - $500K</SelectItem>
                  <SelectItem value="over-500k">Over $500K</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-6 flex space-x-3">
            <Button 
              type="submit" 
              disabled={submitLead.isPending}
              className="flex-1 bg-growth-600 hover:bg-growth-700"
            >
              {submitLead.isPending ? 'Submitting...' : (type === 'call' ? 'Request Call' : 'Request Demo')}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
