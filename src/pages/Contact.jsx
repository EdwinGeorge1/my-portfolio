import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Contact</h2>

        <div className="p-8 bg-white border rounded-lg shadow-sm">
          <p className="mb-6 text-gray-600">Send me a message.</p>

          <form
            className="space-y-4"
            action="https://formsubmit.co/tgaedwin@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              className="w-full p-3 border rounded-md"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              className="w-full p-3 border rounded-md"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <textarea
              className="w-full p-3 border rounded-md h-28"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
