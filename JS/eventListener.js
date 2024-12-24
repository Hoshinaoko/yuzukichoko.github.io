//
//
// variable
//
guideMobileNavBox.style.background = `$linear-gradient-1`;
//
//
// function
const reflect = function () {
  fanguangFront.addEventListener("mousemove", (e) => {
    let percent = 100 - (e.offsetY / (0.5 * window.innerHeight)) * 100;
    fanguangBack.style.clipPath = `inset(0 0 ${percent}% 0)`;
  });
};

//container-0
const guideRainDefault = function () {
  for (var i = 0; i < guideMobileRainDrop.length; i++) {
    let skew = Math.floor(Math.random() * 6) + 12;
    guideMobileRainDrop[i].style.transform = `rotate(${skew}deg)`;
    guideMobileRainDrop[i].style.left = `${(i + 1) * 1.66}vw`;
    guideMobileRainDrop[i].style.top = `${Math.random() * 80}vh`;

    // console.log(guideMobileRainDrop[i].classList.top);
    guideMobileRainDropDrop[i].style.animationDelay = `${Math.random() * 4}s`;
  }
};
const guideMobileOpenCloseFuc = function () {
  guideMobile.style.opacity = `0`;
  guideMobileNavBox.style.transform = `translateX(100%)`;
  guide.style.filter = ``;
  if (window.innerWidth < 960) {
    guide.style.opacity = `1`;
  }

  guideMobileOpenClose.style.transform = `scale(0)`;
  guideMobileOpenClose.style.opacity = `0`;
};
const mobileMenu = function () {
  guideIconMenu.addEventListener("click", () => {
    guideMobile.style.opacity = `1`;
    guideMobileNavBox.style.transform = `translateX(0)`;
    guide.style.filter = `brightness(0.33) blur(4px)`;
    if (window.innerWidth < 960) {
      guide.style.opacity = `0`;
    }

    guideMobileOpenClose.style.transform = `scale(1)`;
    guideMobileOpenClose.style.opacity = `1`;
  });

  guideMobileOpenClose.addEventListener("click", () => {
    guideMobileOpenCloseFuc();
  });
};
//container-1
const jump = function (a, b, c, f, g) {
  numberList.forEach((e) => {
    e.classList.add("hidden");
  });
  a.addEventListener("click", () => {
    showList.forEach((e) => {
      e.classList.add("hidden");
    });
    b.classList.remove("hidden");
    numberList.forEach((e) => {
      e.classList.add("hidden");
    });
    f.classList.remove("hidden");

    musicListButtonImg.forEach((e) => {
      e.classList.remove("scale-s");
      e.classList.remove("blur-s");
    });
    c.classList.add("scale-s");
    c.classList.add("blur-s");

    musicListButtonFilter.forEach((e) => {
      e.classList.add("opacity");
    });
    g.classList.remove("opacity");

    containerOneMediaArrImg.forEach((e) => {
      e.classList.add("hidden");
      setTimeout(() => {
        e.classList.remove("hidden");
      }, 10);
    });
  });
};
const jumps = function () {
  jump(
    musicListButtonOne,
    showListOne,
    musicListButtonImg1,
    numberListOne,
    musicListButtonFilter1
  );
  jump(
    musicListButtonTwo,
    showListTwo,
    musicListButtonImg2,
    numberListTwo,
    musicListButtonFilter2
  );
  jump(
    musicListButtonThree,
    showListThree,
    musicListButtonImg3,
    numberListThree,
    musicListButtonFilter3
  );
  jump(
    musicListButtonFour,
    showListFour,
    musicListButtonImg4,
    numberListFour,
    musicListButtonFilter4
  );
  showList.forEach((e) => {
    e.classList.add("hidden");
  });
  numberList.forEach((e) => {
    e.classList.add("hidden");
  });
  showListOne.classList.remove("hidden");
  numberListOne.classList.remove("hidden");

  musicListButtonImg1.classList.add("scale-s");
  musicListButtonImg1.classList.add("blur-s");
  musicListButtonFilter1.classList.remove("opacity");
};
const containerOneAudio = function (a, b, c) {
  a.addEventListener("click", () => {
    b.play();
  });
  b.onplay = () => {
    c.style.opacity = "1";
  };
  b.onpause = () => {
    c.style.opacity = "0";
  };
};
const containerOneAudios = function () {
  containerOneAudioButtonImgText.forEach((e) => {
    e.style.opacity = "0";
  });
  containerOneAudio(
    containerOneAudioButtonOne,
    containerOneAudioButtonAudioOne,
    containerOneAudioButtonImgTextOne
  );
  containerOneAudio(
    containerOneAudioButtonTwo,
    containerOneAudioButtonAudioTwo,
    containerOneAudioButtonImgTextTwo
  );
  containerOneAudio(
    containerOneAudioButtonThree,
    containerOneAudioButtonAudioThree,
    containerOneAudioButtonImgTextThree
  );
};

//the most icon
const bgMusicPlay = function () {
  const playMusic = function () {
    backgroundmusic.classList.add("paused");
    backgroundmusic.play();
    iconLSvgOne.forEach((e) => {
      e.style.top = `150%`;
    });

    iconLSvgTwo.forEach((e) => {
      e.style.top = `50%`;
    });
    iconLSvgTwo.forEach((e) => {
      e.classList.add("iconLSvgTwo-animation");
    });
  };

  const pauseMusic = function () {
    backgroundmusic.classList.remove("paused");
    backgroundmusic.pause();
    iconLSvgOne.forEach((e) => {
      e.style.top = `50%`;
    });
    iconLSvgTwo.forEach((e) => {
      e.style.top = `-50%`;
    });
    iconLSvgTwo.forEach((e) => {
      e.classList.remove("iconLSvgTwo-animation");
    });
  };

  iconL.addEventListener("click", function () {
    const isMusicPlay = backgroundmusic.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
  });
};
const laSwitch = function () {
  const laSwitchCn = document.querySelector(".laSwitch-cn");
  const laSwitchJp = document.querySelector(".laSwitch-jp");
  const cn = document.querySelectorAll(".chinese");
  const jp = document.querySelectorAll(".japanese");

  laSwitchCn.addEventListener("click", () => {
    laSwitchCn.classList.add("hidden");
    laSwitchJp.classList.remove("hidden");
    cn.forEach((e) => e.classList.add("hidden"));
    jp.forEach((e) => e.classList.remove("hidden"));
  });
  laSwitchJp.addEventListener("click", () => {
    laSwitchJp.classList.add("hidden");
    laSwitchCn.classList.remove("hidden");
    cn.forEach((e) => e.classList.remove("hidden"));
    jp.forEach((e) => e.classList.add("hidden"));
    console.log("dd");
  });
};

//container-2

