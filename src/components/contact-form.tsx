"use client";

import { useActionState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm, type ContactState } from "@/lib/actions";
import { services } from "@/lib/services-data";

const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-300 transition-colors duration-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 focus:outline-none";

const labelClass = "mb-1.5 block text-sm font-medium text-ink-700";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState
  );

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-600">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-600">
              {state.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Serviço de interesse
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Selecione uma opção
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Conte um pouco sobre o seu projeto
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">
            {state.errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending && <Loader2 size={16} className="animate-spin" />}
        {pending ? "Enviando..." : "Enviar mensagem"}
      </button>

      {state.status !== "idle" && state.message && (
        <div
          role="status"
          className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm ${
            state.status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          {state.status === "success" ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
          )}
          <p>{state.message}</p>
        </div>
      )}
    </form>
  );
}
