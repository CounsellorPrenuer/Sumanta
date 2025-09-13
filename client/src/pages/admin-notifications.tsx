import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Calendar, Download, DollarSign, Bell, Eye, MailOpen, RefreshCw } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import type { Notification } from "@shared/schema";

export default function AdminNotifications() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  // Fetch notifications
  const { data: notifications = [], isLoading, refetch } = useQuery<Notification[]>({
    queryKey: ["/api/notifications/admin"],
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  // Fetch notification stats
  const { data: stats } = useQuery<{
    total: number;
    unread: number;
    byType: Record<string, number>;
  }>({
    queryKey: ["/api/notifications/stats"],
    refetchInterval: 30000,
  });

  // Mark as read mutation
  const markAsRead = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/notifications/${id}/read`, {
        method: "PATCH",
      });
      if (!response.ok) throw new Error("Failed to mark as read");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/notifications/admin"] });
      queryClient.invalidateQueries({ queryKey: ["/api/notifications/stats"] });
    },
  });

  // Filter notifications
  const filteredNotifications = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.isRead;
    return n.type === filter;
  });

  // Handle notification click
  const handleNotificationClick = (notification: Notification) => {
    setSelectedNotification(notification);
    if (!notification.isRead) {
      markAsRead.mutate(notification.id);
    }
  };

  // Send email copy to user
  const sendEmailCopy = (notification: Notification) => {
    const subject = encodeURIComponent(notification.subject);
    const body = encodeURIComponent(notification.textContent);
    window.location.href = `mailto:${notification.recipient}?subject=${subject}&body=${body}`;
  };

  // Get type badge color
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "contact": return "bg-blue-500";
      case "booking": return "bg-green-500";
      case "payment": return "bg-yellow-500";
      case "resource_download": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  // Get type icon
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "contact": return <Mail className="w-4 h-4" />;
      case "booking": return <Calendar className="w-4 h-4" />;
      case "payment": return <DollarSign className="w-4 h-4" />;
      case "resource_download": return <Download className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  // Format notification type for display
  const formatType = (type: string) => {
    return type.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" data-testid="heading-notifications">
              Notification Inbox
            </h1>
            <p className="text-gray-600 mt-1">
              All customer interactions and system notifications
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => refetch()} 
              variant="outline"
              data-testid="button-refresh"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-2xl font-bold" data-testid="stat-total">{stats.total}</p>
                  </div>
                  <Bell className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Unread</p>
                    <p className="text-2xl font-bold text-red-600" data-testid="stat-unread">
                      {stats.unread}
                    </p>
                  </div>
                  <MailOpen className="w-8 h-8 text-red-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Contacts</p>
                    <p className="text-2xl font-bold" data-testid="stat-contacts">
                      {stats.byType?.contact || 0}
                    </p>
                  </div>
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Bookings</p>
                    <p className="text-2xl font-bold" data-testid="stat-bookings">
                      {stats.byType?.booking || 0}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Tabs value={filter} onValueChange={setFilter} className="mb-6">
          <TabsList>
            <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
            <TabsTrigger value="unread" data-testid="tab-unread">
              Unread {stats?.unread ? `(${stats.unread})` : ''}
            </TabsTrigger>
            <TabsTrigger value="contact" data-testid="tab-contact">Contacts</TabsTrigger>
            <TabsTrigger value="booking" data-testid="tab-booking">Bookings</TabsTrigger>
            <TabsTrigger value="payment" data-testid="tab-payment">Payments</TabsTrigger>
            <TabsTrigger value="resource_download" data-testid="tab-downloads">Downloads</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Notifications List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1 space-y-3">
            {isLoading ? (
              <p className="text-gray-500">Loading notifications...</p>
            ) : filteredNotifications.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Bell className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-500">No notifications found</p>
                </CardContent>
              </Card>
            ) : (
              filteredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`cursor-pointer hover:shadow-md transition-shadow ${
                    !notification.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50' : ''
                  } ${selectedNotification?.id === notification.id ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                  data-testid={`notification-${notification.id}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(notification.type)}
                        <Badge className={getTypeBadgeColor(notification.type)}>
                          {formatType(notification.type)}
                        </Badge>
                      </div>
                      {!notification.isRead && (
                        <Badge variant="secondary" className="bg-blue-100">New</Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">
                      {notification.subject}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {notification.textContent}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {format(new Date(notification.createdAt!), 'PPp')}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Detail View */}
          <div className="lg:col-span-2">
            {selectedNotification ? (
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {selectedNotification.subject}
                      </CardTitle>
                      <CardDescription>
                        {format(new Date(selectedNotification.createdAt!), 'PPP p')}
                      </CardDescription>
                    </div>
                    <Badge className={getTypeBadgeColor(selectedNotification.type)}>
                      {formatType(selectedNotification.type)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* HTML Content */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Content</h3>
                    <div 
                      className="bg-gray-50 p-4 rounded-lg"
                      dangerouslySetInnerHTML={{ __html: selectedNotification.htmlContent }}
                    />
                  </div>

                  {/* Metadata */}
                  {selectedNotification.metadata && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Details</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                          {JSON.stringify(JSON.parse(selectedNotification.metadata), null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => sendEmailCopy(selectedNotification)}
                      variant="outline"
                      data-testid="button-send-email"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply via Email
                    </Button>
                    {!selectedNotification.isRead && (
                      <Button
                        onClick={() => markAsRead.mutate(selectedNotification.id)}
                        variant="outline"
                        data-testid="button-mark-read"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-16">
                  <Bell className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Select a notification to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}