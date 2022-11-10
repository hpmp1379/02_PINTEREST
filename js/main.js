window.addEventListener("load", () => {
  const iso = new Isotope("section", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".btns > li"); //선택된 li들을 변수에

  for (let elem of filterBtn) {
    //배열 filterBtn의 아이템(갯수) 만큼 반복
    elem.addEventListener("click", (e) => {
      e.preventDefault(); //자동 작동 방지

      //click을 할때마다 각 아이템(버튼)에 반복
      for (let elem of filterBtn) {
        //on클라스 없애줌
        elem.classList.remove("on");
      }

      //클릭한 버튼에 클라스 넣어줌
      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안에 속석 href의 value값을 가져온다
      const filtering = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filtering }); //버튼을 누르면 필터링 작동(플러그인)
    });
  }

  //각 article클리하면
  const items = document.querySelectorAll("article"); //각 article들을 변수에
  const pop = document.querySelector("#popup");

  for (const aa of items) {
    aa.addEventListener("click", (e) => {
      const winWidth = document.body.clientWidth;
      console.log(winWidth);

      if (winWidth > 767) {
        //화면 너비가 767pxp 보다 컸을때만 적용

        // 클릭한 article img의 src값, h2, p를 변수에 저장
        const img = e.currentTarget.querySelector("img").getAttribute("src");
        const title = e.currentTarget.querySelector("h2").innerText;
        const desc = e.currentTarget.querySelector("p").innerText;

        //pop에 위에 변수를 적용
        pop.querySelector("img").setAttribute("src", img);
        pop.querySelector("h2").innerText = title;
        pop.querySelector("p").innerText = desc;

        //pop에 위의 변수를 적용
        pop.classList.add("on");
      }
    });
  }

  // popup 창을 클릭하면 pop이 사라짐
  pop.addEventListener("click", () => {
    pop.classList.remove("on");
  });
});
