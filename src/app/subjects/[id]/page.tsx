"use client";
import React from "react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  CalendarCheck,
  Lightbulb,
  Calendar,
  Edit3,
  FileText,
  Archive,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const subjectDetail = {
  name: "Math 101",
  code: "MTH101",
  instructor: {
    name: "Dr. Alan Turing",
    email: "aturing@university.edu",
    phone: "+1 123-456-7890",
    office: "Room 204, Building A",
  },
  attendance: {
    totalClasses: 50,
    attendedClasses: 46,
    missedClasses: 4,
    attendancePercent: 92,
    attendanceStreak: 12,
  },
  marks: [
    { component: "Assignments", scored: 85, max: 100 },
    { component: "Quizzes", scored: 75, max: 80 },
    { component: "Midterm Exam", scored: 88, max: 100 },
    { component: "Final Exam", scored: 90, max: 100 },
  ],
  testResults: [
    { test: "Quiz 1", date: "2025-07-15", score: 18, max: 20 },
    { test: "Quiz 2", date: "2025-08-01", score: 17, max: 20 },
    { test: "Midterm", date: "2025-08-20", score: 88, max: 100 },
  ],
  upcomingEvents: [
    { name: "Final Exam", date: "2025-10-10", type: "Exam" },
    { name: "Project Submission", date: "2025-09-25", type: "Assignment" },
  ],
  courseMaterial: [
    { title: "Syllabus", type: "PDF", link: "#" },
    { title: "Calculus Notes", type: "PDF", link: "#" },
    { title: "Problem Sets", type: "ZIP", link: "#" },
  ],
  importantDates: [
    { date: "2025-09-01", event: "Start of Semester" },
    { date: "2025-10-10", event: "Final Exam" },
    { date: "2025-10-25", event: "End of Semester" },
  ],
  classroom: {
    roomNumber: "204",
    building: "Building A",
    schedule: [
      { day: "Monday", time: "10:00 - 11:00 AM" },
      { day: "Wednesday", time: "10:00 - 11:00 AM" },
      { day: "Friday", time: "10:00 - 11:00 AM" },
    ],
  },
  notes:
    "Make sure to review last year's problem sets and attend weekly study groups.",
  // Additional mock data for enhanced analytics
  gradesTrend: [
    { week: "Week 1", score: 70 },
    { week: "Week 2", score: 75 },
    { week: "Week 3", score: 80 },
    { week: "Week 4", score: 85 },
    { week: "Week 5", score: 87 },
    { week: "Week 6", score: 90 },
  ],
  timeSpent: [
    { subject: "Math 101", hours: 12 },
    { subject: "Physics", hours: 8 },
    { subject: "English", hours: 6 },
    { subject: "History", hours: 4 },
  ],
  aiRecommendations: [
    "Allocate 1 extra hour weekly to practice algebra problems for steady improvement.",
    "Review quiz mistakes within 2 days to maximize retention.",
    "Focus on solving more exam-type problems for confidence.",
    "Join peer study group sessions for collaborative learning benefits.",
  ],
};

const barColors = ["#60a5fa", "#fbbf24", "#34d399", "#f87171"];
const pieColors = ["#60a5fa", "#fbbf24", "#34d399", "#f87171"];
const professorPhotoUrl = "https://randomuser.me/api/portraits/men/69.jpg";

