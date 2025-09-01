"use client";
import React, { useState } from "react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import {
  Calendar,
  Megaphone,
  MessageCircle,
  UserPlus,
  CheckCircle,
  Bell,
  Lightbulb,
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

const communityData = {
  upcomingEvents: [
    {
      id: 1,
      title: "Tech Talk: AI Advancements",
      date: "2025-09-15",
      location: "Auditorium",
      description: "Join experts discussing the latest in AI.",
      seatsAvailable: 20,
    },
    {
      id: 2,
      title: "Cultural Fest",
      date: "2025-09-20",
      location: "Grounds",
      description: "Celebrate culture with music and dance.",
      seatsAvailable: 50,
    },
  ],
  announcements: [
    {
      id: 1,
      message: "Campus Wi-Fi will be upgraded on Sep 10.",
      date: "2025-09-01",
    },
    {
      id: 2,
      message: "New study rooms opened in Library Block C.",
      date: "2025-08-28",
    },
  ],
  messages: [
    {
      id: 1,
      sender: "Alice Johnson",
      message: "Looking for teammates for hackathon. Anyone interested?",
      time: "10 mins ago",
    },
    {
      id: 2,
      sender: "Mark Lee",
      message: "Great workshop last week!",
      time: "1 hour ago",
    },
  ],
  signedUpEvents: [
    {
      id: 101,
      title: "Tech Talk: AI Advancements",
      date: "2025-09-15",
      location: "Auditorium",
      status: "Confirmed",
    },
  ],
  analytics: {
    eventsAttended: 5,
    eventsMissed: 1,
    participationRate: 83,
    activityOverTime: [
      { month: "May", events: 1 },
      { month: "Jun", events: 2 },
      { month: "Jul", events: 1 },
      { month: "Aug", events: 2 },
    ],
  },
};

const aiRecommendations = [
  {
    id: 1,
    text: "Attend at least one community event per month to expand your network.",
  },
  {
    id: 2,
    text: "Join study groups related to your courses to improve understanding and grades.",
  },
  {
    id: 3,
    text: "Volunteer for organizing events to develop leadership and teamwork skills.",
  },
  {
    id: 4,
    text: "Set reminders for upcoming deadlines and community activities to stay on track.",
  },
  {
    id: 5,
    text: "Use campus resources like workshops and career fairs to explore opportunities.",
  },
  {
    id: 6,
    text: "Engage actively in discussions on student forums to build connections.",
  },
  {
    id: 7,
    text: "Practice mindfulness and manage your time effectively to balance academics and social life.",
  },
  {
    id: 8,
    text: "Regularly update your resume with new skills acquired from community activities.",
  },
  {
    id: 9,
    text: "Seek feedback from peers and mentors for continuous personal growth.",
  },
  {
    id: 10,
    text: "Participate in both academic and non-academic events to develop a well-rounded profile.",
  },
];

const colors = ["#3b82f6", "#fbbf24"];

