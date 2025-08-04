import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Check, X, Clock, Phone, User, Calendar, CreditCard, Eye, Download, Mail, FileText, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Booking, ContactSubmission, Payment } from '@shared/schema';

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
  'class8-9': 'Class 8-9',
  'class10-12': 'Class 10-12',
  'graduates': 'College Graduate',
  'professionals': 'Working Professional'
};

export default function AdminBookings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

  const isLoading = bookingsLoading || contactsLoading || paymentsLoading || downloadsLoading;

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      apiRequest(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
        headers: { 'Content-Type': 'application/json' },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      toast({
        title: "Status Updated",
        description: "Booking status has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update Failed",
        description: "Failed to update booking status.",
        variant: "destructive",
      });
    }
  });

  const handleStatusChange = (id: string, status: string) => {
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

  const stats = {
    totalBookings: sortedBookings.length,
    totalContacts: sortedContacts.length,
    totalPayments: sortedPayments.length,
    totalDownloads: sortedDownloads.length,
    pending: sortedBookings.filter(b => b.status === 'pending').length,
    contacted: sortedBookings.filter(b => b.status === 'contacted').length,
    completed: sortedBookings.filter(b => b.status === 'completed').length,
    discoveryCall: sortedBookings.filter(b => b.bookingType === 'discovery_call').length,
    investment: sortedBookings.filter(b => b.bookingType === 'investment').length,
  };

  const exportToExcel = () => {
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
      ].map(field => `"${field}"`).join(',')),
      
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
      ].map(field => `"${field}"`).join(',')),
      
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
      ].map(field => `"${field}"`).join(',')),
      
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
      ].map(field => `"${field}"`).join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leadcrest_data_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Data Exported",
      description: "All data has been exported to CSV file.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Data Management</h1>
            <p className="text-gray-600">Manage all customer data: bookings, contacts, payments, and downloads</p>
          </div>
          <button 
            onClick={exportToExcel}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            data-testid="button-export-excel"
          >
            <Download className="w-5 h-5" />
            Export to Excel
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalBookings}</div>
            </div>
            <div className="text-sm text-gray-600">Bookings</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-green-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalContacts}</div>
            </div>
            <div className="text-sm text-gray-600">Contacts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-purple-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalPayments}</div>
            </div>
            <div className="text-sm text-gray-600">Payments</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-orange-500" />
              <div className="text-2xl font-bold text-gray-900">{stats.totalDownloads}</div>
            </div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-blue-600">{stats.contacted}</div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-indigo-600">{stats.totalBookings + stats.totalContacts + stats.totalPayments + stats.totalDownloads}</div>
            <div className="text-sm text-gray-600">Total Records</div>
          </div>
        </div>

        {/* Data Sections */}
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
                            onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                            data-testid={`select-status-${booking.id}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="contacted">Contacted</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
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
      </div>
    </div>
  );
}