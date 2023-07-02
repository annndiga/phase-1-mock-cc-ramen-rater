// write your code here
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve elements from the HTML
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const ratingDisplay = document.getElementById("rating-display");
    const commentDisplay = document.getElementById("comment-display");
    const newRamenForm = document.getElementById("new-ramen");
  
    // Sample data for demonstration purposes
    let ramenData = [
      {
        id: 1,
        name: "Tonkotsu Ramen",
        restaurant: "Ramen Shop A",
        image: "https://img.freepik.com/premium-photo/bowl-ramen-with-hard-boiled-egg-top_919767-2.jpg?w=1480",
        rating: 9.5,
        comment: "Delicious and flavorful broth!",
      },
      {
        id: 2,
        name: "Shoyu Ramen",
        restaurant: "Ramen Shop B",
        image: "https://www.freepik.com/premium-photo/shoyu-ramen-noodle-with-pork-egg_9483881.htm",
        rating: 8.8,
        comment: "Noodles were perfectly cooked.",
      },
      // Add more ramen data as needed
    ];
  
    // Function to display ramen details
    function displayRamenDetails(index) {
      const ramen = ramenData[index];
      ramenDetail.innerHTML = `
        <img class="detail-image" src="${ramen.image}" alt="${ramen.name}" />
        <h2 class="name">${ramen.name}</h2>
        <h3 class="restaurant">${ramen.restaurant}</h3>
      `;
      ratingDisplay.textContent = ramen.rating;
      commentDisplay.textContent = ramen.comment;
    }
  
    // Function to display the ramen menu
    function displayRamenMenu() {
      ramenMenu.innerHTML = "";
      ramenData.forEach((ramen, index) => {
        const ramenItem = document.createElement("div");
        ramenItem.classList.add("ramen-item");
        ramenItem.innerHTML = `
          <img class="menu-image" src="${ramen.image}" alt="${ramen.name}" />
          <h4 class="menu-name">${ramen.name}</h4>
        `;
        // Add click event listener to display ramen details on click
        ramenItem.addEventListener("click", () => {
          displayRamenDetails(index);
        });
        ramenMenu.appendChild(ramenItem);
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
      const newName = document.getElementById("new-name").value;
      const newRestaurant = document.getElementById("new-restaurant").value;
      const newImage = document.getElementById("new-image").value;
      const newRating = document.getElementById("new-rating").value;
      const newComment = document.getElementById("new-comment").value;
  
      // Generate a unique ID for the new ramen entry
      const newId = ramenData.length > 0 ? ramenData[ramenData.length - 1].id + 1 : 1;
  
      const newRamen = {
        id: newId,
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      };
  
      // Add the new ramen to the data array
      ramenData.push(newRamen);
      displayRamenMenu();
      newRamenForm.reset();
    }
  
    // Function to handle deleting a ramen entry
    function handleDeleteRamen(id) {
    }
    });
      // Find the index of the ramen entry
      const index = ramenData.findIndex((ramen) => ramen.id === id);

    if (index !== -1) {
      // Remove the ramen entry from the data array
      ramenData.splice(index, 1);
      // Display the updated ramen menu
      displayRamenMenu();
      // Clear the ramen detail section if the deleted entry was displayed
      ramenDetail.innerHTML = "";
      ratingDisplay.textContent = "";
      commentDisplay.textContent = "";
    }
  }

  // Attach event listener to the new ramen form submission
  newRamenForm.addEventListener("submit", handleFormSubmit);

  // Display the initial ramen menu
  displayRamenMenu();
});