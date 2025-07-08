import { useQuery } from '@tanstack/react-query';
import { get } from '@/utils/apiHelper';
 
export const useEnhancedDashboard = (timeRange = '24h') => {
  const {
    data: dashboardData,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['enhancedDashboard', timeRange],
    queryFn: () => get('/dashboard'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      console.error('Enhanced dashboard error:', error);
    },
  });
 
  return {
    dashboardData,
    isLoading,
    isError,
    refetch,
    // Derived data
    metrics: dashboardData?.metrics || {},
    realtime: dashboardData?.realtime || {},
    ai: dashboardData?.ai || {},
    cost: dashboardData?.cost || {},
    trends: dashboardData?.trends || [],
    activity: dashboardData?.activity || [],
    health: dashboardData?.health || {},
    users: dashboardData?.users || {},
    alerts: dashboardData?.alerts || []
  };
};