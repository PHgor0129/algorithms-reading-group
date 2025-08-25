fetch("schedule.json")
  .then(res => res.json())
  .then(schedule => {
    const container = document.getElementById("content");

    Object.entries(schedule).forEach(([term, talks]) => {
      const termHeader = document.createElement("h2");
      termHeader.textContent = term;
      container.appendChild(termHeader);

      talks.forEach(talk => {
        const card = document.createElement("div");
        card.className = "talk-card";

        card.innerHTML = `
          <div class="talk-date">${talk.date}</div>
          <div class="talk-title"><a href="${talk.link}" target="_blank">${talk.title}</a></div>
          <div class="talk-authors"><strong>Authors:</strong> ${talk.authors}</div>
          <div class="talk-presenter"><strong>Presenter:</strong> ${talk.presenter}</div>
        `;

        container.appendChild(card);
      });
    });
  });