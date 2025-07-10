# Mind Mates App

A full-stack app to record and manage your **thoughts** and **habits**, built with Next.js, Prisma, and shadcn/ui.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://mind-mates-app.vercel.app/)

## Screenshots

![Main section screenshot](https://github.com/user-attachments/assets/b36494eb-ab66-428c-9037-ce6d10a86cdd)

![Login page screenshot](https://github.com/user-attachments/assets/9f11ee75-caaa-4194-803a-a43ea51026b7)

![Dashboard page screenshot](https://github.com/user-attachments/assets/45f4baa9-f722-484b-a341-6f11519aa60a)


## Features

- Add and view **thoughts** and **habits**
- Mark habits as completed / incomplete
- Delete entries with confirmation
- Beautiful UI made with **shadcn/ui**
- Client-side feedback via **Sonner** toast notifications
- Fully typed server actions (with TypeScript and Prisma)


## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Prisma** (PostgreSQL)
- **Tailwind CSS**
- **shadcn/ui, uiverse** (UI components)


## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/xtrphy/mind-mates-app.git
   cd mind-mates-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
      
3. Setup your .env file:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mindmates"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Run migrations:
   ```basg
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions, improvements or bug fixes!
