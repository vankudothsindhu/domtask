function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to test it
fetchData();


async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to test it
fetchDataAsync();


async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Create a table
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        const headers = ['ID', 'Title', 'Body'];

        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.innerText = headerText;
            headerRow.appendChild(header);
        });

        data.forEach(post => {
            const row = table.insertRow();
            row.insertCell().innerText = post.id;
            row.insertCell().innerText = post.title;
            row.insertCell().innerText = post.body;
        });

        document.body.appendChild(table)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

// Call the function to test it
fetchAndDisplayData();


async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const posts = await response.json()
        console.log(posts)
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
}

// Call the function to test it
fetchPosts();