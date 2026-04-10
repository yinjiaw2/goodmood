"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslations } from "next-intl";

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

export default function ContactSection() {
  const t = useTranslations("home");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
  });

  const emailValue = useWatch({ control, name: "email", defaultValue: "" });
  const mobileNumberValue = useWatch({
    control,
    name: "mobileNumber",
    defaultValue: "",
  });
  const needsContactMethod = !emailValue.trim() && !mobileNumberValue.trim();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#1A1A1A] px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <span
            className="inline-flex w-fit rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("contact.sectionTitle")}
          </span>

          <div className="space-y-4">
            <h2
              className="text-4xl font-extrabold leading-tight md:text-5xl"
              style={{ ...fontStyle, letterSpacing: "-0.03em" }}
            >
              {t("contact.formTitle")}
            </h2>
            <p
              className="max-w-md text-base leading-7 text-white/70"
              style={fontStyle}
            >
              {t("contact.sectionSubtitle")}
            </p>
            <p
              className="max-w-md text-sm leading-7 text-white/55"
              style={fontStyle}
            >
              {t("contact.formSubtitle")}
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#F5F2EB] p-6 text-[#1A1A1A] shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-8">
          <form
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder={t("contact.fields.firstName.placeholder")}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("firstName", {
                    required: t("contact.fields.firstName.errorRequired"),
                    onChange: () => setIsSubmitted(false),
                  })}
                />
                {errors.firstName ? (
                  <p className="mt-2 text-xs text-red-600" style={fontStyle}>
                    {errors.firstName.message}
                  </p>
                ) : null}
              </div>

              <div>
                <input
                  type="text"
                  placeholder={t("contact.fields.lastName.placeholder")}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("lastName", {
                    required: t("contact.fields.lastName.errorRequired"),
                    onChange: () => setIsSubmitted(false),
                  })}
                />
                {errors.lastName ? (
                  <p className="mt-2 text-xs text-red-600" style={fontStyle}>
                    {errors.lastName.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  type="email"
                  placeholder={t("contact.fields.email.placeholder")}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("email", {
                    validate: (value) => {
                      if (!value.trim()) {
                        return needsContactMethod
                          ? t("contact.fields.email.errorContact")
                          : true;
                      }

                      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? true
                        : t("contact.fields.email.errorInvalid");
                    },
                    onChange: () => setIsSubmitted(false),
                  })}
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-red-600" style={fontStyle}>
                    {errors.email.message}
                  </p>
                ) : null}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder={t("contact.fields.mobileNumber.placeholder")}
                  aria-invalid={errors.mobileNumber ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("mobileNumber", {
                    validate: (value) =>
                      value.trim() || !needsContactMethod
                        ? true
                        : t("contact.fields.mobileNumber.errorContact"),
                    onChange: () => setIsSubmitted(false),
                  })}
                />
                {errors.mobileNumber ? (
                  <p className="mt-2 text-xs text-red-600" style={fontStyle}>
                    {errors.mobileNumber.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <textarea
                rows={6}
                placeholder={t("contact.fields.message.placeholder")}
                aria-invalid={errors.message ? "true" : "false"}
                className="w-full rounded-3xl border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                style={fontStyle}
                {...register("message", {
                  required: t("contact.fields.message.errorRequired"),
                  onChange: () => setIsSubmitted(false),
                })}
              />
              {errors.message ? (
                <p className="mt-2 text-xs text-red-600" style={fontStyle}>
                  {errors.message.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[#F5C400] px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={fontStyle}
              >
                {isSubmitting
                  ? t("contact.submittingButton")
                  : t("contact.submitButton")}
              </button>

              {isSubmitted ? (
                <p className="text-sm text-emerald-700" style={fontStyle}>
                  {t("contact.successMessage")}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
