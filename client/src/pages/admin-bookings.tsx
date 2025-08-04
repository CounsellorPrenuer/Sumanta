import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Check, X, Clock, Phone, User, Calendar, CreditCard, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Booking } from '@shared/schema';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  contacted: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusIcons = {
  pending: Clock,
  contacted: Phone,
  completed: Check,
  cancelled: X
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

  const { data: bookings, isLoading } = useQuery<Booking[]>({
    queryKey: ['/api/bookings'],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const response = await apiRequest('PATCH', `/api/bookings/${id}/status`, { status });
      return response.json();
    },
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

  const stats = {
    total: sortedBookings.length,
    pending: sortedBookings.filter(b => b.status === 'pending').length,
    contacted: sortedBookings.filter(b => b.status === 'contacted').length,
    completed: sortedBookings.filter(b => b.status === 'completed').length,
    discoveryCall: sortedBookings.filter(b => b.bookingType === 'discovery_call').length,
    investment: sortedBookings.filter(b => b.bookingType === 'investment').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
          <p className="text-gray-600">Manage all customer bookings and inquiries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
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
            <div className="text-2xl font-bold text-blue-500">{stats.discoveryCall}</div>
            <div className="text-sm text-gray-600">Discovery Calls</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-2xl font-bold text-amber-600">{stats.investment}</div>
            <div className="text-sm text-gray-600">Investments</div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {sortedBookings.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Bookings Yet</h3>
              <p className="text-gray-600">When customers book packages, they'll appear here.</p>
            </div>
          ) : (
            sortedBookings.map((booking) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}