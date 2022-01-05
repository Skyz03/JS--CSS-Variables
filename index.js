const inputs = document.querySelectorAll(".controls input");  //This is the selector for all the inputs.

function handleUpdate() {
  const suffix = this.dataset.sizing || '';  // This is getting the suffix for sizing i.e. px.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)  // This is setting the property as we are selecting the document property and changing its value as per we get from the input above.

  console.log(this.value);
}


// These are the codes that are lisiting to the change and updating the value by calling the function handleUpdate.
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));