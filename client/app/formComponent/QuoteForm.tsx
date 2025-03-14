"use client"
import React, { Component, ChangeEvent, FormEvent } from 'react';

// Define state types
interface QuoteFormState {
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Message: string;
}

export default class QuoteForm extends Component<Record<string, unknown>, QuoteFormState> {

  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      FullName: '',
      EmailAddress: '',
      PhoneNumber: '',
      Message: ''
    };
  }


  // Handle input changes
  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<QuoteFormState, keyof QuoteFormState>);
  };

  // Handle form submission
  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { FullName, EmailAddress, PhoneNumber, Message } = this.state;

    try {
      const response = await fetch('https://deepenergy.onrender.com/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data:{ FullName, EmailAddress, PhoneNumber, Message }})
      });

      if (response.ok) {
        alert('Quote request submitted successfully!');
        this.setState({ FullName: '', EmailAddress: '', PhoneNumber: '', Message: '' });
      } else {
        alert('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  render() {
    return (
      <div className="md:w-1/3 bg-white text-black p-8 rounded-lg shadow-lg mt-10 md:mt-0">
        <h3 className="text-2xl font-bold">Request a Quote</h3>
        <p className="text-gray-600 mt-2">
          Fill out the form below and our team will get in touch with you soon.
        </p>

        <form className="mt-6 space-y-4" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="FullName" 
            placeholder="Full Name" 
            value={this.state.FullName} 
            onChange={this.handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
            required
          />
          <input 
            type="email" 
            name="EmailAddress" 
            placeholder="Email Address" 
            value={this.state.EmailAddress} 
            onChange={this.handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
            required
          />
          <input 
            type="text" 
            name="PhoneNumber" 
            placeholder="Phone Number" 
            value={this.state.PhoneNumber} 
            onChange={this.handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
            required
          />
          <textarea 
            name="Message" 
            placeholder="Your Message" 
            value={this.state.Message} 
            onChange={this.handleChange} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
            rows={4} 
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-green-500 text-white w-full py-3 rounded-md text-lg font-semibold hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
