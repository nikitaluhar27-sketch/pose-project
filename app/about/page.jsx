<link rel="canonical" href="https://photo-poses.vercel.app/about" />

export const metadata = {
  title: "About | Photo Poses Platform",
  description:
    "Learn about the team and mission behind Photo Poses Platform, your guide to confident, expressive photography poses.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pb-20">
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Photo Poses</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We make posing feel effortless with clear guidance, inspiration, and tips trusted by creators and photographers worldwide.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe anyone can look confident on camera with the right coaching. Our platform curates poses, body language tips, and step-by-step breakdowns so you can focus on telling your story instead of worrying about what to do with your hands.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether you are a beginner, content creator, or professional photographer, we want to be the companion that removes friction and sparks new ideas for every shoot.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-900 border border-indigo-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">What You'll Find Here</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
                <span>Curated pose collections for different styles, moods, and occasions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
                <span>Step-by-step pointers to improve posture, angles, and expressions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" aria-hidden="true" />
                <span>Search and discovery tools to surface exactly what you need, fast.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[{
            title: "Inclusive Inspiration",
            desc: "Poses for girls, boys, and couples with options across casual, formal, and creative looks.",
          }, {
            title: "Practical Guidance",
            desc: "Clear tips on body language, framing, and confidence cues you can apply right away.",
          }, {
            title: "Creator Friendly",
            desc: "Save time planning shoots and keep your feed fresh with new ideas every week.",
          }].map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}