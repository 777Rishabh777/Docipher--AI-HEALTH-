# 🏥 DOCIPHER - AI-Powered Medical Assistant Platform
## Complete Project Documentation for Academic Presentation

---

## 📋 PROJECT OVERVIEW

**Project Name:** Docipher - Medical Report Analyzer & Health Assistant  
**Technology Stack:** Django (Python), Google Gemini AI, SQLite, Bootstrap  
**Project Type:** Full-Stack Web Application  
**Domain:** Healthcare Technology (HealthTech)  
**Development Period:** 2025-2026  
**Current Status:** Production Ready ✅

---

## 🎯 PROJECT OBJECTIVES

### Primary Goal
To create an intelligent healthcare management system that helps patients and doctors understand medical reports, manage health records, and get instant medical guidance using AI technology.

### Key Objectives
1. **Simplify Medical Reports** - Convert complex medical reports into easy-to-understand summaries
2. **24/7 Medical Guidance** - Provide instant AI-powered medical assistance
3. **Personalized Healthcare** - Maintain comprehensive patient profiles
4. **Medicine Management** - Automated medicine reminder system
5. **Digital Health Records** - Centralized storage and management of medical history

---

## 🚀 CORE FEATURES

### 1. AI-Powered Medical Report Summarizer
**What it does:**
- Uploads medical reports (images: JPG, PNG, WEBP or text files)
- Analyzes using Google Gemini AI (advanced AI models)
- Generates summaries in THREE modes:
  - **Patient Mode**: Simple, easy-to-understand language for patients
  - **Doctor Mode**: Clinical terminology with detailed analysis for healthcare professionals
  - **Full Mode**: Comprehensive data with charts, graphs, and complete test panel breakdowns

**Technology Used:**
- Google Gemini 2.5 Flash AI (for text analysis)
- Google Vision AI (for image/OCR processing)
- PIL (Python Imaging Library) for image handling

**Features:**
- Multi-format support (images + text)
- Real-time processing
- Downloadable PDF reports
- History tracking of all analyzed reports

---

### 2. Intelligent Medical Chatbot
**What it does:**
- 24/7 AI medical assistant powered by Google Gemini
- Answers health-related questions instantly
- Provides personalized responses based on user's medical profile

**Capabilities:**
- Symptom analysis and guidance
- Medicine information and dosage
- Home remedies and lifestyle advice
- Emergency signs detection
- Drug interaction warnings (based on user profile)

**Safety Features:**
- Medical disclaimers on every response
- Emergency guidance for serious conditions
- Profile-aware responses (considers allergies, current medications, age, etc.)
- Multiple AI model fallback system for reliability

**Technical Implementation:**
- Uses 5 different AI models for redundancy:
  1. gemini-2.5-flash-lite (primary - fast & efficient)
  2. gemini-2.0-flash-lite
  3. gemini-flash-lite-latest
  4. gemini-2.5-flash
  5. gemini-2.0-flash
- 3 retry attempts per model
- Automatic fallback to next model if one fails

---

### 3. Comprehensive Patient Profile System
**What it stores:**

**Personal Information:**
- Name, Date of Birth, Age (auto-calculated)
- Gender, Marital Status, Occupation
- Contact Number, Full Address
- Profile Picture upload

**Physical Health Metrics:**
- Height (cm) and Weight (kg)
- Blood Group (A+, A-, B+, B-, AB+, AB-, O+, O-)
- BMI calculation (automatic)

**Medical History:**
- Known Allergies (critical for drug safety)
- Chronic Conditions (diabetes, hypertension, etc.)
- Past Surgeries
- Past Major Illnesses
- Immunization History
- Current Medications (for interaction checking)
- Family Medical History

**Lifestyle Information:**
- Smoking Status (Never, Former, Current)
- Alcohol Consumption (None, Socially, Regularly)
- Dietary Notes

