<template>
    <q-layout view="lHr lpR lfr">
      <q-header class="bg-primary text-white header">
        <q-toolbar class="toolbar">
          <q-toolbar-title class="title">UAS PRAK PBK</q-toolbar-title>
          <q-tabs align="center">
            <q-route-tab to="/" label="Weather" />
            <q-route-tab to="/tasks" label="Tasks" />
          </q-tabs>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-footer class="bg-primary text-white footer">
        <q-toolbar class="toolbar">
          <q-toolbar-title class="title" align="center">
            Putri Sundari (223510788)
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .header {
    background-color: #4CAF50 !important;
    color: #FFF !important;
    animation: fadeInDown 1s ease-in-out;
  }
  
  .footer {
    background-color: #4CAF50 !important;
    color: #FFF !important;
    animation: fadeInUp 1s ease-in-out;
  }
  
  .toolbar {
    padding: 0 50px !important;
  }
  
  .title {
    padding-left: 20px !important;
    font-family: 'Arial', sans-serif;
  }
  
  .q-tab {
    align-items: center !important;
    padding: 0 25px !important;
    min-height: 75px !important;
    color: #FFF !important;
    transition: background-color 0.3s ease;
  }
  
  .q-tab:hover {
    background-color: #388E3C !important;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  