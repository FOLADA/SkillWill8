function fetchAndDisplayPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            const postsContainer = document.getElementById('posts-container')
            postsContainer.innerHTML = ''

            data.forEach(post => {
                const postElement = document.createElement('div')
                postElement.className = 'post'
                postElement.innerHTML = `
                    <h2>Post ID: ${post.id}</h2>
                    <h3>User ID: ${post.userId}</h3>
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                `
                postsContainer.appendChild(postElement);
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        });
}
fetchAndDisplayPosts()
