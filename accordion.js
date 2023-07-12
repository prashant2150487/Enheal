const faqHeaders = document.querySelectorAll(".faqAccordion__header");
const faqContents = document.querySelectorAll(".faqAccordion__content");

gsap.set(faqContents, { height: 0 }); //contentは閉じておく
gsap.set(faqContents[0], { height: "auto" }); //1つ目だけ開いておく
faqHeaders[0].classList.add("is-active"); //1つ目のheaderにはis-activeをつけておく

faqHeaders.forEach((faqHeader) => {
  faqHeader.addEventListener("click", function () {
    let faqContent = faqHeader.nextElementSibling;
    //headerにis-activeがついていたら
    if (faqHeader.classList.contains("is-active")) {
      //その隣接するcontentを閉じて
      gsap.to(faqContent, { height: 0 });
      //is-activeを外す
      faqHeader.classList.remove("is-active");
    } else {
      const activeHeader = document.querySelector(
        ".faqAccordion__header.is-active"
      );
      let delay = 0;
      if (activeHeader) {
        gsap.to(activeHeader.nextElementSibling, { height: 0 });
        activeHeader.classList.remove("is-active");
        delay = 0.5;
      }
      gsap
        .timeline()
        .to(faqContent, { height: "auto", delay: delay })
        .add(() => {
          faqHeader.classList.add("is-active");
        }, "-=.5");
    }
  });
});
