import { useState } from 'react';
import { X, Download, FileText, User, Phone, Mail, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const downloadFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  currentStage: z.string().min(1, "Please select your current stage"),
});

type DownloadFormData = z.infer<typeof downloadFormSchema>;

interface ResourceDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    id: string;
    title: string;
    description: string;
    type: string;
    downloadUrl: string;
  } | null;
}

const stageOptions = [
  { value: 'graduates', label: 'College Graduate / Fresh Graduate', icon: GraduationCap },
  { value: 'earlycareer', label: 'Early Career Professional (0-5 years)', icon: User },
  { value: 'midcareer', label: 'Mid-Career Professional (5-15 years)', icon: TrendingUp },
  { value: 'senior', label: 'Senior Professional (15+ years)', icon: Award },
];

export default function ResourceDownloadModal({ isOpen, onClose, resource }: ResourceDownloadModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      currentStage: '',
    },
  });

  const downloadMutation = useMutation({
    mutationFn: async (data: DownloadFormData) => {
      const downloadData = {
        ...data,
        resourceId: resource!.id,
        resourceTitle: resource!.title,
      };
      
      return apiRequest('POST', '/api/resource-downloads', downloadData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resource-downloads'] });
      setIsDownloading(true);
      
      // Start actual download
      setTimeout(() => {
        if (resource?.downloadUrl) {
          // Create a download link
          const link = document.createElement('a');
          link.href = resource.downloadUrl;
          link.download = `${resource.title.replace(/\s+/g, '_')}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        
        setIsDownloading(false);
        onClose();
        form.reset();
        
        toast({
          title: "Download Started",
          description: `${resource?.title} is downloading now. Thank you for your interest!`,
        });
      }, 2000);
    },
    onError: () => {
      toast({
        title: "Download Failed",
        description: "There was an error processing your download. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: DownloadFormData) => {
    downloadMutation.mutate(data);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{resource.title}</h2>
                <p className="text-sm text-gray-600">{resource.type}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              data-testid="button-close-download-modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-600 text-sm mb-4">
              {resource.description}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 font-medium">
                <Download className="w-4 h-4 inline mr-1" />
                Enter your details to download this premium resource
              </p>
            </div>
          </div>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Full Name
              </label>
              <input
                type="text"
                {...form.register('fullName')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
                data-testid="input-download-name"
              />
              {form.formState.errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address
              </label>
              <input
                type="email"
                {...form.register('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                data-testid="input-download-email"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Mobile Number
              </label>
              <input
                type="tel"
                {...form.register('mobile')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your mobile number"
                data-testid="input-download-mobile"
              />
              {form.formState.errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.mobile.message}</p>
              )}
            </div>

            {/* Current Stage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <GraduationCap className="w-4 h-4 inline mr-1" />
                Current Stage
              </label>
              <select
                {...form.register('currentStage')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                data-testid="select-download-stage"
              >
                <option value="">Select your current stage</option>
                {stageOptions.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>
              {form.formState.errors.currentStage && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.currentStage.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={downloadMutation.isPending || isDownloading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              data-testid="button-submit-download"
            >
              {downloadMutation.isPending || isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {isDownloading ? 'Preparing Download...' : 'Processing...'}
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download {resource.type}
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Your information is secure and will only be used to improve our services.
          </p>
        </div>
      </div>
    </div>
  );
}