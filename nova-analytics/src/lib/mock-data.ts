export const revenueTrend = [
  { month: "Jan", revenue: 42000, forecast: 41000, orders: 1240 },
  { month: "Feb", revenue: 48500, forecast: 47200, orders: 1380 },
  { month: "Mar", revenue: 52300, forecast: 51000, orders: 1510 },
  { month: "Apr", revenue: 61200, forecast: 59800, orders: 1720 },
  { month: "May", revenue: 58900, forecast: 60100, orders: 1680 },
  { month: "Jun", revenue: 67400, forecast: 66200, orders: 1890 },
  { month: "Jul", revenue: 74100, forecast: 72500, orders: 2050 },
  { month: "Aug", revenue: 81200, forecast: 79800, orders: 2240 },
  { month: "Sep", revenue: 88600, forecast: 86900, orders: 2410 },
];

export const forecastData = [
  { month: "Sep", actual: 88600, predicted: 88600, lower: 88600, upper: 88600 },
  { month: "Oct", actual: null, predicted: 95400, lower: 91200, upper: 99800 },
  { month: "Nov", actual: null, predicted: 104200, lower: 98500, upper: 110100 },
  { month: "Dec", actual: null, predicted: 118600, lower: 110200, upper: 127400 },
  { month: "Jan", actual: null, predicted: 112300, lower: 103800, upper: 121500 },
  { month: "Feb", actual: null, predicted: 119800, lower: 109200, upper: 130900 },
];

export const categories = [
  { name: "Electronics", value: 32, color: "var(--violet)" },
  { name: "Apparel", value: 24, color: "var(--cyan)" },
  { name: "Home", value: 18, color: "var(--primary)" },
  { name: "Beauty", value: 14, color: "var(--success)" },
  { name: "Sports", value: 12, color: "var(--warning)" },
];

export const regions = [
  { region: "North America", sales: 124500, growth: 18.4 },
  { region: "Europe", sales: 98200, growth: 12.1 },
  { region: "Asia Pacific", sales: 142800, growth: 24.7 },
  { region: "LATAM", sales: 41200, growth: 8.3 },
  { region: "MEA", sales: 32900, growth: 15.2 },
];

export const inventory = [
  { sku: "ELC-2041", name: "Wireless Earbuds Pro", stock: 12, threshold: 50, status: "critical", demand: "high" },
  { sku: "APP-1180", name: "Tech Hoodie Black", stock: 84, threshold: 60, status: "healthy", demand: "medium" },
  { sku: "HOM-3320", name: "Smart Lamp Mini", stock: 28, threshold: 40, status: "low", demand: "high" },
  { sku: "BTY-5501", name: "Hydra Serum 30ml", stock: 156, threshold: 80, status: "healthy", demand: "low" },
  { sku: "SPT-7710", name: "Trail Runner v3", stock: 6, threshold: 30, status: "critical", demand: "medium" },
  { sku: "ELC-2099", name: "USB-C Hub 8-in-1", stock: 47, threshold: 50, status: "low", demand: "medium" },
];

export const customers = [
  { segment: "Champions", count: 1240, value: 412000, color: "var(--violet)" },
  { segment: "Loyal", count: 2810, value: 298000, color: "var(--primary)" },
  { segment: "Potential", count: 4120, value: 184000, color: "var(--cyan)" },
  { segment: "At Risk", count: 980, value: 76000, color: "var(--warning)" },
  { segment: "Lost", count: 612, value: 24000, color: "var(--destructive)" },
];

export const insights = [
  { title: "Demand spike detected", body: "Wireless Earbuds Pro orders up 142% week-over-week. Recommend immediate restock.", tone: "warning" },
  { title: "Forecast confidence high", body: "Q4 revenue projection at 92% confidence. Holiday surge aligns with model.", tone: "success" },
  { title: "Customer churn risk", body: "980 customers in 'At Risk' segment. Targeted win-back campaign suggested.", tone: "destructive" },
  { title: "Regional opportunity", body: "Asia Pacific outperforming forecast by 14%. Consider increased ad spend.", tone: "primary" },
];

export const activity = [
  { user: "Sarah Chen", action: "exported Q3 sales report", time: "2m ago" },
  { user: "Marcus Lee", action: "updated forecast model parameters", time: "14m ago" },
  { user: "AI Assistant", action: "flagged 3 inventory alerts", time: "1h ago" },
  { user: "Priya Shah", action: "shared dashboard with Finance team", time: "3h ago" },
  { user: "System", action: "ran nightly forecast retraining", time: "8h ago" },
];
