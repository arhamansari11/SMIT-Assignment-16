alert ('Press "Local Storage" to clear local storage.');

// Toggle Function

// function toggleElements(elementIds) {
//     let result = document.getElementById('result');
//     let signUp = document.getElementById('addUser');
//     let logIn = document.getElementById('loginForm');
//     let table = document.getElementById('table');
//     let delUser = document.getElementById('deleteUser');
//     let update = document.getElementById('updateForm');

//     for (let elementId of elementIds) {
//         let element = document.getElementById(elementId);
//         if (element.classList.contains('hidden')) {
//             element.classList.remove('hidden');
//             result.classList.add('hidden');
//         } else {
//             element.classList.add('hidden');
//             result.classList.remove('hidden');
//         }
//     }
// }


function toggle() {
    let result = document.getElementById('result');
    let signUp = document.getElementById('addUser');
    let logIn = document.getElementById('loginForm');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');

    if (signUp.classList.contains('hidden')) {
        signUp.classList.remove('hidden');
        logIn.classList.add('hidden');
        result.classList.add('hidden');
        delUser.classList.add('hidden');
        table.classList.add('hidden');
    } else {
        signUp.classList.add('hidden');
        logIn.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle1() {
    let result = document.getElementById('result');
    let logIn = document.getElementById('loginForm');
    let signUp = document.getElementById('addUser');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');
    let update = document.getElementById('updateForm');
    

    if (logIn.classList.contains('hidden')) {
        logIn.classList.remove('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        result.classList.add('hidden');
        delUser.classList.add('hidden');
        update.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        update.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle2(){
    let result = document.getElementById('result');
    let logIn = document.getElementById('loginForm');
    let signUp = document.getElementById('addUser');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');
    let update = document.getElementById('updateForm');

    if (table.classList.contains('hidden')) {
        table.classList.remove('hidden');
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.add('hidden');
        update.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        update.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle3(){
    let result = document.getElementById('result');
    let signUp = document.getElementById('addUser');
    let logIn = document.getElementById('loginForm');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');
    let update = document.getElementById('updateForm');
    
    if (delUser.classList.contains('hidden')) {
      delUser.classList.remove('hidden');
      signUp.classList.add('hidden');
      logIn.classList.add('hidden');
      result.classList.add('hidden');
      table.classList.add('hidden');
      update.classList.add('hidden');
    } else {
      signUp.classList.add('hidden');
      logIn.classList.add('hidden');
      table.classList.add('hidden');
      delUser.classList.add('hidden');
      update.classList.add('hidden');
      result.classList.remove('hidden');
    }
}

function toggle4() {
    let result = document.getElementById('result');
    let logIn = document.getElementById('loginForm');
    let signUp = document.getElementById('addUser');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');
    let update = document.getElementById('updateForm');

    if (update.classList.contains('hidden')) {
        update.classList.remove('hidden');
        table.classList.add('hidden');
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        update.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle5() {
    toggle1();
    let logInButton = document.getElementById('logInButton');
    let logOutButton = document.getElementById('logOutButton');

    if (logInButton.classList.contains('hidden')){
        logInButton.classList.remove('hidden');
        logOutButton.classList.add('hidden');
    }
}

function toggle6() {
    let logInButton = document.getElementById('logInButton');
    let logOutButton = document.getElementById('logOutButton');

    if (logOutButton.classList.contains('hidden')){
        logOutButton.classList.remove('hidden');
        logInButton.classList.add('hidden');
    }
}

function clearAll() {
    localStorage.clear();
}
                            // Local Storage
// Function to generate a random User ID
function generateUserID() {
  const characters = '0123456789';
  const length = 4;
  let userID = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.random() * characters.length;
    userID += characters.charAt(randomIndex);
  }

  return userID;
}

// Function to save user data to local storage
function save() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userID = generateUserID();

    let user = {
        id: userID,
        name: name,
        address: address,
        email: email,
        password: password
    };

    let users = localStorage.getItem('users');
    if (!users) {
        users = [];
    } else {
        users = JSON.parse(users);
    }

    users.push(user);
    alert('Add User Successfully.');

    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Function to update the table with user data from local storage
function generateList() {
    let tableBody = document.querySelector('#table tbody');

    tableBody.innerHTML = '';

    let users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
        alert("Please add the user's data.");
        return;
    };

    users.forEach(function(user, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });

        toggle2();
};

// Function to delete a user by User ID
function deleteUser() {
    let userId = document.getElementById('userId').value;
    let users = JSON.parse(localStorage.getItem('users'));
    let userIndex = users.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        alert('User Deleted Successfully.');
    } else{
        alert('Please Enter Correct User ID.');
    }
  
    localStorage.setItem('users', JSON.stringify(users));
  
    document.getElementById('userId').value = '';
}


function login() {
    let email = document.getElementById('emailL').value;
    let password = document.getElementById('passwordL').value;
    let users = JSON.parse(localStorage.getItem('users'));
    let userEmail = users.findIndex(user => user.email === email);
    let userPassword = users.findIndex(user => user.password === password);
  
    if (userEmail !== -1 && userPassword !== -1) {
        alert('Login Successful!');
        toggle4();
        toggle6();
    } else {
      alert('Invalid email or password. Please try again.');
    }

    document.getElementById('emailL').value = '';
    document.getElementById('passwordL').value = '';
} 


function update() {
    let userId = document.getElementById('userIdU').value;
    let name = document.getElementById('nameU').value;
    let city = document.getElementById('addressU').value;
    let email = document.getElementById('emailU').value;
    let password = document.getElementById('passwordU').value;

    let users = JSON.parse(localStorage.getItem('users'));
    let userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
        users[userIndex].name = name;
        users[userIndex].address = city;
        users[userIndex].email = email;
        users[userIndex].password = password;
    }

    localStorage.setItem('users', JSON.stringify(users));
    alert('Updation Complete.');

    document.getElementById('userIdU').value = '';
    document.getElementById('nameU').value = '';
    document.getElementById('addressU').value = '';
    document.getElementById('emailU').value = '';
    document.getElementById('passwordU').value = '';
};