**Emergency Contacts:**
- Primary Care Physician Name & Contact
- Emergency Contact Name & Phone

**Benefits:**
- One-time setup, lifetime access
- Used by AI chatbot for personalized advice
- Helps doctors understand patient history quickly
- Downloadable as PDF for physical records

---

### 4. Medicine Reminder System
**What it does:**
- Schedule medicine reminders by time
- Automated email notifications
- Multiple reminders per user

**Features:**
- Medicine name and dosage tracking
- Specific reminder times (e.g., 8:00 AM, 2:00 PM, 9:00 PM)
- Active/Inactive toggle
- Email delivery using Gmail SMTP

**Technical Implementation:**
- Django management command: `python manage.py send_reminders`
- Checks database every minute (via scheduled task/cron job)
- Sends email to user's registered email
- Uses Gmail SMTP (supports 500 emails/day)
- Timezone-aware (Asia/Kolkata timezone)

**Example Email:**
```
Subject: Reminder: Time to take your medicine - Aspirin

Hello username,

This is a reminder to take your medicine:

Medicine: Aspirin
Dosage: 100mg
Time: 09:00 AM

Stay healthy!
- Docipher Team
```

---

### 5. Summary History & Management
**What it does:**
- Stores all generated medical report summaries
- View past analyses
- Download previous reports as PDF
- Track medical history over time

**Features:**
- Timestamp for each summary
- Report mode indicator (Patient/Doctor/Full)
- One-click PDF download
- Search and filter capabilities

---

## 💻 TECHNICAL ARCHITECTURE

### Backend Framework
**Django 5.x** (Python Web Framework)
- Model-View-Template (MVT) architecture
- User authentication system (built-in)
- Session management
- CSRF protection
- Database ORM (Object-Relational Mapping)

### Database
**SQLite3** (Development) / **PostgreSQL** (Production-ready)
- 3 Main Models:
  1. **Summary** - Stores AI-generated report summaries
  2. **PatientProfile** - Comprehensive patient information
  3. **Reminder** - Medicine reminder schedules

### AI Integration
**Google Gemini API**
- gemini-2.5-flash-lite (primary model)
- gemini-2.0-flash-exp (experimental features)
- Content generation API
- Safety settings configured
- Rate limiting handled

### Frontend Technologies
- **HTML5** - Structure
- **CSS3** - Styling
- **Bootstrap 5** - Responsive design framework
- **JavaScript** - Interactivity
- **AJAX** - Asynchronous chatbot communication

### Email System
**Gmail SMTP Integration**
- TLS encryption (port 587)
- App Password authentication
- Template-based emails
- Error handling and logging

### Additional Libraries
```python
Django==5.x              # Web framework
google-generativeai      # Google AI SDK
python-dotenv            # Environment variables
Pillow (PIL)            # Image processing
django-jazzmin          # Admin panel UI
xhtml2pdf               # PDF generation
tenacity                # Retry logic for AI
```

---

## 🗂️ PROJECT STRUCTURE

```
Medicine-app/
│
├── medical_project/           # Main Django project
│   ├── settings.py           # Configuration (API keys, database, email)
│   ├── urls.py               # Main URL routing
│   ├── wsgi.py               # Web server gateway
│   └── asgi.py               # Async server gateway
│
├── summarizer/                # Main application
│   ├── models.py             # Database models (Summary, PatientProfile, Reminder)
│   ├── views.py              # Business logic & request handling
│   ├── urls.py               # App-specific URLs
│   ├── forms.py              # Form definitions
│   ├── ai_engine.py          # AI integration logic (Google Gemini)
│   ├── admin.py              # Django admin configuration
│   │
│   ├── templates/            # HTML templates
│   │   └── summarizer/
│   │       ├── landing_page.html    # Home page
│   │       ├── index.html           # Report summarizer interface
│   │       ├── chat.html            # Chatbot interface
│   │       ├── profile.html         # Patient profile management
│   │       ├── reminders.html       # Medicine reminders
│   │       └── summary_history.html # Past summaries
│   │
│   ├── management/
│   │   └── commands/
│   │       └── send_reminders.py    # Email reminder command
│   │
│   └── migrations/           # Database migrations
│
├── templates/                # Global templates
│   ├── base.html            # Base template
│   └── registration/        # Login/signup pages
│
├── media/                    # User-uploaded files
│   └── profile_pics/        # Profile pictures
│
├── staticfiles/             # Static files (CSS, JS, images)
│
├── db.sqlite3               # Database file
├── manage.py                # Django management script
├── requirements.txt         # Python dependencies
└── .env                     # Environment variables (API keys)
```