export default function SubjectDetailEnhanced() {
  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      <GlassCard className="flex flex-col gap-4 p-6 bg-surface border border-gray-600">
        {/* Professor Contact */}
        <div className="w-full flex gap-6">
          <div className="w-full space-y-4">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
              Professor
            </h3>

            {/* Photo and details container */}
            <div className="flex items-center gap-4">
              {/* Professor Photo */}
              <img
                src={professorPhotoUrl}
                alt={`${subjectDetail.instructor.name} photo`}
                className="w-52 h-52 rounded-full object-cover shadow-md ring-1 ring-white/20"
              />

              {/* Contact Info List */}
              <div className="flex flex-col flex-1 space-y-3">
                {[
                  {
                    icon: <UserCheck />,
                    label: "Name",
                    value: subjectDetail.instructor.name,
                  },
                  {
                    icon: <Mail />,
                    label: "Email",
                    value: subjectDetail.instructor.email,
                  },
                  {
                    icon: <Phone />,
                    label: "Phone",
                    value: subjectDetail.instructor.phone,
                  },
                  {
                    icon: <MapPin />,
                    label: "Office",
                    value: subjectDetail.instructor.office,
                  },
                ].map(({ icon, label, value }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 backdrop-blur-sm px-4 py-2 rounded-md shadow-md ring-1 ring-white/20"
                  >
                    <span className="p-2 bg-accent-2 rounded-lg text-white shadow-md w-8 h-8 flex items-center justify-center">
                      {icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-fg">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Classroom & Schedule */}
          <div className="w-full space-y-4">
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
              Classroom & Schedule
            </h3>
            <div className="flex items-center gap-3 backdrop-blur-sm px-4 py-2 rounded-md shadow-md ring-1 ring-white/20 mb-6">
              <MapPin className="text-accent-2 w-6 h-6" />
              <div>
                <p className="font-semibold text-fg">
                  Room {subjectDetail.classroom.roomNumber}
                </p>
                <p className="text-muted text-xs">
                  {subjectDetail.classroom.building}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {subjectDetail.classroom.schedule.map((sch, i) => (
                <div
                  key={i}
                  className="bg-accent-2/20 text-accent-2 rounded-xl py-1 px-3 text-xs font-semibold shadow-inner"
                >
                  <span>{sch.day}</span>:{" "}
                  <span className="font-normal">{sch.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-600 pb-2">
            Notes
          </h3>
          <div className="backdrop-blur-sm px-4 py-2 rounded-md shadow-inner ring-1 ring-white/20 text-muted italic text-sm max-h-48 overflow-auto whitespace-pre-wrap">
            {subjectDetail.notes}
          </div>
        </div>
      </GlassCard>

      <Section title="Attendance Overview" className="!mb-12">
        <GlassCard className="p-6 bg-surface border border-gray-600 flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-10 text-center">
          {[
            {
              icon: (
                <CheckCircle className="mx-auto text-accent-3 w-8 h-8 mb-1" />
              ),
              title: "Total Classes",
              value: subjectDetail.attendance.totalClasses,
            },
            {
              icon: <Clock className="mx-auto text-accent-2 w-8 h-8 mb-1" />,
              title: "Attended",
              value: subjectDetail.attendance.attendedClasses,
            },
            {
              icon: (
                <AlertCircle className="mx-auto text-red-500 w-8 h-8 mb-1" />
              ),
              title: "Missed",
              value: subjectDetail.attendance.missedClasses,
            },
            {
              icon: (
                <UserCheck className="mx-auto text-yellow-400 w-8 h-8 mb-1" />
              ),
              title: "Attendance Streak",
              value: subjectDetail.attendance.attendanceStreak,
            },
          ].map(({ icon, title, value }, i) => (
            <div key={i}>
              {icon}
              <p className="text-lg font-semibold">{value}</p>
              <p className="text-muted uppercase text-xs tracking-wide">
                {title}
              </p>
            </div>
          ))}
        </GlassCard>
      </Section>

      <Section title="Marks Breakdown" className="!mb-12">
        <GlassCard className="p-6 bg-surface border border-gray-600 overflow-x-auto">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={subjectDetail.marks}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              barCategoryGap={30}
            >
              <XAxis
                stroke="var(--color-muted)"
                tick={{ fill: "var(--color-muted)", fontSize: 12 }}
                dataKey="component"
              />
              <YAxis
                stroke="var(--color-muted)"
                tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              />
              <Tooltip />
              <Bar
                dataKey="scored"
                fill="var(--color-accent-2)"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </Section>

      <Section title="Grades Trend" className="!mb-12">
        <GlassCard className="p-6 bg-surface border border-gray-600 overflow-x-auto">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={subjectDetail.gradesTrend}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis
                dataKey="week"
                stroke="var(--color-muted)"
                tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              />
              <YAxis
                stroke="var(--color-muted)"
                tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              />
              <Tooltip />
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-muted)"
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="var(--color-accent-3)"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </Section>
      <Section title="Test Results" className="!mb-12">
        <GlassCard className="p-6 bg-surface border border-gray-600 overflow-auto max-h-64">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-2 px-4">Test</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Score</th>
                <th className="py-2 px-4">Max</th>
              </tr>
            </thead>
            <tbody>
              {subjectDetail.testResults.map(
                ({ test, date, score, max }, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white/5" : undefined}
                  >
                    <td className="py-2 px-4">{test}</td>
                    <td className="py-2 px-4">{date}</td>
                    <td className="py-2 px-4 font-semibold">{score}</td>
                    <td className="py-2 px-4">{max}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </GlassCard>
      </Section>

      <Section title="Upcoming Events" className="!mb-12">
        <GlassCard className="p-6 bg-surface border border-gray-600">
          <div className="mb-4 border-b border-gray-600 pb-2">
            <h3 className="text-lg font-semibold text-fg">Upcoming Events</h3>
            <p className="text-muted text-sm">Tests, assignments, and more</p>
          </div>
          <ul className="space-y-4">
            {subjectDetail.upcomingEvents.map(({ name, date, type }, i) => {
              let badgeColor = "bg-blue-500/40";
              let Icon = Calendar;
              if (type.toLowerCase() === "exam") {
                badgeColor = "bg-red-500/40";
                Icon = Edit3;
              } else if (type.toLowerCase() === "assignment") {
                badgeColor = "bg-yellow-500/40";
                Icon = FileText;
              }

              return (
                <li
                  key={i}
                  className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 shadow-inner"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(`p-2 rounded-md text-white`, badgeColor)}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-fg">{name}</p>
                      <p className="text-muted text-sm">{date}</p>
                    </div>
                  </div>
                  <span
                    className={`uppercase text-xs font-bold rounded px-3 py-1 text-white tracking-wider ${badgeColor}`}
                  >
                    {type}
                  </span>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </Section>

      <Section title="Course Materials" className="!mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {subjectDetail.courseMaterial.map(({ title, type, link }, i) => {
            // Choose icon based on type
            let Icon = FileText;
            if (type.toLowerCase() === "zip" || type.toLowerCase() === "rar") {
              Icon = Archive;
            }

            return (
              <GlassCard key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="p-3 bg-accent-2/30 rounded-lg text-accent-2 shadow">
                    <Icon className="w-8 h-8" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-fg">{title}</h4>
                    <p className="text-muted text-xs">
                      {type.toUpperCase()} File
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex-1 text-center flex justify-between"
                    aria-label={`View ${title}`}
                  >
                    View
                  </a>
                  <a
                    href={link}
                    download
                    className="btn btn-outline flex-1 text-center flex justify-between"
                    aria-label={`Download ${title}`}
                  >
                    Download
                  </a>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section title="Important Dates" className="!mb-12">
        <GlassCard>
          <ul className="relative ml-6 space-y-6">
            {subjectDetail.importantDates.map(({ date, event }, i) => (
              <li
                key={i}
                className="relative bg-white/10 backdrop-blur-sm rounded-md px-4 py-3 shadow-inner flex items-center gap-4 hover:bg-white/20 transition"
              >
                <span className="absolute -left-6 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-2 text-white shadow-lg font-semibold text-xs select-none ring-1 ring-white/30">
                  <time dateTime={date}>{new Date(date).getDate()}</time>
                </span>
                <CalendarCheck className="text-accent-2 w-5 h-5 flex-shrink-0" />
                <time className="text-muted text-sm whitespace-nowrap">
                  {date}
                </time>
                <span className="ml-2 font-semibold text-fg">{event}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>
      <Section title="Personalized AI Recommendations" className="!mb-12">
        <GlassCard>
          <ul className="space-y-4">
            {subjectDetail.aiRecommendations.map((rec, idx) => (
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
