<script>import "./app.css";
  import { onMount } from 'svelte';
  import { user, isAuthenticated,getTokens } from './stores/auth';
  import TaskManager from './routes/TaskManager.svelte';
  import Login from './components/Login.svelte';
  import Logout from './components/Logout.svelte';

  
  let currentUser;
  let isLoggedIn = false;
  
  $: {
    isLoggedIn = $isAuthenticated;
    currentUser = $user;
  }
  
  onMount(() => {
  
  });</script>
  
  <main>
    {#if isLoggedIn}
      <Logout></Logout>
      <TaskManager></TaskManager>
    {:else}
      <Login></Login>
    {/if}
  </main>
  
  
  <style>
    main {
      padding: 1em;
    }
  </style>
  