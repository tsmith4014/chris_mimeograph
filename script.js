document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blog-posts");

  // Load the HTML blog post
  fetch("posts/my-first-post.html")
    .then((response) => response.text())
    .then((html) => {
      const postElement = document.createElement("div");
      postElement.className = "blog-post"; // Style the post with CSS
      postElement.innerHTML = html;
      blogPostsContainer.appendChild(postElement);
    })
    .catch((error) => {
      // Handle any errors in fetching the HTML file
      console.error("Error fetching the HTML file:", error);
    });
});
