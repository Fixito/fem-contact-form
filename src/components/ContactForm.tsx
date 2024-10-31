import { FormEvent, useRef, useState } from "react";

import type { CustomForm, Errors } from "../interfaces.ts";
import { useFocusInvalid, useHydrated } from "../hooks.ts";

import { ErrorList } from "./ErrorList.tsx";

interface ContactFormProps {
  onSubmit: () => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [errors, setErrors] = useState<Errors | null>(null);
  const isHydrated = useHydrated();
  const formRef = useRef<HTMLFormElement>(null);

  const fieldErrors = errors?.fieldErrors || null;
  const formErrors = errors?.formErrors || null;

  const formHasErrors = Boolean(formErrors?.length);
  const formErrorId = formHasErrors ? "formError" : undefined;

  const firstNameHasErrors = Boolean(fieldErrors?.firstName.length);
  const firstNameErrorId = firstNameHasErrors ? "firstNameError" : undefined;

  const lastNameHasErrors = Boolean(fieldErrors?.lastName.length);
  const lastNameErrorId = lastNameHasErrors ? "lastNameError" : undefined;

  const emailHasErrors = Boolean(fieldErrors?.email.length);
  const emailErrorId = emailHasErrors ? "emailError" : undefined;

  const queryTypeHasErrors = Boolean(fieldErrors?.queryType.length);
  const queryTypeErrorId = queryTypeHasErrors ? "queryTypeError" : undefined;

  const messageHasErrors = Boolean(fieldErrors?.message.length);
  const messageErrorId = messageHasErrors ? "messageError" : undefined;

  const consentHasErrors = Boolean(fieldErrors?.consent.length);
  const consentErrorId = consentHasErrors ? "consentError" : undefined;

  const handleSubmit = (e: FormEvent<CustomForm>) => {
    e.preventDefault();
    const form = e.currentTarget.elements;

    const { firstName, lastName, email, queryType, message, consent } = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      queryType: form.queryType.value,
      message: form.message.value,
      consent: form.consent.checked,
    };

    const errors: Errors = {
      formErrors: [],
      fieldErrors: {
        firstName: [],
        lastName: [],
        email: [],
        queryType: [],
        message: [],
        consent: [],
      },
    };

    if (!firstName.trim()) {
      errors.fieldErrors.firstName.push("This field is required");
    }

    if (!lastName.trim()) {
      errors.fieldErrors.lastName.push("This field is required");
    }

    if (email.length < 3 && !email.includes("@")) {
      errors.fieldErrors.email.push("Please enter a valid email address");
    }

    if (!queryType) {
      errors.fieldErrors.queryType.push("Please select a query type");
    }

    if (!message.trim()) {
      errors.fieldErrors.message.push("This field is required");
    }

    if (!consent) {
      errors.fieldErrors.consent.push(
        "To submit this form, please consent to being contacted",
      );
    }

