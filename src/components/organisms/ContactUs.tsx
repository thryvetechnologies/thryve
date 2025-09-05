import React, { useState } from 'react';
import InputField from '../molecules/InputField';
import FormHeader from '../molecules/FormHeader';
import Button from '../atoms/Button';
import Description from '../atoms/Description';
import Logo from '../atoms/Logo';
import SocialMediaIcons from '../molecules/SocialMediaIcons';
export interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <FormHeader />
      
      <div className='flex flex-col lg:flex-row gap-10 justify-between'>
        <div>
          <Logo />
          <Description />
          <SocialMediaIcons />
        </div>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Full Name"
            placeholder="Enter your full name here"
            value={formData.fullName}
            onChange={updateField('fullName')}
          />
          <InputField
            type="email"
            label="Email"
            placeholder="Enter your email here"
            value={formData.email}
            onChange={updateField('email')}
          />
        </div>
        
        <InputField
          label="Subject"
          placeholder="Enter the subject here"
          value={formData.subject}
          onChange={updateField('subject')}
        />
        
        <InputField
          type="textarea"
          label="Message"
          placeholder="Enter your message here..."
          value={formData.message}
          onChange={updateField('message')}
          rows={6}
        />
        
        <div className="text-center">
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Send Message
          </Button>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default ContactForm;