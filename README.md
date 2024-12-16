# Frontend Conference Frontier 2025
Welcome to Frontend Conference Frontier 2025, a comprehensive and interactive platform designed to facilitate conference registrations, schedule management, and provide essential information through FAQs. This project leverages modern web technologies to deliver a seamless user experience.

## Features
Registration Form: Utilizing SurveyJS, the registration form dynamically populates dropdowns with valid conference days, ensuring only relevant options are available based on event statuses.
Dynamic Schedule: Displays the conference schedule with real-time status updates, indicating whether events have ended, are pending, or are currently happening.
Animated FAQs: Presents frequently asked questions with smooth expand/collapse animations for enhanced user interaction.
Responsive Design: Ensures the application is accessible and visually appealing across various devices and screen sizes.
Custom Theming: Integrates seamlessly with the website's color scheme and styles using Tailwind CSS and custom SurveyJS themes.
Google Forms Integration: Submits registration data directly to Google Forms for efficient data collection and management.

## Technologies Used
React: Frontend library for building user interfaces.
TypeScript: Superset of JavaScript for type-safe coding.
Vite: Fast and lean development build tool.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
SurveyJS: Flexible JavaScript Survey library for creating surveys and forms.
React Transition Group: For implementing smooth animations.

## Installation

- Clone the Repository

git clone https://github.com/your-username/frontend-conference-frontier-2025.git
cd frontend-conference-frontier-2025


npm install

Create a .env file in the root directory and add the required environment variables:

VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/your-google-form-id/formResponse

npm run dev