const switchScale = function () {
  container2BackgroundTop11.style.transitionDelay = `0s`;
  container2BackgroundTop21.style.transitionDelay = `0.6s`;
  container2BackgroundTop12.style.transitionDelay = `0s`;
  container2BackgroundTop22.style.transitionDelay = `0.6s`;
  container2BackgroundTop3.style.transitionDelay = `0.6s`;
  container2BackgroundTop11.classList.remove("no-visib");
  container2BackgroundTop12.classList.add("no-visib");
  container2BackgroundTop21.classList.remove("no-visib");
  container2BackgroundTop22.classList.add("no-visib");
  container2BackgroundTop11.style.clipPath = `inset(0 0 0 100%)`;
  container2BackgroundTop21.style.clipPath = `inset(0 0 0 0)`;
  container2BackgroundTop12.style.clipPath = `inset(0 100% 0 0)`;
  container2BackgroundTop22.style.clipPath = `inset(0 0 0 0)`;
  container2BackgroundTop3.classList.remove("opacity");

  container2BackgroundTotal.style.filter = `brightness(0.6)`;

  if (window.innerWidth > 1152) {
    containerTwoSwitch.forEach((e) => {
      e.style.width = "14vh";
      e.style.height = "34.3vh";
    });

    containerTwoSwitchImgImg.forEach((e) => {
      e.style.width = "63vh";
    });
    containerTwoSwitchTextOne.forEach((e) => {
      e.style.fontSize = "3vh";
    });
    containerTwoSwitchTextTwo.forEach((e) => {
      e.style.fontSize = "0.8vh";
    });
    containerTwoSwitchTextThree.forEach((e) => {
      e.style.fontSize = "1vh";
    });
    containerTwoSwitchTextFour.forEach((e) => {
      e.style.fontSize = "1vh";
    });
    containerTwoSwitchText.forEach((e) => {
      e.style.top = "80%";
      // e.style.left = "56%";
    });

    containerTwoSwitchsBox.style.width = "78vh";
    containerTwoSwitchsBox.style.height = "34.3vh";
    containerTwoSwitchsBox.style.bottom = "4rem";
    containerTwoSwitchsBox.style.left = "46vw";
  } else {
    containerTwoSwitch.forEach((e) => {
      e.style.width = "9.45vw";
      e.style.height = "23.1525vw";
    });

    containerTwoSwitchImgImg.forEach((e) => {
      e.style.width = "42.525vw";
    });
    containerTwoSwitchTextOne.forEach((e) => {
      e.style.fontSize = "2.835vw";
    });
    containerTwoSwitchTextTwo.forEach((e) => {
      e.style.fontSize = "0.756vw";
    });
    containerTwoSwitchTextThree.forEach((e) => {
      e.style.fontSize = "0.945vw";
    });
    containerTwoSwitchTextFour.forEach((e) => {
      e.style.fontSize = "0.945vw";
    });
    containerTwoSwitchText.forEach((e) => {
      e.style.top = "74%";
    });

    containerTwoSwitchsBox.style.width = "54.8vw";
    containerTwoSwitchsBox.style.height = "23.1525vw";
    containerTwoSwitchsBox.style.bottom = "4rem";
    containerTwoSwitchsBox.style.left = "44vw";
  }

  containerTwoSwitchs.style.transform = "translateX(25%)";
};
const switchScaleReserve = function () {
  container2BackgroundTop11.style.transitionDelay = `0.6s`;
  container2BackgroundTop21.style.transitionDelay = `0s`;
  container2BackgroundTop12.style.transitionDelay = `0.6s`;
  container2BackgroundTop22.style.transitionDelay = `0s`;
  container2BackgroundTop3.style.transitionDelay = `0s`;
  container2BackgroundTop12.classList.remove("no-visib");
  container2BackgroundTop11.classList.add("no-visib");
  container2BackgroundTop22.classList.remove("no-visib");
  container2BackgroundTop21.classList.add("no-visib");
  container2BackgroundTop11.style.clipPath = `inset(0 0 0 0)`;
  container2BackgroundTop21.style.clipPath = `inset(0 100% 0 0)`;
  container2BackgroundTop12.style.clipPath = `inset(0 0 0 0)`;
  container2BackgroundTop22.style.clipPath = `inset(0 0 0 100%)`;
  container2BackgroundTop3.classList.add("opacity");

  container2BackgroundTotal.style.filter = `brightness(0.8)`;

  if (window.innerWidth > 1152) {
    containerTwoSwitch.forEach((e) => {
      e.style.width = "20vh";
      e.style.height = "49vh";
    });

    containerTwoSwitchImgImg.forEach((e) => {
      e.style.width = "90vh";
    });
    containerTwoSwitchTextOne.forEach((e) => {
      e.style.fontSize = "6vh";
    });
    containerTwoSwitchTextTwo.forEach((e) => {
      e.style.fontSize = "1.6vh";
    });
    containerTwoSwitchTextThree.forEach((e) => {
      e.style.fontSize = "2vh";
    });
    containerTwoSwitchTextFour.forEach((e) => {
      e.style.fontSize = "2vh";
    });
    containerTwoSwitchText.forEach((e) => {
      e.style.top = "74%";
    });

    containerTwoSwitchsBox.style.width = "66vh";
    containerTwoSwitchsBox.style.height = "60vh";
    containerTwoSwitchsBox.style.bottom = "0";
    containerTwoSwitchsBox.style.left = "52vw";
  } else {
    containerTwoSwitch.forEach((e) => {
      e.style.width = "13.5vw";
      e.style.height = "33.075vw";
    });

    containerTwoSwitchImgImg.forEach((e) => {
      e.style.width = "60.75vw";
    });
    containerTwoSwitchTextOne.forEach((e) => {
      e.style.fontSize = "4.05vw";
    });
    containerTwoSwitchTextTwo.forEach((e) => {
      e.style.fontSize = "1.08vw";
    });
    containerTwoSwitchTextThree.forEach((e) => {
      e.style.fontSize = "1.35vw";
    });
    containerTwoSwitchTextFour.forEach((e) => {
      e.style.fontSize = "1.35vw";
    });
    containerTwoSwitchText.forEach((e) => {
      e.style.top = "74%";
    });

    containerTwoSwitchsBox.style.width = "44.55vw";
    containerTwoSwitchsBox.style.height = "40.6vw";
    containerTwoSwitchsBox.style.bottom = "0";
    containerTwoSwitchsBox.style.left = "48vw";
  }
  if (window.innerWidth > 800) {
    if (
      containerTwoSwitchsFilterOne.style.opacity == "0" ||
      containerTwoSwitchsFilterTwo.style.opacity == "0" ||
      containerTwoSwitchsFilterThree.style.opacity == "0"
    ) {
      containerTwoSwitchs.style.transform = "translateX(35%)";
    } else if (
      containerTwoSwitchsFilterFour.style.opacity == "0" ||
      containerTwoSwitchsFilterFive.style.opacity == "0" ||
      containerTwoSwitchsFilterSix.style.opacity == "0"
    ) {
      containerTwoSwitchs.style.transform = "translateX(5%)";
    } else {
      containerTwoSwitchs.style.transform = "translateX(-25%)";
    }

    containerTwoClothImg.forEach((e) => {
      e.style.transform = `translateX(0vh)`;
    });
  }
};

const charactorSwitch = function (a, b, c, d, e, f) {
  a.addEventListener("click", () => {
    containerTwoTextBox.forEach((e) => {
      e.classList.add("hidden");
    });
    containerTwoX.classList.remove("opacity");
    f.classList.remove("hidden");
    if (window.innerWidth > 800) {
      switchScale();
    }

    if (a == containerTwoSwitchSix || a == containerTwoSwitchSeven) {
      containerTwoSwitchs.style.transform = "translateX(-25%)";
    }
    b.forEach((e) => {
      e.style.opacity = `0`;
      e.style.transform = `translateX(4vh)`;
      e.classList.add("no-visib");
    });
    containerTwoSwitch.forEach(
      (e) => (e.style.backgroundColor = "rgb(102, 102, 102)")
    );
    containerTwoSwitchImg.forEach((e) => e.classList.add("img-left-move"));
    containerTwoSwitchsFilter.forEach((e) => (e.style.opacity = "1"));
    c.style.transform = `translateX(-6vh)`;
    c.style.opacity = `1`;

    c.classList.remove("no-visib");

    a.style.backgroundColor = "rgb(230, 88, 88)";
    d.classList.remove("img-left-move");
    e.style.opacity = "0";
  });
};
const charactorSwitchArr = function () {
  containerTwoArrLeft.addEventListener("click", () => {
    if (!containerTwoX.classList.contains("opacity")) {
      containerTwoSwitchs.style.transform = "translateX(25%)";
    }
    if (containerTwoSwitchs.style.transform == "translateX(-25%)") {
      containerTwoSwitchs.style.transform = "translateX(5%)";
    } else if (containerTwoSwitchs.style.transform == "translateX(5%)") {
      containerTwoSwitchs.style.transform = "translateX(35%)";
    }
  });

  containerTwoArrRight.addEventListener("click", () => {
    if (!containerTwoX.classList.contains("opacity")) {
      containerTwoSwitchs.style.transform = "translateX(-25%)";
    }
    if (containerTwoSwitchs.style.transform == "translateX(35%)") {
      containerTwoSwitchs.style.transform = "translateX(5%)";
    } else {
      containerTwoSwitchs.style.transform = "translateX(-25%)";
    }
  });
};

const charactorSwitchs = function () {
  containerTwoX.addEventListener("click", () => {
    containerTwoX.classList.add("opacity");
    containerTwoTextBox.forEach((e) => {
      e.classList.add("hidden");
    });
    if (window.innerWidth > 800) {
      switchScaleReserve();
    }
  });
  charactorSwitch(
    containerTwoSwitchOne,
    containerTwoClothImg,
    containerTwoClothImgOne,
    containerTwoSwitchImgOne,
    containerTwoSwitchsFilterOne,
    containerTwoTextBoxOne
  );
  charactorSwitch(
    containerTwoSwitchTwo,
    containerTwoClothImg,
    containerTwoClothImgTwo,
    containerTwoSwitchImgTwo,
    containerTwoSwitchsFilterTwo,
    containerTwoTextBoxTwo
  );
  charactorSwitch(
    containerTwoSwitchThree,
    containerTwoClothImg,
    containerTwoClothImgThree,
    containerTwoSwitchImgThree,
    containerTwoSwitchsFilterThree,
    containerTwoTextBoxThree
  );
  charactorSwitch(
    containerTwoSwitchFour,
    containerTwoClothImg,
    containerTwoClothImgFour,
    containerTwoSwitchImgFour,
    containerTwoSwitchsFilterFour,
    containerTwoTextBoxFour
  );
  charactorSwitch(
    containerTwoSwitchFive,
    containerTwoClothImg,
    containerTwoClothImgFive,
    containerTwoSwitchImgFive,
    containerTwoSwitchsFilterFive,
    containerTwoTextBoxFive
  );
  charactorSwitch(
    containerTwoSwitchSix,
    containerTwoClothImg,
    containerTwoClothImgSix,
    containerTwoSwitchImgSix,
    containerTwoSwitchsFilterSix,
    containerTwoTextBoxSix
  );
  charactorSwitch(
    containerTwoSwitchSeven,
    containerTwoClothImg,
    containerTwoClothImgSeven,
    containerTwoSwitchImgSeven,
    containerTwoSwitchsFilterSeven,
    containerTwoTextBoxSeven
  );
  charactorSwitchArr();
  if (window.innerWidth > 800) {
    containerTwoSwitchs.style.transform = "translateX(35%)";
  }

  containerTwoSwitchImg.forEach((e) => e.classList.add("img-left-move"));
  containerTwoSwitchsFilter.forEach((e) => (e.style.opacity = "1"));
  containerTwoClothImg.forEach((e) => e.classList.add("no-visib"));
  containerTwoClothImgOne.classList.remove("no-visib");
};

//container-3
const containerThreeButtonColorSwitch = function () {
  containerThree.addEventListener("pointermove", () => {
    containerThreeText.forEach((e) => {
      e.style.backgroundImage = ` linear-gradient(
          105deg,
          transparent 0%,
          transparent 50%,
          rgba(174, 59, 59, 0.482) 50%
        )`;

      if (e.classList.contains("container-3-text-active")) {
        e.style.boxShadow = `0.2rem 0.2rem 1rem rgba(189, 64, 64, 0.79)`;
      } else {
        e.style.boxShadow = ``;
      }
    });
  });

  containerThree.addEventListener("pointerout", () => {
    if (window.innerWidth < 641) {
      containerThreeText.forEach((e) => {
        e.style.backgroundImage = ` linear-gradient(
              105deg,
              transparent 0%,
              transparent 50%,
              rgba(59, 134, 174, 0.482) 50%
            )`;

        if (e.classList.contains("container-3-text-active")) {
          e.style.boxShadow = `0.2rem 0.2rem 1rem rgba(64, 133, 189, 0.79)`;
        } else {
          e.style.boxShadow = ``;
        }
      });
    }
  });
};

