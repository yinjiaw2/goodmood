"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Building2 } from "lucide-react";
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

export default function Contact() {
  const t = useTranslations("contact");

  const pathname = usePathname();
  const hasTrackedFormStart = useRef(false);

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Tower+3+Level+9+18-38+Siddeley+St+Docklands+VIC+3005",
      "_blank",
    );
  };

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
    trackContactFormStart({
      fieldName,

      pagePath: pathname,
    });
  };

  const handleFieldProgress = (
    fieldName: ContactFormFieldName,
    value: string,
  ) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    trackContactFormProgress({
      fieldName,
      pagePath: pathname,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!GOOGLE_APPS_SCRIPT_URL) {
      throw new Error("Missing NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL");
    }

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        // `application/json` is not CORS-safelisted in `no-cors` mode.
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      }),
    });

    trackContactFormSubmitSuccess({
      pagePath: pathname,
    });

    reset();
    hasTrackedFormStart.current = false;
  };

  const inputBase =
    "w-full bg-white border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#FB8C00]";
  const inputNormal = `${inputBase} border-gray-300`;
  const inputError = `${inputBase} border-red-500`;

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 scroll-mt-16"
      style={{ backgroundColor: "#F2F1EF" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
          style={{
            fontFamily: "var(--font-app-sans), Arial, Helvetica, sans-serif",
          }}
        >
          {t("sectionTitle")}
        </h2>
        <p className="text-gray-500 mb-12">{t("sectionSubtitle")}</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {t("formTitle")}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{t("formSubtitle")}</p>

            {isSubmitSuccessful ? (
              <p className="text-green-600 font-medium py-8 text-center">
                {t("successMessage")}
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-4"
              >
                {/* First / Last name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {(() => {
                      const firstNameField = register("firstName", {
                        required: t("fields.firstName.errorRequired"),
                      });

                      return (
                        <input
                          {...firstNameField}
                          onFocus={() => handleFieldFocus("firstName")}
                          onBlur={(event) => {
                            firstNameField.onBlur(event);
                            handleFieldProgress(
                              "firstName",
                              event.target.value,
                            );
                          }}
                          placeholder={t("fields.firstName.placeholder")}
                          className={
                            errors.firstName ? inputError : inputNormal
                          }
                        />
                      );
                    })()}
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    {(() => {
                      const lastNameField = register("lastName", {
                        required: t("fields.lastName.errorRequired"),
                      });

                      return (
                        <input
                          {...lastNameField}
                          onFocus={() => handleFieldFocus("lastName")}
                          onBlur={(event) => {
                            lastNameField.onBlur(event);
                            handleFieldProgress("lastName", event.target.value);
                          }}
                          placeholder={t("fields.lastName.placeholder")}
                          className={errors.lastName ? inputError : inputNormal}
                        />
                      );
                    })()}
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  {(() => {
                    const emailField = register("email", {
                      validate: (value: string) => {
                        const hasEmail = value.trim().length > 0;
                        const hasMobileNumber = mobileNumber.trim().length > 0;

                        return hasEmail || hasMobileNumber
                          ? true
                          : t("fields.email.errorContact");
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("fields.email.errorInvalid"),
                      },
                    });

                    return (
                      <input
                        {...emailField}
                        type="email"
                        onFocus={() => handleFieldFocus("email")}
                        onBlur={(event) => {
                          emailField.onBlur(event);
                          handleFieldProgress("email", event.target.value);
                        }}
                        placeholder={t("fields.email.placeholder")}
                        className={errors.email ? inputError : inputNormal}
                      />
                    );
                  })()}
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Mobile number */}
                <div>
                  {(() => {
                    const mobileNumberField = register("mobileNumber", {
                      validate: (value: string) => {
                        const hasMobileNumber = value.trim().length > 0;
                        const hasEmail = email.trim().length > 0;

                        return hasMobileNumber || hasEmail
                          ? true
                          : t("fields.mobileNumber.errorContact");
                      },
                    });

                    return (
                      <input
                        {...mobileNumberField}
                        type="tel"
                        onFocus={() => handleFieldFocus("mobileNumber")}
                        onBlur={(event) => {
                          mobileNumberField.onBlur(event);
                          handleFieldProgress(
                            "mobileNumber",
                            event.target.value,
                          );
                        }}
                        placeholder={t("fields.mobileNumber.placeholder")}
                        className={
                          errors.mobileNumber ? inputError : inputNormal
                        }
                      />
                    );
                  })()}
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  {(() => {
                    const messageField = register("message", {
                      required: t("fields.message.errorRequired"),
                    });

                    return (
                      <textarea
                        {...messageField}
                        rows={5}
                        onFocus={() => handleFieldFocus("message")}
                        onBlur={(event) => {
                          messageField.onBlur(event);
                          handleFieldProgress("message", event.target.value);
                        }}
                        placeholder={t("fields.message.placeholder")}
                        className={`${errors.message ? inputError : inputNormal} resize-none`}
                      />
                    );
                  })()}
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#FB8C00" }}
                >
                  {isSubmitting ? t("submittingButton") : t("submitButton")}
                </button>
              </form>
            )}
          </div>

          {/* Office image */}
          <div className="hidden md:block rounded-2xl overflow-hidden h-full min-h-120 relative">
            <img
              src="/world-trade-center.jpg"
              alt={t("office.imageAlt")}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4">
              <span className="text-white font-semibold text-lg">
                {t("office.label")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={openGoogleMaps}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-white/30"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                  aria-label={t("office.label")}
                >
                  <MapPin size={18} className="text-white" />
                </button>
                <button
                  onClick={() => console.log("office info clicked")}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition hover:bg-white/30"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                  aria-label={t("office.label")}
                >
                  <Building2 size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
