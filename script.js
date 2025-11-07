function volume_sphere(event) {
  // Prevent form from submitting/reloading page
  event.preventDefault();

  // Get input values
  const rad = parseFloat(document.getElementById("radius").value);
  const vol = document.getElementById("volume");

  // Validate input: must be a non-negative number
  if (isNaN(rad) || rad < 0) {
    vol.value = "NaN";
  } else {
    
    const volume = (4 / 3) * Math.PI * Math.pow(rad, 3);
    vol.value = volume.toFixed(4); // Round to 4 decimal places
  }

}


window.onload = function() {
  document.getElementById("MyForm").onsubmit = volume_sphere;
};
