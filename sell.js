document.getElementById("home").addEventListener("click", () => {
    const sellPage = 'index.html';
    window.open(sellPage, "_self");  // Opens the link in the same   tab
});

document.getElementById("cart").addEventListener("click", () => {
    const sellPage = 'cart.html';
    window.open(sellPage, "_self");  // Opens the link in the same tab
});

const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview');

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('highlight')
}

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files

  handleFiles(files)
}

// Handle file input click
fileInput.addEventListener('change', function() {
  handleFiles(this.files);
});

dropArea.addEventListener('click', function() {
  fileInput.click(); // Trigger the file input when the drop area is clicked
});

function handleFiles(files) {
  files = [...files]
  files.forEach(uploadFile) // A single file upload everytime
}


function uploadFile(file) {
  if (file.type.startsWith('image/')) {
    // Show the preview
    previewFile(file)  
    //uploadToServer(file)
  } else {
    alert("Please upload an image file.");
  }
}


function previewFile(file) {
  let reader = new FileReader()

  reader.onloadend = function() {
    previewImage.src = reader.result
    previewImage.style.display = 'block';
    previewImage.style.marginBottom = '50px';
  }

  // Convert to base64 data URL
  reader.readAsDataURL(file) 
}


/* function uploadToServer(file) {
  let formData = new FormData();
  formData.append("image", file);  // "image" is the field name on the server

  fetch('upload.php', { // Replace with your server-side upload endpoint
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Or response.text(), depending on server response
    } else {
      throw new Error('Upload failed: ' + response.status);
    }
  })
  .then(data => {
    console.log('Upload successful:', data); // Handle success
    // You could update the UI to indicate success
  })
  .catch(error => {
    console.error('Error uploading:', error);  // Handle errors
    // You could update the UI to show an error message
  });
} */