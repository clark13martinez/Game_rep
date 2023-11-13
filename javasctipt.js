const wordsArray = [
  "Hydrogen",
  "Helium",
  "Lithium",

  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",

  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminum",
  "Silicon",

  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",

  "Titanium",

  "Chromium",

  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",

  "Krypton",

  "Zirconium",

  "Palladium",
  "Silver",
  "Gold",
  "Silver",

  "Lead",
  "Mercury",
  "Tin",
  "Aluminum",
  "Potassium",
  "Sodium",
  "Platinum",
  "Uranium",
  "Neon",

  "Iodine",
];

// You can continue this array to include more periodic table elements.

const imageSets = [
  {
    images: [
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREW9cVT4YoDr9Qg5PcZECeFfvCR_LGoVgEBw&usqp=CAU",
    ],
    correctWord: "oxygen",
  },
  {
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqAFZYfXI87Jyehy8hkzTxYiSc_pcEXjD1A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VmNt1wKxaJnLQf_yRmNVUEspo9-HlDGS_g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOmBeJ5TWqNR5RYN9hA0GdtfdQVNTAcs2A4K5foIyG7R5thM3pEy9Zimf-bwjsBBQ65U&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB1BiSNsYkyljqvL8i8FYrOI3g1ojPLjEiA&usqp=CAU",
    ],
    correctWord: "titanum",
  },
  // Add more image sets here
];

let currentSetIndex = Math.floor(Math.random() * wordsArray.length);

function loadImages() {
  let i = 0;
  const images = document.getElementById("images");
  const currentSet_arr = wordsArray[currentSetIndex];

  const image_pic = document.querySelectorAll("#image_pic");
  console.log(image_pic);
  fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${currentSet_arr}&per_page=4&client_id=E2oXfV1trMWHkGwoGLdOVoQpjS_TRT5nLe4t0NI9X44`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.results.forEach((element) => {
        image_pic[i].src = element.urls.regular;

        i++;
      });
      console.log(data.results[i]);
    })
    .catch((err) => {
      console.log(err);
    });
  // images.innerHTML = "";

  /*
  const currentSet = imageSets[currentSetIndex];


currentSet.images.forEach((imageSrc) => {
    image_pic[i].src = imageSrc;
    i++;

    /*
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Image";
    images.appendChild(img);
    
  }); */
}

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const result = document.getElementById("result");
  const userGuess = guessInput.value.toLowerCase();

  const currentSet_arr = wordsArray[currentSetIndex];

  const currentSet = imageSets[currentSetIndex];
  if (userGuess === currentSet_arr.toLowerCase()) {
    result.textContent = "Correct! You guessed the word.";
    guessInput.value = "";
    currentSetIndex = Math.floor(Math.random() * wordsArray.length);
    wordsArray.splice(currentSet_arr, 1);
    console.log(wordsArray);
    if (wordsArray.length > 0) {
      loadImages();
    } else {
      result.textContent = "Congratulations! You've completed all sets.";
    }
  } else {
    result.textContent = "Try again. Incorrect guess.";
  }
}

// Load the initial set of images
loadImages();

function showanswer() {
  const result = document.getElementById("result");
  const currentSet_arr = wordsArray[currentSetIndex];
  wordsArray.splice(currentSet_arr, 1);
  console.log(wordsArray);
  result.textContent = `The answer is ${currentSet_arr}, wait for the next question`;
  setTimeout(function () {
    loadImages();
    result.textContent = `Okay try your best again`;
  }, 2000);
  if (wordsArray.length <= 0) {
    result.textContent = `Congratulations you answer all 50 elements`;
  }
}
