# 🚀 Big Bang Studio - AI App Builder

> Build full-stack web apps using natural language. No code, just ideas.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/big-bang-studio)
[![Powered by Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Built with Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)

**Live Demo:** https://bigbang-studio.vercel.app/

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **🤖 AI Code Generation** | Google Gemini 1.5 Flash se HTML/CSS/JS apps banao sirf prompt likh ke |
| **🔐 GitHub OAuth** | "Sign in with GitHub" - 1 click login |
| **📧 Email Auth** | Supabase Auth se Email/Password signup & login |
| **💾 Cloud Save** | Har project Supabase Postgres mein auto-save hota hai |
| **👤 User Profiles** | Login ke baad naam + avatar + logout dropdown |
| **📱 Mobile Ready** | Hamburger menu + responsive design |
| **📂 Project History** | "My Projects" sidebar mein sab purane projects |
| **⚡ Live Preview** | Code generate hote hi iframe mein result dekho |

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Vercel Serverless Functions |
| **AI Engine** | Google Gemini 1.5 Flash API |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth + GitHub OAuth |
| **Hosting** | Vercel |

---

## 📋 Database Schema

**Table: `projects`**

| Column | Type | Description |
| --- | --- | --- |
| `id` | `uuid` | Primary key, auto-generated |
| `user_id` | `uuid` | Foreign key to `auth.users` |
| `prompt` | `text` | User ka likha hua prompt |
| `code` | `text` | Gemini ka generated HTML/CSS/JS |
| `created_at` | `timestamptz` | Timestamp |

**Row Level Security (RLS) Enabled** ✅  
Users sirf apne projects dekh/insert kar sakte hain.

---

## 🚀 Quick Start - Local Setup

### **1. Clone Repository**
```bash
git clone https://github.com/your-username/big-bang-studio.git
cd big-bang-studio
