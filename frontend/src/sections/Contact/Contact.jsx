import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="description-text reveal">
          Ready to bring your vision to life? Reach out to us and one of our
          architects will get back to you within 24 hours.
        </p>

        <div className="contact__wrapper">
          <div className="contact__info reveal">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <h4>Our Office</h4>
                <p>12 Skyline Boulevard, New Delhi, India</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📩</span>
              <div>
                <h4>Email</h4>
                <p>hello@skylinearchitecture.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">🕐</span>
              <div>
                <h4>Working Hours</h4>
                <p>Monday – Saturday, 9am – 6pm</p>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper reveal">
            {status === 'success' && (
              <div className="contact__success">
                ✅ Thank you! We will be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
            <div className="contact__form">
              <div className="contact__field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn-main contact__submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;