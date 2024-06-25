export function initializeWorkJson() {
    document.addEventListener("DOMContentLoaded", function () {
      fetch("./json/work.json")
        .then((response) => response.json())
        .then((data) => {
          const blocksContainer = document.getElementById("work-img");
          blocksContainer.innerHTML = "";
  
          data.blocks.forEach((block) => {
            const blockLink = document.createElement("a");
            blockLink.href = block.link;
            blockLink.className = "work__img";
            blockLink.setAttribute("aria-level", "block img info");
  
            const img = document.createElement("img");
            img.src = block.image;
            img.alt = "";
            img.className = "work__img-photo";
  
            blockLink.appendChild(img);
            blocksContainer.appendChild(blockLink);
            
          });
        })
        .catch((error) => console.error("Error loading data:", error));
    });
  }
  