document.addEventListener("DOMContentLoaded", () => {
    console.log("Atari Catalog Loaded!");

    const yearFilter = document.getElementById("yearFilter");
    const collectibleItems = document.querySelectorAll(".collectible-item");
    const modal = document.getElementById("detailsModal");
    const closeModal = document.querySelector(".close");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalItemCode = document.getElementById("modalItemCode");

    // Filter functionality
    yearFilter.addEventListener("change", () => {
        const selectedCategory = yearFilter.value;

        collectibleItems.forEach(item => {
            const itemCategory = item.getAttribute("data-year");

            if (selectedCategory === "all" || itemCategory === selectedCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Modal functionality
    collectibleItems.forEach(item => {
        const button = item.querySelector(".buy-button");
        button.addEventListener("click", () => {
            const imageSrc = item.querySelector("img").src;
            const title = item.querySelector("h3").textContent;
            const description = item.getAttribute("data-description"); // Get description from data attribute
            const price = item.querySelector(".price").textContent;
            const itemCode = item.getAttribute("data-item-code"); // Get item code from data attribute

            // Populate modal with data
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = `Description: ${description}`;
            modalPrice.textContent = `Price: ${price}`;
            modalItemCode.textContent = `Item Code: ${itemCode}`;

            // Display the modal
            modal.style.display = "block";
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});