---

## 🔐 SECURITY FEATURES

### 1. Authentication & Authorization
- User registration with password validation
- Secure login system
- Session-based authentication
- @login_required decorators on sensitive views

### 2. Data Protection
- CSRF tokens on all forms
- SQL injection prevention (Django ORM)
- Password hashing (built-in Django)
- User data isolation (each user sees only their data)

### 3. API Security
- API keys stored in environment variables (.env)
- Not exposed in code or version control
- Separate keys for email and AI services

### 4. Medical Safety
- AI-generated disclaimers on all medical advice
- Emergency condition warnings
- "Consult a doctor" recommendations
- Allergy and drug interaction checks

---

## 📊 DATABASE SCHEMA

### Summary Table
| Field          | Type         | Description                    |
|----------------|--------------|--------------------------------|
| id             | Integer (PK) | Auto-increment primary key     |
| user_id        | Foreign Key  | Links to User                  |
| original_text  | TextField    | Report mode stored             |
| summary_text   | TextField    | AI-generated summary           |
| created_at     | DateTime     | Timestamp                      |

### PatientProfile Table
| Field                    | Type         | Description                    |
|--------------------------|--------------|--------------------------------|
| id                       | Integer (PK) | Auto-increment primary key     |
| user_id                  | Foreign Key  | One-to-one with User           |
| profile_picture          | ImageField   | Profile photo                  |
| date_of_birth            | Date         | DOB                            |
| gender                   | CharField    | Male/Female/Other              |
| blood_group              | CharField    | A+, B-, etc.                   |
| allergies                | TextField    | Known allergies                |
| chronic_conditions       | TextField    | Long-term conditions           |
| current_medications      | TextField    | Current prescriptions          |
| ... (20+ more fields)    | Various      | Complete medical history       |

### Reminder Table
| Field          | Type         | Description                    |
|----------------|--------------|--------------------------------|
| id             | Integer (PK) | Auto-increment primary key     |
| user_id        | Foreign Key  | Links to User                  |
| medicine_name  | CharField    | Medicine name                  |
| dosage         | CharField    | e.g., "500mg", "1 tablet"      |
| reminder_time  | TimeField    | Scheduled time (HH:MM)         |
| is_active      | Boolean      | Enable/disable reminder        |

---

## 🎨 USER INTERFACE

### Landing Page
- Professional healthcare design
- Feature highlights
- Call-to-action buttons (Login/Register)
- About section

### Dashboard (After Login)
- Navigation menu:
  - Summarizer
  - Chatbot
  - Profile
  - Reminders
  - History
- User welcome message
- Quick access cards

### Summarizer Interface
- File upload section (drag & drop)
- Report type selector (Patient/Doctor/Full)
- Real-time processing indicator
- Result display area with formatted HTML
- Download PDF button
- Clear file button

### Chatbot Interface
- Chat window with message history
- Input box for questions
- Send button
- AI response display (formatted markdown)
- Typing indicators

### Profile Page
- Tabbed sections:
  - Personal Information
  - Physical Metrics
  - Medical History
  - Lifestyle
  - Emergency Contacts
- Edit mode with form validation
- Profile picture upload
- Save button

