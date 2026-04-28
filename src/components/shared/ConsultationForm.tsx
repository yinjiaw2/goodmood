"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import ConsultationFormStepOne from "./ConsultationFormStepOne";
import ConsultationFormStepTwo from "./ConsultationFormStepTwo";
import type { ContactFormValues } from "./consultationForm.types";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

const GOOGLE_SCRIPT_ENDPOINT =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ENDPOINT;

export default function ConsultationForm() {
  const t = useTranslations("contact");
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
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

  const handleNextStep = async () => {
    const isStepValid = await trigger([
      "name",
      "email",
      "phone",
      "company",
      "website",
    ]);

    if (isStepValid) {
      setStep(2);
    }
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
      if (!GOOGLE_SCRIPT_ENDPOINT) {
        throw new Error("Missing NEXT_PUBLIC_GOOGLE_SCRIPT_ENDPOINT");
      }

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
      setStep(1);
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
        <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8A8378]">
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
        <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8378]">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === 1 ? "bg-[#F5C400]" : "bg-[#1A1A1A]/20"
            }`}
          />
          <span>
            {step === 1
              ? t("consultationForm.stepOneLabel")
              : t("consultationForm.stepTwoLabel")}
          </span>
          <span
            className={`h-px flex-1 ${
              step === 2 ? "bg-[#F5C400]" : "bg-[#1A1A1A]/10"
            }`}
          />
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              step === 2 ? "bg-[#F5C400]" : "bg-[#1A1A1A]/20"
            }`}
          />
        </div>

        {step === 1 ? (
          <ConsultationFormStepOne
            clearFormStatus={clearFormStatus}
            errorClass={errorClass}
            errors={errors}
            fontStyle={fontStyle}
            inputClass={inputClass}
            labelClass={labelClass}
            register={register}
            t={t}
          />
        ) : (
          <ConsultationFormStepTwo
            budgetOptions={budgetOptions}
            clearFormStatus={clearFormStatus}
            errorClass={errorClass}
            errors={errors}
            fontStyle={fontStyle}
            inputClass={inputClass}
            labelClass={labelClass}
            referralOptions={referralOptions}
            register={register}
            serviceOptions={serviceOptions}
            t={t}
          />
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#1A1A1A]/12 bg-white px-6 py-4 text-[15px] font-bold text-[#1A1A1A] transition hover:-translate-y-0.5"
              style={fontStyle}
            >
              {t("consultationForm.backButton")}
            </button>
          ) : null}

          {step === 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#F5C400] px-6 py-4 text-[15px] font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(245,196,0,0.28)]"
              style={fontStyle}
            >
              {t("consultationForm.nextButton")}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#F5C400] px-6 py-4 text-[15px] font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(245,196,0,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
              style={fontStyle}
            >
              {isSubmitting ? t("submittingButton") : t("submitButton")}
            </button>
          )}
        </div>

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
