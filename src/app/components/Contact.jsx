// src/app/components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-accent1">Contact Me</h2>
      <p className="mt-4 text-lg text-textSecondary max-w-3xl mx-auto">
        Feel free to reach out to me through the form below or via email at{" "}
        <a
          href="mailto:me@example.com"
          className="text-accent1 hover:text-accent2"
        >
          me@example.com
        </a>
        .
      </p>
      <div className="mt-8">
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-accent1 text-white rounded-lg hover:bg-accent2 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
