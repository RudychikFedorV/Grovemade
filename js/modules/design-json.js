export function initializeDesignJson() {
  document.addEventListener("DOMContentLoaded", function () {
    fetch("./json/design.json")
      .then((response) => response.json())
      .then((data) => {
        const blocksContainer = document.getElementById("design-blocks");
        blocksContainer.innerHTML = "";

        data.blocks.forEach((block) => {
          const blockLink = document.createElement("a");
          blockLink.href = block.link;
          blockLink.className = "design__block";
          blockLink.setAttribute("aria-level", "block img info");

          const img = document.createElement("img");
          img.src = block.image;
          img.alt = "";
          img.className = "design__block-img";

          const title = document.createElement("h2");
          title.className = "design__block-title";
          title.textContent = block.title;

          const desc = document.createElement("p");
          desc.className = "design__block-desc";
          desc.textContent = block.desc;

          blockLink.appendChild(img);
          blockLink.appendChild(title);
          blockLink.appendChild(desc);
          blocksContainer.appendChild(blockLink);
        });
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  });
}
