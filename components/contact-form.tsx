"use client";

import { Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { copy, getLocaleFromPath } from "@/lib/i18n";

export function ContactForm() {
  const locale = getLocaleFromPath(usePathname());
  const text = copy[locale].contactForm;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        organization: formData.get("organization"),
        email: formData.get("email"),
        interest: formData.get("interest"),
        message: formData.get("message"),
        locale
      })
    }).catch(() => null);

    if (response?.ok) {
      event.currentTarget.reset();
      setStatus("success");
      setNotice(
        locale === "ar"
          ? "تم إرسال رسالتك بنجاح. سيتواصل معك فريق أديف."
          : "Your message has been sent. The ADIF team will follow up."
      );
      return;
    }

    setStatus("error");
    setNotice(
      locale === "ar"
        ? "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى أو التواصل عبر البريد الإلكتروني."
        : "The message could not be sent right now. Please try again or contact us by email."
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-xl border border-navy/10 bg-white p-6 shadow-institutional"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          {text.name}
          <input
            name="name"
            required
            autoComplete="name"
            className="focus-ring h-12 rounded-md border border-navy/10 bg-muted px-4"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          {text.organization}
          <input
            name="organization"
            autoComplete="organization"
            className="focus-ring h-12 rounded-md border border-navy/10 bg-muted px-4"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        {text.email}
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="focus-ring h-12 rounded-md border border-navy/10 bg-muted px-4"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        {text.interest}
        <select
          name="interest"
          required
          className="focus-ring h-12 rounded-md border border-navy/10 bg-muted px-4"
        >
          {text.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        {text.message}
        <textarea
          name="message"
          required
          className="focus-ring min-h-36 rounded-md border border-navy/10 bg-muted p-4"
        />
      </label>
      {notice ? (
        <p
          className={`rounded-md px-4 py-3 text-sm font-semibold ${
            status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {notice}
        </p>
      ) : null}
      <Button
        type="submit"
        variant="navy"
        className="justify-self-start"
        disabled={status === "sending"}
      >
        {status === "sending" ? (locale === "ar" ? "جار الإرسال..." : "Sending...") : text.submit}
        <Send size={17} />
      </Button>
    </form>
  );
}
