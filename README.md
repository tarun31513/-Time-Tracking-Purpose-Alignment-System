// README.md
# DGPurpose V1

A time tracking and purpose alignment application built with Next.js 14, React, TypeScript, and PostgreSQL.

## Features

- **User Authentication**: Email/password and OAuth (Google, Microsoft)
- **Category Management**: Create and manage time categories
- **Time Tracking**: Log planned and actual time spent
- **Weekly Reviews**: Analyze time allocation with visual charts
- **Calendar Integration**: Sync with Google Calendar and Microsoft Outlook
- **Dashboard**: Real-time overview of daily activities
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **Testing**: Jest, React Testing Library, Playwright

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Google OAuth credentials (optional)
- Microsoft OAuth credentials (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dgpurpose-v1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Random secret for NextAuth (min 32 characters)
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)
- `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Google OAuth credentials
- `MICROSOFT_CLIENT_ID` and `MICROSOFT_CLIENT_SECRET`: Microsoft OAuth credentials

4. Set up the database:
```bash
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Default Test Account

After seeding, you can use these credentials:
- **Email**: test@example.com
- **Password**: testpassword123

## Project Structure
```
dgpurpose-v1/
├── prisma/                 # Database schema and migrations
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── api/          # API routes
│   │   ├── auth/         # Authentication pages
│   │   ├── dashboard/    # Dashboard page
│   │   ├── review/       # Weekly review page
│   │   ├── settings/     # Settings page
│   │   └── calendar/     # Calendar integration page
│   ├── components/        # React components
│   │   ├── ui/           # UI primitives
│   │   ├── dashboard/    # Dashboard components
│   │   ├── auth/         # Authentication components
│   │   ├── settings/     # Settings components
│   │   ├── calendar/     # Calendar components
│   │   └── layout/       # Layout components
│   ├── lib/              # Utility functions and configurations
│   │   ├── hooks/        # Custom React hooks
│   │   └── calendar/     # Calendar integration logic
│   ├── types/            # TypeScript type definitions
│   └── __tests__/        # Test files
└── public/               # Static assets
```

## API Documentation

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Sign in with credentials
- `GET /api/auth/session` - Get current session

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create a new category
- `GET /api/categories/[id]` - Get category by ID
- `PATCH /api/categories/[id]` - Update category
- `DELETE /api/categories/[id]` - Delete category

### Plans
- `GET /api/plans` - List plans (with date range filter)
- `POST /api/plans` - Create a new plan
- `PATCH /api/plans/[id]` - Update plan
- `DELETE /api/plans/[id]` - Delete plan

### Actuals
- `GET /api/actuals` - List actuals (with date range filter)
- `POST /api/actuals` - Create a new actual
- `PATCH /api/actuals/[id]` - Update actual
- `DELETE /api/actuals/[id]` - Delete actual

### Weekly Summary
- `GET /api/weekly-summary?weekStart=YYYY-MM-DD` - Get weekly summary

### Calendar Sync
- `POST /api/calendar/connect` - Connect calendar
- `GET /api/calendar/connect` - Get connection status
- `POST /api/calendar/disconnect` - Disconnect calendar
- `POST /api/calendar/sync` - Trigger manual sync

### Settings
- `GET /api/settings` - Get user settings
- `PATCH /api/settings` - Update user settings

## Testing

Run unit and integration tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run end-to-end tests:
```bash
npm run test:e2e
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name your_migration_name
```

Apply migrations in production:
```bash
npx prisma migrate deploy
```

View database in Prisma Studio:
```bash
npx prisma studio
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.