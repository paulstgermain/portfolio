"use client"
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM_ID}`);

  if (state.succeeded) {
    return <p>Thanks for your message - I'll get back to you soon!</p>;
  }

  return (
    <form className="
      font-istok-web
      xs:w-full
      sm:w-70
      md:w-80
      lg:w-120
      xl:w-150
      p-5
      flex
      flex-col
      xs:text-[16px]
      sm:text-lg
      md:text-lg
      lg:text-lg
      xl:text-xl
    " onSubmit={handleSubmit}>

      {/* Name field */}
      <label className="pl-3" htmlFor="name">What do you call yourself?</label>
      <input className="h-10 px-2 mb-5 border-contactnav-alt border-3 rounded-[40px]" id="name" type="name" name="name" placeholder="Name..." />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      {/* Email field */}
      <label className="pl-3" htmlFor="email">Where can I reach you?</label>
      <input className="h-10 px-2 mb-5 border-contactnav-alt border-3 rounded-[40px]" id="email" type="email" name="email" placeholder="Email..." />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Message field */}
      <label className="pl-3" htmlFor="message">What is your message?</label>
      <textarea className="h-50 px-5 pt-2 mb-5 border-contactnav-alt border-3 rounded-[40px]" id="message" name="message" placeholder="Your message here..." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* Submit button */}
      <button className="
        mx-auto
        cursor-pointer
        font-bungee 
        bg-contactnav
        rounded-[40px]
        xs:w-30 
        sm:w-35
        md:w-45
        lg:w-45 
        xl:w-55
        xs:h-8
        sm:h-10
        md:h-12
        lg:h-12
        xl:h-14
        xs:text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-3xl
        xl:text-4xl
        z-10" type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className="mx-auto" errors={state.errors} />
    </form>
  );
}
