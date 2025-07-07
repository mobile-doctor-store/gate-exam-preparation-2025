# GATE CSE Preparation Platform

A comprehensive platform for GATE Computer Science Engineering exam preparation with 50,000+ practice questions, progress tracking, and complete syllabus coverage.

## Features

- **Complete GATE CSE Syllabus**: Covers all subjects including DSA, Computer Networks, Operating Systems, DBMS, and Computer Organization
- **50,000+ Practice Questions**: Questions categorized by difficulty (basic, easy, hard, professional, critical)
- **Multiple Practice Modes**: Subject-wise, topic-wise, year-wise PYQs, difficulty-based, and method-wise practice
- **Progress Tracking**: Integrated with Google Forms for secure progress monitoring
- **Mock Tests & Live Tests**: Full-length tests with real-time analysis and ranking
- **Test Series**: Comprehensive test packages for complete preparation
- **Study Resources**: Curated collection of books, notes, and educational materials
- **Universal Aptitude Section**: Available for all engineering branches
- **Mobile Responsive**: Works perfectly on all devices

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd gate-cse-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Google Forms (Optional):**
   - Copy `.env.example` to `.env`
   - Create a Google Form with name and phone fields
   - Get the form URL and field IDs (see instructions in `.env.example`)
   - Update the environment variables

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5000`

## Deployment

### Deploy to Vercel

1. **Connect to GitHub:**
   - Push your code to GitHub
   - Connect your GitHub repository to Vercel

2. **Configure Environment Variables:**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add your Google Form configuration variables:
     - `VITE_GOOGLE_FORM_URL`
     - `VITE_GOOGLE_FORM_NAME_FIELD`
     - `VITE_GOOGLE_FORM_PHONE_FIELD`

3. **Deploy:**
   - Vercel will automatically deploy your application
   - Your app will be available at `https://your-app-name.vercel.app`

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for static deployment
- **Firebase Hosting**: Deploy using Firebase CLI

## Google Forms Integration

The platform integrates with Google Forms for secure user progress tracking:

1. **Create a Google Form** with the following fields:
   - Name (Short answer)
   - Phone Number (Short answer)

2. **Get Form Configuration:**
   - Go to your form in edit mode
   - Click three dots menu > "Get pre-filled link"
   - Fill in dummy data and click "Get link"
   - Extract the form ID and field entry IDs from the URL

3. **Configure Environment Variables:**
   ```env
   VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   VITE_GOOGLE_FORM_NAME_FIELD=entry.123456789
   VITE_GOOGLE_FORM_PHONE_FIELD=entry.987654321
   ```

## Project Structure

```
├── client/src/
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and data
│   ├── pages/             # Page components
│   └── components/ui/     # Reusable UI components
├── server/                # Express server (minimal backend)
├── shared/                # Shared types and schemas
└── public/               # Static assets
```

## Technology Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Query + Local Storage
- **UI Components**: Shadcn/ui components
- **Backend**: Express.js (minimal)
- **Database**: In-memory storage with local persistence
- **Deployment**: Vercel/Netlify ready

## Security & Privacy

- User phone numbers are encoded before local storage
- Google Form integration uses environment variables
- No sensitive data exposed in source code
- CORS-enabled API endpoints
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Create an issue on GitHub
- Check the documentation in `/docs`
- Review the FAQ section

---

**Note**: This platform is designed for educational purposes. Ensure you have proper rights to any content you add to the question database.