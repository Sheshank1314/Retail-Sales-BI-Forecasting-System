import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const tooltipStyle = {
  background: "var(--popover)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "8px 12px",
  fontSize: 12,
  boxShadow: "var(--shadow-elegant)",
  color: "var(--popover-foreground)",
};

const axis = { fontSize: 11, fill: "var(--muted-foreground)" };

export function RevenueAreaChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--violet)" stopOpacity={0.5} />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fcFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "var(--violet)", strokeWidth: 1, strokeDasharray: 4 }} />
        <Area type="monotone" dataKey="forecast" stroke="var(--cyan)" strokeWidth={2} strokeDasharray="5 5" fill="url(#fcFill)" />
        <Area type="monotone" dataKey="revenue" stroke="var(--violet)" strokeWidth={2.5} fill="url(#revFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ForecastChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="bandFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--violet)" stopOpacity={0.25} />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="upper" stroke="transparent" fill="url(#bandFill)" stackId="band" />
        <Area type="monotone" dataKey="lower" stroke="transparent" fill="var(--background)" stackId="band" fillOpacity={1} />
        <Line type="monotone" dataKey="actual" stroke="var(--cyan)" strokeWidth={2.5} dot={{ r: 4, fill: "var(--cyan)" }} />
        <Line type="monotone" dataKey="predicted" stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" dot={{ r: 4, fill: "var(--violet)" }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function CategoryPie({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={3} stroke="none">
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function RegionBarChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ top: 10, right: 20, left: 60, bottom: 0 }}>
        <defs>
          <linearGradient id="barFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--violet)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
        <XAxis type="number" tick={axis} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="region" tick={axis} axisLine={false} tickLine={false} width={100} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--muted)", opacity: 0.4 }} />
        <Bar dataKey="sales" fill="url(#barFill)" radius={[0, 8, 8, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function OrdersBar({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
        <XAxis dataKey="month" tick={axis} axisLine={false} tickLine={false} />
        <YAxis tick={axis} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--muted)", opacity: 0.4 }} />
        <Bar dataKey="orders" fill="var(--cyan)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
