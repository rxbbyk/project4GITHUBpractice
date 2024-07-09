window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
const xhr = new XMLHttpRequest();
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

xhr.responseType = "json";
xhr.addEventListener("load", responseReceivedHandler);
xhr.open("GET", url);
xhr.send();

}

function responseReceivedHandler() {
   const quotesDiv = document.querySelector("#quotes");
   quotesDiv.innerHTML = "";

   if (this.status === 200) {
      const quotes = this.response;

      if (Array.isArray(quotes)) { // Corrected typo in isArray check
         const ol = document.createElement("ol");

         quotes.forEach(quoteObj => {
            const li = document.createElement("li");
            li.textContent = `${quoteObj.quote} - ${quoteObj.source}`;
            ol.appendChild(li);
         });

         quotesDiv.appendChild(ol);
      } else {
         quotesDiv.textContent = this.response.error;
      }
   } else {
      quotesDiv.textContent = `Error: ${this.status} - ${this.statusText}`;
   }
}
