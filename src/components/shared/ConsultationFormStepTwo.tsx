import type { CSSProperties } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

import type { ContactFormValues } from "./consultationForm.types";

type ConsultationFormStepTwoProps = {
  budgetOptions: string[];
  clearFormStatus: () => void;
  errorClass: string;
  errors: FieldErrors<ContactFormValues>;
  fontStyle: CSSProperties;
  inputClass: string;
  labelClass: string;
  referralOptions: string[];
  register: UseFormRegister<ContactFormValues>;
  serviceOptions: string[];
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

export default function ConsultationFormStepTwo({
  budgetOptions,
  clearFormStatus,
  errorClass,
  errors,
  fontStyle,
  inputClass,
  labelClass,
  referralOptions,
  register,
  serviceOptions,
  showErrors,
  t,
}: ConsultationFormStepTwoProps) {
  return (
    <>
      <div>
        <label className={labelClass} htmlFor="contact-service">
          {t("consultationForm.fields.service.label")}
        </label>
        <select
          id="contact-service"
          aria-invalid={showErrors && errors.service ? "true" : "false"}
          className={`${inputClass} appearance-none`}
          style={fontStyle}
          {...withOnChange(
            register("service", {
              required: t("consultationForm.fields.service.errorRequired"),
            }),
            clearFormStatus,
          )}
        >
          <option value="">
            {t("consultationForm.fields.service.placeholder")}
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {showErrors && errors.service ? (
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
          {...withOnChange(register("budget"), clearFormStatus)}
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
          aria-invalid={showErrors && errors.challenge ? "true" : "false"}
          className={`${inputClass} min-h-[150px] resize-y leading-6`}
          style={fontStyle}
          {...withOnChange(
            register("challenge", {
              required: t("consultationForm.fields.challenge.errorRequired"),
            }),
            clearFormStatus,
          )}
        />
        {showErrors && errors.challenge ? (
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
          {...withOnChange(register("referral"), clearFormStatus)}
        >
          <option value="">
            {t("consultationForm.fields.referral.placeholder")}
          </option>
          {referralOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </>
  );
}
