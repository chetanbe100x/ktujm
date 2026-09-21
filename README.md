# Kushabhau Thakre University of Journalism and Mass Communication (KTUJM)
## Official Web Portal & .NET 8.0 MVC Application

This repository contains the web portal redesign prototype for **Kushabhau Thakre Patrakarita Avam Jansanchar Vishwavidyalaya (KTUJM), Raipur** ([https://ktujm.ac.in/](https://ktujm.ac.in/)), inspired by Haridev Joshi University of Journalism and Mass Communication ([https://hju.ac.in/index_en.html](https://hju.ac.in/index_en.html) and [https://hju.ac.in/index.html](https://hju.ac.in/index.html)).

---

## 🚀 Key Features

1. **Dual Execution Environments**:
   - **Native .NET 8.0 ASP.NET Core MVC**: Ready for Visual Studio. Zero npm, node, or frontend build tool requirements for .NET developers.
   - **Standalone Static HTML**: Standalone `index_en.html` and `index.html` runnable directly in any browser or static web server.
2. **Exact HJU Structure Replica**:
   - Top Header Bar with SBI Collect Pay Online, Webmail, ERP Login, Social links, and Bilingual language toggle.
   - Sticky Navigation Bar with comprehensive dropdown menus for Academics, Administration, Admissions, Events, and Announcements.
   - Top Marquee for latest admissions and examination schedules.
   - Hero Slideshow Banner with smooth carousel transitions.
   - Leadership quote cards (`testimony-wrap`) featuring Hon'ble Governor Shri Ramen Deka and Vice-Chancellor Prof. Manoj Dayal.
   - Pool Area 1: About the University under Chhattisgarh State Legislature Act 24 of 2004.
   - Tabbed Programmes Area (`business_expert_area`) with PG Diploma, Graduation, Post Graduation, and Research (Ph.D.).
   - Pool Area 2: Central Media Library.
   - Distinguished Faculty profile cards.
   - Media Conclave & Webinar video embed
   - 3-Column Responsive Footer (Important Links, Media Links, Queries & Contact).
   - Interactive Admission Inquiry Modal with course auto-selection.

---

## 💻 Running the .NET 8.0 Solution in Visual Studio

### Option A: Using Visual Studio (2022 / 2025)
1. Double-click **`KtujmWeb.sln`** to open the solution in Visual Studio.
2. Ensure the active startup project is set to **`KtujmWeb`**.
3. Press **F5** (or **Ctrl + F5**) to launch IIS Express / Kestrel.
4. The application will open automatically in your default browser.

### Option B: Using .NET CLI
```bash
dotnet restore
dotnet build
dotnet run
```

### URL Routes:
- `https://localhost:port/` or `/en` -> English Homepage
- `https://localhost:port/index_en.html` -> English Copy Version matching `https://hju.ac.in/index_en.html`
- `https://localhost:port/hindi` or `/index.html` -> Hindi Homepage matching `https://hju.ac.in/index.html`

---

## 🌐 Opening the Standalone HTML Version

If you do not have .NET installed or wish to preview directly in a web browser:
- Open **`index_en.html`** or **`wwwroot/index_en.html`** in Chrome, Edge, or Firefox for the English version.
- Open **`wwwroot/index.html`** for the Hindi version.
- Switching languages via the top header dropdown automatically toggles between `index_en.html` and `index.html`.

---

## 📁 Repository Structure

```
d:\Experiments_Projects\ktujm/
├── KtujmWeb.sln                     # Visual Studio Solution File
├── KtujmWeb.csproj                  # .NET 8.0 Web SDK project
├── Program.cs                       # ASP.NET Core routing & static file pipeline
├── appsettings.json                 # University metadata & configuration
├── Controllers/
│   └── HomeController.cs            # MVC controller handling English, Hindi, and Inquiries
├── Models/
│   └── HomeViewModel.cs             # Strongly typed C# models for Leadership, Programs, Faculty
├── Views/
│   ├── _ViewStart.cshtml
│   ├── _ViewImports.cshtml
│   ├── Shared/
│   │   └── _Layout.cshtml           # Master layout with top bar, navbar, modals, and footer
│   └── Home/
│       ├── Index.cshtml             # English Razor View matching HJU index_en.html
│       └── Hindi.cshtml             # Hindi Razor View matching HJU index.html
├── wwwroot/                         # Precompiled static root served by ASP.NET Core
│   ├── css/site.css                 # Standalone CSS bundle
│   ├── js/site.js                   # Vanilla JS for tabs, modal, language toggle
│   ├── index_en.html                # Standalone English copy matching HJU index_en
│   └── index.html                   # Standalone Hindi copy matching HJU index
├── index_en.html                    # Root English copy version
├── vercel.json                      # Vercel deployment configuration
└── README.md
```

---

## ☁️ Vercel Deployment

This repository is integrated with Vercel:
- Pushing to GitHub `git@github.com:chetanbe100x/ktujm.git` automatically triggers the build.
- Live English copy URL: `https://ktujm.vercel.app/index_en.html`
- Live Hindi copy URL: `https://ktujm.vercel.app/`
