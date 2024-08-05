   <script>
    import { user, isAuthenticated } from '../stores/auth';
    import { logoutUser } from '../api';
    
    const handleLogout = async () => {
      await logoutUser();
      user.set(null);
      isAuthenticated.set(false);
    };
  </script>
  
  
    <button 
      on:click={handleLogout} 
      class="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200 mb-4"
    >
      Logout
    </button>

  