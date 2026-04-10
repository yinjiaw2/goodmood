"use client";

import { Clock3, Mail, MapPin } from "lucide-react";
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

const detailCards = [
  { key: "email", icon: Mail },
  { key: "office", icon: MapPin },
  { key: "hours", icon: Clock3 },
] as const;

export default function ContactConnectSection() {
  const t = useTranslations("contact");
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
    <section className="bg-[#1A1A1A] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span
            className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "#F5C400",
              borderColor: "rgba(245,196,0,0.35)",
              backgroundColor: "rgba(245,196,0,0.08)",
              ...fontStyle,
            }}
          >
            {t("page.connectBadge")}
          </span>

          <h2
            className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl"
            style={{ ...fontStyle, letterSpacing: "-0.03em" }}
          >
            {t("page.connectTitle")}
          </h2>
          <p
            className="mt-4 max-w-md text-base leading-7 text-white/70"
            style={fontStyle}
          >
            {t("page.connectSubtitle")}
          </p>

          <div className="mt-8 space-y-4">
            {detailCards.map((item) => (
              <div
                key={item.key}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <item.icon
                  aria-hidden="true"
                  size={20}
                  className="mb-4 text-[#F5C400]"
                />
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  {t(`page.details.${item.key}.label`)}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/80" style={fontStyle}>
                  {t(`page.details.${item.key}.value`)}
                </p>
              </div>
            ))}
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
                  placeholder={t("fields.firstName.placeholder")}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("firstName", {
                    required: t("fields.firstName.errorRequired"),
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
                  placeholder={t("fields.lastName.placeholder")}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("lastName", {
                    required: t("fields.lastName.errorRequired"),
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
                  placeholder={t("fields.email.placeholder")}
                  aria-invalid={errors.email ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("email", {
                    validate: (value) => {
                      if (!value.trim()) {
                        return needsContactMethod
                          ? t("fields.email.errorContact")
                          : true;
                      }

                      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? true
                        : t("fields.email.errorInvalid");
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
                  placeholder={t("fields.mobileNumber.placeholder")}
                  aria-invalid={errors.mobileNumber ? "true" : "false"}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                  style={fontStyle}
                  {...register("mobileNumber", {
                    validate: (value) =>
                      value.trim() || !needsContactMethod
                        ? true
                        : t("fields.mobileNumber.errorContact"),
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
                placeholder={t("fields.message.placeholder")}
                aria-invalid={errors.message ? "true" : "false"}
                className="w-full rounded-3xl border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F5C400] focus:ring-2 focus:ring-[#F5C400]/25"
                style={fontStyle}
                {...register("message", {
                  required: t("fields.message.errorRequired"),
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
                  ? t("submittingButton")
                  : t("submitButton")}
              </button>

              {isSubmitted ? (
                <p className="text-sm text-emerald-700" style={fontStyle}>
                  {t("successMessage")}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