const containerThreeTextIconSwitch = function (a, b, c) {
  containerThreeTextIconSvg.forEach((n) => {
    n.classList.add("opacity");
  });

  // e.addEventListener("pointermove", () => {
  //   // e.classList.add("rotateY");
  //   b.forEach((n) => {
  //     n.classList.add("opacity");
  //   });
  //   c.forEach((n) => {
  //     n.classList.remove("opacity");
  //   });
  // });

  // e.addEventListener("pointerout", () => {
  //   if (!e.classList.contains("clicked")) {
  //     // e.classList.remove("rotateY");
  //     b.forEach((n) => {
  //       n.classList.remove("opacity");
  //     });
  //     c.forEach((n) => {
  //       n.classList.add("opacity");
  //     });
  //   }
  // });

  a.addEventListener("click", () => {
    // containerThreeTextIcon.forEach((n) => {
    //   n.classList.remove("clicked");
    // });
    a.classList.add("clicked");
    containerThreeTextIconImg.forEach((n) => {
      n.classList.remove("opacity");
    });
    containerThreeTextIconSvg.forEach((n) => {
      n.classList.add("opacity");
      n.style.transform = `rotate(-180deg) translate(-50%, -50%)`;
    });
    b.classList.add("opacity");

    c.classList.remove("opacity");
    c.style.transform = `rotate(0) translate(-50%, -50%)`;
  });
};
const containerThreeTextIconSwitchs = function () {
  containerThreeTextIconSwitch(
    containerThreeTextIconOne,
    containerThreeTextIconImgOne,
    containerThreeTextIconSvgOne
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconTwo,
    containerThreeTextIconImgTwo,
    containerThreeTextIconSvgTwo
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconThree,
    containerThreeTextIconImgThree,
    containerThreeTextIconSvgThree
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconFour,
    containerThreeTextIconImgFour,
    containerThreeTextIconSvgFour
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconFive,
    containerThreeTextIconImgFive,
    containerThreeTextIconSvgFive
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconSix,
    containerThreeTextIconImgSix,
    containerThreeTextIconSvgSix
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconSeven,
    containerThreeTextIconImgSeven,
    containerThreeTextIconSvgSeven
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconEight,
    containerThreeTextIconImgEight,
    containerThreeTextIconSvgEight
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconNine,
    containerThreeTextIconImgNine,
    containerThreeTextIconSvgNine
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconTen,
    containerThreeTextIconImgTen,
    containerThreeTextIconSvgTen
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconEleven,
    containerThreeTextIconImgEleven,
    containerThreeTextIconSvgEleven
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconTwelve,
    containerThreeTextIconImgTwelve,
    containerThreeTextIconSvgTwelve
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconThirteen,
    containerThreeTextIconImgThirteen,
    containerThreeTextIconSvgThirteen
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconFourteen,
    containerThreeTextIconImgFourteen,
    containerThreeTextIconSvgFourteen
  );
  containerThreeTextIconSwitch(
    containerThreeTextIconFifteen,
    containerThreeTextIconImgFifteen,
    containerThreeTextIconSvgFifteen
  );
};
const containerThreeSwitch = function (a, b, c, d, f) {
  containerThreeTexticons.forEach((e) => {
    e.classList.add("opacity");
  });
  a.addEventListener("pointermove", () => {
    f.classList.remove("opacity");
  });
  a.addEventListener("pointerout", () => {
    containerThreeTexticons.forEach((e) => {
      if (!e.classList.contains("clicked")) e.classList.add("opacity");
    });
  });
  a.addEventListener("click", () => {
    containerThreeText.forEach((e) => {
      e.classList.remove("container-3-text-active");
    });

    a.classList.add("container-3-text-active");

    containerThreeTexticons.forEach((e) => {
      e.classList.add("opacity");
      e.classList.remove("clicked");
    });
    f.classList.remove("opacity");
    f.classList.add("clicked");
    containerThreeImg.forEach((e) => {
      e.classList.add("hidden");
    });
    containerThreeImgsIntro.forEach((e) => {
      e.classList.add("hidden");
    });
    c.classList.remove("hidden");
    b.classList.remove("hidden");
    containerThreeImgsCoins.forEach((e) => {
      e.classList.add("hidden");
    });
    d.classList.remove("hidden");
  });
};
const containerThreeSwitchs = function () {
  // containerThreeButtonColorSwitch();
  containerThreeTextIconSwitchs();

  containerThreeSwitch(
    containerThreeTextOne,
    containerThreeImgOne,
    containerThreeImgsIntroOne,
    containerThreeImgsCoinsOne,
    containerThreeTextIconsOne
  );
  containerThreeSwitch(
    containerThreeTextTwo,
    containerThreeImgTwo,
    containerThreeImgsIntroTwo,
    containerThreeImgsCoinsTwo,
    containerThreeTextIconsTwo
  );
  containerThreeSwitch(
    containerThreeTextThree,
    containerThreeImgThree,
    containerThreeImgsIntroThree,
    containerThreeImgsCoinsThree,
    containerThreeTextIconsThree
  );
  containerThreeSwitch(
    containerThreeTextFour,
    containerThreeImgFour,
    containerThreeImgsIntroFour,
    containerThreeImgsCoinsFour,
    containerThreeTextIconsFour
  );
  containerThreeSwitch(
    containerThreeTextFive,
    containerThreeImgFive,
    containerThreeImgsIntroFive,
    containerThreeImgsCoinsFive,
    containerThreeTextIconsFive
  );
  containerThreeTextIconsOne.classList.remove("opacity");
  containerThreeTextIconsOne.classList.add("clicked");
  containerThreeTextOne.classList.add("container-3-text-active");
};

const containerThreeDetailCloses = function () {
  containerThreeDetailClose.forEach((e) => {
    e.addEventListener("click", () => {
      containerThreeDetailImg.forEach((e) => {
        e.style.top = `40%`;
        e.style.left = `6vw`;
        e.style.height = `18.8vw`;
        e.style.width = `33.8vw`;
      });
      containerThreeImg.forEach((e) => {
        e.style.opacity = `1`;
      });
      containerThreeDetailText.forEach((e) => {
        e.style.opacity = `0`;
        e.style.transform = `translateY(2vh)`;
      });
      containerThreeDetails.classList.add("no-visib");
      containerThreeDetails.style.opacity = `0`;

      scrollGuide.classList.remove("hidden");
    });
  });
};
const containerThreeDetailOpen = function (a, b, h) {
  a.addEventListener("click", () => {
    containerThreeDetails.classList.remove("no-visib");
    containerThreeDetails.style.opacity = `1`;
    containerThreeImg.forEach((e) => {
      e.style.opacity = `0`;
    });

    containerThreeDetail.forEach((e) => {
      e.classList.add("no-visib");
    });
    b.classList.remove("no-visib");

    h.forEach((e) => {
      e.style.opacity = `1`;
      e.style.transform = `translateY(-2vh)`;
    });
    if (window.innerWidth < 801) {
      containerThreeDetailImg.forEach((e) => {
        e.style.top = `30%`;
        e.style.left = `50%`;
        e.style.height = `1vw`;
        e.style.width = `56vw`;
      });
    } else {
      containerThreeDetailImg.forEach((e) => {
        e.style.top = `50%`;
        e.style.left = `16vw`;
        e.style.height = `28vw`;
        e.style.width = `28vw`;
      });
    }

    scrollGuide.classList.add("hidden");
  });
};
const containerThreeDetailButtonAnima = function () {
  containerThreeDetailButtonButton.forEach((e) => {
    e.addEventListener("pointermove", (a) => {
      e.style.border = `1px solid rgba(255, 255, 255, 0.4) `;

      percentTop = a.offsetY / (window.innerHeight * 0.04);
      percentleft = a.offsetX / (window.innerHeight * 0.16);

      // console.log(percentTop, `-${(1 - percentTop) * 14}`);
      containerThreeDetailButtonBgOne.forEach((n) => {
        if (percentleft < 0.4) {
          n.style.opacity = `0`;
        } else {
          n.style.opacity = `1`;
        }
        if (percentTop < 0.45) {
          n.style.top = `-${(1 - percentTop) * 14}vh`;
        } else {
          n.style.top = `2.6vh`;
        }
        n.style.left = `${percentleft * 12}vh`;
      });
      containerThreeDetailButtonBgTwo.forEach((n) => {
        if (percentleft > 0.6) {
          n.style.opacity = `0`;
        } else {
          n.style.opacity = `1`;
        }
        if (percentTop < 0.45) {
          n.style.top = `-${(1 - percentTop) * 14}vh`;
        } else {
          n.style.top = `2.6vh`;
        }

        n.style.left = `-${(1 - percentleft) * 12}vh`;
      });
    });
    e.addEventListener("pointerout", () => {
      e.style.border = `none `;
      containerThreeDetailButtonBgOne.forEach((n) => {
        n.style.top = `-11vh`;
        n.style.left = `12vh`;
        n.style.opacity = `1`;
      });
      containerThreeDetailButtonBgTwo.forEach((n) => {
        n.style.top = `0vh`;
        n.style.left = `-12vh`;
        n.style.opacity = `1`;
      });
      // containerThreeDetailButtonBgOne.forEach((n) => {
      //   n.style.top = `0vh`;
      //   n.style.left = `0vh`;
      // });
      // containerThreeDetailButtonBgTwo.forEach((n) => {
      //   n.style.top = `0vh`;
      //   n.style.left = `0vh`;
      // });
    });
  });
};

