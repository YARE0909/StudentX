// app/contact/page.tsx
'use client';

import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      // Optional: wire this to a route handler at /api/contact
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error('Failed to submit');

      // Simulate success for now:
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2500);
    }
  }

  const inputBase =
    'mt-1 rounded-lg border border-muted/40 bg-transparent px-3 py-2.5 text-sm outline-none transition ' +
    'placeholder:text-muted focus:border-muted/80';

  return (
    <>
      <Section
        kicker="Contact"
        title="Get in touch with OneUniX"
        subtitle="Have a question about the Management Hub or any suite? Reach out and the team will respond promptly."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <GlassCard>
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-semibold font-header">Email</h3>
                <p className="mt-1 text-muted">
                  Prefer writing? Send details and attachments to our inbox.
                </p>
                <p className="mt-2 text-sm font-medium font-header">hello@oneintelix.example</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-semibold font-header">Phone</h3>
                <p className="mt-1 text-muted">Talk to the team for quick questions and guidance.</p>
                <p className="mt-2 text-sm font-medium font-header">+1 (555) 123-4567</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-semibold font-header">Address</h3>
                <p className="mt-1 text-muted">Visit or send correspondence to our HQ.</p>
                <p className="mt-2 text-sm font-medium font-header">
                  100 Innovation Way, Suite 300, Tech City
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section
        kicker="Message"
        title="Send a message"
        subtitle="Share a few details and the right team will get back within one business day."
      >
        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm font-medium font-header">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Jane Doe"
                  className={inputBase}
                />
                <p className="mt-1 text-xs text-muted">Enter the name to address replies to.</p>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium font-header">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="jane@example.com"
                  className={inputBase}
                />
                <p className="mt-1 text-xs text-muted">We'll send confirmation and follow-ups here.</p>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium font-header">Subject</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                placeholder="Product inquiry or demo request"
                className={inputBase}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium font-header">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                placeholder="Tell us about your use case, timelines, and any questions."
                className={inputBase + ' resize-y'}
              />
            </div>

            <div className="flex flex-col md:flex md:flex-row gap-4 items-center justify-between">
              <div className="inline-flex items-center gap-2 text-muted text-sm">
                <Clock className="h-4 w-4 text-brand-400" />
                <span>Typical response: within 1 business day</span>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary rounded-xl inline-flex items-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="rounded-md border border-green-600/30 bg-green-600/10 px-3 py-2 text-sm">
                Thanks! The message has been sent.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-md border border-red-600/30 bg-red-600/10 px-3 py-2 text-sm">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </GlassCard>
      </Section>

      <Section
        title="Support hours"
        subtitle="Reach out anytime. Our team monitors requests continuously during business hours."
      >
        <GlassCard>
          <div className="flex items-start gap-3">
            <MessageSquare className="h-6 w-6 text-brand-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-muted">
                Monday-Friday, 9:00-18:00 local time. For off-hours inquiries, leave a message and
                the team will follow up on the next business day.
              </p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
