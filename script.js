// Menyimpan postingan ke localStorage
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];

    // Buat elemen baru untuk postingan
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const textElement = document.createElement('p');
    textElement.textContent = postContent;
    postElement.appendChild(textElement);

    if (postImage) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(postImage);
        imageElement.alt = "Gambar Postingan";
        imageElement.classList.add('post-image');
        postElement.appendChild(imageElement);
    }

    // Tambahkan postingan ke container
    document.getElementById('postsContainer').appendChild(postElement);

    // Simpan postingan ke localStorage
    savePostToLocalStorage(postContent, postImage);

    // Kosongkan textarea dan input file setelah postingan ditambahkan
    document.getElementById('postContent').value = '';
    document.getElementById('postImage').value = '';
});

// Fungsi untuk menyimpan postingan ke localStorage
function savePostToLocalStorage(content, image) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ content: content, image: image ? URL.createObjectURL(image) : null });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Fungsi untuk memuat postingan dari localStorage saat halaman dimuat
function loadPostsFromLocalStorage() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const textElement = document.createElement('p');
        textElement.textContent = post.content;
        postElement.appendChild(textElement);

        if (post.image) {
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            imageElement.alt = "Gambar Postingan";
            imageElement.classList.add('post-image');
            postElement.appendChild(imageElement);
        }

        document.getElementById('postsContainer').appendChild(postElement);
    });
}

// Panggil fungsi untuk memuat postingan saat halaman dimuat
window.onload = loadPostsFromLocalStorage;
