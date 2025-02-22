document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Ambil konten dari textarea
  const postContent = document.getElementById('postContent').value;

  // Ambil file gambar
  const postImage = document.getElementById('postImage').files[0];

  // Buat elemen baru untuk postingan
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Tambahkan konten teks
  const textElement = document.createElement('p');
  textElement.textContent = postContent;
  postElement.appendChild(textElement);

  // Jika ada gambar, buat elemen gambar
  if (postImage) {
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(postImage);
      imageElement.alt = "Gambar Postingan";
      imageElement.classList.add('post-image');
      postElement.appendChild(imageElement);
  }

  // Tambahkan postingan ke container
  document.getElementById('postsContainer').appendChild(postElement);

  // Kosongkan textarea dan input file setelah postingan ditambahkan
  document.getElementById('postContent').value = '';
  document.getElementById('postImage').value = '';
});
