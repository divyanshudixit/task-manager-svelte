  <script>
    export let tasks = [];
    export let onDelete = (id) => {
        console.log(`Task with id ${id} will be deleted.`);
    };

    const handleDelete = (id) => {
        onDelete(id);
    };
</script>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">Title</th>
                <th scope="col" class="py-3 px-6">Description</th>
                <th scope="col" class="py-3 px-6">Status</th>
                <th scope="col" class="py-3 px-6">Due Date</th>
                <th scope="col" class="py-3 px-6">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each tasks as task (task.id)}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6">{task.title}</td>
                <td class="py-4 px-6">{task.description}</td>
                <td class="py-4 px-6">{task.status}</td>
                <td class="py-4 px-6">{task.due_date}</td>
                <td class="py-4 px-6">
                    <button 
                        class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                        on:click={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
