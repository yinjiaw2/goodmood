"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  trackContactFormProgress,
  trackContactFormStart,
  trackContactFormSubmitSuccess,
  type ContactFormFieldName,
} from "@/analytics/contactForm";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
};

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

const fontStyle = {
  fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
};

export default function HeroContactForm() {
  const t = useTranslations("home");
  const pathname = usePathname();
  const hasTrackedFormStart = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const email = watch("email");
  const mobileNumber = watch("mobileNumber");

  const handleFieldFocus = (fieldName: ContactFormFieldName) => {
    if (hasTrackedFormStart.current) return;
    hasTrackedFormStart.current = true;
    trackContactFormStart({ fieldName, pagePath: pathname });
  };

  const handleFieldProgress = (
    fieldName: ContactFormFieldName,
    value: string,
  ) => {
    if (!value.trim()) return;
    trackContactFormProgress({ fieldName, pagePath: pathname });
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!GOOGLE_APPS_SCRIPT_URL) {
      throw new Error("Missing NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL");
    }
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    });
    trackContactFormSubmitSuccess({ pagePath: pathname });
    reset();
    hasTrackedFormStart.current = false;
  };

  const inputBase =
    "w-full rounded-lg px-4 py-3 text-sm text-gray-900 outline-none transition border";
  const inputNormal = `${inputBase} bg-white border-gray-200 placeholder-gray-400 focus:border-[#F5C400]`;
  const inputErrorCls = `${inputBase} bg-white border-red-400 placeholder-gray-400 focus:border-red-400`;

  return (
    <div
      id="contact"
      className="w-full rounded-2xl border border-gray-200 p-8 bg-white shadow-sm"
    >
      {/* Form header */}
      <h3 className="text-xl font-bold text-[#0D1B2A] mb-1" style={fontStyle}>
        {t("contact.formTitle")}
      </h3>
      <p className="text-sm text-gray-500 mb-6" style={fontStyle}>
        {t("contact.formSubtitle")}
      </p>

      {isSubmitSuccessful ? (
        <p
          className="py-10 text-center font-semibold"
          style={{ color: "#F5C400", ...fontStyle }}
        >
          {t("contact.successMessage")}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {/* First / Last name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              {(() => {
                const field = register("firstName", {
                  required: t("contact.fields.firstName.errorRequired"),
                });
                return (
                  <input
                    {...field}
                    placeholder={t("contact.fields.firstName.placeholder")}
                    onFocus={() => handleFieldFocus("firstName")}
                    onBlur={(e) => {
                      field.onBlur(e);
                      handleFieldProgress("firstName", e.target.value);
                    }}
                    className={errors.firstName ? inputErrorCls : inputNormal}
                    style={fontStyle}
                  />
                );
              })()}
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              {(() => {
                const field = register("lastName", {
                  required: t("contact.fields.lastName.errorRequired"),
                });
                return (
                  <input
                    {...field}
                    placeholder={t("contact.fields.lastName.placeholder")}
                    onFocus={() => handleFieldFocus("lastName")}
                    onBlur={(e) => {
                      field.onBlur(e);
                      handleFieldProgress("lastName", e.target.value);
                    }}
                    className={errors.lastName ? inputErrorCls : inputNormal}
                    style={fontStyle}
                  />
                );
              })()}
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            {(() => {
              const field = register("email", {
                validate: (value) =>
                  value.trim().length > 0 || mobileNumber?.trim().length > 0
                    ? true
                    : t("contact.fields.email.errorContact"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("contact.fields.email.errorInvalid"),
                },
              });
              return (
                <input
                  {...field}
                  type="email"
                  placeholder={t("contact.fields.email.placeholder")}
                  onFocus={() => handleFieldFocus("email")}
                  onBlur={(e) => {
                    field.onBlur(e);
                    handleFieldProgress("email", e.target.value);
                  }}
                  className={errors.email ? inputErrorCls : inputNormal}
                  style={fontStyle}
                />
              );
            })()}
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            {(() => {
              const field = register("mobileNumber", {
                validate: (value) =>
                  value.trim().length > 0 || email?.trim().length > 0
                    ? true
                    : t("contact.fields.mobileNumber.errorContact"),
              });
              return (
                <input
                  {...field}
                  type="tel"
                  placeholder={t("contact.fields.mobileNumber.placeholder")}
                  onFocus={() => handleFieldFocus("mobileNumber")}
                  onBlur={(e) => {
                    field.onBlur(e);
                    handleFieldProgress("mobileNumber", e.target.value);
                  }}
                  className={errors.mobileNumber ? inputErrorCls : inputNormal}
                  style={fontStyle}
                />
              );
            })()}
            {errors.mobileNumber && (
              <p className="text-red-400 text-xs mt-1">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            {(() => {
              const field = register("message", {
                required: t("contact.fields.message.errorRequired"),
              });
              return (
                <textarea
                  {...field}
                  rows={4}
                  placeholder={t("contact.fields.message.placeholder")}
                  onFocus={() => handleFieldFocus("message")}
                  onBlur={(e) => {
                    field.onBlur(e);
                    handleFieldProgress("message", e.target.value);
                  }}
                  className={`${errors.message ? inputErrorCls : inputNormal} resize-none`}
                  style={fontStyle}
                />
              );
            })()}
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-full font-semibold text-white transition hover:opacity-90 disabled:opacity-60 active:scale-95"
            style={{ backgroundColor: "#F5C400", ...fontStyle }}
          >
            {isSubmitting
              ? t("contact.submittingButton")
              : t("contact.submitButton")}
          </button>
        </form>
      )}
    </div>
  );
}
