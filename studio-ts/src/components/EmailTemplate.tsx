import * as React from 'react';

interface EmailTemplateProps {
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
    InquiryItem: string[];
    // Add other form fields as needed
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ formData }) => (
  <div>
    <h1>Welcome, {formData.name}!</h1>
    <p>Email: {formData.email}</p>
    <p>Company: {formData.company}</p>
    <p>Phone: {formData.phone}</p>
    <p>Message: {formData.message}</p>
    <p>
      InquiryItem:
      {formData.InquiryItem.length > 0 ? (
        <ul>
          {formData.InquiryItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        'お問い合わせ項目は未設定です。'
      )}
    </p>
    {/* Add other form fields as needed */}
  </div>
);
