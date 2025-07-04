<template>
  <div>
    <h1 style="text-color: red;">Welcome to Homepage</h1>
    <p>This is the main content of the homepage.</p>
    <div>
      Lets connect to the api <button type="button" @click="getWelcomeMessage()" id="welcome-api">API</button>
    </div>
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

<script setup>
  // import { definePageMeta } from './node_modules/nuxt/dist/pages/runtime/composables';

  // definePageMeta({
  //   title: 'Homepage',
  //   meta: [
  //     { name: 'description', content: 'Welcome to the homepage of our website.' },
  //     { name: 'keywords', content: 'homepage, welcome, website' }
  //   ],
  //   middleware: 'auth',
  // });

  const config = useRuntimeConfig();

  const getWelcomeMessage = async () => {
    try {
      const response = await $fetch.raw(config.public.apiUrl + '/welcome', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // You can add more options here if needed
      });
      console.log('Response:', response);

      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }

      alert(`Welcome ` + response._data.user.name + `!\nYou logged in at ` + response._data.timestamp);
    } catch (error) {
      console.error('Error fetching welcome message:', error);
    }
  };
</script>