### Reminders Page
- List of all reminders
- Add new reminder form
- Edit/Delete options
- Active/Inactive toggle

---

## ⚙️ HOW IT WORKS

### Report Summarization Flow:
1. User uploads medical report (image/text)
2. File saved to media folder
3. If image → Google Vision API extracts text (OCR)
4. Text sent to Google Gemini AI with mode-specific prompt
5. AI analyzes and generates formatted HTML summary
6. Summary displayed to user
7. Summary saved in database with timestamp
8. User can download as PDF

### Chatbot Flow:
1. User types medical question
2. System fetches user's PatientProfile
3. Profile data (age, allergies, medications) added to AI prompt
4. Question + profile sent to Google Gemini AI
5. AI generates personalized response
6. Safety checks: adds disclaimer if medical topic
7. Response displayed in chat interface
8. Conversation context maintained

### Reminder Flow:
1. User creates reminder with medicine name, dosage, time
2. Reminder saved in database
3. Cron job runs `send_reminders` command every minute
4. Command checks current time against reminder times
5. If match found, email sent via Gmail SMTP
6. Email contains medicine details
7. Success/failure logged

---

## 🧪 TESTING & QUALITY ASSURANCE

### Test Files:
- `test_chatbot.py` - Tests AI chatbot functionality
- `check_models.py` - Verifies database models

### Testing Checklist:
- ✅ User registration & login
- ✅ File upload (various formats)
- ✅ AI summarization (all 3 modes)
- ✅ Chatbot responses
- ✅ Profile creation & updates
- ✅ Reminder creation & email delivery
- ✅ PDF generation
- ✅ History viewing
- ✅ Mobile responsiveness

---

## 🚀 DEPLOYMENT

### Environment Variables (.env):
```env
SECRET_KEY=django-secret-key
DEBUG=True/False
GOOGLE_API_KEY=your-gemini-api-key
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=gmail-app-password
```

### Commands:
```bash
# Setup
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser

# Run Development Server
python manage.py runserver

# Send Reminders (Manual Test)
python manage.py send_reminders

# Collect Static Files (Production)
python manage.py collectstatic
```

### Production Deployment:
- Platform: Vercel (configured via vercel.json)
- Database: PostgreSQL (upgrade from SQLite)
- Static Files: CDN hosting
- Domain: Custom domain configurable

---

## 📈 FUTURE ENHANCEMENTS

### Planned Features:
1. **Voice Assistant** - Speak to the chatbot
2. **Multi-language Support** - Hindi, Tamil, etc.
3. **Doctor Portal** - Separate interface for doctors
4. **Appointment Booking** - Schedule doctor visits
5. **Lab Test Booking** - Order tests online
6. **Medicine E-commerce** - Buy prescribed medicines
7. **Telemedicine Integration** - Video consultations
8. **Wearable Device Sync** - Fitness tracker integration
9. **AI Diagnosis Suggestions** - Preliminary diagnosis
10. **Health Analytics Dashboard** - Track health trends over time

### Technical Improvements:
- Real-time WebSocket chat
- Progressive Web App (PWA)
- Offline mode support
- Mobile app (React Native)
- Blockchain for medical records (data security)

---

## 💡 INNOVATION & UNIQUENESS

### What Makes This Project Special:

1. **AI-First Approach**: Uses latest Google Gemini 2.5 AI models
2. **Three-Mode Summarization**: Caters to both patients and doctors
3. **Profile-Aware Chatbot**: Considers user's medical history in responses
4. **Automated Medicine Management**: Email reminders without manual intervention
5. **Complete Healthcare Ecosystem**: Not just one feature - entire health management
6. **Safety-Focused**: Medical disclaimers, allergy checks, emergency warnings
7. **User-Friendly**: Simple interface for non-technical users
8. **Scalable Architecture**: Can handle thousands of users

---

## 🎓 LEARNING OUTCOMES

