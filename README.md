# React Native Learning Hub 📱⚛️

**React Native Learning Hub** is an all-in-one interactive mobile application built to master React and React Native concepts from ground zero to production-ready skills and technical interview preparation.

---

## 🌟 Key Highlights & Features

- **🎨 Modern Developer Dark Theme**: Crafted with a sleek dark aesthetic (`#20232a`), linear gradient accent borders, and responsive 2-column card grid for mobile and tablet screens.
- **💻 IDE-Grade Code Syntax Highlighting**: Custom built-in tokenizer for JavaScript & JSX snippets featuring VSCode Dark / One Dark Pro syntax coloring (`#c678dd`, `#61afef`, `#98c379`, `#e5c07b`) with IDE window headers.
- **⚡ Interactive Live Playgrounds**: Hands-on interactive widgets (Flexbox customizer, Live Hook counters, memoized value calculation) to test React concepts dynamically.
- **🏷️ Topic Categorization & Filtering**: Filter topics on the fly by category pills (**Fundamentals**, **Hooks & State**, **UI & Nav**, **Practice**) or search queries.
- **🗂️ Streamlined Drawer Sidebar**: Categorized navigation drawer organized into clean section headers for seamless cross-topic navigation.
- **🎯 Interview Q&A & Quiz Engine**: Technical interview preparation modules and interactive quiz tests to validate learning progress.
- **📊 Observability & Analytics**: Integrated [Langfuse](https://langfuse.com/) screen tracking and action tracing.

---

## 📚 Covered Learning Topics

| Category | Topics Included |
| :--- | :--- |
| **🚀 Fundamentals** | `JSX`, `Components`, `Props`, `LifeCycle`, `React Native APIs` |
| **⚡ Hooks & State** | `State Management`, `Hooks`, `Advanced Hooks` |
| **🎨 UI & Navigation** | `Styling`, `Navigation` |
| **🏎️ Practice & Test** | `Performance`, `Interview Questions`, `Quiz & Test` |

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Expo SDK 54](https://expo.dev/) & [React Native 0.81](https://reactnative.dev/)
- **Core**: [React 19](https://react.dev/) & [Redux](https://redux.js.org/)
- **Navigation**: [React Navigation 7](https://reactnavigation.org/) (Drawer & Stack)
- **Styling**: Vanilla React Native StyleSheet + [NativeWind / Tailwind CSS](https://www.nativewind.dev/) + [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- **Icons**: [@expo/vector-icons](https://icons.expo.fyi/) (FontAwesome, MaterialCommunityIcons, FontAwesome6)
- **Observability**: `@langfuse/tracing`

---

## 📁 Project Structure

```text
ReactNativeApp/
├── assets/                  # App images and splash assets
├── components/              # Shared UI Design System
│   └── ui/
│       ├── Badge.js         # Number & level badges
│       ├── Card.js          # Gradient accent cards & touch items
│       ├── CodeBlock.js     # Syntax highlighting code container
│       ├── ScreenContainer.js # Common layout wrapper & headers
│       └── SearchBar.js     # Focus glow search input
├── data/                    # Quiz & Interview datasets
├── screens/                 # Topic & navigation screens
│   ├── HomeScreen.js        # Main category grid & filter tabs
│   ├── AppNavigator.js      # Navigation configuration
│   ├── CoreComponentsScreen.js
│   ├── HooksScreen.js       # Interactive hook playground
│   ├── StylingScreen.js     # Interactive Flexbox playground
│   ├── PerformanceScreen.js # Optimization & virtualization
│   └── ...                  # Additional topic screens
├── utils/
│   └── langfuse.js          # Langfuse analytics client
├── App.js                   # Entry component & Drawer setup
├── app.json                 # Expo configuration
└── package.json             # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with [Expo CLI](https://docs.expo.dev/get-started/installation/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ReactNativeApp.git
   cd ReactNativeApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### Running on Devices / Emulators

- **Expo Go (Mobile)**: Scan the QR code from the Expo CLI output using the **Expo Go** app on iOS or Android.
- **Android Emulator**:
  ```bash
  npm run android
  ```
- **iOS Simulator** (macOS only):
  ```bash
  npm run ios
  ```
- **Web Browser**:
  ```bash
  npm run web
  ```

---

## 📄 License

This project is licensed under the ISC License.
