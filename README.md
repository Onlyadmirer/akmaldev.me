# Akmal's Portfolio 🚀

A modern portfolio website built with **Next.js 16**, **React 19**, and **TypeScript**. This site showcases top projects, achievements, technical skills, and interactive features such as a chat room and admin dashboard.

🌐 **Website**: [akmaldev.my.id](https://akmaldev.my.id)

---

## ✨ Key Features

### 📱 Multi-Page Application

- **Home** - Landing page with introduction and highlights
- **About** - Information about Akmal and background
- **Projects** - Showcase of projects with detailed descriptions and tech stack
- **Achievements** - Awards, certificates, and accomplishments
- **Contact** - Contact form with email integration
- **Chat Room** - Real-time chat feature for interaction
- **Dashboard** - Admin panel for managing content

### 🔐 Authentication & Authorization

- **NextAuth.js v5** integration with OAuth (Google, GitHub)
- Role-based access control (User, Admin)
- Session management
- Secure API endpoints

### 🎨 Modern UI/UX

- **Dark mode** with theme toggle
- **Responsive design** for all devices
- **Smooth animations** using Motion
- **Tailwind CSS** for styling
- **Spotlight cards** for project showcase

### 📊 Database Management

- **PostgreSQL** as the database
- **Prisma ORM** for query management
- Structured database migrations
- Relationship modeling (User, Projects, Achievements, Chat)

### 📧 Communication

- Form validation with **React Hook Form** + **Zod**
- Email integration with **Resend**
- Toast notifications with **Sonner**

---

## 🛠️ Tech Stack

| Category               | Technology                     |
| ---------------------- | ------------------------------ |
| **Frontend Framework** | Next.js 16, React 19           |
| **Language**           | TypeScript 5                   |
| **Styling**            | Tailwind CSS 4, Tailwind Merge |
| **Database**           | PostgreSQL, Prisma 7           |
| **Authentication**     | NextAuth.js v5                 |
| **Form Management**    | React Hook Form, Zod           |
| **Components**         | Radix UI, Lucide React         |
| **Email Service**      | Resend                         |
| **Data Fetching**      | SWR                            |
| **Notifications**      | Sonner                         |
| **Icons**              | React Icons                    |
| **Animations**         | Motion                         |
| **Theme Management**   | Next-themes                    |

---

## 📋 Prerequisites

- Node.js 18.17 or higher
- PostgreSQL database
- OAuth accounts (Google/GitHub) - optional

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/Onlyadmirer/akmaldev.my.id.git
cd akmaldev.my.id
```

### 2. Install Dependencies

```bash
npm install
# or if using bun
bun install
```

### 3. Setup Environment Variables

Create `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/akmalportfolio"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth - Google
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# OAuth - GitHub
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"

# Email Service - Resend
RESEND_API_KEY="your-resend-api-key"
```

### 4. Setup Database

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed database
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── api/               # API routes & authentication
│   ├── about/             # About page
│   ├── achievements/      # Achievements page
│   ├── projects/          # Projects listing & detail
│   ├── contact/           # Contact form
│   ├── chatRoom/          # Chat feature
│   ├── dashboard/         # Admin dashboard
│   └── layout.tsx         # Root layout
│
├── common/                # Shared components & constants
│   ├── components/        # Reusable components
│   ├── constants/         # Constants & configuration
│   └── layouts/           # Layout components
│
├── modules/               # Feature modules
│   ├── home/
│   ├── about/
│   ├── projects/
│   ├── achievements/
│   └── ...
│
├── lib/                   # Utilities & helpers
│   ├── action.ts          # Server actions
│   ├── auth.ts            # Authentication config
│   ├── prisma.ts          # Prisma client
│   └── utils.ts           # Utility functions
│
├── prisma/                # Database
│   ├── schema.prisma      # Schema definition
│   ├── migrations/        # Migration history
│   └── seed.ts            # Seed data
│
├── types/                 # TypeScript definitions
├── providers/             # React providers
└── public/                # Static assets
```

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🔄 Development Workflow

### Adding a New Project

1. Login to dashboard with admin account
2. Create a new project with complete details
3. Select the tech stack used
4. Data is automatically saved to the database

### Adding Achievements

1. Access dashboard achievements
2. Upload achievement image
3. Fill in description and metadata
4. Select publisher (if applicable)

### Contact Form

- Form automatically sends email to owner
- Uses Resend for email delivery
- Form validation with Zod schema

---

## 🔐 Authentication Flow

1. User clicks login (Google/GitHub)
2. NextAuth redirects to OAuth provider
3. Provider sends callback to application
4. User account is created/updated in database
5. Session token is saved
6. User is redirected to dashboard or home

---

## 📊 Database Schema

### User Model

```
- id (Primary Key)
- name, email, image
- role (User / Admin)
- emailVerified
- relationships: achievements, projects, chat
```

### Projects Model

```
- id, slug, title, description
- image, link, github
- stack (many-to-many)
- author (User)
```

### Achievements Model

```
- id, title, description
- image, publisher
- author (User)
```

### Chat Model

```
- id, message
- author (User)
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

```bash
git push origin main
```

### Deploy to Other Servers

```bash
# Build production
npm run build

# Start production
npm start
```

---

## 🐛 Troubleshooting

### Database connection error

- Make sure PostgreSQL is running
- Check DATABASE_URL in .env.local
- Verify database credentials

### Prisma generate error

```bash
npx prisma generate
npx prisma migrate deploy
```

### Email not sending

- Verify RESEND_API_KEY
- Check email template in lib/emailTemplate.ts
- Test with Resend dashboard

---

## 📄 License

MIT License - Feel free to use this project!

---

## 💬 Contact

For partnership inquiries or questions, reach out:

- 📧 Email: akmalrbc6@gmail.com
- 💼 Website: [akmaldev.my.id](https://akmaldev.my.id)
- 🐙 GitHub: [Onlyadmirer](https://github.com/Onlyadmirer)

---

**Built with ❤️ by Akmal**
