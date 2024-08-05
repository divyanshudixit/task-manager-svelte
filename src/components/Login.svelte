   <script>
    import { user, isAuthenticated } from '../stores/auth';
    import { loginUser } from '../api';
    
    let email = '';
    let password = '';
    let error = '';
    
    const handleLogin = async () => {
      const response = await loginUser(email, password);
      console.log("response", response);
      
      if (response.data) {
        user.set(response.data.user);
        isAuthenticated.set(true);
        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('refreshToken', response.data.refresh_token);
      } else {
        error = response.errors ? response.errors[0].message : 'Login failed';
      }
    };
  </script>
  
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form on:submit|preventDefault={handleLogin} class="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Login</h2>
  
      <div class="mb-4">
        <label for="email" class="block text-gray-700 mb-2">Email:</label>
        <input id="email" type="email" bind:value={email} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
  
      <div class="mb-6">
        <label for="password" class="block text-gray-700 mb-2">Password:</label>
        <input id="password" type="password" bind:value={password} class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
  
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
        Login
      </button>
  
      {#if error}
        <p class="mt-4 text-red-500 text-center">{error}</p>
      {/if}
    </form>
  </div>
  
  <style>
   
  </style>
  