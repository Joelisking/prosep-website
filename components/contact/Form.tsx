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
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmitEmail = async (data: FormSchema) => {
    setIsEmailSubmitting(true);

    try {
      // Send to both Web3Forms access keys
      const accessKeys = [
        'a62e0c87-d3ce-4437-bfbb-3346c5743e9d',
        // 'e1527b4a-c7bc-49c4-ac44-45e6e1940e0d',
      ];

      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject || 'Contact Form Submission',
        message: data.message,
      };

      // Send to both access keys
      const promises = accessKeys.map((accessKey) =>
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
          }),
        })
      );

      const responses = await Promise.all(promises);
      const allSuccessful = responses.every(
        (response) => response.ok
      );

      if (allSuccessful) {
        alert('Message sent successfully via email!');
        reset();
      } else {
        throw new Error(
          'Failed to send email to one or more recipients'
        );
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsEmailSubmitting(false);
    }
  };

  const onSubmitWhatsApp = (data: FormSchema) => {
    setIsWhatsAppSubmitting(true);

    try {
      // Format the message for WhatsApp
      const whatsappMessage =
        `*New Contact Form Submission*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Phone:* ${data.phone}\n` +
        (data.subject ? `*Subject:* ${data.subject}\n` : '') +
        `*Message:* ${data.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WhatsApp number (using the one from Info component)
      const whatsappNumber = '233594765977'; // Removed the leading 0 and + for WhatsApp API

      // Open WhatsApp link
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        '_blank'
      );

      // Reset the form
      reset();
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      alert('Failed to open WhatsApp. Please try again.');
    } finally {
      setIsWhatsAppSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#00254F] to-[#077BCF] rounded-2xl text-white w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight">
        Get in touch using the form below
      </h2>

      <form
        onSubmit={handleSubmit(onSubmitEmail)}
        className="mt-8 sm:mt-12 space-y-6 flex-1">
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
            type="submit"
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