const containerThreeDetailShow = function () {
  containerThreeDetailButtonAnima();
  containerThreeDetailCloses();
  containerThreeDetailOpen(
    containerThreeTextIconThreeOne,
    containerThreeDetailOne,

    containerThreeDetailTextYi
  );
  containerThreeDetailOpen(
    containerThreeTextIconThreeTwo,
    containerThreeDetailTwo,

    containerThreeDetailTextEr
  );
  containerThreeDetailOpen(
    containerThreeTextIconThreeThree,
    containerThreeDetailThree,

    containerThreeDetailTextSan
  );
  containerThreeDetailOpen(
    containerThreeTextIconThreeFour,
    containerThreeDetailFour,

    containerThreeDetailTextSi
  );
  containerThreeDetailOpen(
    containerThreeTextIconThreeFive,
    containerThreeDetailFive,

    containerThreeDetailTextWu
  );
};

//container-4

const liveSwitch = function (a, b) {
  a.addEventListener("click", () => {
    container4MainRecommendVideos.classList.remove("hidden");

    container4MainRecommendTag.forEach((e) => {
      e.classList.remove("container-4-main-recommend-tag-active");
    });

    a.classList.add("container-4-main-recommend-tag-active");

    container4MainRecommendVideo.forEach((e) => {
      e.classList.add("hidden");
    });

    b.forEach((e) => {
      e.classList.remove("hidden");
    });

    a.classList.add("container-4-main-recommend-tag-active");
  });

  container4MainRecommendTag1.addEventListener("click", () => {
    container4MainRecommendVideos.classList.add("hidden");

    container4MainRecommendTag.forEach((e) => {
      e.classList.remove("container-4-main-recommend-tag-active");
    });

    container4MainRecommendTag1.classList.add(
      "container-4-main-recommend-tag-active"
    );

    container4MainRecommendVideo.forEach((e) => {
      e.classList.add("hidden");
    });

    container4MainRecommend1st.classList.remove("hidden");
  });
};

const liveSwitchs = function () {
  container4MainRecommendVideos.classList.add("hidden");

  container4MainRecommendTag1.classList.add(
    "container-4-main-recommend-tag-active"
  );

  liveSwitch(container4MainRecommendTag2, liaoli);
  liveSwitch(container4MainRecommendTag3, game);
  liveSwitch(container4MainRecommendTag4, gehua);
  liveSwitch(container4MainRecommendTag5, zatan);
  liveSwitch(container4MainRecommendTag6, gaozhi);
  liveSwitch(container4MainRecommendTag7, uichoko);
};

//container-5

const containerFiveTotal = function () {
  containerFiveBoxImgImg.forEach((e) => {
    if (window.innerWidth < 960) {
      e.src = e.getAttribute("data-src");
    }
  });

  containerFiveBox.forEach((e) => {
    e.addEventListener("click", () => {
      guideLineOne.style.opacity = `0`;
      guideLineOne.style.top = `666%`;

      guideNumber.classList.add("hidden");
    });
  });
  containerFiveCloses.forEach((e) => {
    e.addEventListener("click", () => {
      guideLineOne.style.opacity = `1`;
      guideLineOne.style.top = `560%`;

      // scrollGuide.classList.add("hidden");
      guideNumber.classList.remove("hidden");
    });
  });
};
// fes
const holoFesBgSwitch = function () {
  containerFiveFesImgBox.forEach((a) => {
    a.addEventListener("pointerout", (e) => {
      containerFiveFesBg.forEach((c) => {
        c.style.clipPath = ` ellipse(0 0 at 0 0)`;
      });
      console.log(e.offsetX, e.offsetY);
    });

    a.addEventListener("pointermove", (e) => {
      containerFiveFesBg.forEach((c) => {
        c.style.clipPath = `ellipse(160% 160% at 0 0)`;
      });
    });
  });
};
const holoFesswitch = function () {
  containerFiveFes.forEach((e) => {
    e.classList.add("hidden");
  });
  containerFiveFesOne.classList.remove("hidden");
  containerFiveFesTextBoxPageMoveOne.forEach((e) => {
    e.classList.add("hidden");
  });
  // containerFiveFesImgBox.forEach((e) => {
  //   e.classList.add("container-5-fes-imgBox-animation");
  // });
  // containerFiveFesTextBoxTitle.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-title-animation");
  // });
  // containerFiveFesTextBoxIntro.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-intro-animation");
  // });
  // containerFiveFesTextBoxTime.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-time-animation");
  // });
  // containerFiveFesTextBoxHolo.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-holo-animation");
  // });
  // containerFiveFesTextBoxKeywords.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-keywords-animation");
  // });
  // containerFiveFesTextBoxButtons.forEach((e) => {
  //   e.classList.add("container-5-fes-textBox-buttons-animation");
  // });

  const controlSwitch = function () {
    if (fesPage == 1) {
      containerFiveFesTextBoxPageMoveOne.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesOne.classList.remove("hidden");
    } else if (fesPage == 2) {
      containerFiveFesTextBoxPageMoveOne.forEach((e) => {
        e.classList.remove("hidden");
      });
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesTwo.classList.remove("hidden");
    } else if (fesPage == 3) {
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesThree.classList.remove("hidden");
    } else if (fesPage == 4) {
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesFour.classList.remove("hidden");
    } else if (fesPage == 5) {
      containerFiveFesTextBoxPageMoveTwo.forEach((e) => {
        e.classList.remove("hidden");
      });
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesFive.classList.remove("hidden");
    } else if (fesPage == 6) {
      containerFiveFesTextBoxPageMoveTwo.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFes.forEach((e) => {
        e.classList.add("hidden");
      });
      containerFiveFesSix.classList.remove("hidden");
    }
  };

  let fesPage = 1;
  containerFiveFesBgCanvas.classList.add("hidden");

  containerFiveFesTextBoxPageMoveOne.forEach((e) => {
    e.addEventListener("click", () => {
      fesPage -= 1;
      controlSwitch();
      return fesPage;
    });
  });

  containerFiveFesTextBoxPageMoveTwo.forEach((e) => {
    e.addEventListener("click", () => {
      fesPage += 1;
      controlSwitch();

      return fesPage;
    });
  });
};
const holoFesStartClose = function () {
  containerFiveFesCloses.addEventListener("click", () => {
    // scrollGuide.classList.remove("hidden");
    containerFiveTheater.classList.add("closed");
    containerFiveholoFes.style.clipPath = ` circle( 0 at 95% 16% )`;
    containerFiveFesBgCanvas.classList.add("hidden");
  });
  containerFiveBoxTwo.addEventListener("click", () => {
    // scrollGuide.classList.add("hidden");
    containerFiveholoFes.classList.remove("hidden");
    containerFiveTheater.classList.remove("closed");
    containerFiveholoFes.style.clipPath = ` circle( 160% )`;
    containerFiveFesBgCanvas.classList.remove("hidden");
  });
};

