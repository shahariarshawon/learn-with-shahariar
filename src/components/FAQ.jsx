import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500">
          Everything you need to know before starting your journey.
        </p>
      </div>

      {/* FAQ ITEMS */}
      <div className="space-y-4">

        {/* 1 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How long will the course run?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            The course is designed to be completed within 100 days with structured weekly modules, assignments, and practice sessions.
          </div>
        </div>

        {/* 2 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How can I pay?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            You will be able to pay through secure online payment methods. Details will be provided during enrollment.
          </div>
        </div>

        {/* 3 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is there a leaderboard system?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes, we maintain a leaderboard based on assignments and quiz performance to keep you motivated and competitive.
          </div>
        </div>

        {/* 4 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is AI included in this course in this AI era?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes, we will guide you on how to use AI tools effectively to boost your productivity as a developer instead of replacing your skills.
          </div>
        </div>

        {/* 5 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Will AI replace web development?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            No. AI will assist developers, not replace them. Developers who understand both coding and AI tools will have a strong advantage in the industry.
          </div>
        </div>

        {/* 6 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is there any live session support?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes, we will arrange live conceptual sessions to help you understand difficult topics and clear your doubts.
          </div>
        </div>

        {/* 7 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is there any community?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            Yes, you will get access to a dedicated Discord community where you can ask questions, share progress, and connect with others 24/7.
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;