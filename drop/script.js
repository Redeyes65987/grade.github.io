function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const file = fileInput.files[0];
    if (!file) {
        fileList.innerHTML = '<p class="error">請選擇一個文件。</p>';
        return;
    }
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.textContent = file.name;
    listItem.appendChild(link);

    fileList.appendChild(listItem);
}