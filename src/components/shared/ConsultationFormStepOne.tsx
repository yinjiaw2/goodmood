import type { CSSProperties } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

import type { ContactFormValues } from "./consultationForm.types";

type ConsultationFormStepOneProps = {
  clearFormStatus: () => void;
  errorClass: string;
  errors: FieldErrors<ContactFormValues>;
  fontStyle: CSSProperties;
  inputClass: string;
  labelClass: string;
  register: UseFormRegister<ContactFormValues>;
  showErrors: boolean;
  t: (key: string) => string;
};

const withOnChange = (
  registration: UseFormRegisterReturn,
  onChange: () => void,
): UseFormRegisterReturn => ({
  ...registration,
  onChange: (event) => {
    const result = registration.onChange(event);
    onChange();
    return result;
  },
});

export default function ConsultationFormStepOne({
  clearFormStatus,
  errorClass,
  errors,
  fontStyle,
  inputClass,
  labelClass,
  register,
  showErrors,
  t,
}: ConsultationFormStepOneProps) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            {t("consultationForm.fields.name.label")}
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder={t("consultationForm.fields.name.placeholder")}
            aria-invalid={showErrors && errors.name ? "true" : "false"}
            className={inputClass}
            style={fontStyle}
            {...withOnChange(
              register("name", {
                required: t("consultationForm.fields.name.errorRequired"),
              }),
              clearFormStatus,
            )}
          />
          {showErrors && errors.name ? (
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
            aria-invalid={showErrors && errors.email ? "true" : "false"}
            className={inputClass}
            style={fontStyle}
            {...withOnChange(
              register("email", {
                required: t("consultationForm.fields.email.errorRequired"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("consultationForm.fields.email.errorInvalid"),
                },
              }),
              clearFormStatus,
            )}
          />
          {showErrors && errors.email ? (
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
            aria-invalid={showErrors && errors.phone ? "true" : "false"}
            className={inputClass}
            style={fontStyle}
            {...withOnChange(
              register("phone", {
                required: t("consultationForm.fields.phone.errorRequired"),
              }),
              clearFormStatus,
            )}
          />
          {showErrors && errors.phone ? (
            <p className={errorClass} style={fontStyle}>
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-company">
            {t("consultationForm.fields.company.label")}
          </label>
          <input
            id="contact-company"
            type="text"
            placeholder={t("consultationForm.fields.company.placeholder")}
            aria-invalid={showErrors && errors.company ? "true" : "false"}
            className={inputClass}
            style={fontStyle}
            {...withOnChange(
              register("company", {
                required: t("consultationForm.fields.company.errorRequired"),
              }),
              clearFormStatus,
            )}
          />
          {showErrors && errors.company ? (
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
          {...withOnChange(register("website"), clearFormStatus)}
        />
      </div>
    </>
  );
}
