"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Clock, PhoneCall, Activity, Info, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";

// Countdown Timer Component for Next Class
function Countdown({ targetDateTime }: { targetDateTime: Date }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDateTime.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Class in progress");
      } else {
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${hours > 0 ? hours + "h " : ""}${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <span className="font-mono text-blue-600 font-semibold">{timeLeft}</span>
  );
}

export default function HomePage() {
  // Parse time strings to Date for countdown (assumed today)
  const parseTimeToDate = (time: string) => {
    const now = new Date();
    const [hourMin, meridian] = time.split(" ");
    let [hour, minute] = hourMin.split(":").map(Number);
    if (meridian === "PM" && hour !== 12) hour += 12;
    if (meridian === "AM" && hour === 12) hour = 0;
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute
    );
  };

  const nextClass = {
    subject: "Math 101",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    location: "Room 204",
    instructor: "Prof. Smith",
    contact: "+1 123-456-7890",
  };

  const upcomingAssignments = [
    {
      title: "History Essay",
      dueDate: "Sep 5",
      status: "pending",
      priority: "high",
    },
    {
      title: "Physics Lab Report",
      dueDate: "Sep 7",
      status: "pending",
      priority: "medium",
    },
    {
      title: "Math Quiz",
      dueDate: "Sep 8",
      status: "completed",
      priority: "low",
    },
  ];

  const fullSchedule = [
    { time: "08:00 AM", subject: "English", location: "Room 101" },
    { time: "10:00 AM", subject: "Math 101", location: "Room 204" },
    { time: "12:00 PM", subject: "Lunch Break", location: "-" },
    { time: "01:00 PM", subject: "Physics", location: "Room 302" },
    { time: "03:00 PM", subject: "Computer Science", location: "Room 210" },
  ];

  const subjectColors: Record<string, string> = {
    English: "bg-blue-200",
    "Math 101": "bg-red-200",
    Physics: "bg-green-200",
    "Lunch Break": "bg-gray-200",
    "Computer Science": "bg-purple-200",
  };

  const now = new Date();
  let currentClassIndex = fullSchedule.findIndex((slot, i) => {
    const start = parseTimeToDate(slot.time);
    const nextStart = fullSchedule[i + 1]
      ? parseTimeToDate(fullSchedule[i + 1].time)
      : new Date(8640000000000000);
    return now >= start && now < nextStart;
  });

  const analyticsBarData = [
    { name: "Math", score: 85 },
    { name: "English", score: 78 },
    { name: "Physics", score: 92 },
    { name: "History", score: 74 },
  ];

  const analyticsPieData = [
    { subject: "Math", value: 12 },
    { subject: "English", value: 9 },
    { subject: "Physics", value: 14 },
    { subject: "History", value: 7 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const scoreTrendData = [
    { name: "Week 1", Math: 75, English: 70, Physics: 80, History: 60 },
    { name: "Week 2", Math: 80, English: 72, Physics: 85, History: 65 },
    { name: "Week 3", Math: 82, English: 75, Physics: 89, History: 70 },
    { name: "Week 4", Math: 85, English: 78, Physics: 92, History: 74 },
  ];

  const reminders = [
    { text: "Submit History Essay by Sep 5", type: "urgent" },
    { text: "Prepare for Math Quiz on Sep 8", type: "warning" },
    { text: "Join Physics study group meeting", type: "info" },
  ];

  const reminderColors = {
    urgent: "bg-red-200 text-red-800",
    warning: "bg-yellow-200 text-yellow-800",
    info: "bg-blue-200 text-blue-800",
  };

  const priorityColors: Record<string, string> = {
    high: "bg-red-300 text-red-900",
    medium: "bg-yellow-300 text-yellow-900",
    low: "bg-green-300 text-green-900",
  };

  const statusColors: Record<string, string> = {
    completed: "bg-green-200 text-green-900",
    pending: "bg-yellow-200 text-yellow-900",
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Next Class Section */}
      <Section title="Next Class" kicker="Today" className="pb-4">
        <GlassCard className="flex items-center space-x-6 shadow-lg hover:shadow-xl transition-shadow rounded-3xl p-6 bg-surface border border-gray-500">
          <Clock className="w-14 h-14 text-accent-2" />
          <div className="flex-1">
            <h3 className="text-3xl font-semibold font-header">
              {nextClass.subject}
            </h3>
            <p className="text-lg text-fg">
              {nextClass.startTime} - {nextClass.endTime} | {nextClass.location}
            </p>
            <p className="mt-1 text-muted">
              Instructor:{" "}
              <span className="font-medium">{nextClass.instructor}</span>{" "}
              <a
                href={`tel:${nextClass.contact}`}
                className="inline-flex items-center text-accent-2 hover:underline ml-2"
              >
                <PhoneCall className="w-4 h-4 mr-1" /> {nextClass.contact}
              </a>
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted block mb-1">Starts In</span>
            <Countdown targetDateTime={parseTimeToDate(nextClass.startTime)} />
          </div>
        </GlassCard>
      </Section>

      {/* Upcoming Assignments */}
      <Section
        title="Upcoming Assignments"
        subtitle="Stay on top of your due dates"
        className="pb-4"
      >
        <GlassCard>
          <ul className="space-y-4">
            {upcomingAssignments.map((assignment, i) => (
              <GlassCard key={i} className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold text-fg">
                    {assignment.title}
                  </h4>
                  <p className="text-muted">
                    Due: <time>{assignment.dueDate}</time>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold select-none",
                      statusColors[assignment.status]
                    )}
                  >
                    {assignment.status}
                  </span>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold select-none",
                      priorityColors[assignment.priority]
                    )}
                  >
                    {assignment.priority.charAt(0).toUpperCase() +
                      assignment.priority.slice(1)}
                  </span>
                </div>
              </GlassCard>
            ))}
          </ul>
        </GlassCard>
      </Section>

      {/* Full Day Schedule */}
      <Section
        title="Full Day Schedule"
        subtitle="Your classes and breaks for today"
        className="pb-4"
      >
        <GlassCard className="overflow-auto">
          <table className="min-w-full text-left border-collapse table-auto">
            <thead>
              <tr className="bg-surface-2">
                <th className="p-3 border-b border-gray-500">Time</th>
                <th className="p-3 border-b border-gray-500">Subject</th>
                <th className="p-3 border-b border-gray-500">Location</th>
              </tr>
            </thead>
            <tbody>
              {fullSchedule.map((slot, i) => {
                const isCurrent = i === currentClassIndex;
                return (
                  <tr key={i} className={cn("transition-colors")}>
                    <td className="p-3">
                      {slot.time}
                    </td>
                    <td className="p-3">
                      {slot.subject}
                    </td>
                    <td className="p-3">
                      {slot.location}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </GlassCard>
      </Section>

      {/* Analytics and Insights */}
      <Section
        title="Analytics & AI Insights"
        subtitle="Your performance and personalized recommendations"
        className="pb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bar Chart: Scores */}
          <GlassCard className="h-72">
            <h3 className="font-semibold text-xl mb-4 text-fg">
              Scores by Subject
            </h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={analyticsBarData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="name" stroke="var(--color-muted)" />
                <YAxis stroke="var(--color-muted)" />
                <Tooltip
                  wrapperStyle={{ color: "var(--color-fg)" }}
                  contentStyle={{ backgroundColor: "var(--color-surface)" }}
                />
                <Bar
                  dataKey="score"
                  fill="var(--color-accent-2)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Pie Chart: Time Spent */}
          <GlassCard className="h-72">
            <h3 className="font-semibold text-xl mb-4 text-fg">
              Time Spent per Subject (hrs)
            </h3>
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={analyticsPieData}
                  dataKey="value"
                  nameKey="subject"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="var(--color-accent-1)"
                  label
                >
                  {analyticsPieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Line Chart: Score Trend */}
          <GlassCard className="h-72">
            <h3 className="font-semibold text-xl mb-4 text-fg">
              Score Trends Over Weeks
            </h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart
                data={scoreTrendData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid
                  stroke="var(--color-muted)"
                  strokeDasharray="3 3"
                />
                <XAxis dataKey="name" stroke="var(--color-muted)" />
                <YAxis stroke="var(--color-muted)" />
                <Tooltip
                  wrapperStyle={{ color: "var(--color-fg)" }}
                  contentStyle={{ backgroundColor: "var(--color-surface)" }}
                />
                <Line type="monotone" dataKey="Math" stroke="#ef4444" />
                <Line type="monotone" dataKey="English" stroke="#3b82f6" />
                <Line type="monotone" dataKey="Physics" stroke="#22c55e" />
                <Line type="monotone" dataKey="History" stroke="#d97706" />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        {/* AI Recommendations */}
        <GlassCard className="mt-4">
          <h3 className="font-semibold text-2xl mb-4 flex items-center space-x-3 text-fg">
            <Activity className="w-6 h-6 text-accent-3" />
            AI Recommendations
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted text-lg">
            <li>
              Focus on History to improve your grades — assign 3 extra study
              sessions weekly.
            </li>
            <li>
              Review challenging Physics topics twice a week using suggested
              video tutorials.
            </li>
            <li>
              Maintain steady practice of Math problems with daily quizzes to
              increase retention.
            </li>
            <li>
              Take short breaks during long study periods to boost focus and
              reduce burnout.
            </li>
          </ul>
        </GlassCard>
      </Section>

      {/* Reminders & Notifications */}
      <Section title="Reminders & Notifications" className="pb-4">
        <GlassCard>
          <ul className="space-y-4">
            {reminders.map((reminder, i) => {
              let icon, colors;
              switch (reminder.type) {
                case "urgent":
                  icon = <AlertTriangle className="w-5 h-5 text-red-600" />;
                  colors = "bg-red-100 border-red-400 text-red-700";
                  break;
                case "warning":
                  icon = <AlertTriangle className="w-5 h-5 text-yellow-500" />;
                  colors = "bg-yellow-100 border-yellow-400 text-yellow-700";
                  break;
                default:
                  icon = <Info className="w-5 h-5 text-blue-600" />;
                  colors = "bg-blue-100 border-blue-400 text-blue-700";
              }
              return (
                <li
                  key={i}
                  className={`flex items-center space-x-3 border-l-4 p-3 rounded-md ${colors} bg-opacity-70`}
                >
                  {icon}
                  <span className="text-lg font-medium">{reminder.text}</span>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </Section>
    </div>
  );
}
