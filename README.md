Big Bang Studio is an innovative platform that empowers users to effortlessly build full-stack web applications using the power of natural language. With a focus on simplicity and creativity, this tool eliminates the need for traditional coding, allowing users to transform their ideas into functional applications with just a few prompts. Imagine a world where your thoughts can be translated directly into code, where the complexities of programming languages are stripped away, and the only limit is your imagination. 

Users can easily deploy their applications with a single click through Vercel, ensuring that their creations are not only functional but also hosted on a reliable platform. The integration with Supabase provides a robust backend solution, offering features such as real-time databases and authentication, all while maintaining a user-friendly experience. The application is powered by Google Gemini, a cutting-edge AI engine that generates HTML, CSS, and JavaScript code based on user prompts, making it an invaluable tool for both seasoned developers and newcomers alike.

The live demo available at https://bigbang-studio.vercel.app/ showcases the platform's capabilities, allowing potential users to experience firsthand the seamless process of app creation. 

### ✨ Features

Big Bang Studio is packed with a variety of features designed to enhance the user experience and streamline the app development process. The AI Code Generation feature utilizes Google Gemini 1.5 Flash to create applications in HTML, CSS, and JavaScript simply by entering a prompt, making it incredibly accessible for users with no coding experience. The GitHub OAuth integration allows for a quick and easy sign-in process, enabling users to access their projects with just one click. Additionally, the Email Authentication feature, powered by Supabase, ensures secure signup and login through email and password.

Every project is automatically saved in the Supabase Postgres database, providing peace of mind and allowing users to focus on creativity without worrying about losing their work. User profiles are designed to enhance personalization, featuring options for users to set their names, avatars, and easily log out through a convenient dropdown menu. The platform is also mobile-ready, featuring a responsive design complete with a hamburger menu for easy navigation on smaller screens. Users can keep track of their work through the "My Projects" sidebar, which displays a history of all previous projects, ensuring that nothing is ever lost. The Live Preview feature allows users to see the results of their code generation in real-time within an iframe, enabling immediate feedback and adjustments.

### 🛠️ Tech Stack

The technology stack behind Big Bang Studio is robust and modern, ensuring high performance and reliability. The frontend is built using HTML5, CSS3, and Vanilla JavaScript, providing a solid foundation for user interactions. On the backend, Vercel Serverless Functions handle requests efficiently, allowing for a seamless user experience. The AI Engine, powered by Google Gemini 1.5 Flash API, is at the heart of the code generation process, translating user prompts into functional code. For data storage, Supabase, utilizing PostgreSQL, offers a powerful and scalable database solution, while Supabase Auth and GitHub OAuth manage user authentication securely. Finally, Vercel serves as the hosting platform, ensuring that applications are deployed quickly and reliably.

### 📋 Database Schema

The database schema is designed with efficiency and security in mind. The `projects` table includes essential columns such as `id`, which serves as the primary key and is auto-generated for each project, and `user_id`, which links each project to the corresponding user in the `auth.users` table. The `prompt` column captures the user’s input, while the `code` column stores the generated HTML, CSS, and JavaScript. The `created_at` timestamp provides a record of when each project was created. Importantly, Row Level Security (RLS) is enabled, ensuring that users can only view and insert their own projects, thereby maintaining privacy and security.

### 🚀 Quick Start - Local Setup

For those eager to dive into the development process, getting started with Big Bang Studio is straightforward. Users can clone the repository using the command:
```bash
git clone https://github.com/ranag786tech-lang.github.io/bigbang.studio/.git
cd big-bang-studio
```
This simple command sets the stage for users to begin their journey into app development, allowing them to explore the features and capabilities of Big Bang Studio right from their local environment.
