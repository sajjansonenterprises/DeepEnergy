import React, { PureComponent } from "react";

interface FieldConfig {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

interface ContactFormProps {
  fields: FieldConfig[]; // Dynamic fields array
  onSubmit: (formData: { [key: string]: string }) => void; // Form submit handler
}

interface ContactFormState {
  formData: { [key: string]: string };
  errors: { [key: string]: string };
}

export default class ContactForm extends PureComponent<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      formData: {},
      errors: {},
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
      errors: { ...prevState.errors, [name]: "" },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = this.state;
    const { fields, onSubmit } = this.props;

    const errors: { [key: string]: string } = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        errors[field.name] = `${field.placeholder} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    onSubmit(formData);
  };

  render() {
    const { fields } = this.props;
    const { formData, errors } = this.state;

    return (
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <h3 className="text-2xl font-bold text-black">Get in Touch</h3>
        <p className="text-gray-600 mt-2">Fill out the form below, and our team will get back to you shortly.</p>
        <form className="mt-6 space-y-4" onSubmit={this.handleSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
                  rows={5}
                  value={formData[field.name] || ""}
                  onChange={this.handleChange}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
                  value={formData[field.name] || ""}
                  onChange={this.handleChange}
                />
              )}
              {errors[field.name] && <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>}
            </div>
          ))}
          <button type="submit" className="bg-green-500 text-white w-full py-3 rounded-md text-lg font-semibold hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
