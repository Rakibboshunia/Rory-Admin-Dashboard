# Modern Dashboard Layout - React + Vite + Tailwind CSS

This project is a modern, responsive dashboard template built with React, Vite, and Tailwind CSS. It features a fixed sidebar, sticky header, and a clean dark theme.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   > **Note:** If you encounter permission issues on Windows, try running your terminal as Administrator or use `cmd` instead of PowerShell.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` to see the dashboard.

## 📁 Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Sidebar.jsx       # Navigation sidebar (desktop fixed, mobile drawer)
│       └── Header.jsx        # Top header (hamburger menu, profile, search)
├── layout/
│   └── DashboardLayout.jsx   # Main layout wrapper using Outlet
├── pages/
│   └── Home.jsx              # Default dashboard home page
├── router/
│   └── router.jsx            # Route definitions
├── App.jsx
└── main.jsx
```

## 🛠️ How to Customize

### 1. Add a New Page

Create a new component in the `src/pages` directory. For example, `src/pages/Users.jsx`.

```jsx
// src/pages/Users.jsx
export default function Users() {
  return <div className="p-4 text-white">Users Management Page</div>;
}
```

### 2. Add the Route

Update `src/router/router.jsx` to include your new page.

```jsx
import Users from "../pages/Users";

// ... inside the children array of DashboardLayout
children: [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
],
```

### 3. Update the Sidebar Link

Open `src/components/layout/Sidebar.jsx` and add the new link to the `navLinks` array.

```jsx
import { Users } from "lucide-react"; // Import an icon

const navLinks = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users }, // Add this line
  // ...
];
```

## 🎨 Theme & Styling

- **Tailwind CSS**: This project uses Tailwind CSS v4.
- **Colors**: The primary background color is `#0a1024` with sidebar/header using `#111B3C`.
- **Icons**: Icons are provided by `lucide-react`.

## 📜 License

This project is open-source and available for use in your personal or commercial projects.
