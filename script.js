const graph = document.getElementById("graph");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const barHeight = (item.amount / 70) * 150; // Calculate height based on amount

      // Create bar div
      const barDiv = document.createElement("div");
      barDiv.classList.add("bar");

      // Create inner div for height<script src="script.js"></script>
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("innerBar"); // Correctly add class to innerDiv
      if (item.day === "wed") {
        innerDiv.classList.add(item.day);
      }
      innerDiv.style.height = `${barHeight}px`;

      const amount = document.createElement("div");
      amount.classList.add("amount");
      amount.textContent = `$${item.amount}`;

      // Create span for day label
      const daySpan = document.createElement("span");
      daySpan.textContent = item.day;

      // Append elements
      barDiv.appendChild(amount);
      barDiv.appendChild(innerDiv);
      barDiv.appendChild(daySpan);
      graph.appendChild(barDiv);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
