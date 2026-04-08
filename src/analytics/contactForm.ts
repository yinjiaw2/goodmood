"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type ContactFormFieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "mobileNumber"
  | "message";

type ContactFormAnalyticsContext = {
  pagePath: string;
};

type ContactFormProgressPayload = ContactFormAnalyticsContext & {
  fieldName: ContactFormFieldName;
};

type ContactFormSubmitSuccessPayload = ContactFormAnalyticsContext;

const formName = "contact_form";

export function trackContactFormStart({
  pagePath,
  fieldName,
}: ContactFormAnalyticsContext & { fieldName: ContactFormFieldName }) {
  sendGAEvent("event", "form_start", {
    form_name: formName,
    field_name: fieldName,
    page_path: pagePath,
  });
}

export function trackContactFormProgress({
  pagePath,
  fieldName,
}: ContactFormProgressPayload) {
  sendGAEvent("event", "form_progress", {
    form_name: formName,
    field_name: fieldName,
    page_path: pagePath,
  });
}

export function trackContactFormSubmitSuccess({
  pagePath,
}: ContactFormSubmitSuccessPayload) {
  sendGAEvent("event", "form_submit_success", {
    form_name: formName,
    page_path: pagePath,
  });
}
