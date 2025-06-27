# 🌿 Plant Pulse

**Live Site**: [https://plant-pulse.netlify.app/](https://plant-pulse.netlify.app/)  
🌙 *Dark mode highly recommended for the best visual experience!*

Plant Pulse is a full-featured plant management application that allows users to explore, add, and manage plants. Built from scratch with modern tools and technologies, this project is both user-friendly and visually engaging.

---

**Server Side repo**: [https://github.com/Mysterio-O/plant-pulse-server](https://github.com/Mysterio-O/plant-pulse-server)

## 🚀 Features Overview

## Dashboard
- added account switching option in dashboard
- many more functionalities

### 🔝 Navbar

- Displays **logo**, **site name**, and **navigation links**:
  - `Home`
  - `All Plants`
  - `Add Plants` (🔒 Private)
  - `My Plants` (🔒 Private)
- **Auth-Based UI**:
  - If not logged in: Shows `Register` and `Login` buttons.
  - If logged in: Shows `Logout` button and **profile picture** with tooltip (name + email).
  - `Logout` triggers a **confirmation modal**.
- 🌗 **Theme Toggle** button available for light/dark mode switching.

---

### 🔐 Auth Section

- Visually appealing `Login` and `Register` pages with engaging backgrounds.
- Seamless toggle between login and registration with a single click.

---

### 🖼️ Banner

- Carousel implemented with **Swiper.js**.
- Auto-slide every **3 seconds**.
- Smooth and eye-catching transitions.

---

### 🌱 Explore New Collections

- Displays **dynamically added plants** from users around the world.
- Each card includes:
  - Plant image
  - Name
  - Some other small details
  - `View Details` button (🔒 Private route)
- Hover effects for an interactive UI.

---

### 🧪 Plant Care Tips

- Animated section offering valuable tips for plant growers.
- 🌟 Hover to see interactive animations and effects.

---

### 🧠 Fascinating Plant Facts

- Marquee-style section with **looping plant facts**.
- Visually stunning in **dark mode**.
- Great way to learn while scrolling.

---

### 🍂 Seasonal Plant Picks

- Cards for **seasonal plants** with hover effects.
- Each card has an `Explore` button that triggers a **modal** showing more details.
- Built using **JSON dummy data**.

---

### 🦶 Footer

- Includes:
  - Website name
  - `Explore` links
  - Copyright
  - Social media icons (open in new tab)
  - Newsletter `Subscribe` section
- Smooth scroll for in-page navigation to:
  - New Plants
  - Care Tips

---

## 📊 All Plants Section

- Displays all added plants in a **table view**.
- Includes key plant information and `Details` button (🔒 Private route).
- **Sort functionality** based on:
  - Last watering date
  - Next watering date

---

## ➕ Add Plants Section

- User-friendly **form** to submit plant data.
- Auto-filled fields for:
  - Logged-in user’s name (non-editable)
  - Email (non-editable)
- Shows **success alert** upon submission.
- You can also add plant from **Banner** on a slider i have implanted add plant option.

---

## 🌿 My Plants Section (🔒 Private Route)

- Shows only the plants added by the current user.
- Features:
  - `View Details` (navigates to detail page)
  - `Delete Plant` (with confirmation modal delete the item)
  - `Edit Plant` (pre-filled update form)
- Smooth animations powered by **Lottie-react**.

---

## 🧰 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI
- **Routing**: React Router
- **Authentication**: Firebase Auth
- **Animations**: Lottie-react, Swiper.js, SweetAlert2
- **Backend**: Express.js, MongoDB, CORS, dotenv
- **Others**: React Icons, React Tooltip, (AI tools like ChatGPT, Grok to get design idea's)
---

## 🧑‍💻 Final Thoughts

Building Plant Pulse from the ground up was an incredible journey filled with learning and creativity. Hope you enjoy using it as much as I enjoyed building it!


##
- **Added to public repo**