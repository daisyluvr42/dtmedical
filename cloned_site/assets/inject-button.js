(function () {
    function injectButton() {
        // Locate the target section (the grid with 4 features)
        const grids = document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-2.gap-8');

        // Loop through grids to find the one with the specific text to be safe
        let targetGrid = null;
        grids.forEach(grid => {
            if (grid.textContent.includes("Standardized Content Delivery") && !grid.dataset.buttonAdded) {
                targetGrid = grid;
            }
        });

        if (targetGrid) {
            // Mark as added to prevent duplicates
            targetGrid.dataset.buttonAdded = "true";

            // Create the button container
            const btnContainer = document.createElement('div');
            btnContainer.className = "flex justify-center mt-12";

            // Create the button
            const link = document.createElement('a');
            link.href = "/ccbt-app/"; // Link to the Next.js app
            link.className = "bg-white text-[#25AFFA] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-200";
            link.innerText = "Free Trial";

            btnContainer.appendChild(link);

            // Insert after the grid
            targetGrid.parentNode.insertBefore(btnContainer, targetGrid.nextSibling);

            console.log("CCBT Button Injected Successfully");
        }
    }

    // Run on load and also retry periodically for SPA navigation
    window.addEventListener('load', injectButton);
    setInterval(injectButton, 1000); // Check every second is simple for SPA
})();