// ohayo
const containerFiveOhayoContentSwitch = function () {
  // containerFiveOhayoContentTwo.style.transform = `transform: translateX(-18vh)`;
  // containerFiveOhayoContentThree.style.transform = `transform: translateX(-36vh)`;
  // containerFiveOhayoContentFour.style.transform = `transform: translateX(-54vh)`;
  // containerFiveOhayoContentFive.style.transform = `transform: translateX(-72vh)`;
  // containerFiveOhayoContentSix.style.transform = `transform: translateX(-90vh)`;

  containerFiveOhayoContent.forEach((e) => {
    e.addEventListener("pointerout", () => {
      containerFiveOhayoContentTwo.style.transform = `translateX(-50%)`;
      containerFiveOhayoContentThree.style.transform = `translateX(-100%)`;
      containerFiveOhayoContentFour.style.transform = `translateX(-150%)`;
      containerFiveOhayoContentFive.style.transform = `translateX(-200%)`;
      containerFiveOhayoContentSix.style.transform = `translateX(-250%)`;

      containerFiveOhayoContentBackImg.forEach((e) => {
        e.style.backgroundPosition = `100% 0`;
      });
    });
  });

  containerFiveOhayoContentOne.addEventListener("pointermove", () => {
    containerFiveOhayoContentBackImgOne.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentTwo.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(0%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-240%)`;

    containerFiveOhayoContentBackImgTwo.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentThree.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-240%)`;

    containerFiveOhayoContentBackImgThree.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentFour.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-240%)`;

    containerFiveOhayoContentBackImgFour.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentFive.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-240%)`;

    containerFiveOhayoContentBackImgFive.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentSix.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-240%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-240%)`;

    containerFiveOhayoContentBackImgSix.style.backgroundPosition = `50% 0`;
  });
  containerFiveOhayoContentSeven.addEventListener("pointermove", () => {
    containerFiveOhayoContentTwo.style.transform = `translateX(-60%)`;
    containerFiveOhayoContentThree.style.transform = `translateX(-120%)`;
    containerFiveOhayoContentFour.style.transform = `translateX(-180%)`;
    containerFiveOhayoContentFive.style.transform = `translateX(-240%)`;
    containerFiveOhayoContentSix.style.transform = `translateX(-300%)`;

    containerFiveOhayoContentBackImgSeven.style.backgroundPosition = `50% 0`;
  });

  containerFiveOhayoContentOne.addEventListener("click", () => {
    containerFiveOhayoContentMiddleOne.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentTwo.addEventListener("click", () => {
    containerFiveOhayoContentMiddleTwo.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentThree.addEventListener("click", () => {
    containerFiveOhayoContentMiddleThree.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentFour.addEventListener("click", () => {
    containerFiveOhayoContentMiddleFour.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentFive.addEventListener("click", () => {
    containerFiveOhayoContentMiddleFive.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentSix.addEventListener("click", () => {
    containerFiveOhayoContentMiddleSix.style.clipPath = `circle(160% at 100% 100%)`;
  });
  containerFiveOhayoContentSeven.addEventListener("click", () => {
    containerFiveOhayoContentMiddleSeven.style.clipPath = `circle(160% at 100% 100%)`;
  });
};
const containerFiveOhayoClose = function () {
  containerFiveOhayoCloses.addEventListener("click", () => {
    // scrollGuide.classList.remove("hidden");
    containerFiveTheater.classList.add("closed");
    containerFiveOhayo.style.clipPath = ` circle( 0 at 95% 16% )`;
  });
  containerFiveBoxOne.addEventListener("click", () => {
    // scrollGuide.classList.add("hidden");
    containerFiveOhayo.classList.remove("hidden");
    containerFiveTheater.classList.remove("closed");
    containerFiveOhayo.style.clipPath = ` circle( 160% )`;
  });
};

// photos
const containerFivePhotosClose = function () {
  containerFivePhotosCloses.addEventListener("click", () => {
    // scrollGuide.classList.remove("hidden");
    containerFiveTheater.classList.add("closed");
    containerFivePhotos.style.clipPath = ` circle( 0 at 95% 16% )`;
  });
  containerFiveBoxThree.addEventListener("click", () => {
    // scrollGuide.classList.add("hidden");
    containerFivePhotos.classList.remove("hidden");
    containerFiveTheater.classList.remove("closed");
    containerFivePhotos.style.clipPath = ` circle( 160% )`;
  });
};

// theater
const containerFiveTheaterMainAnima = function () {
  containerFiveTheaterMainArrLeft.addEventListener("pointermove", () => {
    containerFiveTheaterMainArrLeft.classList.add(
      "container-5-theater-main-arr-left-animation"
    );
  });
  containerFiveTheaterMainArrLeft.addEventListener("pointerout", () => {
    containerFiveTheaterMainArrLeft.classList.remove(
      "container-5-theater-main-arr-left-animation"
    );
  });
  containerFiveTheaterMainArrRight.addEventListener("pointermove", () => {
    containerFiveTheaterMainArrRight.classList.add(
      "container-5-theater-main-arr-right-animation"
    );
  });
  containerFiveTheaterMainArrRight.addEventListener("pointerout", () => {
    containerFiveTheaterMainArrRight.classList.remove(
      "container-5-theater-main-arr-right-animation"
    );
  });
};
const containerFiveTheaterMainViewMoreAnima = function () {
  containerFiveTheaterMainViewMore.addEventListener("pointermove", () => {
    containerFiveTheaterMainViewMoreTextUnderlineTwo.forEach((e) => {
      e.classList.add("hidden-2");
    });
    containerFiveTheaterMainViewMoreTextUnderline.forEach((e) => {
      e.style.transform = `translateX(200%)`;
    });

    containerFiveTheaterMainViewMoreArr.classList.add(
      "container-5-theater-main-arr-right-animation"
    );
  });
  containerFiveTheaterMainViewMore.addEventListener("pointerout", () => {
    containerFiveTheaterMainViewMoreTextUnderlineTwo.forEach((e) => {
      e.classList.remove("hidden-2");
    });
    containerFiveTheaterMainViewMoreTextUnderline.forEach((e) => {
      e.style.transform = `translateX(0)`;
    });

    containerFiveTheaterMainViewMoreArr.classList.remove(
      "container-5-theater-main-arr-right-animation"
    );
  });
};

let containerFiveTheaterContentPage = 1;
let containerFiveTheaterContentLoopInterval;

const containerFiveTheaterContentPageSwitch = function () {
  if (containerFiveTheaterContentPage > 4) {
    containerFiveTheaterContentPage = 1;
  }
  if (containerFiveTheaterContentPage < 1) {
    containerFiveTheaterContentPage = 4;
  }
  if (containerFiveTheaterContentPage == 1) {
    containerFiveTheaterMainContents.style.left = `110vw`;
    containerFiveTheaterMainContent.forEach((e) => {
      e.classList.add("container-5-theater-content-scale");
      e.classList.remove("opacity");
    });
    containerFiveTheaterMainContent1.classList.remove(
      "container-5-theater-content-scale"
    );

    containerFiveTheaterMainNumber12.classList.add("hidden");
    containerFiveTheaterMainNumber13.classList.add("hidden");
    containerFiveTheaterMainNumber14.classList.add("hidden");
    containerFiveTheaterMainNumber11.classList.remove("hidden");
  } else if (containerFiveTheaterContentPage == 2) {
    containerFiveTheaterMainContents.style.left = `70vw`;
    containerFiveTheaterMainContent.forEach((e) => {
      e.classList.add("container-5-theater-content-scale");
      e.classList.remove("opacity");
    });
    containerFiveTheaterMainContent1.classList.add("opacity");
    containerFiveTheaterMainContent2.classList.remove(
      "container-5-theater-content-scale"
    );

    containerFiveTheaterMainNumber11.classList.add("hidden");
    containerFiveTheaterMainNumber13.classList.add("hidden");
    containerFiveTheaterMainNumber14.classList.add("hidden");
    containerFiveTheaterMainNumber12.classList.remove("hidden");
  } else if (containerFiveTheaterContentPage == 3) {
    containerFiveTheaterMainContents.style.left = `30vw`;
    containerFiveTheaterMainContent.forEach((e) => {
      e.classList.add("container-5-theater-content-scale");
      e.classList.remove("opacity");
    });
    containerFiveTheaterMainContent1.classList.add("opacity");
    containerFiveTheaterMainContent2.classList.add("opacity");
    containerFiveTheaterMainContent3.classList.remove(
      "container-5-theater-content-scale"
    );

    containerFiveTheaterMainNumber11.classList.add("hidden");
    containerFiveTheaterMainNumber12.classList.add("hidden");
    containerFiveTheaterMainNumber14.classList.add("hidden");
    containerFiveTheaterMainNumber13.classList.remove("hidden");
  } else if (containerFiveTheaterContentPage == 4) {
    containerFiveTheaterMainContents.style.left = `-10vw`;
    containerFiveTheaterMainContent.forEach((e) => {
      e.classList.add("container-5-theater-content-scale");
      e.classList.add("opacity");
    });
    containerFiveTheaterMainContent4.classList.remove("opacity");
    containerFiveTheaterMainContent4.classList.remove(
      "container-5-theater-content-scale"
    );

    containerFiveTheaterMainNumber11.classList.add("hidden");
    containerFiveTheaterMainNumber12.classList.add("hidden");
    containerFiveTheaterMainNumber13.classList.add("hidden");
    containerFiveTheaterMainNumber14.classList.remove("hidden");
  }
};
let containerFiveTheaterContentLoop = function () {
  containerFiveTheaterMainNumberTwoBlackCopy.classList.add("hidden");
  containerFiveTheaterMainNumberTwoBlack.style.clipPath = `inset(0 0 0 0)`;
  containerFiveTheaterContentPageSwitch();
  console.log(containerFiveTheaterContentPage);
  if (
    (containerFiveTheaterMainNumberTwoBlack.style.clipPath = `inset(0 0 0 0)`)
  ) {
    setTimeout(() => {
      containerFiveTheaterMainNumberTwoBlackCopy.classList.remove("hidden");
      containerFiveTheaterMainNumberTwoBlack.style.clipPath = `inset(0 100% 0 0)`;
    }, 3000);
    return (containerFiveTheaterContentPage += 1);
  }
};

const containerFiveTheaterContentLoopStart = function () {
  containerFiveTheaterContentPage = 1;
  containerFiveTheaterMainContents.style.left = `110vw`;
  containerFiveTheaterMainContent.forEach((e) => {
    e.classList.add("container-5-theater-content-scale");
  });
  containerFiveTheaterMainContent1.classList.remove(
    "container-5-theater-content-scale"
  );
  containerFiveTheaterContentLoopInterval = setInterval(() => {
    containerFiveTheaterContentLoop();
  }, 6000);

  containerFiveTheaterMainArrLeft.addEventListener("click", () => {
    containerFiveTheaterContentPage -= 1;
    containerFiveTheaterContentPageSwitch();
    return containerFiveTheaterContentPage;
  });
  containerFiveTheaterMainArrRight.addEventListener("click", () => {
    containerFiveTheaterContentPage += 1;
    containerFiveTheaterContentPageSwitch();
    return containerFiveTheaterContentPage;
  });
};
const containerFiveTheaterContentLoopStop = function () {
  clearInterval(containerFiveTheaterContentLoopInterval);
  containerFiveTheaterContentLoopInterval = null;
};

const containerFiveTheaterClose = function () {
  containerFiveTheaterCloses.addEventListener("click", () => {
    // scrollGuide.classList.remove("hidden");
    containerFiveTheater.classList.add("closed");
    containerFiveTheater.style.clipPath = ` circle( 0 at 95% 16% )`;
    containerFiveTheaterContentLoopStop();
  });
  containerFiveBoxFour.addEventListener("click", () => {
    // scrollGuide.classList.add("hidden");
    containerFiveTheater.classList.remove("hidden");
    containerFiveTheater.classList.remove("closed");
    containerFiveTheater.style.clipPath = ` circle( 160% )`;
    containerFiveTheaterContentLoopStart();
  });
};

const containerFiveTheaterContentHover = function (a, b, c, d) {
  a.addEventListener("pointermove", () => {
    d.classList.add("no-visib");
    c.classList.remove("no-visib");
    b.style.width = `106%`;
    c.style.clipPath = `inset(0 0 0 0)`;
    d.style.clipPath = `inset(0 0 0 0)`;
  });
  a.addEventListener("pointerout", () => {
    d.classList.remove("no-visib");
    c.classList.add("no-visib");
    b.style.width = `100%`;
    c.style.clipPath = `inset(0 100% 0 0)`;
    d.style.clipPath = `inset(0 0 0 100%)`;
  });
};
const containerFiveTheaterContentHovers = function () {
  containerFiveTheaterContentHover(
    containerFiveTheaterMainContent1,
    containerFiveTheaterMainContentImgBoxImg1,
    containerFiveTheaterMainContentTextBoxTitleUnderline1,
    containerFiveTheaterMainContentTextBoxTitleUnderline11
  );
  containerFiveTheaterContentHover(
    containerFiveTheaterMainContent2,
    containerFiveTheaterMainContentImgBoxImg2,
    containerFiveTheaterMainContentTextBoxTitleUnderline2,
    containerFiveTheaterMainContentTextBoxTitleUnderline21
  );
  containerFiveTheaterContentHover(
    containerFiveTheaterMainContent3,
    containerFiveTheaterMainContentImgBoxImg3,
    containerFiveTheaterMainContentTextBoxTitleUnderline3,
    containerFiveTheaterMainContentTextBoxTitleUnderline31
  );
  containerFiveTheaterContentHover(
    containerFiveTheaterMainContent4,
    containerFiveTheaterMainContentImgBoxImg4,
    containerFiveTheaterMainContentTextBoxTitleUnderline4,
    containerFiveTheaterMainContentTextBoxTitleUnderline41
  );
};

//total

const pagesMove = function () {
  let currentPage = 1;
  let beforePage = 1;
  navTextOne.forEach((e) => {
    e.style.color = `rgb(226, 186, 25)`;
  });
  containerZeroImg.forEach((e) => {
    e.classList.remove("hidden");
  });
  logoWhite.classList.remove("hidden");
  guideIconUiWhite.classList.remove("hidden");
  iconLSvgOneWhite.classList.remove("hidden");

  const navTextColorSwitch = function (a, b) {
    a.addEventListener("pointermove", () => {
      b.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });
    });
    a.addEventListener("pointerout", () => {
      if (currentPage == 1) {
        b.forEach((e) => {
          e.style.color = "white";
        });
        navTextOne.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      } else if (currentPage == 2) {
        b.forEach((e) => {
          e.style.color = "red";
        });
        navTextTwo.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      } else if (currentPage == 3) {
        b.forEach((e) => {
          e.style.color = "white";
        });
        navTextThree.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      } else if (currentPage == 4) {
        b.forEach((e) => {
          e.style.color = "white";
        });
        navTextFour.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      } else if (currentPage == 5) {
        b.forEach((e) => {
          e.style.color = "white";
        });
        navTextFive.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      } else if (currentPage == 6) {
        b.forEach((e) => {
          e.style.color = "white";
        });
        navTextSix.forEach((e) => {
          e.style.color = `rgb(226, 186, 25)`;
        });
      }
    });
  };
  const navTextColorSwitchs = function () {
    navTextColorSwitch(navOne, navTextOne);
    navTextColorSwitch(navTwo, navTextTwo);
    navTextColorSwitch(navThree, navTextThree);
    navTextColorSwitch(navFour, navTextFour);
    navTextColorSwitch(navFive, navTextFive);
    navTextColorSwitch(navSix, navTextSix);
  };

  const pageAnima = function () {
    container.forEach((e) => {
      e.classList.remove("working");
    });

    guideNumberSpan.forEach((e) => {
      e.classList.remove("guide-number-forwards-animation");
      setTimeout(() => {
        e.classList.add("guide-number-forwards-animation");
      }, 10);
    });

    if (currentPage != 1) {
      containerZeroImg.forEach((e) => {
        e.classList.add("hidden");
      });
      containerZeroTextBox.style.opacity = `0`;
      // containerZeroTextBox.style.top = `106%`;
      guideLineOne.style.opacity = `0`;
      guideLineOne.style.top = `666%`;
    }
    if (currentPage != 2) {
      setTimeout(() => {
        guideNumberSpanNoTitle.forEach((e) => {
          e.style.color = `white`;
        });
      }, 500);
    }
    if (currentPage != 3) {
      iconLSvgTwoRed.classList.remove("hidden");
      iconLSvgTwoWhite.classList.add("hidden");
    }
    if (
      currentPage != 2
      // && currentPage != 4
    ) {
      navText.forEach((e) => (e.style.color = "white"));
      logo.forEach((e) => {
        e.classList.add("hidden");
      });
      logoWhite.classList.remove("hidden");
      guideIconUi.forEach((e) => {
        e.classList.add("hidden");
      });
      guideIconUiWhite.classList.remove("hidden");
      iconLSvgOne.forEach((e) => {
        e.classList.add("hidden");
      });
      iconLSvgOneWhite.classList.remove("hidden");

      jpCn.forEach((e) => {
        e.classList.add("hidden");
      });
      jpCnWhite.classList.remove("hidden");
      cnJp.forEach((e) => {
        e.classList.add("hidden");
      });
      cnJpWhite.classList.remove("hidden");
    }

    if (currentPage != 5 && currentPage != 6) {
      scrollGuide.classList.remove("hidden");
    } else {
      scrollGuide.classList.add("hidden");
    }

    if (currentPage != 6) {
      footer.classList.add("translateY100");
      containerFive.style.transform = `translateY(0)`;
      guide.style.transform = `translateY(0)`;
    }

    if (currentPage == 1) {
      containerZero.classList.add("working");

      scrollGuide.style.left = "78%";
      scrollGuide.style.transform = "translateY(-10px)";
      containerZeroTextBox.style.opacity = `1`;
      // containerZeroTextBox.style.top = `88%`;
      guideLineOne.style.opacity = `1`;
      guideLineOne.style.top = `560%`;
      guideLineOne.style.height = `0.5px`;

      guideNumber.classList.remove("guide-number-backwards");
      guideNumber.classList.add("guide-number-forwards");

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-0)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-0)`;

      guideIconMenuLine.style.background = `white`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `01`;
        guideNumberSpan4.textContent = `INDEX`;

        guideNumber.style.top = `298%`;
        guideNumber.style.left = `92vw`;
      }, 500);

      containerZeroImg.forEach((e) => {
        e.classList.remove("hidden");
      });

      navTextOne.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });
    } else if (currentPage == 2) {
      containerOne.classList.add("working");
      // containerOne.classList.remove("hidden");

      scrollGuide.style.left = "90%";
      scrollGuide.style.transform = "translateY(22px)";

      guideIconMenuLine.style.background = `red`;

      if (beforePage == 1) {
        guideNumber.classList.remove("guide-number-forwards");
        guideNumber.classList.add("guide-number-backwards");
      } else {
        guideNumber.classList.remove("guide-number-backwards");
        guideNumber.classList.add("guide-number-forwards");
      }

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-1)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-1)`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `02`;
        guideNumberSpan4.textContent = `FAVORATE`;

        guideNumber.style.top = `170%`;
        guideNumber.style.left = `93vw`;

        guideNumberSpanNoTitle.forEach((e) => {
          e.style.color = `black`;
        });
      }, 500);

      navText.forEach((e) => (e.style.color = "red"));
      logo.forEach((e) => {
        e.classList.add("hidden");
      });
      logoRed.classList.remove("hidden");
      guideIconUi.forEach((e) => {
        e.classList.add("hidden");
      });
      guideIconUiRed.classList.remove("hidden");
      jpCn.forEach((e) => {
        e.classList.add("hidden");
      });
      jpCnRed.classList.remove("hidden");
      cnJp.forEach((e) => {
        e.classList.add("hidden");
      });
      cnJpRed.classList.remove("hidden");
      iconLSvgOne.forEach((e) => {
        e.classList.add("hidden");
      });
      iconLSvgOneRed.classList.remove("hidden");

      navTextTwo.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });
    } else if (currentPage == 3) {
      containerTwo.classList.add("working");
      // containerTwo.classList.remove("hidden");

      scrollGuide.style.left = "95%";
      scrollGuide.style.transform = "translateY(8px)";

      guideIconMenuLine.style.background = `white`;

      if (beforePage < 3) {
        guideNumber.classList.remove("guide-number-forwards");
        guideNumber.classList.add("guide-number-backwards");
      } else {
        guideNumber.classList.remove("guide-number-backwards");
        guideNumber.classList.add("guide-number-forwards");
      }

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-2)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-2)`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `03`;
        guideNumberSpan4.textContent = `ATTIRE`;

        guideNumber.style.top = `186%`;
        guideNumber.style.left = `93vw`;
      }, 500);

      navTextThree.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });

      iconLSvgTwoWhite.classList.remove("hidden");
      iconLSvgTwoRed.classList.add("hidden");
    } else if (currentPage == 4) {
      containerThree.classList.add("working");
      // containerThree.classList.remove("hidden");

      scrollGuide.style.left = "93%";
      scrollGuide.style.transform = "translateY(22px)";

      guideIconMenuLine.style.background = `white`;

      if (beforePage < 4) {
        guideNumber.classList.remove("guide-number-forwards");
        guideNumber.classList.add("guide-number-backwards");
      } else {
        guideNumber.classList.remove("guide-number-backwards");
        guideNumber.classList.add("guide-number-forwards");
      }

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-3)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-3)`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `04`;
        guideNumberSpan4.textContent = `MUSIC`;

        guideNumber.style.top = `90%`;
        guideNumber.style.left = `93vw`;
      }, 500);

      // navText.forEach((e) => (e.style.color = "black"));
      // logo.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // logoBlack.classList.remove("hidden");
      // guideIconUi.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // guideIconUiBlack.classList.remove("hidden");
      // jpCn.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // jpCnBlack.classList.remove("hidden");
      // cnJp.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // cnJpBlack.classList.remove("hidden");
      // iconLSvgOne.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // iconLSvgOneBlack.classList.remove("hidden");

      navTextFour.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });

      // navText.forEach((e) => (e.style.color = "red"));
      // logo.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // logoRed.classList.remove("hidden");
      // guideIconUi.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // guideIconUiRed.classList.remove("hidden");
      // jpCn.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // jpCnRed.classList.remove("hidden");
      // cnJp.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // cnJpRed.classList.remove("hidden");
      // iconLSvgOne.forEach((e) => {
      //   e.classList.add("hidden");
      // });
      // iconLSvgOneRed.classList.remove("hidden");

      // navTextTwo.forEach((e) => {
      //   e.style.color = `rgb(226, 186, 25)`;
      // });
    } else if (currentPage == 5) {
      containerFour.classList.add("working");
      // containerFour.classList.remove("hidden");

      guideIconMenuLine.style.background = `white`;

      if (beforePage == 6) {
        guideNumber.classList.remove("guide-number-backwards");
        guideNumber.classList.add("guide-number-forwards");
      } else {
        guideNumber.classList.remove("guide-number-forwards");
        guideNumber.classList.add("guide-number-backwards");
      }

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-4)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-4)`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `05`;
        guideNumberSpan4.textContent = `RECORD`;

        guideNumber.style.top = `210%`;
        guideNumber.style.left = `93vw`;
      }, 500);

      navTextFive.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });
    } else if (currentPage == 6) {
      containerFive.classList.add("working");
      // containerFive.classList.remove("hidden");

      guideIconMenuLine.style.background = `white`;

      if (
        containerFiveOhayo.classList.contains("closed") &&
        containerFiveHoloFes.classList.contains("closed") &&
        containerFiveTheater.classList.contains("closed") &&
        containerFivePhotos.classList.contains("closed")
      ) {
        guideLineOne.style.opacity = `1`;
        guideLineOne.style.top = `570%`;
      }

      guideNumber.classList.remove("guide-number-forwards");
      guideNumber.classList.add("guide-number-backwards");

      guideMobileRainDropDrop.forEach((e) => {
        e.style.background = `var(--color-guideMobileDrop-5)`;
      });
      guideMobileNavBox.style.background = `var(--color-guideMobileNavBox-5)`;

      setTimeout(() => {
        guideNumberSpan1.textContent = `06`;
        guideNumberSpan4.textContent = `MORE`;

        guideNumber.style.top = `580%`;
        guideNumber.style.left = `92vw`;
      }, 500);

      guideLineOne.style.height = `1px`;
      // scrollGuide.classList.add("hidden");
      navTextSix.forEach((e) => {
        e.style.color = `rgb(226, 186, 25)`;
      });
    }

    // colorEgg BreatheLight
    // if (
    //   containerFour.classList.contains("working") &&
    //   colorEggRunButton.classList.contains("colorEgg-5-working")
    // ) {
    //   colorEggRunButton.classList.add("breatheLight-colorEgg-5");
    // } else {
    //   colorEggRunButton.classList.remove("breatheLight-colorEgg-5");
    // }
  };

  navOne.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 1;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });

    containerZero.classList.add("pageMoveIn");

    pageAnima();
  });
  navTwo.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 2;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerOne.classList.add("pageMoveIn");
    pageAnima();
  });
  navThree.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 3;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerTwo.classList.add("pageMoveIn");
    pageAnima();
  });
  navFour.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 4;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerThree.classList.add("pageMoveIn");
    pageAnima();
  });
  navFive.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 5;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerFour.classList.add("pageMoveIn");
    pageAnima();
  });
  navSix.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 6;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerFive.classList.add("pageMoveIn");
    pageAnima();
  });

  guideMobileNavBoxNav.forEach((e) => {
    e.addEventListener("click", () => {
      footer.classList.add("translateY100");
      containerFive.style.transform = `translateY(0)`;
      guide.style.transform = `translateY(0)`;
    });
  });
  guideMobileNavBoxNav1.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 1;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });

    containerZero.classList.add("pageMoveIn");

    pageAnima();
    guideMobileOpenCloseFuc();
  });
  guideMobileNavBoxNav2.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 2;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerOne.classList.add("pageMoveIn");
    pageAnima();
    guideMobileOpenCloseFuc();
  });
  guideMobileNavBoxNav3.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 3;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerTwo.classList.add("pageMoveIn");
    pageAnima();
    guideMobileOpenCloseFuc();
  });
  guideMobileNavBoxNav4.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 4;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerThree.classList.add("pageMoveIn");
    pageAnima();
    guideMobileOpenCloseFuc();
  });
  guideMobileNavBoxNav5.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 5;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerFour.classList.add("pageMoveIn");
    pageAnima();
    guideMobileOpenCloseFuc();
  });
  guideMobileNavBoxNav6.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 6;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerFive.classList.add("pageMoveIn");
    pageAnima();
    guideMobileOpenCloseFuc();
  });

  containerOneMediaArrLeft.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 1;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerZero.classList.add("pageMoveIn");
    pageAnima();
  });
  containerOneMediaArrRight.addEventListener("click", () => {
    beforePage = currentPage;
    currentPage = 3;
    container.forEach((e) => {
      e.classList.remove("pageMoveIn");
    });
    containerTwo.classList.add("pageMoveIn");
    pageAnima();
  });

  containerZero.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      containerOne.classList.add("pageMoveIn");
      currentPage = 2;
    } else {
      currentPage = 1;
      console.log("no front page");
      console.log(e.deltaY, e.wheelDelta);
    }
    beforePage = 1;
    pageAnima();
    return currentPage;
  });
  containerOne.addEventListener("wheel", (e) => {
    if (window.innerWidth > 960) {
      console.log(e.deltaY);
      if (e.deltaY > 0) {
        containerTwo.classList.add("pageMoveIn");
        currentPage = 3;
      } else {
        containerOne.classList.remove("pageMoveIn");
        currentPage = 1;
      }
      beforePage = 2;
      pageAnima();
      return currentPage;
    }
  });
  containerTwo.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      containerThree.classList.add("pageMoveIn");
      currentPage = 4;
    } else {
      containerOne.classList.add("pageMoveIn");
      containerTwo.classList.remove("pageMoveIn");
      currentPage = 2;
    }
    beforePage = 3;
    pageAnima();
    return currentPage;
  });
  containerThree.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      containerFour.classList.add("pageMoveIn");
      currentPage = 5;
    } else {
      containerTwo.classList.add("pageMoveIn");
      containerThree.classList.remove("pageMoveIn");
      currentPage = 3;
    }
    beforePage = 4;
    pageAnima();
    return currentPage;
  });
  containerFour.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      containerFive.classList.add("pageMoveIn");
      currentPage = 6;
    } else {
      containerThree.classList.add("pageMoveIn");
      containerFour.classList.remove("pageMoveIn");
      currentPage = 4;
    }
    beforePage = 5;
    pageAnima();
    return currentPage;
  });

  // footer在这里
  let isContainerFiveBoxActive = false;
  containerFiveClose.forEach((e) => {
    e.addEventListener("click", () => {
      isContainerFiveBoxActive = false;
    });
  });

  containerFiveBox.forEach((e) => {
    e.addEventListener("click", () => {
      isContainerFiveBoxActive = true;

      footer.classList.add("translateY100");
      containerFive.style.transform = `translateY(0)`;
      guide.style.transform = `translateY(0)`;
    });
  });
  containerFive.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      currentPage = 6;

      if (!isContainerFiveBoxActive) {
        footer.classList.remove("translateY100");
        containerFive.style.transform = `translateY(-15rem)`;
        guide.style.transform = `translateY(-15rem)`;
      }
    } else {
      if (footer.classList.contains("translateY100")) {
        currentPage = 5;
        containerFour.classList.add("pageMoveIn");
        containerFive.classList.remove("pageMoveIn");
      } else {
        footer.classList.add("translateY100");
        containerFive.style.transform = `translateY(0)`;
        guide.style.transform = `translateY(0)`;
      }
    }
    beforePage = 6;
    pageAnima();
    return currentPage;
  });

  setInterval(() => {
    console.log(currentPage, currentPage == 1);
    // console.log(beforePage);
  }, 2000);

  navTextColorSwitchs();
};

