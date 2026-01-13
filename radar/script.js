// Optional: Toggle "Read More" functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const post = button.previousElementSibling;
        if (post.style.maxHeight) {
            post.style.maxHeight = null;
            button.textContent = 'Read More';
        } else {
            post.style.maxHeight = post.scrollHeight + 'px';
            button.textContent = 'Read Less';
        }
    });
});
