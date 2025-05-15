import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/samba-klaus'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/samba-klaus-gloire-japhet'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent transition-colors duration-300">
      {/* ... reste du code fourni par l'utilisateur avec corrections */}
    </section>
  );
};

export default Contact;