//colorEgg
const colorEggOne = function () {};

const colorEggTwo = function () {
  let currentcolorEgg2Img = 1;

  const colorEggTwoImgLeftSwitch = function () {
    if (currentcolorEgg2Img == 1) {
      colorEgg2ContainerImgBoxImg1.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg1.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg13.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg13.classList.add(
        "colorEgg-2-img-right-moveIn"
      );
    } else if (currentcolorEgg2Img == 2) {
      colorEgg2ContainerImgBoxImg2.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg2.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg1.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg1.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 3) {
      colorEgg2ContainerImgBoxImg3.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg3.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg2.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg2.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 4) {
      colorEgg2ContainerImgBoxImg4.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg4.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg3.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg3.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 5) {
      colorEgg2ContainerImgBoxImg5.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg5.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg4.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg4.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 6) {
      colorEgg2ContainerImgBoxImg6.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg6.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg5.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg5.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 7) {
      colorEgg2ContainerImgBoxImg7.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg7.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg6.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg6.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 8) {
      colorEgg2ContainerImgBoxImg8.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg8.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg7.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg7.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 9) {
      colorEgg2ContainerImgBoxImg9.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg9.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg8.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg8.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 10) {
      colorEgg2ContainerImgBoxImg10.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg10.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg9.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg9.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 11) {
      colorEgg2ContainerImgBoxImg11.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg11.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg10.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg10.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 12) {
      colorEgg2ContainerImgBoxImg12.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg12.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg11.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg11.classList.add("colorEgg-2-img-left-moveIn");
    } else if (currentcolorEgg2Img == 13) {
      colorEgg2ContainerImgBoxImg13.classList.remove(
        "colorEgg-2-img-left-moveOut"
      );
      colorEgg2ContainerImgBoxImg13.classList.add(
        "colorEgg-2-img-right-moveOut"
      );

      colorEgg2ContainerImgBoxImg12.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg12.classList.add("colorEgg-2-img-left-moveIn");
    }
  };
  const colorEggTwoImgRightSwitch = function () {
    if (currentcolorEgg2Img == 1) {
      colorEgg2ContainerImgBoxImg1.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg1.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg2.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg2.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 2) {
      colorEgg2ContainerImgBoxImg2.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg2.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg3.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg3.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 3) {
      colorEgg2ContainerImgBoxImg3.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg3.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg4.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg4.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 4) {
      colorEgg2ContainerImgBoxImg4.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg4.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg5.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg5.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 5) {
      colorEgg2ContainerImgBoxImg5.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg5.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg6.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg6.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 6) {
      colorEgg2ContainerImgBoxImg6.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg6.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg7.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg7.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 7) {
      colorEgg2ContainerImgBoxImg7.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg7.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg8.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg8.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 8) {
      colorEgg2ContainerImgBoxImg8.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg8.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg9.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg9.classList.add("colorEgg-2-img-right-moveIn");
    } else if (currentcolorEgg2Img == 9) {
      colorEgg2ContainerImgBoxImg9.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg9.classList.add("colorEgg-2-img-left-moveOut");

      colorEgg2ContainerImgBoxImg10.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg10.classList.add(
        "colorEgg-2-img-right-moveIn"
      );
    } else if (currentcolorEgg2Img == 10) {
      colorEgg2ContainerImgBoxImg10.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg10.classList.add(
        "colorEgg-2-img-left-moveOut"
      );

      colorEgg2ContainerImgBoxImg11.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg11.classList.add(
        "colorEgg-2-img-right-moveIn"
      );
    } else if (currentcolorEgg2Img == 11) {
      colorEgg2ContainerImgBoxImg11.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg11.classList.add(
        "colorEgg-2-img-left-moveOut"
      );

      colorEgg2ContainerImgBoxImg12.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg12.classList.add(
        "colorEgg-2-img-right-moveIn"
      );
    } else if (currentcolorEgg2Img == 12) {
      colorEgg2ContainerImgBoxImg12.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg12.classList.add(
        "colorEgg-2-img-left-moveOut"
      );

      colorEgg2ContainerImgBoxImg13.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg13.classList.add(
        "colorEgg-2-img-right-moveIn"
      );
    } else if (currentcolorEgg2Img == 13) {
      colorEgg2ContainerImgBoxImg13.classList.remove(
        "colorEgg-2-img-right-moveOut"
      );
      colorEgg2ContainerImgBoxImg13.classList.add(
        "colorEgg-2-img-left-moveOut"
      );

      colorEgg2ContainerImgBoxImg1.style.transitionDelay = `0.6s`;
      colorEgg2ContainerImgBoxImg1.classList.add("colorEgg-2-img-right-moveIn");
    }
  };

  const colorEgg2ContainerImgMoveLeft = function () {
    colorEgg2ContainerImgBoxImg.forEach((e) => {
      e.classList.remove("colorEgg-2-img-left-moveOut");
      e.classList.remove("colorEgg-2-img-right-moveOut");
      e.classList.remove("colorEgg-2-img-right-moveIn");
      e.classList.remove("colorEgg-2-img-left-moveIn");
      e.classList.add("colorEgg-2-img-left-moveOut");

      e.classList.add("colorEgg-2-img-left-moveOut");

      e.style.transitionDelay = `0s`;
    });
    colorEggTwoImgLeftSwitch();
  };
  const colorEgg2ContainerImgMoveRight = function () {
    colorEgg2ContainerImgBoxImg.forEach((e) => {
      e.classList.remove("colorEgg-2-img-left-moveOut");
      e.classList.remove("colorEgg-2-img-right-moveOut");
      e.classList.remove("colorEgg-2-img-left-moveIn");
      e.classList.remove("colorEgg-2-img-right-moveIn");

      e.classList.add("colorEgg-2-img-right-moveOut");

      e.style.transitionDelay = `0s`;
    });

    colorEggTwoImgRightSwitch();
  };

  colorEgg2ArrLeft.addEventListener("click", () => {
    colorEgg2ContainerImgMoveLeft();
    currentcolorEgg2Img -= 1;
    if (currentcolorEgg2Img < 1) {
      currentcolorEgg2Img = 13;
    } else if (currentcolorEgg2Img > 13) {
      currentcolorEgg2Img = 1;
    }
    console.log(currentcolorEgg2Img);
  });

  colorEgg2ArrRight.addEventListener("click", () => {
    colorEgg2ContainerImgMoveRight();
    currentcolorEgg2Img += 1;
    if (currentcolorEgg2Img < 1) {
      currentcolorEgg2Img = 13;
    } else if (currentcolorEgg2Img > 13) {
      currentcolorEgg2Img = 1;
    }
    console.log(currentcolorEgg2Img);
  });

  if (containerOne.classList.contains("working")) {
    if (colorEggRunButton.classList.contains("colorEgg-2-working")) {
      colorEggRunButton.classList.remove("colorEgg-2-working");

      colorEgg2.classList.add("no-visib");
      guideNumber.classList.remove("hidden");
      scrollGuide.classList.remove("hidden");
    } else {
      colorEggRunButton.classList.add("colorEgg-2-working");

      colorEgg2.classList.remove("no-visib");
      guideNumber.classList.add("hidden");
      scrollGuide.classList.add("hidden");
    }
  }
};

