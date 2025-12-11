function toggleCategory(category) {
    const library = document.getElementById('library');
    const clubs = document.getElementById('clubs');
    if (category === 'library') {
        library.style.display = 'block';
        clubs.style.display = 'none';
    } else if (category === 'clubs') {
        library.style.display = 'none';
        clubs.style.display = 'block';
    }
}