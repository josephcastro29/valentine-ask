document.addEventListener("DOMContentLoaded", () => {
    // ELEMENTS
    const envelope = document.getElementById("envelope");
    const envelopeContainer = document.getElementById("envelope-container");
    const letterContainer = document.getElementById("letter-container");
    const letterWindow = document.querySelector(".letter-window");
  
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    const title = document.getElementById("letter-title");
    const cat = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const nextWrapper = document.getElementById("next-wrapper");
  
    nextWrapper.style.display = "none";

    // SAFETY CHECK (optional but helpful)
    if (!envelope) {
      console.error("Envelope not found!");
      return;
    }
  
    // OPEN LETTER
    envelope.addEventListener("click", () => {
      envelopeContainer.style.display = "none";
      letterContainer.style.display = "flex";
  
      setTimeout(() => {
        letterWindow.classList.add("open");
      }, 100);
    });
  
    // NO BUTTON RUNS AWAY
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  
    // YES BUTTON
    yesBtn.addEventListener("click", () => {
      title.innerText = "Thank you for choosing me, even from afar.";
  
      cat.src = "love_cat.gif"; // MUST EXIST
      letterWindow.classList.add("final");
  
      buttons.style.display = "none";
      nextWrapper.style.display = "block";
    });
  
    // NEXT BUTTON
    nextBtn.addEventListener("click", () => {
      title.innerHTML = `
        Oo, mahirap magmahal nang ganito kalayo,<br>
        Ngunit distansya’y di hadlang<br>
        sa aking nararamdaman.<br>
        Ikaw ang aking ligaya, aking pangarap,<br>
        at aking walang hanggang pag-ibig.<br>
        Binibini kong marikit, Iya.<br>
      `;
  
      cat.src = "cat_dance.gif"; // MUST EXIST
      cat.classList.add("dance");
      nextWrapper.style.display = "none";
    });
  });
  