export default function CommunityPage() {
  const [signedUp, setSignedUp] = useState(
    communityData.signedUpEvents.map((e) => e.id)
  );

  function toggleSignup(eventId: number) {
    setSignedUp((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId]
    );
  }

  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Upcoming Events */}
      <Section title="Upcoming Events" kicker="Join & Participate">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {communityData.upcomingEvents.map(
            ({ id, title, date, location, description, seatsAvailable }) => (
              <GlassCard key={id}>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-muted text-sm mb-2">{description}</p>
                  <p className="text-muted text-xs">
                    <Calendar className="inline mr-1 w-4 h-4" />
                    {date} | <strong>{location}</strong>
                  </p>
                  <p className="mt-1 text-sm text-accent-3 font-semibold">
                    Seats Available: {seatsAvailable}
                  </p>
                </div>
                <button
                  onClick={() => toggleSignup(id)}
                  disabled={signedUp.includes(id)}
                  className={`mt-6 btn rounded-md w-full flex justify-center items-center ${
                    signedUp.includes(id)
                      ? "btn-primary cursor-not-allowed bg-gray-600"
                      : "btn-primary"
                  }`}
                >
                  {signedUp.includes(id) ? "Signed Up" : "Sign Up"}
                </button>
              </GlassCard>
            )
          )}
        </div>
      </Section>

      {/* Signed Up Events */}
      <Section title="My Signed Up Events" kicker="Track your participation">
        {communityData.signedUpEvents.length ? (
          <GlassCard>
            <ul className="space-y-4 text-fg">
              {communityData.signedUpEvents.map(
                ({ id, title, date, location, status }) => (
                  <li
                    key={id}
                    className="flex justify-between items-center border border-gray-600 backdrop-blur-sm rounded-md p-4 shadow-inner"
                  >
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-muted text-sm">
                        {date} | {location}
                      </p>
                    </div>
                    <span className="bg-accent-3/40 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {status}
                    </span>
                  </li>
                )
              )}
            </ul>
          </GlassCard>
        ) : (
          <p className="text-muted">
            You have not signed up for any events yet.
          </p>
        )}
      </Section>

      {/* Announcements */}
      <Section title="Community Announcements" kicker="Stay Informed">
        <GlassCard className="flex flex-col gap-4">
          {communityData.announcements.map(({ id, message, date }) => (
            <div
              key={id}
              className="flex items-start gap-4 p-3 border border-gray-600 backdrop-blur-md rounded-lg shadow-inner"
            >
              <Megaphone className="w-6 h-6 text-accent-4 flex-shrink-0 mt-1" />
              <div>
                <p className="text-fg">{message}</p>
                <time className="text-muted text-xs">{date}</time>
              </div>
            </div>
          ))}
        </GlassCard>
      </Section>

      {/* Messages */}
      <Section title="Community Messages" kicker="Connect with other students">
        <GlassCard>
          {communityData.messages.map(({ id, sender, message, time }) => (
            <div key={id} className="flex items-start gap-4 mb-4 last:mb-0">
              <MessageCircle className="w-6 h-6 text-accent-3 flex-shrink-0 mt-1" />
              <div>
                <p className="text-fg font-semibold">{sender}</p>
                <p className="text-muted">{message}</p>
                <time className="text-xs text-muted">{time}</time>
              </div>
            </div>
          ))}
        </GlassCard>
      </Section>

      {/* Analytics */}
      <Section
        title="Community Participation Analytics"
        kicker="Track your engagement"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">
              Events Attended vs Missed
            </h3>
            <ResponsiveContainer width="100%" height={230}>
              <PieChart>
                <Pie
                  data={[
                    {
                      name: "Attended",
                      value: communityData.analytics.eventsAttended,
                    },
                    {
                      name: "Missed",
                      value: communityData.analytics.eventsMissed,
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  <Cell fill={colors[0]} />
                  <Cell fill={colors[1]} />
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Participation Rate</h3>
            <div className="text-center text-4xl font-extrabold text-accent-2 select-none">
              {communityData.analytics.participationRate}%
            </div>
            <p className="text-muted mt-2 text-center">
              Based on all community events
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Activity Over Time</h3>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart
                data={communityData.analytics.activityOverTime}
                margin={{ top: 20, right: 5, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="month" stroke="var(--color-muted)" />
                <YAxis stroke="var(--color-muted)" />
                <Tooltip />
                <Bar
                  dataKey="events"
                  fill="var(--color-accent-2)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </Section>

      {/* AI Recommendations */}
      <Section
        title="Personalized AI Recommendations"
        kicker="Tips to boost your community involvement"
      >
        <GlassCard>
          <ul className="space-y-4">
            {aiRecommendations.map((rec) => (
              <li
                key={rec.id}
                className="
                          flex items-start gap-4 p-4 rounded-md
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
                <p className="text-fg leading-relaxed">{rec.text}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Section>
    </div>
  );
}
