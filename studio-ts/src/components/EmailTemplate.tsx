import * as React from 'react';

interface EmailTemplateProps {
  formData: {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
    budget: string;
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
    <p>Budget: {formData.budget}</p>
    {/* Add other form fields as needed */}
  </div>
);
