# 🚀 Citizen Engagement System (Citizen Connect)

### 🔗 [Live Demo of the App](https://ces-gkee.vercel.app/) – *Click here to access the live prototype*  
### 🔐 [Admin Login Panel](https://ces-gkee.vercel.app/login) – *Credentials already provided for quick test access*

---

## 📌 Overview

This MVP (Minimum Viable Product) is a **Citizen Engagement System** designed to improve how complaints and feedback on public services are submitted, routed, tracked, and resolved.

Currently, complaints are often managed through fragmented and inefficient systems. This solution streamlines the process, enhancing **usability, accountability, and response time** across government institutions.

---

## 🛠️ How It Works

The application follows a simple, effective **3-step workflow**:

1. **📝 Submission**  
   Citizens can submit a complaint or feedback by filling out a form. They must select the **appropriate agency** to route their submission accurately.

2. **📤 Review by Agency**  
   The selected government agency can view the complaint via an **admin dashboard** and respond accordingly.

3. **📈 Tracking & Notification**  
   - A **unique tracking ID** is generated for each submission.
   - Citizens can use this ID to **track the complaint's status** anytime.
   - When an agency **responds**, the citizen is **notified via email** and can view the response on the tracking page.

👉 **Try it out:** [Track Your Submission](https://ces-gkee.vercel.app/track)

---

## ⚙️ Tech Stack

- **Frontend**: [Vite + React.js](https://vitejs.dev/)
- **Backend API**: [Laravel](https://laravel.com/)
- **Deployment:** [Vercel](https://vercel.com)
- **Notifications**: Email alerts on response

---

## 👁️ App Screenshots

### 🏠 Home Page  
![Home](https://i.imgur.com/KyoYWcj.png)

### ℹ️ About Page  
![About](https://i.imgur.com/XxYDqJI.png)

### 📝 Submission Form  
![Submission Form](https://i.imgur.com/YUmSWaQ.png)

### 🔍 Track Complaint  
![Track Page](https://i.imgur.com/Dhr4NN7.png)

---

## 👩‍💼 Admin Dashboard Features

- **Dashboard Stats Overview**  
  View metrics on complaints, response rates, and agency performance.

- **Top Submissions by Agency**  
  See which agencies receive the most citizen feedback.

- **Submissions Table**  
  - Track each complaint’s **status**: Pending / Responded  
  - Admins can **Respond** to new complaints.  
  - Responses are stored and viewable later.

- **Agency Management**  
  Manage which agencies are available for routing complaints.

### 📊 Admin Dashboard  
![Dashboard](https://i.imgur.com/OJZdpJz.png)

### 📩 Admin Submissions View  
![Admin Submissions](https://i.imgur.com/O2I1KR5.png)

---

## 🔐 Admin Access

🔗 [Login as Admin](https://ces-gkee.vercel.app/login)  
✨ *Test credentials are prefilled for demo access*

---

## 📦 Deployment & Scalability

This MVP is designed for centralized use, where a single **Super Admin** still handles all incoming complaints. This simplifies initial deployment and testing. Which has to be updated for easier follow up.

The architecture is intentionally designed for **easy future expansion**, allowing:
- Addition of **multiple agency roles**
- **Authentication layers**
- **AI-based routing**
- External integrations like **SMS/email APIs** and **file storage**

---

## 🔭 Planned Future Enhancements

- ➕ **Agency-specific dashboards**
- ➕ **AI/NLP-assisted routing** based on complaint content
- ➕ **SMS notifications** for complaint updates
- ➕ **Citizen portal** to track all personal submissions together
- ➕ **Citizen feedback** follow up

---

## 🚀 Features Implemented So Far

- ✅ **Complaint submission** via web form
- ✅ **Basic routing** (citizen selects agency manually)
- ✅ **Super Admin dashboard** to view and manage all submissions
- ✅ **Status updates** and responses sent to citizens via email
- ✅ **Tracking** of complaints through email notifications

---

## ❌ Features Not Implemented Yet

- ❌ Multiple user roles (agency-specific admins)
- ❌ AI-assisted routing using NLP
- ❌ Citizen dashboard to view past submissions (But can be tracked using Ids sent on email)

### 🚀 [Live Deployed Version](https://ces-gkee.vercel.app/) – *Give it a try!*