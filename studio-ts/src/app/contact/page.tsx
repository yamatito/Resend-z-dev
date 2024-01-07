"use client"
import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

import React, { useState, FormEvent, ChangeEvent } from 'react';
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  InquiryItem: string[]; // Explicitly define the type for the array
}

function TextInput({
  label,
  required,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
        {required && <span className="text-red-500">*</span>} {/* Red dot for required fields */}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function CheckboxInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">

      <input
        type="checkbox"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
}


function ContactForm() {
  const [postedData, setPostedData] = useState('')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    InquiryItem: [],
  });
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log form data before sending the POST request
    console.log('Form Data:', formData);

    console.log(formData.email);

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    });



    const data = await res.json();
    setPostedData(data.body);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name as keyof FormData], value]
          : (prevData[name as keyof FormData] as string[]).filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };



  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={onSubmitHandler}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          サービスに関するお問い合わせ
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="お名前" name="name" autoComplete="name" onChange={handleInputChange}  />
          <TextInput
            label="メールアドレス"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleInputChange}
            
          />
          <TextInput
            label="企業名"
            name="company"
            autoComplete="organization"
            onChange={handleInputChange}
            
          />
          <TextInput label="電話番号" type="tel" name="phone" autoComplete="tel" onChange={handleInputChange}  />
          <TextInput label="お問い合わせ内容" name="message" onChange={handleInputChange}  />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <div className="flex">
              <legend className="text-base/6 text-neutral-500">お問い合わせ項目</legend>
              <span aria-hidden="true" className="text-red-500">*</span>
              <span className="sr-only">Required</span>
              </div>
         

              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <CheckboxInput label="WEB制作・運用改善" name="InquiryItem" value="WEB制作・運用改善" onChange={handleInputChange} />
                <CheckboxInput label="中洲Vision" name="InquiryItem" value="中洲Vision" onChange={handleInputChange} />
                <CheckboxInput label="システム開発" name="InquiryItem" value="システム開発" onChange={handleInputChange} />
                <CheckboxInput label="ITコンサル" name="InquiryItem" value="ITコンサル" onChange={handleInputChange} />
                <CheckboxInput label="その他" name="InquiryItem" value="その他" onChange={handleInputChange} />
              </div>

            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          送信する
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
      メールでのお問い合わせ
      </h2>
      <p className="mt-6 text-base text-neutral-600">
      ご質問やプロジェクトについてのお問い合わせは、以下のフォームをご利用ください。必要な情報を入力の上、送信してください。担当者が迅速に対応いたします。
      </p>

      {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          以下のメールアドレスにも直接ご連絡いただけます。
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['本社メールアドレス', 'contact@zdev.co.jp'],
            // ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
{/* 
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border> */}
    </FadeIn>
  )
}

// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Let’s work together. We can’t wait to hear from you.',
// }

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="お問い合わせ">
        <p>私たちと一緒に素晴らしいものを作りましょう。皆様からのご連絡をお待ちしております。</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
