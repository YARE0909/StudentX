"use client";
import React, { useState } from "react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import {
  Briefcase,
  CheckCircle,
  AlertCircle,
  Bell,
  UserCheck,
  Lightbulb,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { cn } from "@/lib/utils";

const jobStats = {
  totalJobs: 37,
  appliedJobs: 8,
  rejectedJobs: 3,
};

const notifications = [
  {
    id: 1,
    type: "info",
    message: "New job posting: Senior Developer at Innotech.",
  },
  {
    id: 2,
    type: "alert",
    message: "Interview scheduled for Data Analyst position.",
  },
  { id: 3, type: "info", message: "Your application was viewed by HR." },
];

const jobApplicationsTrend = [
  { month: "May", applied: 3, rejected: 1, interviews: 1 },
  { month: "Jun", applied: 5, rejected: 0, interviews: 2 },
  { month: "Jul", applied: 7, rejected: 2, interviews: 3 },
  { month: "Aug", applied: 8, rejected: 3, interviews: 4 },
  { month: "Sep", applied: 6, rejected: 0, interviews: 2 },
];

const jobApplicationsByType = [
  { type: "Full-Time", count: 20 },
  { type: "Part-Time", count: 10 },
  { type: "Internship", count: 7 },
];

const aiRecommendations = [
  "Focus on improving resume keywords for tech roles.",
  "Leverage your network for referrals in desired companies.",
  "Practice behavioral interview questions to boost confidence.",
  "Track applications and follow up after 2 weeks if no response.",
];

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    postedDate: "2025-08-25",
    description: "Develop user interfaces with React.js and Tailwind CSS.",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Finance Corp",
    location: "New York, NY",
    postedDate: "2025-08-28",
    description: "Analyze financial data and create reports.",
    type: "Part-time",
  },
  {
    id: 3,
    title: "Cloud Engineer",
    company: "Cloudify",
    location: "San Francisco, CA",
    postedDate: "2025-09-01",
    description: "Manage cloud infrastructure using AWS or Azure.",
    type: "Full-time",
  },
];

