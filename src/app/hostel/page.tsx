"use client";
import React from "react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import {
  Home,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Bell,
  CreditCard,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

const hostelData = {
  roomInfo: {
    roomNumber: "B-203",
    block: "Block B",
    bedNumber: 2,
    roommates: [
      { name: "John Doe", contact: "+123 456 7890" },
      { name: "Jane Smith", contact: "+987 654 3210" },
    ],
  },
  leaveApplications: [
    {
      id: 1,
      dateFrom: "2025-09-02",
      dateTo: "2025-09-05",
      reason: "Family function",
      status: "Approved",
    },
    {
      id: 2,
      dateFrom: "2025-09-15",
      dateTo: "2025-09-17",
      reason: "Medical",
      status: "Pending",
    },
  ],
  messMenuToday: [
    "Vegetable Dal",
    "Jeera Rice",
    "Mixed Vegetable Curry",
    "Chapati",
    "Curd",
    "Fresh Salad",
  ],
  announcements: [
    {
      id: 1,
      text: "Water supply will be shut down from 10 PM to 6 AM on 4th Sep.",
      date: "2025-09-01",
    },
    {
      id: 2,
      text: "Inter-hostel cricket tournament registrations open till 10th Sep.",
      date: "2025-08-30",
    },
  ],
  payments: {
    totalDue: 5000,
    lastPaymentDate: "2025-08-01",
    status: "Pending",
  },
  complaints: [
    {
      id: 1,
      type: "Facility",
      description: "Leak in bathroom sink",
      status: "Resolved",
    },
    {
      id: 2,
      type: "Maintenance",
      description: "Fan not working",
      status: "Pending",
    },
  ],
};

export default function HostelPageEnhanced() {
  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      {/* Room Info */}
      <Section title="Room Information" kicker="Hostel Block & Room">
        <GlassCard className="p-6 bg-surface border border-gray-600 rounded-3xl flex flex-col md:flex-row gap-12 items-center justify-between shadow-xl backdrop-blur-lg">
          <div className="flex items-center space-x-10 text-fg">
            <Home className="w-16 h-16 text-accent-2 drop-shadow-lg" />
            <div>
              <p className="text-2xl font-semibold">
                Room {hostelData.roomInfo.roomNumber}
              </p>
              <p className="text-muted text-lg mt-1">
                Block: {hostelData.roomInfo.block}
              </p>
              <p className="text-muted text-lg mt-1">
                Bed Number: {hostelData.roomInfo.bedNumber}
              </p>
            </div>
          </div>

          {/* Improved Roommates Info */}
          <div className="w-full md:max-w-md">
            <p className="mb-4 font-semibold text-xl">Roommates</p>
            <div className="space-y-4">
              {hostelData.roomInfo.roommates.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between backdrop-blur-md rounded-md px-5 py-3 shadow-inner ring-1 ring-white/20"
                >
                  <div className="flex flex-col">
                    <span className="text-fg font-semibold text-lg">
                      {r.name}
                    </span>
                    <span className="text-muted text-sm">Roommate</span>
                  </div>
                  <a
                    href={`tel:${r.contact}`}
                    className="inline-flex items-center gap-2 text-accent-3 font-semibold text-sm hover:underline rounded px-3 py-1 shadow-md transition"
                    aria-label={`Call ${r.name}`}
                  >
                    <PhoneCall />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* Leave Applications */}
      <Section title="Leave Applications" kicker="Your Requests and Status">
        <GlassCard className="max-h-72 overflow-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="border-b border-gray-600">
              <tr>
                {["From", "To", "Reason", "Status"].map((head) => (
                  <th
                    key={head}
                    className="py-3 px-6 text-muted font-semibold tracking-wide text-sm"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hostelData.leaveApplications.map(
                ({ id, dateFrom, dateTo, reason, status }) => {
                  const statusColor =
                    status === "Approved"
                      ? "text-green-400"
                      : status === "Rejected"
                      ? "text-red-500"
                      : "text-yellow-400";
                  return (
                    <tr
                      key={id}
                      className="hover:bg-white/10 cursor-default transition-colors"
                    >
                      <td className="py-3 px-6">{dateFrom}</td>
                      <td className="py-3 px-6">{dateTo}</td>
                      <td className="py-3 px-6">{reason}</td>
                      <td className={`py-3 px-6 font-semibold ${statusColor}`}>
                        {status}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </GlassCard>
      </Section>

      {/* Mess Menu Today */}
      <Section title="Today's Mess Menu" kicker="Fresh & Nutritious">
        <GlassCard>
          <div className="mb-6 border-b border-gray-600 pb-2">
            <h3 className="text-xl font-semibold text-fg">Menu for Today</h3>
            <p className="text-muted text-sm">
              Enjoy our healthy and delicious meals
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {hostelData.messMenuToday.map((dish, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-accent-2/20 text-accent-2 font-semibold select-none cursor-default shadow-inner transition hover:bg-accent-2/40"
              >
                {dish}
              </span>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* Announcements */}
      <Section title="Hostel Announcements" kicker="Stay Updated">
        <GlassCard className="flex flex-col gap-4">
          {hostelData.announcements.map(({ id, text, date }) => (
            <article
              key={id}
              className="flex items-start gap-5 p-3 border border-gray-600 backdrop-blur-md rounded-md shadow-inner"
              role="listitem"
            >
              <Bell
                className="w-6 h-6 text-accent-4 flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div>
                <p className="text-fg font-medium">{text}</p>
                <time className="text-muted text-xs">{date}</time>
              </div>
            </article>
          ))}
        </GlassCard>
      </Section>

      {/* Payments */}
      <Section title="Payment Status" kicker="Stay on top of your dues">
        <GlassCard className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-fg">Total Due:</p>
            <p className="text-3xl font-bold text-accent-4">
              ₹{hostelData.payments.totalDue}
            </p>
            <p className="text-muted text-sm">
              Last Paid: {hostelData.payments.lastPaymentDate}
            </p>
          </div>
          <div>
            {hostelData.payments.status === "Pending" ? (
              <button className="btn btn-primary px-8 py-3 rounded-2xl transition-shadow hover:shadow-lg">
                Pay Now
              </button>
            ) : (
              <CheckCircle className="text-green-400 w-14 h-14" />
            )}
          </div>
        </GlassCard>
      </Section>

      {/* Complaints */}
      <Section title="Complaints & Requests" kicker="Track your submissions">
        <div className="mb-4">
            <button className="btn btn-primary">+ Complaint</button>
        </div>
        <GlassCard
          className="max-h-64 overflow-auto"
          aria-label="Complaints and Requests"
        >
          <table className="min-w-full text-left border-collapse">
            <thead className="border-b border-gray-600">
              <tr>
                {["Type", "Description", "Status"].map((head) => (
                  <th
                    key={head}
                    className="py-3 px-6 text-muted font-semibold tracking-wide text-sm"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hostelData.complaints.map(
                ({ id, type, description, status }) => {
                  let statusColor = "text-yellow-400";
                  if (status === "Resolved") statusColor = "text-green-400";
                  else if (status === "Rejected") statusColor = "text-red-500";
                  return (
                    <tr
                      key={id}
                      className="hover:bg-white/10 cursor-default transition-colors"
                    >
                      <td className="py-3 px-6">{type}</td>
                      <td className="py-3 px-6">{description}</td>
                      <td className={`py-3 px-6 font-semibold ${statusColor}`}>
                        {status}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </GlassCard>
      </Section>
    </div>
  );
}
