// app/products/page.tsx
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import {
  LayoutDashboard,
  Network,
  Shield,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  UserRoundCheck,
  MessageSquare,
  BarChart3,
  CalendarCheck2,
  Wallet,
  BookOpen,
  ArrowRightLeft,
} from "lucide-react";

const products = [
  {
    icon: GraduationCap,
    name: "StudentX",
    blurb:
      "Unified student portal combining attendance, marks, course materials, performance tracking, hostel booking, event management, and placement support with AI-powered personalized recommendations.",
    connects:
      "Feeds real-time student progress to Analytics; coordinates hostel booking and placement via Operations; communicates alerts through the Communication Suite.",
  },
  {
    icon: UserRoundCheck,
    name: "FacultyX",
    blurb:
      "Comprehensive faculty and staff platform for course management, student tracking, grading, workload scheduling, and research collaboration enhanced by AI-powered analytics.",
    connects:
      "Shares student performance data with StudentX and Analytics; manages course delivery schedules through Operations; escalates mentorship and engagement alerts via Communication.",
  },
  {
    icon: UserRoundCheck,
    name: "ParentX",
    blurb:
      "Real-time parent engagement portal delivering academic progress, attendance updates, notifications, direct communication with faculty, and AI-powered predictive insights.",
    connects:
      "Receives child progress information from StudentX; sends curated notifications via Communication; integrates calendar events with Operations.",
  },
  {
    icon: MessageSquare,
    name: "CommX",
    blurb:
      "Centralized communication hub with AI-moderated chat, group forums, announcements, video conferencing, and searchable knowledge base across all OneUniX products.",
    connects:
      "Facilitates communication between all suites; delivers targeted notifications and alerts; archives communications for compliance and audit.",
  },
  {
    icon: BookOpen,
    name: "LearnX",
    blurb:
      "AI-enhanced Learning Management System offering adaptive learning paths, content recommendations, automated assessments, and virtual tutoring accessible seamlessly by students and faculty.",
    connects:
      "Integrates course content and assignments with StudentX and FacultyX; engagement analytics feed into InsightX; schedules sync with Operations.",
  },
  {
    icon: LayoutDashboard,
    name: "HostelX",
    blurb:
      "Optimized hostel and facility management including room allocation, maintenance tracking, visitor logs, and mess management powered by AI predictive analytics.",
    connects:
      "Shares booking data with StudentX and Operations; maintenance alerts route through Communication; resource utilization reports feed into InsightX.",
  },
  {
    icon: BriefcaseBusiness,
    name: "CareerX",
    blurb:
      "Smart placement and career services platform with AI-driven job matching, interview scheduling, resume optimization, and recruitment analytics to maximize student opportunities.",
    connects:
      "Collaborates with StudentX for readiness data; schedules interviews via Operations; placement outcomes feed InsightX and Communication.",
  },
  {
    icon: Wallet,
    name: "AdminX",
    blurb:
      "Central administrative and financial suite handling fee collections, payroll, budgeting, procurement, compliance, and HR with AI-assisted automation and fraud detection.",
    connects:
      "Receives student financial data from StudentX; sends notifications via Communication; feeds finance and HR analytics to InsightX.",
  },
];

export default function ProductsPage() {
  return (
    <div className="px-8 max-w-7xl mx-auto space-y-16 min-h-screen">
      <Section
        kicker="Products"
        title="Explore the OneUniX Ecosystem"
        subtitle="One core Management Hub with nine integrated suites—adopt incrementally or deploy end-to-end."
        className="flex flex-col gap-4"
      >
        <GlassCard>
          <div className="flex items-start gap-3">
            <Network className="mt-1 h-6 w-6 text-brand-400 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold font-header">
                How the ecosystem works
              </h3>
              <p className="mt-1 text-muted">
                The Management Hub is the central nerve center, standardizing
                data, enforcing policies, and orchestrating workflows across all
                suites. Each suite is a single, feature-rich product for its
                operational area, exchanging events and metrics via the Hub.
                Analytics produces insights, Communication delivers messages,
                Compliance enforces governance, and Operations keeps everything
                on schedule.
              </p>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-3">
            <BarChart3 className="mt-1 h-7 w-7 text-brand-400 shrink-0" />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold font-header">InsightX</h3>
              <p className="mt-1 text-muted">
                Unified AI-powered analytics and business intelligence platform
                delivering dynamic dashboards, predictive models, sentiment
                analysis, and actionable insights for decision-makers.
              </p>
              <div className="mt-3 pt-3 border-t border-muted/30 flex items-start gap-2">
                <ArrowRightLeft className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <p className="text-sm text-muted">
                  Aggregates data from all other suites; shares insights and
                  alerts with Management Hub and Communication; supports AI
                  model training and governance.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <GlassCard key={p.name}>
              <div className="flex items-start gap-3">
                <p.icon className="mt-1 h-7 w-7 text-brand-400 shrink-0" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold font-header">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-muted">{p.blurb}</p>
                  <div className="mt-3 pt-3 border-t border-muted/30 flex items-start gap-2">
                    <ArrowRightLeft className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted">{p.connects}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
