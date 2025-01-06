import { motion } from 'framer-motion';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6eps88n", "template_ak7f9se", form.current, {
        publicKey: "4R0dHX4IVyDng8d0r",
      })
      .then(
        () => {
          setEmailSent(true); // Set emailSent state to true
          console.log("SUCCESS!");
          setTimeout(() => {
            setEmailSent(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Begin Your Healing Journey</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6" ref={form}
        onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Schedule a Free Consultation
              </motion.button>
            </form>

            {emailSent && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success bg-fuchsia-900 text-white glow">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}