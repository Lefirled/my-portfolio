// components/WorkSection.js
"use client";

export default function WorkSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8">
        {/* Media Section */}
        <div className="space-y-6">
          {/* Gambar */}
          <img
            src="/images/chatbotscreenshot.jpg" // taruh file di /public/chatbot-screenshot.png
            alt="AI Chatbot UMN Screenshot"
            className="rounded-xl shadow-md"
          />

          {/* Video */}
          <video
            src="/videos/contoh.mp4" // taruh file di /public/chatbot-demo.mp4
            controls
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">TanyaVara Chatbot UMN</h3>
          <p className="text-gray-700">
            <strong>TanyaVara</strong> is an AI chatbot built for Universitas Multimedia Nusantara, 
            combining <strong>LLM</strong> with <strong>Retrieval-Augmented Generation (RAG)</strong> to deliver accurate, context-aware answers. I contributed to the frontend development
            with <strong>Streamlit</strong> and handled system integration between the model,
            database, and user interface, with <strong>Firebase</strong> managing data and authentication.
            </p>


                   <div className="bg-gray-100 rounded-xl p-4">
            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Python</li>
              <li>Streamlit (Frontend UI)</li>
              <li>LangChain (RAG Pipeline)</li>
              <li>Firebase (Data & Auth)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
