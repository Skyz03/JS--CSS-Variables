
# JS CSS--Variables

This project is the third JS-30 challenge where I learned about ```The Power of Root Variables```, ```ForEach Loop``` and ```Setting Property```.


## Demo

[Click Here](https://skyz03.github.io/JS--CSS-Variables/)

## Features

- Change of Spacing, Blurness & Color of Image As per input Element.
- The use ForEach Loop.
- Use of JS to change the variable Values.

## Lessons Learned

As this is one of the third JS challenge, here I understood about the creation of variables & use them to change as per needs.

```CREATION OF INPUT VALUES => SETTING THEM IN CSS VARIABLES => USING JS TO CHANGE IT AS PER NEED```.

```
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px; // The variables of the change
}

// These are declared with the variables means they are going to change into when input change.

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

function handleUpdate() {
  const suffix = this.dataset.sizing || '';  // This is getting the suffix for sizing i.e. px.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)  // This is setting the property as we are selecting the document property and changing its value as per we get from the input above.

  console.log(this.value);
}


// These are the codes that are lisiting to the change and updating the value by calling the function handleUpdate.
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
```

Here, the value of image is chaged as per the change in input values.

## Optimizations

Can implement this in many places ==> plus use of local storage I think.

## Screenshots


## Tech Stack

**Client:** HTML, CSS/SCSS & JS

## Documentation

Learned about first creation, of input values & creation of the color variables in the :root and then selecting everthing inputs from JS 
and adjusting as per the need of values in the in HTML like px and all.

# Notes 