const colorEggTree = function () {};

const colorEggFour = function () {
  if (containerThree.classList.contains("working")) {
    colorEgg4.classList.remove("hidden");
    guideNumber.classList.add("hidden");
    scrollGuide.classList.add("hidden");
  }

  let isColorEgg4MusicPlay = false;
  const colorEgg4MusicPlay = function () {
    isColorEgg4MusicPlay = true;
    colorEgg4MainImgBox.classList.remove("colorEgg-4-main-imgBox-anima-pause");
    colorEgg4MainImgBox.classList.add("colorEgg-4-main-imgBox-anima-play");
  };
  const colorEgg4MusicPause = function () {
    isColorEgg4MusicPlay = false;
    colorEgg4MainImgBox.classList.remove("colorEgg-4-main-imgBox-anima-play");
    colorEgg4MainImgBox.classList.add("colorEgg-4-main-imgBox-anima-pause");
  };

  colorEgg4MainMusicPlay.addEventListener("click", () => {
    isColorEgg4MusicPlay ? colorEgg4MusicPause() : colorEgg4MusicPlay();
  });
};
const colorEggFourClose = function () {
  colorEgg4Close.addEventListener("click", () => {
    colorEgg4.classList.add("hidden");
    guideNumber.classList.remove("hidden");
    scrollGuide.classList.remove("hidden");
  });
};

