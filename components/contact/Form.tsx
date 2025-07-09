'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from './formSchema';
import FormField from './FormField';

function Form() {
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);

  const [isWhatsAppSubmitting, setIsWhatsAppSubmitting] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmitEmail = async (data: FormSchema) => {
    setIsEmailSubmitting(true);

    try {
      // Web3Forms endpoint
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        reset();
      } else {
        // Show the specific error message from Web3Forms
        console.error('Web3Forms error:', result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsEmailSubmitting(false);
    }
  };

  const onSubmitWhatsApp = (data: FormSchema) => {
    if (!isValid) return;

    setIsWhatsAppSubmitting(true);

    try {
      // Format WhatsApp message
      const whatsappMessage = [
        '*New Contact Form Submission*',
        `*Name:* ${data.name}`,
        `*Email:* ${data.email}`,
        `*Phone:* ${data.phone}`,
        ...(data.subject ? [`*Subject:* ${data.subject}`] : []),
        `*Message:* ${data.message}`,
      ].join('\n');

      // WhatsApp number (Ghana format without leading 0 or +)
      const whatsappNumber = '233594765977';

      // Open WhatsApp
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        '_blank',
        'noopener noreferrer'
      );

      reset();
    } catch (error) {
      console.error('WhatsApp error:', error);
      alert(
        'Failed to open WhatsApp. Please ensure your browser allows pop-ups.'
      );
    } finally {
      setIsWhatsAppSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#00254F] to-[#077BCF] rounded-2xl text-white w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight">
        Get in touch using the form below
      </h2>

      <form className="mt-8 sm:mt-12 space-y-6 flex-1">
        <FormField
          name="name"
          placeholder="Your name"
          register={register}
          errors={errors}
        />
        <FormField
          name="email"
          placeholder="Email Address"
          register={register}
          errors={errors}
        />
        <FormField
          name="phone"
          placeholder="Phone number"
          register={register}
          errors={errors}
        />
        <FormField
          name="subject"
          placeholder="Subject (Optional)"
          register={register}
          errors={errors}
        />
        <FormField
          name="message"
          placeholder="Message"
          isTextArea
          register={register}
          errors={errors}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSubmitEmail)}
            disabled={isEmailSubmitting}
            className="flex-1 bg-primary py-3 px-6 rounded-full text-black hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {isEmailSubmitting
              ? 'Sending Email...'
              : 'Send via Email'}
          </button>

          <button
            type="button"
            onClick={handleSubmit(onSubmitWhatsApp)}
            disabled={isWhatsAppSubmitting}
            className="flex-1 bg-green-600 py-3 px-6 rounded-full text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {isWhatsAppSubmitting
              ? 'Opening WhatsApp...'
              : 'Send via WhatsApp'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
