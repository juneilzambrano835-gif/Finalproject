document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Comment-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const comments = document.getElementById('comments').value;
            
            if (name && email && comments) {
                alert(`Thank you, ${name}! Your feedback has been submitted.`);
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});
