'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
    name: form.name,
    email: form.email,
    message: form.message,
  };

    emailjs
      .send(
        'service_rb1fe9j',
        'template_ogr0vc3',
        templateParams,
        'lMcinPo6T7lEHtDwF'
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Message failed to send.');
          console.error(error);
        }
      );
  };

  return (
      <section className="contact-wrapper">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>
            Interested in working together?<br />
            Tell us a bit about your project.<br /><br />
            Let’s have a chat!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
  );
}