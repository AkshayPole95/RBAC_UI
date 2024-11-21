// Sample Data
const usersData = [
    { id: 1, name: 'Akshay', email: 'akshayyy@gmail.com', status: 'active', role: 'Admin' },
    { id: 2, name: 'Anil', email: 'anilll@gmail.com', status: 'inactive', role: 'Editor' },
];

const rolesData = [
    { name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { name: 'Editor', permissions: ['Read', 'Write'] },
];

// Render Users
function renderUsers() {
    const usersTable = document.getElementById('users-table').querySelector('tbody');
    usersTable.innerHTML = '';
    usersData.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        usersTable.appendChild(row);
    });
}

// Render Roles
function renderRoles() {
    const rolesTable = document.getElementById('roles-table').querySelector('tbody');
    rolesTable.innerHTML = '';
    rolesData.forEach(role => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${role.name}</td>
            <td>${role.permissions.join(', ')}</td>
            <td>
                <button onclick="editRole('${role.name}')">Edit</button>
                <button onclick="deleteRole('${role.name}')">Delete</button>
            </td>
        `;
        rolesTable.appendChild(row);
    });
}

// Open User Form
function openUserForm() {
    document.getElementById('user-form-modal').style.display = 'flex';
    populateRoles();
}

// Open Role Form
function openRoleForm() {
    document.getElementById('role-form-modal').style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('user-form-modal').style.display = 'none';
    document.getElementById('role-form-modal').style.display = 'none';
}

// Add New User (simulated)
function addUser(userData) {
    usersData.push(userData);
    renderUsers();
}

// Add New Role (simulated)
function addRole(roleData) {
    rolesData.push(roleData);
    renderRoles();
}

// Delete User
function deleteUser(userId) {
    const index = usersData.findIndex(user => user.id === userId);
    if (index !== -1) {
        usersData.splice(index, 1);
        renderUsers();
    }
}

// Delete Role
function deleteRole(roleName) {
    const index = rolesData.findIndex(role => role.name === roleName);
    if (index !== -1) {
        rolesData.splice(index, 1);
        renderRoles();
    }
}

// Edit User (simulated)
function editUser(userId) {
    const user = usersData.find(user => user.id === userId);
    if (user) {
        // Fill the user form with existing data
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('status').value = user.status;
        document.getElementById('role').value = user.role;
        openUserForm();
    }
}

// Edit Role (simulated)
function editRole(roleName) {
    const role = rolesData.find(role => role.name === roleName);
    if (role) {
        // Fill the role form with existing data
        document.getElementById('role-name').value = role.name;
        document.getElementById('permissions').value = role.permissions.join(', ');
        openRoleForm();
    }
}

// Populate Roles in User Form
function populateRoles() {
    const roleSelect = document.getElementById('role');
    roleSelect.innerHTML = '<option value="">Select Role</option>';
    rolesData.forEach(role => {
        const option = document.createElement('option');
        option.value = role.name;
        option.textContent = role.name;
        roleSelect.appendChild(option);
    });
}

// Show the selected section (Users, Roles, Permissions)
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Simulate Server Delay
function simulateServerDelay(callback) {
    setTimeout(callback, 500);
}

// Initialize the Dashboard
window.onload = function() {
    showSection('users');
    renderUsers();
    renderRoles();
};