### Technologies Mastered:
1. **Django Framework** - Full-stack web development
2. **AI Integration** - Google Gemini API, prompt engineering
3. **Database Design** - Relational database modeling
4. **RESTful APIs** - Backend development
5. **Email Automation** - SMTP integration
6. **User Authentication** - Security best practices
7. **PDF Generation** - Document processing
8. **Version Control** - Git workflow

### Skills Developed:
- Problem-solving in healthcare domain
- AI/ML application development
- Full-stack development
- Database management
- UI/UX design
- Project management
- Documentation

---

## 📞 SUPPORT & MAINTENANCE

### Admin Panel Access:
- URL: `/admin`
- Features:
  - User management
  - View all summaries
  - Manage reminders
  - Patient profiles
  - Jazzmin theme (modern UI)

### Monitoring:
- Django logs for error tracking
- Email delivery status
- AI API usage monitoring
- Database backups (scheduled)

---

## 🏆 PROJECT STATISTICS

- **Total Lines of Code**: ~2,500+ lines
- **Python Files**: 15+
- **HTML Templates**: 10+
- **Database Tables**: 3 main + Django default
- **API Integrations**: 2 (Google AI, Gmail)
- **Features**: 5 major modules
- **Development Time**: 3-4 months

---

## 📝 CONCLUSION

**Docipher** is a comprehensive AI-powered healthcare management platform that bridges the gap between complex medical information and user understanding. By leveraging cutting-edge AI technology (Google Gemini), it provides instant medical guidance, simplifies medical reports, and helps users manage their health proactively.

The project demonstrates:
- **Technical Excellence**: Modern tech stack, clean code architecture
- **Practical Utility**: Solves real-world healthcare problems
- **Scalability**: Production-ready, can serve thousands of users
- **Innovation**: AI-first approach with safety features
- **Social Impact**: Makes healthcare information accessible to everyone

---

## 🎤 PRESENTATION TIPS FOR TEACHER

### Key Points to Emphasize:
1. **Problem Statement**: Complex medical reports are hard to understand
2. **Solution**: AI-powered summarization in simple language
3. **Technology**: Latest Google Gemini AI integration
4. **Features**: 5 major modules working together
5. **Real-world Application**: Can be used by actual patients/doctors
6. **Safety**: Medical disclaimers, allergy checks
7. **Scalability**: Ready for deployment

### Demo Flow:
1. Show landing page → Register/Login
2. Upload sample medical report → Generate summary in Patient mode
3. Switch to Doctor mode → Show detailed analysis
4. Open chatbot → Ask medical question → Show AI response
5. Show profile page → Explain comprehensive data
6. Create medicine reminder → Show email notification
7. View history → Download PDF

### Questions Your Teacher Might Ask:
1. **Q: Why use AI instead of manual summarization?**
   A: AI processes reports in seconds, available 24/7, consistent quality, can handle any report format.

2. **Q: How do you ensure AI accuracy?**
   A: Using Google's latest Gemini models (trained on medical data), multiple model fallback, medical disclaimers on every response.

3. **Q: What about data privacy?**
   A: User data isolated, passwords encrypted, API keys secured in environment variables, no data sharing with third parties.

4. **Q: Can this replace doctors?**
   A: No, it's an assistant tool. We explicitly add disclaimers to consult real doctors. It helps understand reports, not diagnose.

5. **Q: What were the biggest challenges?**
   A: AI prompt engineering, handling different report formats, email automation, mobile responsiveness.

---

**Developed By:** Rishabh Singh  
**Institution:** [Your College Name]  
**Course:** MCA (Master of Computer Applications)  
**Year:** 2025-2026  
**Contact:** rishabh_mc24041@srmcem.ac.in  

---

*This project represents the intersection of AI and Healthcare, making medical information accessible to everyone.*

**🎯 Project Status: Production Ready | 🚀 Deployment: Vercel | 💻 Code: Available**
