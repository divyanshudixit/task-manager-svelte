   <script>
    import { createEventDispatcher } from 'svelte';
    import { addTask } from './api'; 
  
    let title = '';
    let description = '';
    let status = 'pending';
    let due_date = '';

  
    const dispatch = createEventDispatcher();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (title.trim() && description.trim() && due_date) {
        const task = { title, description, status, due_date };
        try {
          const token = localStorage.getItem('accessToken');
          const response = await addTask(task, token);
          console.log('Task added:', response);
        
          title = '';
          description = '';
          status = 'pending';
          due_date = '';
          dispatch('taskAdded', response); 
        } catch (error) {
          console.error('Error adding task:', error);
          
        }
      }
    };
  </script>
  
  <form on:submit={handleSubmit} class="flex flex-col space-y-12 max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
    <input 
      type="text" 
      placeholder="Title" 
      bind:value={title} 
      class="form-input block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
      required 
    />
    <textarea 
      placeholder="Description" 
      bind:value={description} 
      class="form-textarea block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
      required
    ></textarea>
    <select 
      bind:value={status} 
      class="form-select block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
    <input 
      type="date" 
      bind:value={due_date} 
      class="form-input block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
      required 
    />
    <button 
      type="submit" 
      class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Add Task
    </button>
  </form>
  