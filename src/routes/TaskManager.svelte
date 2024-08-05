
   <script>
    import { onMount } from 'svelte';
    import { fetchTasks, addTask, deleteTask } from '../api';
    import TaskList from '../TaskList.svelte';
    import TaskForm from '../TaskForm.svelte';
    import { user } from '../stores/auth';
      
    let tasks = [];
    let currentUser;
    let token = localStorage.getItem('accessToken');
    let activeTab = 'add'; 
    
  
    $: {
      token = localStorage.getItem('accessToken');
      user.subscribe(value => {
        currentUser = value;
        loadTasks();
      });
    }
    
    const loadTasks = async () => {
        console.log("token",token);
      if (token) {
        try {
          const data = await fetchTasks(token);
          console.log("Fetched tasks:", data);
          tasks = data.data || [];
        } catch (error) {
          console.error('Failed to load tasks:', error);
        }
      }
    };
    
    const handleAddTask = async (event) => {
      const { title } = event.detail;
      if (token && title) {
        try {
          await addTask({ title }, token);
          await loadTasks();
        } catch (error) {
          console.error('Failed to add task:', error);
        }
      }
    };
    
    const handleDeleteTask = async (id) => {
      if (token) {
        try {
          await deleteTask(id, token);
          await loadTasks();
        } catch (error) {
          console.error('Failed to delete task:', error);
        }
      }
    };
    
    const setActiveTab =async  (tab) => {
      activeTab = tab;
      await loadTasks();
    };
  </script>
  
  <main class="p-12 bg-gray-100 min-h-screen">
    <div class="flex justify-center mb-4">
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button 
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 mr-4"
          class:selected={activeTab === 'add'} 
          on:click={() => setActiveTab('add')}
        >
          Add Task
        </button>
        <button 
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
          class:selected={activeTab === 'list'} 
          on:click={() => setActiveTab('list')}
        >
          Task List
        </button>
      </div>
    </div>
    
    {#if activeTab === 'add'}
      <TaskForm on:add={handleAddTask} />
    {:else if activeTab === 'list'}
      {#if tasks.length > 0}
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      {:else}
        <p class="text-center text-gray-600">No tasks available.</p>
      {/if}
    {/if}
  </main>
  
  <style>
    main {
      max-width: 800px;
      margin: 0 auto;
    }
  
    button.selected {
      background-color: #007bff;
      color: white;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  