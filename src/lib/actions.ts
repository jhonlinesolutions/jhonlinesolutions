"use server";

import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  company: z.string().trim().optional(),
  phone: z.string().trim().optional(),
  service: z.string().trim().optional(),
  message: z.string().trim().min(10, "Conte um pouco mais sobre o seu projeto."),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
};

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    phone: formData.get("phone") || undefined,
    service: formData.get("service") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof z.infer<typeof contactSchema>;
      errors[field] = issue.message;
    }
    return {
      status: "error",
      message: "Verifique os campos destacados e tente novamente.",
      errors,
    };
  }

  const data = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.info("[contato] Novo lead (RESEND_API_KEY não configurada):", data);
    return {
      status: "error",
      message:
        "Não foi possível enviar sua mensagem automaticamente no momento. Fale com a gente diretamente pelo e-mail ou telefone abaixo.",
    };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "JH Online Solutions <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
      replyTo: data.email,
      subject: `Novo contato pelo site — ${data.name}`,
      text: [
        `Nome: ${data.name}`,
        `E-mail: ${data.email}`,
        data.company ? `Empresa: ${data.company}` : null,
        data.phone ? `Telefone: ${data.phone}` : null,
        data.service ? `Serviço de interesse: ${data.service}` : null,
        "",
        "Mensagem:",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return {
      status: "success",
      message:
        "Mensagem enviada com sucesso! Nossa equipe vai responder em até 1 dia útil.",
    };
  } catch (error) {
    console.error("[contato] Falha ao enviar e-mail:", error);
    return {
      status: "error",
      message:
        "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes ou fale com a gente pelo e-mail abaixo.",
    };
  }
}
