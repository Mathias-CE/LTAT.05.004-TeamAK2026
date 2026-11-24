<script setup>
import FooterBar from './components/FooterBar.vue';
import HeaderBar from './components/HeaderBar.vue';

</script>

<template>
    <HeaderBar />
    <RouterView />
    <FooterBar />
</template>

<style>

body {
  margin: 0;
  display: block;
  background: #f4f4f4;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: none;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

header nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background: #d9d9d9;
  border-radius: 0 0 12px 12px;
}

header nav a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 8px;
}

header nav a:hover {
  background: #c4c4c4;
}

header nav a.router-link-exact-active {
  background: #8aa9db;
  color: white;
}

footer {
  margin-top: auto; 
  text-align: center;
  padding: 12px;
  background: #d9d9d9;
  border-radius: 12px 12px 0 0;
  color: #555;
  font-size: 14px;
}

footer p {
  margin: 4px 0;
}
</style>
