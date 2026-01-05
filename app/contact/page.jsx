export const metadata = {
  title: "Contact | Photo Poses Platform",
  description:
    "Contact the Photo Poses team for partnerships, feedback, or questions about our pose guides and resources.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pb-20">
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have a question, partnership idea, or feedback? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Options</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We respond to most messages within 1-2 business days. Share as many details as you can so we can help quickly.
          </p>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Email: </span>
              <a
                className="hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                href="mailto:hello@photo-poses.com"
              >
                hello@photo-poses.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Support: </span>
              Need help using the site? Tell us which page or pose you were on and what you expected to see.
            </div>
            <div>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Partnerships: </span>
              We collaborate with photographers, creators, and brands on tutorials and featured collections.
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4" action="https://formspree.io/f/mqaejbvv" method="POST">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            This form uses Formspree for simple submissions. Replace the endpoint with your preferred provider when ready.
          </p>
        </div>
      </section>
    </div>
  );
}