const colorEggFive = function () {
  if (containerFour.classList.contains("working")) {
    if (colorEggRunButton.classList.contains("colorEgg-5-working")) {
      colorEggRunButton.classList.remove("colorEgg-5-working");
      colorEggRunButton.classList.remove("breatheLight-colorEgg-5");

      colorEgg5.style.opacity = `0`;
      colorEgg5.style.transform = `translateX(-50%)`;
    } else {
      colorEggRunButton.classList.add("colorEgg-5-working");
      colorEggRunButton.classList.add("breatheLight-colorEgg-5");

      colorEgg5.style.opacity = `1`;
      colorEgg5.style.transform = `translateX(0)`;
    }
  }
};
const colorEggFiveClose = function () {};

const colorEggSix = function () {
  if (containerFive.classList.contains("working")) {
    colorEgg6.classList.remove("hidden");
  }
};
const colorEggSixClose = function () {
  colorEgg6Close.addEventListener("click", () => {
    colorEgg6.classList.add("hidden");
  });
};

const colorEggStart = function () {
  // start setting
  colorEgg2.classList.add("no-visib");

  // colorEggBreatheLight
  colorEggRunButton.addEventListener("click", () => {
    // total
    colorEggOne();
    colorEggTwo();
    colorEggTree();
    colorEggFour();
    colorEggFive();
    colorEggSix();
  });
};
const colorEggClose = function () {
  // colorEggTwoClose();
  // colorEggTreeClose();
  colorEggFourClose();
  colorEggFiveClose();
  colorEggSixClose();
};
// start
const startBgControl = function () {
  startBgClose.classList.remove("hidden");
  // startBgMusic.play();
  setTimeout(() => {
    startBg.style.clipPath = `circle(0 at 50% 50%)`;
  }, 4500);
  startBgClose.addEventListener("click", () => {
    // startBg.classList.add("hidden");
    // startBg.style.backgroundColor = `transparent`;
    startBg.style.clipPath = `circle(0 at 50% 50%)`;

    // startBgMusic.pause();
  });
};

// img lazy

const imgLazyLoad = function () {
  imgAll.forEach((e) => {
    e.src = e.getAttribute("data-src");
    e.setAttribute("loading", "lazy");
  });
};

window.onload = function () {
  // menu
  guideRainDefault();
  mobileMenu();

  // total
  bgMusicPlay();
  pagesMove();
  laSwitch();
  imgLazyLoad();

  //container-1
  jumps();
  containerOneAudios();

  //container-2
  charactorSwitchs();

  //container-3
  containerThreeSwitchs();
  containerThreeDetailShow();

  //container-4
  liveSwitchs();

  //container-5
  holoFesBgSwitch();
  holoFesswitch();
  holoFesStartClose();
  containerFiveTotal();
  if (window.innerWidth > 960) {
    containerFiveOhayoContentSwitch();
  }
  containerFiveOhayoClose();
  containerFiveTheaterClose();
  containerFiveTheaterMainAnima();
  containerFiveTheaterMainViewMoreAnima();
  containerFiveTheaterContentHovers();
  containerFivePhotosClose();

  // start
  startBgControl();

  //colorEgg
  colorEggStart();
  colorEggClose();
};
