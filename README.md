# Cleaning Service App

Professional cleaning service mobile application built with React Native.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI (for mobile deployment)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## 📱 Running the App

### Web Version (Recommended for Testing)
```bash
npm start
# Opens http://localhost:3000
```

### Mobile Version (Requires React Native Setup)

#### For Android:
```bash
# Install React Native CLI
npm install -g react-native-cli

# Install Android dependencies
npm run android
```

#### For iOS:
```bash
# Install React Native CLI
npm install -g react-native-cli

# Install iOS dependencies
npm run ios
```

## 🏗️ Project Structure

```
mobile-app/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js      # Main navigation setup
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js   # User login
│   │   │   └── RegisterScreen.js # User registration
│   │   ├── customer/
│   │   │   ├── CustomerDashboard.js
│   │   │   ├── HouseManagement.js
│   │   │   ├── JobPosting.js
│   │   │   └── CustomerJobs.js
│   │   ├── cleaner/
│   │   │   ├── CleanerDashboard.js
│   │   │   ├── AvailableJobs.js
│   │   │   └── CleanerJobs.js
│   │   └── shared/
│   │       ├── ProfileScreen.js
│   │       └── ReviewsScreen.js
│   └── components/
├── public/
│   ├── demo.html               # Complete web demo
│   └── index.html              # Web entry point
├── App.js                      # Main app component
├── package.json                # Dependencies and scripts
└── start-web.js               # Web server
```

## 🎯 Features

### Customer Features
- ✅ User registration and login
- ✅ House management (CRUD operations)
- ✅ Job posting and tracking
- ✅ Review system
- ✅ Profile management

### Cleaner Features
- ✅ Professional profile setup
- ✅ Browse available jobs
- ✅ Job management and tracking
- ✅ Earnings tracking
- ✅ Review and rating system

### Technical Features
- ✅ React Navigation for routing
- ✅ Bottom tab navigation
- ✅ Role-based user experience
- ✅ Professional UI/UX design
- ✅ Form validation and error handling
- ✅ Mock data for testing

## 🔧 Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
# Web build
npm run build

# Android build
npm run build:android

# iOS build
npm run build:ios
```

## 📱 Demo

For a quick demo without setup, open:
```
public/demo.html
```

This provides a complete, working demo of the entire application.

## 🔗 Backend Integration

When your backend is ready, update the API calls in the screens to connect to your actual endpoints. The app is structured to easily integrate with any REST API.

## 🎨 Design System

The app uses a consistent design system:
- **Primary Color:** #3498db (Blue)
- **Success Color:** #27ae60 (Green)
- **Warning Color:** #f39c12 (Orange)
- **Danger Color:** #e74c3c (Red)
- **Typography:** System fonts for native feel
- **Icons:** Emoji icons for universal compatibility

## 📞 Support

For questions or support, refer to the code documentation or contact the development team.

---

**Built with ❤️ using React Native**
