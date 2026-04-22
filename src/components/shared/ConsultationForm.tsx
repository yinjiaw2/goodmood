"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const GOOGLE_SCRIPT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwSmNPxkhmDBlJciBbJNJheN9es25iD9n_CIi-9SqPZjVbilquKEi24l2ZByB5tgL7F/exec";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  challenge: string;
  referral: string;
};

export default function ConsultationForm() {
  const t = useTranslations("contact");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      service: "",
      budget: "",
      challenge: "",
      referral: "",
    },
  });

  const serviceOptions = t.raw("consultationForm.serviceOptions") as string[];
  const budgetOptions = t.raw("consultationForm.budgetOptions") as string[];
  const referralOptions = t.raw("consultationForm.referralOptions") as string[];

  const clearFormStatus = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitted(false);
    setSubmitError(null);

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      company: values.company.trim(),
      website: values.website.trim(),
      service: values.service,
      budget: values.budget,
      challenge: values.challenge.trim(),
      referral: values.referral,
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = (await response.json()) as {
        result?: string;
        error?: unknown;
      };

      if (result.result !== "success") {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "Apps Script returned an error response.",
        );
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitError(t("submitErrorMessage"));
    }
  };

  const inputClass =
    "w-full rounded-[14px] border border-black/10 bg-white px-4 py-3.5 text-[14px] text-[#1A1A1A] outline-none transition placeholder:text-[#A0A0A0] focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25";
  const labelClass =
    "mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]";
  const errorClass = "mt-2 text-xs text-red-600";

  return (
    <div className="rounded-[28px] border border-white/10 bg-[#F5F2EB] p-6 text-[#1A1A1A] shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-8">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A8378]">
          <span className="inline-block h-px w-[30px] bg-[#F5C400]" />
          {t("consultationForm.label")}
        </div>
        <h2
          className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] md:text-[46px]"
          style={fontStyle}
        >
          {t("consultationForm.title")}
        </h2>
        <p
          className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#6F6A61]"
          style={fontStyle}
        >
          {t("consultationForm.subtitle")}
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="contact-name">
              {t("consultationForm.fields.name.label")}
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder={t("consultationForm.fields.name.placeholder")}
              aria-invalid={errors.name ? "true" : "false"}
              className={inputClass}
              style={fontStyle}
              {...register("name", {
                required: t("consultationForm.fields.name.errorRequired"),
                onChange: clearFormStatus,
              })}
            />
            {errors.name ? (
              <p className={errorClass} style={fontStyle}>
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClass} htmlFor="contact-email">
              {t("consultationForm.fields.email.label")}
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder={t("consultationForm.fields.email.placeholder")}
              aria-invalid={errors.email ? "true" : "false"}
              className={inputClass}
              style={fontStyle}
              {...register("email", {
                required: t("consultationForm.fields.email.errorRequired"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("consultationForm.fields.email.errorInvalid"),
                },
                onChange: clearFormStatus,
              })}
            />
            {errors.email ? (
              <p className={errorClass} style={fontStyle}>
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="contact-phone">
              {t("consultationForm.fields.phone.label")}
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder={t("consultationForm.fields.phone.placeholder")}
              className={inputClass}
              style={fontStyle}
              {...register("phone", { onChange: clearFormStatus })}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="contact-company">
              {t("consultationForm.fields.company.label")}
            </label>
            <input
              id="contact-company"
              type="text"
              placeholder={t("consultationForm.fields.company.placeholder")}
              aria-invalid={errors.company ? "true" : "false"}
              className={inputClass}
              style={fontStyle}
              {...register("company", {
                required: t("consultationForm.fields.company.errorRequired"),
                onChange: clearFormStatus,
              })}
            />
            {errors.company ? (
              <p className={errorClass} style={fontStyle}>
                {errors.company.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-website">
            {t("consultationForm.fields.website.label")}
          </label>
          <input
            id="contact-website"
            type="url"
            placeholder={t("consultationForm.fields.website.placeholder")}
            className={inputClass}
            style={fontStyle}
            {...register("website", { onChange: clearFormStatus })}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-service">
            {t("consultationForm.fields.service.label")}
          </label>
          <select
            id="contact-service"
            aria-invalid={errors.service ? "true" : "false"}
            className={`${inputClass} appearance-none`}
            style={fontStyle}
            {...register("service", {
              required: t("consultationForm.fields.service.errorRequired"),
              onChange: clearFormStatus,
            })}
          >
            <option value="">
              {t("consultationForm.fields.service.placeholder")}
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.service ? (
            <p className={errorClass} style={fontStyle}>
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-budget">
            {t("consultationForm.fields.budget.label")}
          </label>
          <select
            id="contact-budget"
            className={`${inputClass} appearance-none`}
            style={fontStyle}
            {...register("budget", { onChange: clearFormStatus })}
          >
            <option value="">
              {t("consultationForm.fields.budget.placeholder")}
            </option>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-challenge">
            {t("consultationForm.fields.challenge.label")}
          </label>
          <textarea
            id="contact-challenge"
            rows={6}
            placeholder={t("consultationForm.fields.challenge.placeholder")}
            aria-invalid={errors.challenge ? "true" : "false"}
            className={`${inputClass} min-h-[150px] resize-y leading-6`}
            style={fontStyle}
            {...register("challenge", {
              required: t("consultationForm.fields.challenge.errorRequired"),
              onChange: clearFormStatus,
            })}
          />
          {errors.challenge ? (
            <p className={errorClass} style={fontStyle}>
              {errors.challenge.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-referral">
            {t("consultationForm.fields.referral.label")}
          </label>
          <select
            id="contact-referral"
            className={`${inputClass} appearance-none`}
            style={fontStyle}
            {...register("referral", { onChange: clearFormStatus })}
          >
            <option value="">
              {t("consultationForm.fields.referral.placeholder")}
            </option>
            {referralOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#F5C400] px-6 py-4 text-[15px] font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(245,196,0,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
          style={fontStyle}
        >
          {isSubmitting ? t("submittingButton") : t("submitButton")}
        </button>

        {isSubmitted ? (
          <p className="text-center text-sm text-emerald-700" style={fontStyle}>
            {t("successMessage")}
          </p>
        ) : null}

        {submitError ? (
          <p className="text-center text-sm text-red-600" style={fontStyle}>
            {submitError}
          </p>
        ) : null}
      </form>

      <p className="mt-4 text-center text-[12px] text-[#8A8378]" style={fontStyle}>
        {t("consultationForm.privacyNote")}
      </p>
    </div>
  );
}
