import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg border mt-3">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder='name'
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='email'
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2  bg-gray-100  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder='phone'
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2  bg-gray-100  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder='message'
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-3 py-2  bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
