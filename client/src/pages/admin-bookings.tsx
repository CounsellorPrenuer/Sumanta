import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Check, X, Clock, Phone, User, Calendar, CreditCard, Eye, Download, Mail, FileText, Users, PenTool, Sparkles, Edit3, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import BlogForm from '@/components/blog-form';
import type { Booking, ContactSubmission, Payment, BlogPost } from '@shared/schema';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  contacted: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

const statusIcons = {
  pending: Clock,
  contacted: Phone,
  completed: Check,
  cancelled: X,
};

const stageLabels = {
  'graduates': 'College Graduate / Fresh Graduate',
  'earlycareer': 'Early Career Professional (0-5 years)',
  'midcareer': 'Mid-Career Professional (5-15 years)',
  'senior': 'Senior Professional (15+ years)',
  'professionals': 'Working Professional',
  // Legacy mappings for backward compatibility
  'class8-9': 'Class 8-9 (Legacy)',
  'class10-12': 'Class 10-12 (Legacy)',
};

export default function AdminBookings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('overview');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: bookings, isLoading: bookingsLoading } = useQuery<Booking[]>({
    queryKey: ['/api/bookings'],
  });

  const { data: contacts, isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact'],
  });

  const { data: payments, isLoading: paymentsLoading } = useQuery<Payment[]>({
    queryKey: ['/api/payments'],
  });

  const { data: downloads, isLoading: downloadsLoading } = useQuery<any[]>({
    queryKey: ['/api/resource-downloads'],
  });

  const { data: blogs, isLoading: blogsLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  const isLoading = bookingsLoading || contactsLoading || paymentsLoading || downloadsLoading || blogsLoading;

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      console.log('Making API request to update status:', { id, status });
      return apiRequest('PATCH', `/api/bookings/${id}/status`, { status });
    },
    onSuccess: (data, variables) => {
      console.log('Status update successful:', { data, variables });
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      toast({
        title: "✅ Status Updated Successfully!",
        description: `Booking status changed to ${variables.status}`,
      });
    },
    onError: (error: any, variables) => {
      console.error('Status update failed:', { error, variables });
      toast({
        title: "❌ Update Failed",
        description: error?.message || "Failed to update booking status. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Blog mutations - moved here to fix hooks order violation
  const deleteBlogMutation = useMutation({
    mutationFn: (id: string) => {
      console.log('Making API request to delete blog:', id);
      return apiRequest('DELETE', `/api/blog-posts/${id}`);
    },
    onSuccess: (data, variables) => {
      console.log('Blog deletion successful:', { data, variables });
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      toast({
        title: "✅ Blog Deleted Successfully!",
        description: "The blog post has been permanently removed.",
      });
    },
    onError: (error: any, variables) => {
      console.error('Blog deletion failed:', { error, variables });
      toast({
        title: "❌ Delete Failed",
        description: error?.message || "Failed to delete blog post. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleStatusChange = (id: string, status: string) => {
    console.log('Updating booking status:', { id, status });
    
    // Show immediate feedback
    toast({
      title: "Updating Status...",
      description: `Changing status to ${status}`,
    });
    
    updateStatusMutation.mutate({ id, status });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sortedBookings = bookings?.sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ) || [];

  const sortedContacts = contacts?.sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ) || [];

  const sortedPayments = payments?.sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ) || [];

  const sortedDownloads = downloads?.sort((a, b) => 
    new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
  ) || [];

  const sortedBlogs = blogs ? [...blogs].sort((a, b) => 
    new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
  ) : [];


  const stats = {
    totalBookings: sortedBookings.length,
    totalContacts: sortedContacts.length,
    totalPayments: sortedPayments.length,
    totalDownloads: sortedDownloads.length,
    totalBlogs: sortedBlogs.length,
    pending: sortedBookings.filter(b => b.status === 'pending').length,
    contacted: sortedBookings.filter(b => b.status === 'contacted').length,
    completed: sortedBookings.filter(b => b.status === 'completed').length,
    discoveryCall: sortedBookings.filter(b => b.bookingType === 'discovery_call').length,
    investment: sortedBookings.filter(b => b.bookingType === 'investment').length,
  };

  const [isExporting, setIsExporting] = useState(false);

  const exportToExcel = async () => {
    console.log('Export to Excel initiated');
    setIsExporting(true);
    
    try {
      // Show loading toast
      toast({
        title: "Exporting Data...",
        description: "Preparing your CSV file, please wait.",
      });

      // Add small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));

      // Create CSV content with all data
      const csvContent = [
        ['Data Type', 'Name', 'Email/Mobile', 'Date', 'Status', 'Amount', 'Package', 'Notes'].join(','),
        
        // Bookings
        ...sortedBookings.map(booking => [
          'Booking',
          booking.fullName || '',
          booking.mobile || '',
          new Date(booking.createdAt!).toLocaleDateString(),
          booking.status || '',
          booking.amount ? `₹${booking.amount}` : '',
          booking.packageName || '',
          booking.notes || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')),
        
        // Contact submissions
        ...sortedContacts.map(contact => [
          'Contact Form',
          `${contact.firstName} ${contact.lastName}`.trim(),
          `${contact.email} / ${contact.phone}`,
          new Date(contact.createdAt!).toLocaleDateString(),
          'Submitted',
          '',
          contact.serviceInterest || '',
          contact.message || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')),
        
        // Payments
        ...sortedPayments.map(payment => [
          'Payment',
          payment.customerName || '',
          payment.customerEmail || '',
          new Date(payment.createdAt!).toLocaleDateString(),
          payment.status || '',
          payment.amount ? `₹${payment.amount}` : '',
          payment.packageId || '',
          payment.stripePaymentIntentId || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')),
        
        // Resource downloads
        ...sortedDownloads.map(download => [
          'Resource Download',
          download.fullName || '',
          `${download.email} / ${download.mobile}`,
          new Date(download.createdAt!).toLocaleDateString(),
          'Downloaded',
          '',
          download.resourceTitle || '',
          download.currentStage || ''
        ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(','))
      ].join('\n');

      console.log('CSV content prepared, rows:', csvContent.split('\n').length);

      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      const fileName = `leadcrest_data_${new Date().toISOString().split('T')[0]}.csv`;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      URL.revokeObjectURL(link.href);

      console.log('File download initiated:', fileName);

      toast({
        title: "✅ Export Successful!",
        description: `Downloaded ${fileName} with ${csvContent.split('\n').length - 1} records.`,
      });
    } catch (error) {
      console.error('Export failed:', error);
      toast({
        title: "Export Failed",
        description: "Failed to export data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage customers, content, and business operations</p>
          </div>
          <button 
            onClick={exportToExcel}
            disabled={isExporting}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            data-testid="button-export-excel"
          >
            {isExporting ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Export to Excel
              </>
            )}
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex flex-wrap gap-2 md:gap-8">
            <button
              onClick={() => {
                console.log('Switching to overview tab');
                setActiveTab('overview');
                toast({
                  title: "Tab Switched",
                  description: "Viewing Customer Data",
                });
              }}
              className={`py-3 px-4 border-b-3 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'overview'
                  ? 'border-golden text-golden bg-golden/10 shadow-sm'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
              data-testid="tab-overview"
            >
              <div className="flex items-center gap-2">
                <Users className={`w-5 h-5 ${activeTab === 'overview' ? 'text-golden' : ''}`} />
                Customer Data
                {activeTab === 'overview' && <div className="ml-2 w-2 h-2 bg-golden rounded-full animate-pulse"></div>}
              </div>
            </button>
            <button
              onClick={() => {
                console.log('Switching to blogs tab');
                setActiveTab('blogs');
                toast({
                  title: "Tab Switched",
                  description: "Viewing Blog Management",
                });
              }}
              className={`py-3 px-4 border-b-3 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'blogs'
                  ? 'border-golden text-golden bg-golden/10 shadow-sm'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
              data-testid="tab-blogs"
            >
              <div className="flex items-center gap-2">
                <PenTool className={`w-5 h-5 ${activeTab === 'blogs' ? 'text-golden' : ''}`} />
                Blog Management
                {activeTab === 'blogs' && <div className="ml-2 w-2 h-2 bg-golden rounded-full animate-pulse"></div>}
              </div>
            </button>
          </nav>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalBookings}</div>
            </div>
            <div className="text-sm text-gray-600">Bookings</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-green-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalContacts}</div>
            </div>
            <div className="text-sm text-gray-600">Contacts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-purple-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalPayments}</div>
            </div>
            <div className="text-sm text-gray-600">Payments</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-orange-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalDownloads}</div>
            </div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <PenTool className="w-5 h-5 text-indigo-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalBlogs}</div>
            </div>
            <div className="text-sm text-gray-600">Blog Posts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-blue-500" />
              <div className="text-2xl font-bold text-blue-600">{stats.contacted}</div>
            </div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-green-500" />
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <div className="text-2xl font-bold text-indigo-600">{stats.totalBookings + stats.totalContacts + stats.totalPayments + stats.totalDownloads + stats.totalBlogs}</div>
            </div>
            <div className="text-sm text-gray-600">Total Records</div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Bookings Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings ({stats.totalBookings})</h2>
            {sortedBookings.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Bookings Yet</h3>
                <p className="text-gray-600">When customers book packages, they'll appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedBookings.map((booking) => {
                  const StatusIcon = statusIcons[booking.status as keyof typeof statusIcons];
                  
                  return (
                    <div key={booking.id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Main Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-500" />
                              <span className="font-semibold text-gray-900">{booking.fullName}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{booking.mobile}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="bg-gray-100 px-2 py-1 rounded">
                              {stageLabels[booking.currentStage as keyof typeof stageLabels]}
                            </span>
                            <span className="font-medium">{booking.packageName}</span>
                            {booking.amount && (
                              <span className="font-semibold text-amber-600">₹{booking.amount.toLocaleString()}</span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(booking.createdAt!).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              {booking.bookingType === 'investment' ? (
                                <>
                                  <CreditCard className="w-3 h-3" />
                                  <span>Investment</span>
                                </>
                              ) : (
                                <>
                                  <Phone className="w-3 h-3" />
                                  <span>Discovery Call</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Status & Actions */}
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status as keyof typeof statusColors]}`}>
                            <StatusIcon className="w-3 h-3" />
                            <span className="capitalize">{booking.status}</span>
                          </div>
                          
                          <select
                            value={booking.status || 'pending'}
                            onChange={(e) => {
                              console.log('Status dropdown changed:', { bookingId: booking.id, newStatus: e.target.value });
                              handleStatusChange(booking.id, e.target.value);
                            }}
                            disabled={updateStatusMutation.isPending}
                            className="text-sm border border-gray-300 rounded px-3 py-2 bg-white hover:border-gray-400 focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            data-testid={`select-status-${booking.id}`}
                          >
                            <option value="pending">🟡 Pending</option>
                            <option value="contacted">🔵 Contacted</option>
                            <option value="completed">🟢 Completed</option>
                            <option value="cancelled">🔴 Cancelled</option>
                          </select>
                          {updateStatusMutation.isPending && (
                            <div className="ml-2 inline-block">
                              <div className="animate-spin w-4 h-4 border-2 border-golden border-t-transparent rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>

                      {booking.notes && (
                        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                          <strong>Notes:</strong> {booking.notes}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Contact Submissions Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Form Submissions ({stats.totalContacts})</h2>
            {sortedContacts.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Contact Submissions</h3>
                <p className="text-gray-600">Contact form submissions will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedContacts.map((contact) => (
                  <div key={contact.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4 text-green-500" />
                          <span className="font-semibold text-gray-900">
                            {contact.firstName} {contact.lastName}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Email: {contact.email}</div>
                          <div>Phone: {contact.phone}</div>
                          {contact.serviceInterest && <div>Interest: {contact.serviceInterest}</div>}
                        </div>
                        {contact.message && (
                          <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                            <strong>Message:</strong> {contact.message}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(contact.createdAt!).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payments Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Records ({stats.totalPayments})</h2>
            {sortedPayments.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Payments</h3>
                <p className="text-gray-600">Payment records will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedPayments.map((payment) => (
                  <div key={payment.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CreditCard className="w-4 h-4 text-purple-500" />
                          <span className="font-semibold text-gray-900">{payment.customerName}</span>
                          <span className="text-lg font-bold text-green-600">₹{payment.amount}</span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Email: {payment.customerEmail}</div>
                          <div>Package: {payment.packageId}</div>
                          <div>Status: <span className="capitalize">{payment.status}</span></div>
                          {payment.stripePaymentIntentId && (
                            <div>Payment ID: {payment.stripePaymentIntentId}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(payment.createdAt!).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resource Downloads Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Resource Downloads ({stats.totalDownloads})</h2>
            {sortedDownloads.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Downloads</h3>
                <p className="text-gray-600">Resource download records will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedDownloads.map((download: any, index: number) => (
                  <div key={download.id || index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="w-4 h-4 text-orange-500" />
                          <span className="font-semibold text-gray-900">{download.fullName}</span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Email: {download.email}</div>
                          <div>Mobile: {download.mobile}</div>
                          <div>Resource: {download.resourceTitle}</div>
                          <div>Stage: {download.currentStage}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(download.createdAt || Date.now()).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        )}

        {/* Blog Management Tab */}
        {activeTab === 'blogs' && (
        <div className="space-y-6">
          {/* Blog Stats and Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Blog Management</h2>
                <p className="text-gray-600">Create, edit, and manage blog posts with AI assistance</p>
              </div>
              <button
                onClick={() => {
                  console.log('Creating new blog post');
                  setShowBlogForm(true);
                  toast({
                    title: "📝 Opening Blog Editor",
                    description: "Create a new blog post with AI assistance",
                  });
                }}
                className="flex items-center gap-2 bg-golden hover:bg-golden/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                data-testid="button-create-blog"
              >
                <Plus className="w-5 h-5" />
                Create New Blog
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <div className="text-lg font-bold text-gray-900">{stats.totalBlogs}</div>
                </div>
                <div className="text-sm text-gray-600">Total Blog Posts</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <PenTool className="w-5 h-5 text-green-600" />
                  <div className="text-lg font-bold text-gray-900">AI Powered</div>
                </div>
                <div className="text-sm text-gray-600">Content Generation</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Edit3 className="w-5 h-5 text-blue-600" />
                  <div className="text-lg font-bold text-gray-900">Smart Editing</div>
                </div>
                <div className="text-sm text-gray-600">AI Content Improvement</div>
              </div>
            </div>
          </div>

          {/* Blog Posts List */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Published Blog Posts ({stats.totalBlogs})</h3>
            </div>
            
            {sortedBlogs.length === 0 ? (
              <div className="p-8 text-center">
                <PenTool className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Blog Posts Yet</h3>
                <p className="text-gray-600 mb-4">Create your first blog post using AI generation or manual editing.</p>
                <button
                  onClick={() => {
                    console.log('Creating first blog post');
                    setShowBlogForm(true);
                    toast({
                      title: "🎉 Let's Create Your First Blog!",
                      description: "Use AI to generate professional content",
                    });
                  }}
                  className="bg-golden hover:bg-golden/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
                  data-testid="button-create-first-blog"
                >
                  Create Your First Blog
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {sortedBlogs.map((blog) => (
                  <div key={blog.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 hover:text-golden transition-colors">
                            {blog.title}
                          </h4>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Published: {new Date(blog.publishedAt!).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}</span>
                          <span>•</span>
                          <span>ID: {blog.id}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button
                          onClick={() => {
                            console.log('Viewing blog:', blog.id);
                            window.open(`/blog/${blog.id}`, '_blank');
                            toast({
                              title: "👀 Opening Blog Post",
                              description: "Blog post opened in new tab",
                            });
                          }}
                          className="flex items-center gap-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                          data-testid={`button-view-blog-${blog.id}`}
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        <button
                          onClick={() => {
                            console.log('Editing blog:', blog.id);
                            setEditingBlog(blog);
                            setShowBlogForm(true);
                            toast({
                              title: "✏️ Opening Blog Editor",
                              description: `Editing: ${blog.title}`,
                            });
                          }}
                          className="flex items-center gap-1 px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                          data-testid={`button-edit-blog-${blog.id}`}
                        >
                          <Edit3 className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            console.log('Attempting to delete blog:', blog.id);
                            if (confirm(`Are you sure you want to delete "${blog.title}"? This action cannot be undone.`)) {
                              console.log('Confirmed blog deletion:', blog.id);
                              toast({
                                title: "🗑️ Deleting Blog Post...",
                                description: "Please wait while we delete the blog post",
                              });
                              deleteBlogMutation.mutate(blog.id);
                            } else {
                              console.log('Blog deletion cancelled');
                            }
                          }}
                          disabled={deleteBlogMutation.isPending}
                          className="flex items-center gap-1 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                          data-testid={`button-delete-blog-${blog.id}`}
                        >
                          {deleteBlogMutation.isPending ? (
                            <div className="animate-spin w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full"></div>
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                          {deleteBlogMutation.isPending ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        )}

        {/* Blog Form Modal */}
        {showBlogForm && (
          <BlogForm
            blog={editingBlog}
            onClose={() => {
              setShowBlogForm(false);
              setEditingBlog(null);
            }}
          />
        )}
      </div>
    </div>
  );
}