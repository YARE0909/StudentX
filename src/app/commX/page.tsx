"use client";
import React, { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import {
  Bell,
  MessageSquare,
  User,
  Plus,
  CheckCircle,
  XCircle,
  Send,
  Search,
} from "lucide-react";

const mockNotifications = [
  { id: 1, message: "Leave request approved for Sep 2-5", type: "info" },
  { id: 2, message: "New assignment posted for CS401", type: "alert" },
  { id: 3, message: "Campus Wi-Fi maintenance on Sep 10", type: "info" },
  { id: 4, message: "Grades released for Physics Midterm", type: "info" },
];

const mockChats = [
  {
    id: 1,
    name: "Dr. Alan Turing",
    lastMessage: "Please review the notes.",
    time: "2m ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Are you joining the study group?",
    time: "1h ago",
  },
  {
    id: 3,
    name: "Prof. Marie Curie",
    lastMessage: "Lab session rescheduled.",
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Mark Lee",
    lastMessage: "Nice work on the project!",
    time: "2d ago",
  },
];

const mockQueries = [
  {
    id: 1,
    subject: "Math 101",
    question: "Explain Fourier series?",
    status: "Open",
  },
  {
    id: 2,
    subject: "Physics",
    question: "Clarify lab report submission.",
    status: "Resolved",
  },
  {
    id: 3,
    subject: "CS401",
    question: "Request extension for project.",
    status: "Pending",
  },
];

export default function CommXFresh() {
  const [newQuery, setNewQuery] = useState("");
  const [queries, setQueries] = useState(mockQueries);
  const [searchChat, setSearchChat] = useState("");

  const addNewQuery = () => {
    if (newQuery.trim() === "") return;
    const newId = queries.length ? queries[queries.length - 1].id + 1 : 1;
    setQueries([
      {
        id: newId,
        subject: "General",
        question: newQuery.trim(),
        status: "Open",
      },
      ...queries,
    ]);
    setNewQuery("");
  };

  const filteredChats = mockChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchChat.toLowerCase())
  );

  return (
    <div className="max-w-8xl mx-auto min-h-screen flex flex-col gap-4 font-sans">
      {/* Notifications & Quick Links */}
      <div className="w-full h-full flex gap-4">
        <div className="h-ful flex flex-col gap-8">
          <GlassCard className="h-full flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-7 h-7 text-accent-3" />
              <h2 className="text-2xl font-bold tracking-wide">
                Notifications
              </h2>
            </div>
            <div className="space-y-5 max-h-[calc(100vh-180px)] overflow-y-auto pr-2">
              {mockNotifications.map(({ id, message, type }) => (
                <div
                  key={id}
                  className={`p-4 rounded-xl flex items-start gap-4 shadow-inner ${
                    type === "alert"
                      ? "bg-red-600/20 text-red-300"
                      : "bg-accent-2/20 text-accent-2"
                  }`}
                >
                  {type === "alert" ? (
                    <XCircle className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  )}
                  <p className="leading-relaxed text-sm">{message}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Chats */}
        <div className="w-full flex flex-col">
          <GlassCard className="flex flex-col">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-7 h-7 text-accent-4 mr-3" />
              <h2 className="text-3xl font-bold tracking-wide flex-grow">
                Chats
              </h2>
              <input
                type="search"
                placeholder="Search chats"
                className="input bg-white/10 text-fg placeholder-white/50 border border-white/20 backdrop-blur-md rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-2 transition w-60"
                value={searchChat}
                onChange={(e) => setSearchChat(e.target.value)}
              />
            </div>

            <ul className="overflow-auto space-y-5 pr-2">
              {filteredChats.length ? (
                filteredChats.map(({ id, name, lastMessage, time }) => (
                  <li
                    key={id}
                    className="p-5 rounded-2xl backdrop-blur-md border border-gray-600 shadow-inner cursor-pointer hover:bg-white/20 transition"
                    tabIndex={0}
                    role="button"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <time className="text-xs text-muted">{time}</time>
                    </div>
                    <p className="text-muted text-sm line-clamp-1">
                      {lastMessage}
                    </p>
                  </li>
                ))
              ) : (
                <p className="text-muted text-center mt-6">No chats found</p>
              )}
            </ul>
          </GlassCard>
        </div>
      </div>

      {/* Queries & New Query */}
      <div className="col-span-4 flex gap-8 max-h-screen">
        {/* New Query */}
        <GlassCard className="p-8 backdrop-blur-lg border border-borderContrast rounded-3xl shadow-xl flex flex-col">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Plus className="w-6 h-6 text-accent-4" />
            New Query
          </h2>
          <textarea
            placeholder="Ask a question or raise a query..."
            className="resize-none rounded-xl border border-gray-600 text-fg p-4 focus:outline-none focus:ring-2 focus:ring-accent-2 transition h-32 mb-6"
            value={newQuery}
            onChange={(e) => setNewQuery(e.target.value)}
          />
          <button
            onClick={addNewQuery}
            disabled={!newQuery.trim()}
            className="btn btn-primary self-end px-8 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </GlassCard>

        {/* Queries List */}
        <GlassCard className="p-6 backdrop-blur-lg border border-borderContrast rounded-3xl shadow-xl flex-1 overflow-auto">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-7 h-7 text-accent-4 mr-3" />
            <h2 className="text-3xl font-bold tracking-wide flex-grow">
              Your Queries
            </h2>
          </div>

          {queries.length ? (
            <ul className="space-y-4">
              {queries.map(({ id, subject, question, status }) => {
                const statusColors: any = {
                  Open: "bg-yellow-400/40 text-yellow-400",
                  Resolved: "bg-green-400/40 text-green-400",
                  Pending: "bg-blue-400/40 text-blue-400",
                };
                return (
                  <li
                    key={id}
                    className="p-5 rounded-2xl border border-gray-600 backdrop-blur-md shadow-inner"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-lg">{subject}</span>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full select-none ${statusColors[status]}`}
                      >
                        {status}
                      </span>
                    </div>
                    <p className="text-muted">{question}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-muted text-center">No queries submitted.</p>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
