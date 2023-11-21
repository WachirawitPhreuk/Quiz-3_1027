window.onload = pageLoad;
function pageLoad(){
    document.getElementById("addData").onsubmit = clickAdd;

    document.getElementById("updateData").onsubmit = clickUpdate;
}

function clickUpdate(){
    const username = document.getElementById('updateData').elements['user'].value;
  const newPassword = document.getElementById('updateData').elements['password'].value;

  if (!username || !newPassword) {
    alert('Please enter both username and new password.');
    return false;
}
}