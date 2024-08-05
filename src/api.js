const API_URL = 'http://localhost:8055'; 
const token = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('accessToken');
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};

export const logoutUser = async () => {
    if (!refreshToken) {
        console.error('No refresh token found');
        return;
      }
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
      });
      if (response.ok) {
       
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
       
      } else {
        const error = await response.json();
        console.error('Logout failed:', error.message);
      }
};

export const fetchTasks = async (token) => {
    
  const response = await fetch(`${API_URL}/items/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const addTask = async (task, token) => {
  const response = await fetch(`${API_URL}/items/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id, token) => {

  await fetch(`${API_URL}/items/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


