import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Header";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ChatMingle" },
      { name: "description", content: "ChatMingle Privacy Policy. Learn how we handle your data on the ChatMingle AI chat companion platform." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.chatmingle.online/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-400">Last updated: June 10, 2026</p>

        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          ChatMingle ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use ChatMingle at chatmingle.online ("the Service").
        </p>

        <div className="mt-10 space-y-8 text-gray-600">

          <section>
            <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed font-semibold text-gray-700">a) Information you provide:</p>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed list-none">
              {[
                "First name — entered voluntarily on the /start page, stored only in your browser's localStorage. We do not transmit or store your name on our servers.",
                "Chat messages — your messages are sent to our AI processing service (Sarvam AI) to generate responses. We do not permanently store your chat history on our servers. Conversations are session-based and ephemeral.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed font-semibold text-gray-700">b) Automatically collected information:</p>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed list-none">
              {[
                "Browser type and version",
                "Device type (mobile, desktop, tablet)",
                "General location (country/region level only — derived from IP address, not GPS)",
                "Pages visited and time spent on the platform",
                "Referring website (how you arrived at ChatMingle)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed list-none">
              {[
                "To provide and operate the AI chat companion service",
                "To process your chat messages through our AI service and return responses",
                "To improve the quality and safety of the Service",
                "To detect and prevent abuse, misuse, or illegal activity",
                "To comply with applicable Indian laws and legal obligations",
                "To respond to grievances and support requests",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed">
              We do <strong>not</strong> sell your personal information to third parties. We do not use your data for targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. Third-Party Service Providers</h2>
            <p className="mt-3 text-sm leading-relaxed">
              To operate the Service, we share limited data with the following third-party providers:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed list-none">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                <span><strong>Sarvam AI</strong> — Our AI language model provider that processes your chat messages to generate companion responses. Messages are sent to Sarvam AI's servers for processing. Please review Sarvam AI's privacy policy at sarvam.ai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                <span><strong>Vercel</strong> — Our hosting and infrastructure provider. Vercel may collect server logs including IP addresses. Please review Vercel's privacy policy at vercel.com/legal/privacy-policy.</span>
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed">
              We require all third-party providers to maintain appropriate data protection standards and only use your data as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. Data Retention</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed list-none">
              {[
                "Chat messages: Not permanently stored on our servers. Each session is ephemeral. When you end a chat or close your browser, your conversation is not retained by us.",
                "Your name: Stored only in your browser's localStorage. You can clear this at any time by clearing your browser data. We do not store it on our servers.",
                "Server logs: Retained for up to 30 days for security and debugging purposes, then permanently deleted.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. Cookies and Local Storage</h2>
            <p className="mt-3 text-sm leading-relaxed">
              ChatMingle uses browser localStorage (not traditional cookies) to store:
            </p>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed list-none">
              {[
                "Your entered name (cm_user_name) — to personalise your chat experience",
                "Your assigned companion name (cm_companion) — to maintain your current chat session",
                "Previously seen companion names (cm_used_names) — to ensure you get a fresh companion each session",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed">
              This data is stored entirely on your device and is never transmitted to our servers. You can clear it at any time by clearing your browser's site data for chatmingle.online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">6. Children's Privacy</h2>
            <p className="mt-3 text-sm leading-relaxed">
              ChatMingle is intended for users aged 18 and above. We do not knowingly collect personal information from anyone under the age of 18. If we become aware that a person under 18 has provided us with personal information, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">7. Data Security</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We implement reasonable technical and organisational measures to protect your information. All data in transit between your browser and our servers is encrypted using HTTPS/TLS. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">8. Your Rights Under Indian Law</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Under applicable Indian law including the Information Technology Act 2000 and its amendments, you have the right to:
            </p>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed list-none">
              {[
                "Access information we hold about you",
                "Request correction of inaccurate information",
                "Request deletion of your personal data",
                "Withdraw consent to data processing",
                "Lodge a complaint with our Grievance Officer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-pink-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed">
              To exercise any of these rights, contact our Grievance Officer at <strong>support@chatmingle.online</strong>. We will respond within 15 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">9. Grievance Officer</h2>
            <p className="mt-3 text-sm leading-relaxed">
              In accordance with the Information Technology Act 2000 and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, we have designated a Grievance Officer:
            </p>
            <div className="mt-3 rounded-xl bg-gray-50 p-4 text-sm">
              <p><strong>Grievance Officer:</strong> ChatMingle Support Team</p>
              <p className="mt-1"><strong>Email:</strong> support@chatmingle.online</p>
              <p className="mt-1"><strong>Response time:</strong> Within 24 hours of receipt, resolved within 15 days</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">10. Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">11. Governing Law</h2>
            <p className="mt-3 text-sm leading-relaxed">
              This Privacy Policy is governed by the laws of India, including the Information Technology Act 2000, IT Rules 2011 (Sensitive Personal Data or Information), and other applicable Indian privacy regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">12. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed">
              For any privacy-related questions or concerns, contact us at: <strong>support@chatmingle.online</strong>
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