const mockAppliedJobs = [
  {
    id: 101,
    title: "Backend Developer",
    company: "DevWorks",
    location: "Remote",
    appliedDate: "2025-07-20",
    status: "Interview Scheduled",
  },
  {
    id: 102,
    title: "UX Designer",
    company: "Creative Labs",
    location: "Boston, MA",
    appliedDate: "2025-08-15",
    status: "Application Submitted",
  },
];

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
        {[
          {
            label: "Total Jobs",
            value: jobStats.totalJobs,
            icon: <Briefcase className="w-6 h-6" />,
          },
          {
            label: "Applied Jobs",
            value: jobStats.appliedJobs,
            icon: <UserCheck className="w-6 h-6" />,
          },
          {
            label: "Rejected Jobs",
            value: jobStats.rejectedJobs,
            icon: <AlertCircle className="w-6 h-6" />,
          },
        ].map(({ icon, label, value }, i) => (
          <GlassCard key={i}>
            <div className="flex items-center gap-5">
              <div className="bg-accent-2 p-3 rounded-xl text-white shadow-md flex items-center justify-center">
                {icon}
              </div>
              <div>
                <p className="text-2xl font-semibold">{value}</p>
                <p className="text-muted uppercase text-xs tracking-wide">
                  {label}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Notifications */}
      <Section title="Notifications">
        <GlassCard className="p-4 max-h-72 overflow-auto bg-surface border border-gray-600 space-y-3">
          {notifications.length ? (
            notifications.map(({ id, type, message }) => {
              let icon = <Bell className="w-5 h-5 text-accent-2" />;
              if (type === "alert")
                icon = <AlertCircle className="w-5 h-5 text-red-500" />;

              return (
                <div
                  key={id}
                  className="flex items-center gap-3 p-3 rounded-2xl border border-gray-600 backdrop-blur-sm"
                >
                  {icon}
                  <p className="text-sm">{message}</p>
                </div>
              );
            })
          ) : (
            <p className="text-muted text-center">No notifications</p>
          )}
        </GlassCard>
      </Section>

      {/* Analytics Section */}
      <Section
        title="Application Analytics"
        subtitle="Track your job search performance"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Applications Over Time - Line Chart */}
          <GlassCard className="p-6 bg-surface border border-gray-600 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Applications Over Time
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart
                data={jobApplicationsTrend}
                margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
              >
                <XAxis dataKey="month" stroke="var(--color-muted)" />
                <YAxis stroke="var(--color-muted)" />
                <Tooltip />
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--color-muted)"
                />
                <Line
                  type="monotone"
                  dataKey="applied"
                  stroke="var(--color-accent-2)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="rejected"
                  stroke="var(--color-red-500)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="interviews"
                  stroke="var(--color-accent-3)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Applications by Job Type - Pie Chart */}
          <GlassCard className="p-6 bg-surface border border-gray-600 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Applications by Job Type
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={jobApplicationsByType}
                  dataKey="count"
                  nameKey="type"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                  fill="var(--color-accent-2)"
                >
                  {jobApplicationsByType.map(({ type }, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={["#60a5fa", "#fbbf24", "#34d399"][idx % 3]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Application Status Breakdown - Bar Chart */}
          <GlassCard className="p-6 bg-surface border border-gray-600 rounded-3xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Application Status Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={[
                  { status: "Applied", count: jobStats.appliedJobs },
                  { status: "Rejected", count: jobStats.rejectedJobs },
                  {
                    status: "Pending",
                    count:
                      jobStats.totalJobs -
                      jobStats.appliedJobs -
                      jobStats.rejectedJobs,
                  },
                ]}
                margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
              >
                <XAxis dataKey="status" stroke="var(--color-muted)" />
                <YAxis stroke="var(--color-muted)" />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="var(--color-accent-4)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </Section>

      <Section title="Job Postings">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto max-h-[480px] overflow-auto">
          {filteredJobs.length ? (
            filteredJobs.map(
              ({
                id,
                title,
                company,
                location,
                postedDate,
                description,
                type,
              }) => (
                <GlassCard key={id} className="flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold text-fg">{title}</h3>
                      <span className="text-xs uppercase font-semibold bg-accent-2/30 text-accent-2 px-3 py-1 rounded-full select-none">
                        {type}
                      </span>
                    </div>
                    <p className="text-sm text-muted font-medium mb-1">
                      {company}
                    </p>
                    <p className="text-xs text-muted mb-3 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-accent-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 12.414m0 0L8.171 7.172m5.243 5.242L17.657 7.172M8.172 16.657L12.414 12.414m-7.243 7.243a9 9 0 1112.728 0 9 9 0 01-12.728 0z"
                        />
                      </svg>
                      {location}
                    </p>
                    <p className="text-sm text-muted mb-4 line-clamp-3">
                      {description}
                    </p>
                    <time className="text-xs text-muted">
                      Posted on {postedDate}
                    </time>
                  </div>
                  <button className="btn btn-primary mt-5 self-start px-6 py-2 text-sm font-semibold rounded-xl transition-shadow hover:shadow-lg">
                    Apply
                  </button>
                </GlassCard>
              )
            )
          ) : (
            <p className="text-muted text-center col-span-full">
              No job postings found.
            </p>
          )}
        </div>
      </Section>

      {/* Applied Jobs */}
      <Section title="Applied Jobs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto max-h-[400px] overflow-auto">
          {mockAppliedJobs.length ? (
            mockAppliedJobs.map(
              ({ id, title, company, location, appliedDate, status }) => (
                <GlassCard key={id}>
                  <div>
                    <h4 className="font-semibold text-lg text-fg mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-muted mb-0.5">
                      {company} - {location}
                    </p>
                    <p className="text-xs text-muted mb-3">
                      Applied: {appliedDate}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "self-start px-4 py-1 rounded-full text-xs font-bold uppercase select-none",
                      status === "Interview Scheduled"
                        ? "bg-green-500/40 text-white"
                        : status === "Application Submitted"
                        ? "bg-yellow-400/40 text-white"
                        : "bg-gray-400/40 text-white"
                    )}
                  >
                    {status}
                  </span>
                </GlassCard>
              )
            )
          ) : (
            <p className="text-muted text-center col-span-full">
              You have not applied to any jobs yet.
            </p>
          )}
        </div>
      </Section>

      {/* AI-Powered Career Tips */}
      <Section title="Personalized AI Recommendations" className="!mb-12">
        <GlassCard>
          <ul className="space-y-4">
            {aiRecommendations.map((rec, idx) => (
              <li
                key={idx}
                className="
                  flex items-start gap-4 p-4 rounded-xl
                  bg-gradient-to-r from-accent-4/10 to-accent-3/10
                  ring-1 ring-accent-4/30
                  shadow-sm
                  hover:shadow-lg hover:from-accent-4/20 hover:to-accent-3/20
                  transition
                  cursor-default
                "
              >
                <span
                  className="
                    flex-shrink-0
                    w-9 h-9
                    rounded-full
                    bg-accent-4
                    text-white
                    flex justify-center items-center
                    shadow-xl
                    animate-pulse
                  "
                >
                  <Lightbulb className="w-6 h-6" />
                </span>
                <p className="text-fg leading-relaxed">{rec}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>
    </div>
  );
}
