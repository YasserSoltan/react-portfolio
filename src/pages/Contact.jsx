import { useState } from "react";
import emailjs from "emailjs-com"; // Add this import
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({
        name: !formData.name ? "Name is required" : "",
        email: !formData.email ? "Email is required" : "",
        message: !formData.message ? "Message is required" : "",
      });
      return;
    }
    if (!formData.email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is invalid",
      }));
      return;
    }
    if (formData.message.length < 10) {
      setErrors((prev) => ({
        ...prev,
        message: "Message must be at least 10 characters",
      }));
      return;
    }
    // Clear errors if validation passes
    setErrors({ name: "", email: "", message: "" });
    setIsLoading(true);
    emailjs
      .send(
        "service_bgjq0yo", //EmailJS service ID
        "template_6xury8o", //EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "a8-nTfkCCcEBQPM2m" // EmailJS user/public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        // Reset form data
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message.");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <main className="bg-secondary-light-bg dark:bg-secondary-dark-bg pt-5 min-h-screen">
      <div className="w-full p-4">
        {/* <h1>Contact</h1> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center md:w-[40%] mx-auto gap-3"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="text-black-text dark:text-primary-dark-text font-semibold text-start block"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-white rounded-md w-full p-2"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-600 text-start">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-black-text dark:text-primary-dark-text font-semibold text-start block"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-white rounded-md w-full p-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-600 text-start">{errors.email}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="text-black-text dark:text-primary-dark-text font-semibold text-start block"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="bg-white rounded-md w-full p-2"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-start">{errors.message}</p>
            )}
          </div>
          <button
            disabled={isLoading}
            className="w-[25%] bg-primary-button hover:bg-primary-button-hover text-white border-0 outline-0 p-3 rounded-2xl cursor-pointer"
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
