function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   let distribution = [0, 0, 0, 0, 0];

   scoresArray.forEach(score => {
      let numericScore = parseInt(score);

      if (numericScore >= 90) {
         distribution[0]++;
      } else if (numericScore >= 80) {
         distribution[1]++;
      } else if (numericScore >= 70) {
         distribution[2]++;
      } else if (numericScore >= 60) {
         distribution[3]++;
      } else {
         distribution[4]++;
      }
   });

   return distribution;
}

function setTableContent(userInput) {
   let scoresArray = parseScores(userInput);
   let distributionArray = buildDistributionArray(scoresArray);

   let firstRow = document.getElementById("first-row");
   let thirdRow = document.getElementById("third-row");

   firstRow.innerHTML = "";
   thirdRow.innerHTML = "";

   distributionArray.forEach((count, index) => {
      let barCell = document.createElement("td");

      let barHeight = count * 10;

      let barDiv = document.createElement("div");
      barDiv.style.height = `${barHeight}px`;
      barDiv.classList.add(`bar${index}`);

      barCell.appendChild(barDiv);
      firstRow.appendChild(barCell);

   });

      for (let i = 0; i < 5; i++) {

      let countCell = document.createElement("td");
      countCell.textContent = distributionArray[i];

      thirdRow.appendChild(countCell);
   } 
   
}

// Test your function with different scores:
setTableContent("40 80 95 81 84 99 96 49");
