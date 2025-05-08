import React, { useState } from 'react';
import './_contact-form.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            access_key: 'a6eb6017-ff9c-4f60-a5bd-a4dca6c2ac1b',
            from_name: 'Portfolio Message',
            ...formData
          })
        });

        const data = await response.json();
        
        if (data.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="contact-form">
        <div className="contact-form__success">
          <h2>Thank you for your message!</h2>
          <p>I'll get back to you as soon as possible.</p>
          <button 
            className="contact-form__submit"
            onClick={() => setSubmitStatus(null)}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Contact Me</h2>
      <form className="contact-form__form" onSubmit={handleSubmit}>
        <input 
          type="hidden" 
          name="access_key" 
          value="a6eb6017-ff9c-4f60-a5bd-a4dca6c2ac1b"
        />
        
        <input 
          type="hidden" 
          name="from_name" 
          value="Portfolio Message"
        />

        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`contact-form__textarea ${errors.message ? 'contact-form__textarea--error' : ''}`}
            placeholder="Your message"
            disabled={isSubmitting}
          />
          {errors.message && <span className="contact-form__error">{errors.message}</span>}
        </div>

        <input 
          type="hidden" 
          name="redirect" 
          value="https://web3forms.com/success"
        />

        <button 
          type="submit" 
          className="contact-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'error' && (
          <div className="contact-form__error-message">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 