<template>
  <div>
    <h1 style="text-color: red;">Welcome to Homepage</h1>
    <p>This is the main content of the homepage.</p>
    <router-view></router-view>
    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
    <div class="footer-links">
      <a href="/about">About Us</a>
      <a href="/contact">Contact Us</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
      <a href="/help">Help</a>
    </div>
  </div>
</template>
