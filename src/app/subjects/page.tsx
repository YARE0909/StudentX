"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  UserCheck,
  Lightbulb,
} from "lucide-react";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { useRouter } from "next/navigation";

function CircularProgress({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) {
  const radius = 44;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="rgba(255,255,255,0.14)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
      </svg>
      <span className={cn("absolute text-base font-bold", color)}>
        {progress}%
      </span>
    </div>
  );
}

const getColor = (att: number) =>
  att >= 90 ? "#34d399" : att >= 80 ? "#fbbf24" : "#f87171";

export default function SubjectsSectionGlass() {
  const router = useRouter();

  const handleReroute = async () => {
    router.push("/subjects/2");
  };

  const subjects = [
    {
      name: "Math 101",
      code: "MTH101",
      instructor: "Dr. Alan Turing",
      attendance: 92,
      attendanceStreak: 12,
      averageGrade: "A-",
      totalClasses: 50,
      attendedClasses: 46,
      missedClasses: 4,
      lastAttendance: "Aug 30, 2025",
      progressPercent: 80,
      remarks: "On track for excellent grade.",
    },
    {
      name: "English",
      code: "ENG201",
      instructor: "Ms. Jane Austen",
      attendance: 85,
      attendanceStreak: 8,
      averageGrade: "B+",
      totalClasses: 48,
      attendedClasses: 41,
      missedClasses: 7,
      lastAttendance: "Aug 29, 2025",
      progressPercent: 75,
    },
    {
      name: "Physics",
      code: "PHY301",
      instructor: "Dr. Marie Curie",
      attendance: 90,
      attendanceStreak: 10,
      averageGrade: "B",
      totalClasses: 52,
      attendedClasses: 47,
      missedClasses: 5,
      lastAttendance: "Aug 28, 2025",
      progressPercent: 72,
      remarks: "Needs improvement in lab attendance.",
    },
    {
      name: "History",
      code: "HIS101",
      instructor: "Mr. Howard Zinn",
      attendance: 78,
      attendanceStreak: 6,
      averageGrade: "C+",
      totalClasses: 45,
      attendedClasses: 35,
      missedClasses: 10,
      lastAttendance: "Aug 27, 2025",
      progressPercent: 65,
    },
    {
      name: "Computer Science",
      code: "CS401",
      instructor: "Dr. Grace Hopper",
      attendance: 95,
      attendanceStreak: 16,
      averageGrade: "A",
      totalClasses: 50,
      attendedClasses: 48,
      missedClasses: 2,
      lastAttendance: "Aug 31, 2025",
      progressPercent: 90,
      remarks: "Excellent participation in projects.",
    },
    {
      name: "Chemistry",
      code: "CHE201",
      instructor: "Dr. Rosalind Franklin",
      attendance: 88,
      attendanceStreak: 9,
      averageGrade: "B",
      totalClasses: 47,
      attendedClasses: 41,
      missedClasses: 6,
      lastAttendance: "Aug 30, 2025",
      progressPercent: 70,
    },
    {
      name: "Physical Education",
      code: "PE101",
      instructor: "Coach John Doe",
      attendance: 98,
      attendanceStreak: 20,
      averageGrade: "A+",
      totalClasses: 40,
      attendedClasses: 39,
      missedClasses: 1,
      lastAttendance: "Aug 31, 2025",
      progressPercent: 95,
      remarks: "Consistent and active participation.",
    },
  ];

  const aiSummaries = [
    "Focus on History classes to improve attendance above 80%.",
    "Keep up the excellent participation in Computer Science projects.",
    "Make extra time to improve Physics lab attendance.",
    "Maintain steady practice with Math quizzes for better retention.",
  ];

  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      <Section
        title="Subjects"
      >
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {aiSummaries.map((tip, idx) => (
            <GlassCard key={idx} className="flex items-center gap-4">
              <Lightbulb className="w-8 h-8 text-accent-4 flex-shrink-0" />
              <p className="text-fg text-lg">{tip}</p>
            </GlassCard>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {subjects.map((subject) => (
            <div
              className="cursor-pointer"
              key={subject.code}
              onClick={handleReroute}
            >
              <GlassCard>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                  {/* Attendance circle and info */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <CircularProgress
                      progress={subject.attendance}
                      color={getColor(subject.attendance)}
                    />
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-fg mb-0.5">
                        {subject.name}
                      </h3>
                      <span className="text-xs md:text-sm text-white/70">
                        {subject.code}
                      </span>
                      <span className="text-xs md:text-sm text-white/50 italic">
                        {subject.instructor}
                      </span>
                    </div>
                  </div>

                  {/* Stats and progress */}
                  <div className="w-full flex-1 flex flex-col">
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                      {[
                        {
                          icon: <CheckCircle className="w-5 h-5" />,
                          value: subject.totalClasses,
                          label: "Total Classes",
                          color: "bg-accent-3/20 text-accent-3",
                        },
                        {
                          icon: <Clock className="w-5 h-5" />,
                          value: subject.attendedClasses,
                          label: "Attended",
                          color: "bg-accent-2/20 text-accent-2",
                        },
                        {
                          icon: <AlertCircle className="w-5 h-5" />,
                          value: subject.missedClasses,
                          label: "Missed",
                          color: "bg-red-500/20 text-red-400",
                        },
                        {
                          icon: <UserCheck className="w-5 h-5" />,
                          value: subject.attendanceStreak,
                          label: "Streak",
                          color: "bg-yellow-400/20 text-yellow-400",
                        },
                      ].map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-1"
                        >
                          <span
                            className={cn(
                              "p-2 rounded-full shadow text-base",
                              stat.color
                            )}
                          >
                            {stat.icon}
                          </span>
                          <span className="font-semibold text-base text-fg">
                            {stat.value}
                          </span>
                          <span className="text-xs text-white/60 uppercase">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress and grade */}
                    <div className="mt-4 w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-fg">
                          Course Progress
                        </span>
                        {subject.averageGrade && (
                          <span className="text-xs text-fg font-semibold">
                            Grade: {subject.averageGrade}
                          </span>
                        )}
                      </div>
                      <div className="relative h-3 w-full rounded-full bg-gradient-to-r from-white/20 to-white/5 shadow-inner overflow-hidden mb-1">
                        <div
                          className={cn(
                            "h-3 rounded-full transition-all duration-500 absolute left-0 top-0",
                            subject.progressPercent &&
                              subject.progressPercent >= 80
                              ? "bg-green-400/80"
                              : subject.progressPercent &&
                                subject.progressPercent >= 50
                              ? "bg-yellow-400/80"
                              : "bg-red-400/80"
                          )}
                          style={{ width: `${subject.progressPercent ?? 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Remarks and attendance */}
                    <div className="mt-2 text-xs text-white/60 italic">
                      {subject.lastAttendance && (
                        <span>Last: {subject.lastAttendance}.</span>
                      )}
                      {subject.remarks && (
                        <span className="ml-2">{subject.remarks}</span>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
