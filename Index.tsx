import FilterSidebar from "@/components/dashboard/FilterSidebar";
import KPICards from "@/components/dashboard/KPICards";
import FunnelVisualization from "@/components/dashboard/FunnelVisualization";
import ChannelPerformance from "@/components/dashboard/ChannelPerformance";
import TrendChart from "@/components/dashboard/TrendChart";
import CampaignTable from "@/components/dashboard/CampaignTable";
import Recommendations from "@/components/dashboard/Recommendations";

const Index = () => (
  <div className="flex min-h-screen bg-background">
    <FilterSidebar />
    <main className="flex-1 p-6 lg:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Marketing Funnel & Conversion Analysis</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track how users move from visitors → leads → customers and identify optimization opportunities
          </p>
        </div>

        <KPICards />
        <FunnelVisualization />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ChannelPerformance />
          <TrendChart />
        </div>

        <CampaignTable />
        <Recommendations />
      </div>
    </main>
  </div>
);

export default Index;