    const hasErrors =
      errors.formErrors.length ||
      Object.values(errors.fieldErrors).some(
        (fieldErrors) => fieldErrors.length,
      );

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    onSubmit();
    e.currentTarget.reset();
    window.scrollTo({ top: 0 });
  };

  useFocusInvalid(formRef.current, errors);

  return (
    <form
      noValidate={isHydrated}
      onSubmit={handleSubmit}
      aria-describedby={formErrorId}
      ref={formRef}
      tabIndex={-1}
      className="mx-auto grid max-w-[46rem] gap-500 rounded-2xl bg-surface p-300 md:p-500"
    >
      <div className="grid gap-400">
        <h1 className="text-heading">Contact Us</h1>

        <div className="grid gap-300">
          <div className="grid gap-300 md:grid-cols-2 md:gap-200">
            {/* First Name */}
            <div className="grid gap-100">
              <label htmlFor="firstName" className="flex gap-100 text-body-sm">
                First Name
                <span aria-hidden className="text-optional">
                  *
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                required
                aria-required
                aria-invalid={firstNameHasErrors || undefined}
                aria-describedby={firstNameErrorId}
                className="rounded-lg border border-subtle px-300 py-150 focus:outline-none focus:ring-1 focus:ring-focused focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused aria-invalid:border-danger"
              />

              <ErrorList
                id={firstNameErrorId}
                errors={fieldErrors?.firstName}
              />
            </div>

            {/* Last Name */}
            <div className="grid gap-100">
              <label htmlFor="lastName" className="flex gap-100 text-body-sm">
                Last Name
                <span aria-hidden className="text-optional">
                  *
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                required
                aria-required
                aria-invalid={lastNameHasErrors || undefined}
                aria-describedby={lastNameErrorId}
                className="rounded-lg border border-subtle px-300 py-150 focus:outline-none focus:ring-1 focus:ring-focused focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused aria-invalid:border-danger"
              />

              <ErrorList id={lastNameErrorId} errors={fieldErrors?.lastName} />
            </div>
          </div>

          {/* Email */}
          <div className="grid gap-100">
            <label htmlFor="email" className="flex gap-100 text-body-sm">
              Email address
              <span aria-hidden className="text-optional">
                *
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              aria-required
              aria-invalid={emailHasErrors || undefined}
              aria-describedby={emailErrorId}
              className="rounded-lg border border-subtle px-300 py-150 focus:outline-none focus:ring-1 focus:ring-focused focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused aria-invalid:border-danger"
            />

            <ErrorList id={emailErrorId} errors={fieldErrors?.email} />
          </div>

          {/* Query Type */}
          <fieldset className="space-y-200">
            <legend className="flex gap-100 text-body-sm">
              Query Type
              <span aria-hidden className="text-optional">
                *
              </span>
            </legend>
            <div className="grid gap-200 md:grid-cols-2">
              <label
                htmlFor="generalEnquiry"
                className="flex cursor-pointer items-center gap-150 rounded-lg border border-subtle px-300 py-150 text-body-md-regular focus-within:ring-1 focus-within:ring-focused focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused has-[:checked]:bg-subtle"
              >
                <input
                  type="radio"
                  name="queryType"
                  id="generalEnquiry"
                  value="generalEnquiry"
                  aria-describedby={queryTypeErrorId}
                  className="aspect-square h-[20px] border-subtle accent-brand focus:outline-none"
                />
                General Enquiry
              </label>
              <label
                htmlFor="supportRequest"
                className="flex cursor-pointer items-center gap-150 rounded-lg border border-subtle px-300 py-150 text-body-md-regular focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused has-[:checked]:bg-subtle has-[:focus]:ring-1 has-[:focus]:ring-focused"
              >
                <input
                  type="radio"
                  name="queryType"
                  id="supportRequest"
                  value="supportRequest"
                  aria-describedby={queryTypeErrorId}
                  className="custom-radio aspect-square h-[20px] accent-brand focus:outline-none"
                />
                <img src="/assets/images" alt="" />
                Support Request
              </label>
            </div>

            <ErrorList id={queryTypeErrorId} errors={fieldErrors?.queryType} />
          </fieldset>

          {/* Message */}
          <div className="grid gap-100">
            <label htmlFor="message" className="flex gap-100 text-body-sm">
              Message
              <span aria-hidden className="text-optional">
                *
              </span>
            </label>
            <textarea
              name="message"
              id="message"
              required
              aria-required
              aria-invalid={messageHasErrors || undefined}
              aria-describedby={messageErrorId}
              className="min-h-[13.5rem] rounded-lg border border-subtle px-300 py-150 focus:outline-none focus:ring-1 focus:ring-focused focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused aria-invalid:border-danger md:min-h-[6.75rem]"
            ></textarea>

            <ErrorList id={messageErrorId} errors={fieldErrors?.message} />
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="grid gap-100">
        <label
          htmlFor="consent"
          className="flex cursor-pointer items-center gap-200 text-body-sm"
        >
          <input
            type="checkbox"
            name="consent"
            id="consent"
            required
            aria-required
            aria-invalid={consentHasErrors || undefined}
            aria-describedby={consentErrorId}
            className="aspect-square h-[1.125rem] accent-brand focus:outline-none focus:ring-1 focus:ring-focused focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused focus-visible:ring-offset-2"
          />
          <p>
            I consent to being contacted by the team
            <span aria-hidden className="text-optional">
              *
            </span>
          </p>
        </label>

        <ErrorList id={consentErrorId} errors={fieldErrors?.consent} />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-brand px-500 py-200 text-body-md-bold text-neutral-inverse hover:bg-brand-hovered focus:outline-none focus:ring-1 focus:ring-focused focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focused focus-visible:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}
