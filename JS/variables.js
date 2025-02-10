// eventListener
//
//
//
const startBg = document.querySelector(".startBg");
const startBgMusic = document.querySelector(".startBgMusic");
const startBgClose = document.querySelector(".startBg-close");

// startAnima
const startAnima = document.querySelector(".startAnima");
const startAnimaBg1 = document.querySelector(".startAnima-bg-1");
const startAnimaBg2 = document.querySelector(".startAnima-bg-2");
const startAnimaBg3 = document.querySelector(".startAnima-bg-3");
const startAnimaBg4 = document.querySelector(".startAnima-bg-4");
const startAnimaBgBg = document.querySelectorAll(".startAnima-bg-bg");
const startAnimaTextBoxText1 = document.querySelector(
  ".startAnima-textBox-text-1"
);
const startAnimaTextBoxText2 = document.querySelector(
  ".startAnima-textBox-text-2"
);

const imgAll = document.querySelectorAll("img");
const audioAll = document.querySelectorAll("audio");
const videoAll = document.querySelectorAll("video");

const body = document.querySelector("body");
const container = document.querySelectorAll(".container");
const containerZero = document.querySelector(".container-0");
const containerOne = document.querySelector(".container-1");
const containerTwo = document.querySelector(".container-2");
const containerThree = document.querySelector(".container-3");
const containerFour = document.querySelector(".container-4");
const containerFive = document.querySelector(".container-5");
const fanguangFront = document.querySelector(".fanguang-front");
const fanguangBack = document.querySelector(".fanguang-back");
const musicListButton = document.querySelectorAll(".musicListButton");
const musicListButtonOne = document.querySelector(".musicListButton-1");
const musicListButtonTwo = document.querySelector(".musicListButton-2");
const musicListButtonThree = document.querySelector(".musicListButton-3");
const musicListButtonFour = document.querySelector(".musicListButton-4");
const showList = document.querySelectorAll(".showList");
const showListImg = document.querySelectorAll(".showListImg");
const showListImgbox = document.querySelectorAll(".showListImgbox");
const showListTextbox = document.querySelectorAll(".showListTextbox");
const showListOne = document.querySelector(".showList-1");
const showListTwo = document.querySelector(".showList-2");
const showListThree = document.querySelector(".showList-3");
const showListFour = document.querySelector(".showList-4");
const musicListButtonP = document.querySelector(".musicListButtonP");
const numberList = document.querySelectorAll(".numberList");
const numberListOne = document.querySelector(".numberList-1");
const numberListTwo = document.querySelector(".numberList-2");
const numberListThree = document.querySelector(".numberList-3");
const numberListFour = document.querySelector(".numberList-4");
const backgroundmusic = document.querySelector(".backgroundmusic");
const iconL = document.querySelector(".iconL");
const iconLSvgOne = document.querySelectorAll(".iconLSvg-1");
const iconLSvgTwo = document.querySelectorAll(".iconLSvg-2");
const scrollGuide = document.querySelector(".scrollGuide");

const logo = document.querySelectorAll(".logo");
const logoRed = document.querySelector(".logo-red");
const logoWhite = document.querySelector(".logo-white");
const logoBlack = document.querySelector(".logo-black");
const guide = document.querySelector(".guide");
const guideIconUi = document.querySelectorAll(".guide-icon-ui");
const guideIconUiWhite = document.querySelector(".guide-icon-ui-white");
const guideIconUiRed = document.querySelector(".guide-icon-ui-red");
const guideIconUiBlack = document.querySelector(".guide-icon-ui-black");
const guideNumber = document.querySelector(".guide-number");
const guideNumberSpan = document.querySelectorAll(".guide-number-span");
const guideNumberSpanNoTitle = document.querySelectorAll(
  ".guide-number-span-noTitle"
);
const guideNumberSpan1 = document.querySelector(".guide-number-span-1");
const guideNumberSpan2 = document.querySelector(".guide-number-span-2");
const guideNumberSpan3 = document.querySelector(".guide-number-span-3");
const guideNumberSpan4 = document.querySelector(".guide-number-span-4");

const iconLSvgOneWhite = document.querySelector(".iconLSvg-1-white");
const iconLSvgOneRed = document.querySelector(".iconLSvg-1-red");
const iconLSvgOneBlack = document.querySelector(".iconLSvg-1-black");
const iconLSvgTwoWhite = document.querySelector(".iconLSvg-2-white");
const iconLSvgTwoRed = document.querySelector(".iconLSvg-2-red");

const jpCn = document.querySelectorAll(".jp-cn");
const jpCnRed = document.querySelector(".jp-cn-red");
const jpCnWhite = document.querySelector(".jp-cn-white");
const jpCnBlack = document.querySelector(".jp-cn-black");
const cnJp = document.querySelectorAll(".cn-jp");
const cnJpRed = document.querySelector(".cn-jp-red");
const cnJpWhite = document.querySelector(".cn-jp-white");
const cnJpBlack = document.querySelector(".cn-jp-black");

const navText = document.querySelectorAll(".navText");
const navs = document.querySelector(".navs");
const navOne = document.querySelector(".nav-1");
const navTwo = document.querySelector(".nav-2");
const navThree = document.querySelector(".nav-3");
const navFour = document.querySelector(".nav-4");
const navFive = document.querySelector(".nav-5");
const navSix = document.querySelector(".nav-6");
const navTextOne = document.querySelectorAll(".navText-1");
const navTextTwo = document.querySelectorAll(".navText-2");
const navTextThree = document.querySelectorAll(".navText-3");
const navTextFour = document.querySelectorAll(".navText-4");
const navTextFive = document.querySelectorAll(".navText-5");
const navTextSix = document.querySelectorAll(".navText-6");
const guideLineOne = document.querySelector(".guide-line-1");
const guideLine2 = document.querySelector(".guide-line-2");
const guideLine3 = document.querySelector(".guide-line-3");

const guideIconMenuLine = document.querySelector(".guide-icon-menu-line");

const guideIconMenu = document.querySelector(".guide-icon-menu");
const guideMobile = document.querySelector(".guide-mobile");
const guideMobileRain = document.querySelector(".guide-mobile-rain");
const guideMobileRainDrop = document.querySelectorAll(
  ".guide-mobile-rain-drop"
);
const guideMobileRainDropDrop = document.querySelectorAll(
  ".guide-mobile-rain-drop-drop"
);
const guideMobileNavBox = document.querySelector(".guide-mobile-navBox");
const guideMobileOpenClose = document.querySelector(".guide-mobile-OpenClose");

const guideMobileNavBoxNav = document.querySelectorAll(
  ".guide-mobile-navBox-nav"
);
const guideMobileNavBoxNav1 = document.querySelector(
  ".guide-mobile-navBox-nav-1"
);
const guideMobileNavBoxNav2 = document.querySelector(
  ".guide-mobile-navBox-nav-2"
);
const guideMobileNavBoxNav3 = document.querySelector(
  ".guide-mobile-navBox-nav-3"
);
const guideMobileNavBoxNav4 = document.querySelector(
  ".guide-mobile-navBox-nav-4"
);
const guideMobileNavBoxNav5 = document.querySelector(
  ".guide-mobile-navBox-nav-5"
);
const guideMobileNavBoxNav6 = document.querySelector(
  ".guide-mobile-navBox-nav-6"
);

// container zero
const containerZeroImg = document.querySelectorAll(".container-0-img");
const containerZeroTextBox = document.querySelector(".container-0-textBox");
const container0Video = document.querySelector(".container-0-video");

//container one
const container1AudioButtons = document.querySelector(
  ".container-1-audioButtons"
);
const containerOneAudioButtonAudio = document.querySelectorAll(
  ".container-1-audioButton-audio"
);
const containerOneAudioButton = document.querySelectorAll(
  ".container-1-audioButton"
);
const containerOneAudioButtonImgText = document.querySelectorAll(
  ".container-1-audioButton-img-text"
);
const containerOneAudioButtonImgTextOne = document.querySelector(
  ".container-1-audioButton-img-text-1"
);
const containerOneAudioButtonImgTextTwo = document.querySelector(
  ".container-1-audioButton-img-text-2"
);
const containerOneAudioButtonImgTextThree = document.querySelector(
  ".container-1-audioButton-img-text-3"
);
const containerOneAudioButtonOne = document.querySelector(
  ".container-1-audioButton-1"
);
const containerOneAudioButtonTwo = document.querySelector(
  ".container-1-audioButton-2"
);
const containerOneAudioButtonThree = document.querySelector(
  ".container-1-audioButton-3"
);
const containerOneAudioButtonAudioOne = document.querySelector(
  ".container-1-audioButton-audio-1"
);
const containerOneAudioButtonAudioTwo = document.querySelector(
  ".container-1-audioButton-audio-2"
);
const containerOneAudioButtonAudioThree = document.querySelector(
  ".container-1-audioButton-audio-3"
);
const musicListButtonFilter = document.querySelectorAll(
  ".musicListButtonFilter"
);
const musicListButtonFilter1 = document.querySelector(
  ".musicListButtonFilter-1"
);
const musicListButtonFilter2 = document.querySelector(
  ".musicListButtonFilter-2"
);
const musicListButtonFilter3 = document.querySelector(
  ".musicListButtonFilter-3"
);
const musicListButtonFilter4 = document.querySelector(
  ".musicListButtonFilter-4"
);
const musicListButtonImg = document.querySelectorAll(".musicListButtonImg");
const musicListButtonImg1 = document.querySelector(".musicListButtonImg-1");
const musicListButtonImg2 = document.querySelector(".musicListButtonImg-2");
const musicListButtonImg3 = document.querySelector(".musicListButtonImg-3");
const musicListButtonImg4 = document.querySelector(".musicListButtonImg-4");

const containerOneMediaArrImg = document.querySelectorAll(
  ".container-1-mediaArr-img"
);
const containerOneMediaArrLeft = document.querySelector(
  ".container-1-mediaArr-left"
);
const containerOneMediaArrRight = document.querySelector(
  ".container-1-mediaArr-right"
);

//container two
const container2BackgroundTop11 = document.querySelector(
  ".container-2-background-top-1-1"
);
const container2BackgroundTop12 = document.querySelector(
  ".container-2-background-top-1-2"
);
const container2BackgroundTop21 = document.querySelector(
  ".container-2-background-top-2-1"
);
const container2BackgroundTop22 = document.querySelector(
  ".container-2-background-top-2-2"
);
const container2BackgroundTop3 = document.querySelector(
  ".container-2-background-top-3"
);
const container2BackgroundTotal = document.querySelector(
  ".container-2-background-total"
);
const container2BgDecoration1 = document.querySelector(
  ".container-2-bgDecoration-1"
);
const container2BgDecoration2 = document.querySelector(
  ".container-2-bgDecoration-2"
);

const containerTwoSwitchs = document.querySelector(".container-2-switchs");
const containerTwoSwitch = document.querySelectorAll(".container-2-switch");
const containerTwoSwitchOne = document.querySelector(".container-2-switch-1");
const containerTwoSwitchTwo = document.querySelector(".container-2-switch-2");
const containerTwoSwitchThree = document.querySelector(".container-2-switch-3");
const containerTwoSwitchFour = document.querySelector(".container-2-switch-4");
const containerTwoSwitchFive = document.querySelector(".container-2-switch-5");
const containerTwoSwitchSix = document.querySelector(".container-2-switch-6");
const containerTwoSwitchSeven = document.querySelector(".container-2-switch-7");
const containerTwoSwitchEight = document.querySelector(".container-2-switch-8");
const containerTwoSwitchNine = document.querySelector(".container-2-switch-9");
const containerTwoSwitchTen = document.querySelector(".container-2-switch-10");
const containerTwoClothes = document.querySelector(".container-2-clothes");
const containerTwoCloth = document.querySelectorAll(".container-2-cloth");
const containerTwoClothOne = document.querySelector(".container-2-cloth-1");
const containerTwoClothTwo = document.querySelector(".container-2-cloth-2");
const containerTwoClothThree = document.querySelector(".container-2-cloth-3");
const containerTwoClothFour = document.querySelector(".container-2-cloth-4");
const containerTwoClothFive = document.querySelector(".container-2-cloth-5");
const containerTwoClothSix = document.querySelector(".container-2-cloth-6");
const containerTwoClothSeven = document.querySelector(".container-2-cloth-7");
const containerTwoClothEight = document.querySelector(".container-2-cloth-8");
const containerTwoClothNine = document.querySelector(".container-2-cloth-9");
const containerTwoClothTen = document.querySelector(".container-2-cloth-10");
const containerTwoClothImg = document.querySelectorAll(
  ".container-2-cloth-img"
);
const containerTwoClothImgOne = document.querySelector(
  ".container-2-cloth-img-1"
);
const containerTwoClothImgTwo = document.querySelector(
  ".container-2-cloth-img-2"
);
const containerTwoClothImgThree = document.querySelector(
  ".container-2-cloth-img-3"
);
const containerTwoClothImgFour = document.querySelector(
  ".container-2-cloth-img-4"
);
const containerTwoClothImgFive = document.querySelector(
  ".container-2-cloth-img-5"
);
const containerTwoClothImgSix = document.querySelector(
  ".container-2-cloth-img-6"
);
const containerTwoClothImgSeven = document.querySelector(
  ".container-2-cloth-img-7"
);
const containerTwoClothImgEight = document.querySelector(
  ".container-2-cloth-img-8"
);
const containerTwoClothImgNine = document.querySelector(
  ".container-2-cloth-img-9"
);
const containerTwoClothImgTen = document.querySelector(
  ".container-2-cloth-img-10"
);
const containerTwoTextBox = document.querySelectorAll(".container-2-textBox");
const containerTwoTextBoxOne = document.querySelector(".container-2-textBox-1");
const containerTwoTextBoxTwo = document.querySelector(".container-2-textBox-2");
const containerTwoTextBoxThree = document.querySelector(
  ".container-2-textBox-3"
);
const containerTwoTextBoxFour = document.querySelector(
  ".container-2-textBox-4"
);
const containerTwoTextBoxFive = document.querySelector(
  ".container-2-textBox-5"
);
const containerTwoTextBoxSix = document.querySelector(".container-2-textBox-6");
const containerTwoTextBoxSeven = document.querySelector(
  ".container-2-textBox-7"
);
const containerTwoTextBoxEight = document.querySelector(
  ".container-2-textBox-8"
);
const containerTwoTextBoxNine = document.querySelector(
  ".container-2-textBox-9"
);
const containerTwoTextBoxTen = document.querySelector(
  ".container-2-textBox-10"
);
const containerTwoArrLeft = document.querySelector(".container-2-arr-left");
const containerTwoArrRight = document.querySelector(".container-2-arr-right");
const containerTwoSwitchsOne = document.querySelector(".container-2-switchs-1");
const containerTwoSwitchsTwo = document.querySelector(".container-2-switchs-2");

const filter = document.querySelectorAll(".filter");
const containerTwoSwitchsFilter = document.querySelectorAll(
  ".container-2-switch-filter"
);
const containerTwoSwitchsFilterOne = document.querySelector(
  ".container-2-switch-filter-1"
);
const containerTwoSwitchsFilterTwo = document.querySelector(
  ".container-2-switch-filter-2"
);
const containerTwoSwitchsFilterThree = document.querySelector(
  ".container-2-switch-filter-3"
);
const containerTwoSwitchsFilterFour = document.querySelector(
  ".container-2-switch-filter-4"
);
const containerTwoSwitchsFilterFive = document.querySelector(
  ".container-2-switch-filter-5"
);
const containerTwoSwitchsFilterSix = document.querySelector(
  ".container-2-switch-filter-6"
);
const containerTwoSwitchsFilterSeven = document.querySelector(
  ".container-2-switch-filter-7"
);
const containerTwoSwitchsFilterEight = document.querySelector(
  ".container-2-switch-filter-8"
);
const containerTwoSwitchsFilterNine = document.querySelector(
  ".container-2-switch-filter-9"
);
const containerTwoSwitchsFilterTen = document.querySelector(
  ".container-2-switch-filter-10"
);
const containerTwoSwitchImg = document.querySelectorAll(
  ".container-2-switch-img"
);
const containerTwoSwitchImgOne = document.querySelector(
  ".container-2-switch-img-1"
);
const containerTwoSwitchImgTwo = document.querySelector(
  ".container-2-switch-img-2"
);
const containerTwoSwitchImgThree = document.querySelector(
  ".container-2-switch-img-3"
);
const containerTwoSwitchImgFour = document.querySelector(
  ".container-2-switch-img-4"
);
const containerTwoSwitchImgFive = document.querySelector(
  ".container-2-switch-img-5"
);
const containerTwoSwitchImgSix = document.querySelector(
  ".container-2-switch-img-6"
);
const containerTwoSwitchImgSeven = document.querySelector(
  ".container-2-switch-img-7"
);
const containerTwoSwitchImgEight = document.querySelector(
  ".container-2-switch-img-8"
);
const containerTwoSwitchImgNine = document.querySelector(
  ".container-2-switch-img-9"
);
const containerTwoSwitchImgTen = document.querySelector(
  ".container-2-switch-img-10"
);
const containerTwoSwitchsBox = document.querySelector(
  ".container-2-switchsBox"
);
const containerTwoSwitchImgImg = document.querySelectorAll(
  ".container-2-switch-img-img"
);
const containerTwoSwitchText = document.querySelectorAll(
  ".container-2-switch-text"
);
const containerTwoSwitchTextOne = document.querySelectorAll(
  ".container-2-switch-text-1"
);
const containerTwoSwitchTextTwo = document.querySelectorAll(
  ".container-2-switch-text-2"
);
const containerTwoSwitchTextThree = document.querySelectorAll(
  ".container-2-switch-text-3"
);
const containerTwoSwitchTextFour = document.querySelectorAll(
  ".container-2-switch-text-4"
);
const container2SwitchsBoxNumber = document.querySelector(
  ".container-2-switchsBox-number"
);
const container2SwitchsBoxNumber1 = document.querySelector(
  ".container-2-switchsBox-number-1"
);
const containerTwoX = document.querySelector(".container-2-x");

// container-3
const containerThreeText = document.querySelectorAll(".container-3-text");
const containerThreeImgs = document.querySelector(".container-3-imgs");
const containerThreeImg = document.querySelectorAll(".container-3-img");
const containerThreeImgOne = document.querySelector(".container-3-img-1");
const containerThreeImgTwo = document.querySelector(".container-3-img-2");
const containerThreeImgThree = document.querySelector(".container-3-img-3");
const containerThreeImgFour = document.querySelector(".container-3-img-4");
const containerThreeImgFive = document.querySelector(".container-3-img-5");
const containerThreeTextOne = document.querySelector(".container-3-text-1");
const containerThreeTextTwo = document.querySelector(".container-3-text-2");
const containerThreeTextThree = document.querySelector(".container-3-text-3");
const containerThreeTextFour = document.querySelector(".container-3-text-4");
const containerThreeTextFive = document.querySelector(".container-3-text-5");

const containerThreeImgsIntro = document.querySelectorAll(
  ".container-3-imgs-intro"
);
const containerThreeImgsIntroOne = document.querySelector(
  ".container-3-imgs-intro-1"
);
const containerThreeImgsIntroTwo = document.querySelector(
  ".container-3-imgs-intro-2"
);
const containerThreeImgsIntroThree = document.querySelector(
  ".container-3-imgs-intro-3"
);
const containerThreeImgsIntroFour = document.querySelector(
  ".container-3-imgs-intro-4"
);
const containerThreeImgsIntroFive = document.querySelector(
  ".container-3-imgs-intro-5"
);
const containerThreeImgsCoins = document.querySelectorAll(
  ".container-3-imgs-coins"
);
const containerThreeImgsCoinsOne = document.querySelector(
  ".container-3-imgs-coins-1"
);
const containerThreeImgsCoinsTwo = document.querySelector(
  ".container-3-imgs-coins-2"
);
const containerThreeImgsCoinsThree = document.querySelector(
  ".container-3-imgs-coins-3"
);
const containerThreeImgsCoinsFour = document.querySelector(
  ".container-3-imgs-coins-4"
);
const containerThreeImgsCoinsFive = document.querySelector(
  ".container-3-imgs-coins-5"
);
const containerThreeImgsCoinOne = document.querySelector(
  ".container-3-imgs-coin-1"
);
const containerThreeImgsCoinTwo = document.querySelector(
  ".container-3-imgs-coin-2"
);
const containerThreeImgsCoinThree = document.querySelector(
  ".container-3-imgs-coin-3"
);
const containerThreeImgsCoinFour = document.querySelector(
  ".container-3-imgs-coin-4"
);

const containerThreeTextIcon = document.querySelectorAll(
  ".container-3-text-icon"
);
const containerThreeTextIconOne = document.querySelector(
  ".container-3-text-icon-1"
);
const containerThreeTextIconTwo = document.querySelector(
  ".container-3-text-icon-2"
);
const containerThreeTextIconThree = document.querySelector(
  ".container-3-text-icon-3"
);
const containerThreeTextIconFour = document.querySelector(
  ".container-3-text-icon-4"
);
const containerThreeTextIconFive = document.querySelector(
  ".container-3-text-icon-5"
);
const containerThreeTextIconSix = document.querySelector(
  ".container-3-text-icon-6"
);
const containerThreeTextIconSeven = document.querySelector(
  ".container-3-text-icon-7"
);
const containerThreeTextIconEight = document.querySelector(
  ".container-3-text-icon-8"
);
const containerThreeTextIconNine = document.querySelector(
  ".container-3-text-icon-9"
);
const containerThreeTextIconTen = document.querySelector(
  ".container-3-text-icon-10"
);
const containerThreeTextIconEleven = document.querySelector(
  ".container-3-text-icon-11"
);
const containerThreeTextIconTwelve = document.querySelector(
  ".container-3-text-icon-12"
);
const containerThreeTextIconThirteen = document.querySelector(
  ".container-3-text-icon-13"
);
const containerThreeTextIconFourteen = document.querySelector(
  ".container-3-text-icon-14"
);
const containerThreeTextIconFifteen = document.querySelector(
  ".container-3-text-icon-15"
);
const containerThreeTextIconImg = document.querySelectorAll(
  ".container-3-text-icon-img"
);
const containerThreeTextIconImgOne = document.querySelector(
  ".container-3-text-icon-img-1"
);
const containerThreeTextIconImgTwo = document.querySelector(
  ".container-3-text-icon-img-2"
);
const containerThreeTextIconImgThree = document.querySelector(
  ".container-3-text-icon-img-3"
);
const containerThreeTextIconImgFour = document.querySelector(
  ".container-3-text-icon-img-4"
);
const containerThreeTextIconImgFive = document.querySelector(
  ".container-3-text-icon-img-5"
);
const containerThreeTextIconImgSix = document.querySelector(
  ".container-3-text-icon-img-6"
);
const containerThreeTextIconImgSeven = document.querySelector(
  ".container-3-text-icon-img-7"
);
const containerThreeTextIconImgEight = document.querySelector(
  ".container-3-text-icon-img-8"
);
const containerThreeTextIconImgNine = document.querySelector(
  ".container-3-text-icon-img-9"
);
const containerThreeTextIconImgTen = document.querySelector(
  ".container-3-text-icon-img-10"
);
const containerThreeTextIconImgEleven = document.querySelector(
  ".container-3-text-icon-img-11"
);
const containerThreeTextIconImgTwelve = document.querySelector(
  ".container-3-text-icon-img-12"
);
const containerThreeTextIconImgThirteen = document.querySelector(
  ".container-3-text-icon-img-13"
);
const containerThreeTextIconImgFourteen = document.querySelector(
  ".container-3-text-icon-img-14"
);
const containerThreeTextIconImgFifteen = document.querySelector(
  ".container-3-text-icon-img-15"
);
const containerThreeTextIconSvg = document.querySelectorAll(
  ".container-3-text-icon-svg"
);
const containerThreeTextIconSvgOne = document.querySelector(
  ".container-3-text-icon-svg-1"
);
const containerThreeTextIconSvgTwo = document.querySelector(
  ".container-3-text-icon-svg-2"
);
const containerThreeTextIconSvgThree = document.querySelector(
  ".container-3-text-icon-svg-3"
);
const containerThreeTextIconSvgFour = document.querySelector(
  ".container-3-text-icon-svg-4"
);
const containerThreeTextIconSvgFive = document.querySelector(
  ".container-3-text-icon-svg-5"
);
const containerThreeTextIconSvgSix = document.querySelector(
  ".container-3-text-icon-svg-6"
);
const containerThreeTextIconSvgSeven = document.querySelector(
  ".container-3-text-icon-svg-7"
);
const containerThreeTextIconSvgEight = document.querySelector(
  ".container-3-text-icon-svg-8"
);
const containerThreeTextIconSvgNine = document.querySelector(
  ".container-3-text-icon-svg-9"
);
const containerThreeTextIconSvgTen = document.querySelector(
  ".container-3-text-icon-svg-10"
);
const containerThreeTextIconSvgEleven = document.querySelector(
  ".container-3-text-icon-svg-11"
);
const containerThreeTextIconSvgTwelve = document.querySelector(
  ".container-3-text-icon-svg-12"
);
const containerThreeTextIconSvgThirteen = document.querySelector(
  ".container-3-text-icon-svg-13"
);
const containerThreeTextIconSvgFourteen = document.querySelector(
  ".container-3-text-icon-svg-14"
);
const containerThreeTextIconSvgFifteen = document.querySelector(
  ".container-3-text-icon-svg-15"
);

const containerThreeTexticons = document.querySelectorAll(
  ".container-3-text-icons"
);
const containerThreeTextIconsOne = document.querySelector(
  ".container-3-text-icons-1"
);
const containerThreeTextIconsTwo = document.querySelector(
  ".container-3-text-icons-2"
);
const containerThreeTextIconsThree = document.querySelector(
  ".container-3-text-icons-3"
);
const containerThreeTextIconsFour = document.querySelector(
  ".container-3-text-icons-4"
);
const containerThreeTextIconsFive = document.querySelector(
  ".container-3-text-icons-5"
);

const containerThreeDetailImg = document.querySelectorAll(
  ".container-3-detail-img"
);
const containerThreeDetailClose = document.querySelectorAll(
  ".container-3-detail-close"
);
const containerThreeDetails = document.querySelector(".container-3-details");
const containerThreeDetail = document.querySelectorAll(".container-3-detail");
const containerThreeDetailText = document.querySelectorAll(
  ".container-3-detail-text"
);
const containerThreeDetailTextYi = document.querySelectorAll(
  ".container-3-detail-text-yi"
);
const containerThreeDetailTextEr = document.querySelectorAll(
  ".container-3-detail-text-er"
);
const containerThreeDetailTextSan = document.querySelectorAll(
  ".container-3-detail-text-san"
);
const containerThreeDetailTextSi = document.querySelectorAll(
  ".container-3-detail-text-si"
);
const containerThreeDetailTextWu = document.querySelectorAll(
  ".container-3-detail-text-wu"
);

const containerThreeDetailOne = document.querySelector(".container-3-detail-1");
const containerThreeDetailTwo = document.querySelector(".container-3-detail-2");
const containerThreeDetailThree = document.querySelector(
  ".container-3-detail-3"
);
const containerThreeDetailFour = document.querySelector(
  ".container-3-detail-4"
);
const containerThreeDetailFive = document.querySelector(
  ".container-3-detail-5"
);
const containerThreeTextIconThreeOne = document.querySelector(
  ".container-3-text-icon-3-1"
);
const containerThreeTextIconThreeTwo = document.querySelector(
  ".container-3-text-icon-3-2"
);
const containerThreeTextIconThreeThree = document.querySelector(
  ".container-3-text-icon-3-3"
);
const containerThreeTextIconThreeFour = document.querySelector(
  ".container-3-text-icon-3-4"
);
const containerThreeTextIconThreeFive = document.querySelector(
  ".container-3-text-icon-3-5"
);

const containerThreeDetailButton = document.querySelectorAll(
  ".container-3-detail-button"
);
const containerThreeDetailButtonButton = document.querySelectorAll(
  ".container-3-detail-button-button"
);
const containerThreeDetailButtonBgOne = document.querySelectorAll(
  ".container-3-detail-button-bg-1"
);
const containerThreeDetailButtonBgTwo = document.querySelectorAll(
  ".container-3-detail-button-bg-2"
);

// container 4
const containerFourBackground = document.querySelector(
  ".container-4-background"
);
const containerFourMain = document.querySelector(".container-4-main");
const containerFourMainLive = document.querySelector(".container-4-main-live");
const containerFourMainRecommend = document.querySelector(
  ".container-4-main-recommend"
);

const container4MainRecommendVideos = document.querySelector(
  ".container-4-main-recommend-videos"
);
const container4MainRecommendVideo = document.querySelectorAll(
  ".container-4-main-recommend-video"
);
const container4MainRecommend1st = document.querySelector(
  ".container-4-main-recommend-1st"
);
const liaoli = document.querySelectorAll(".liaoli");
const game = document.querySelectorAll(".game");
const gehua = document.querySelectorAll(".gehua");
const gaozhi = document.querySelectorAll(".gaozhi");
const zatan = document.querySelectorAll(".zatan");
const uichoko = document.querySelectorAll(".uichoko");
const container4MainRecommendTag = document.querySelectorAll(
  ".container-4-main-recommend-tag"
);
const container4MainRecommendTag1 = document.querySelector(
  ".container-4-main-recommend-tag-1"
);
const container4MainRecommendTag2 = document.querySelector(
  ".container-4-main-recommend-tag-2"
);
const container4MainRecommendTag3 = document.querySelector(
  ".container-4-main-recommend-tag-3"
);
const container4MainRecommendTag4 = document.querySelector(
  ".container-4-main-recommend-tag-4"
);
const container4MainRecommendTag5 = document.querySelector(
  ".container-4-main-recommend-tag-5"
);
const container4MainRecommendTag6 = document.querySelector(
  ".container-4-main-recommend-tag-6"
);
const container4MainRecommendTag7 = document.querySelector(
  ".container-4-main-recommend-tag-7"
);

const container4mainRecommendVideosSwitchButtonLeft = document.querySelector(
  ".container-4-main-recommend-videos-switchButton-left"
);
const container4mainRecommendVideosSwitchButtonRight = document.querySelector(
  ".container-4-main-recommend-videos-switchButton-right"
);
const container4MainRecommendVideoBox = document.querySelector(
  ".container-4-main-recommend-videoBox"
);

const container4MainIntroBoxTextBox3More = document.querySelector(
  ".container-4-main-introBox-textBox-3-more"
);
const container4Details = document.querySelector(".container-4-details");
const container4Detail4 = document.querySelector(".container-4-detail-4");

// container-5
const containerFiveClose = document.querySelectorAll(".container-5-close");

const containerFiveBox = document.querySelectorAll(".container-5-box");
const containerFiveBoxOne = document.querySelector(".container-5-box-1");
const containerFiveBoxTwo = document.querySelector(".container-5-box-2");
const containerFiveBoxThree = document.querySelector(".container-5-box-3");
const containerFiveBoxFour = document.querySelector(".container-5-box-4");

const containerFiveBoxImgImg = document.querySelectorAll(
  ".container-5-box-img-img"
);

const containerFiveHoloFes = document.querySelector(".container-5-holoFes");
const containerFiveFes = document.querySelectorAll(".container-5-fes");
const containerFiveFesOne = document.querySelector(".container-5-fes-1");

const containerFiveFesTwo = document.querySelector(".container-5-fes-2");

const containerFiveFesThree = document.querySelector(".container-5-fes-3");

const containerFiveFesFour = document.querySelector(".container-5-fes-4");

const containerFiveFesFive = document.querySelector(".container-5-fes-5");

const containerFiveFesSix = document.querySelector(".container-5-fes-6");

const containerFiveFesBg = document.querySelectorAll(".container-5-fes-bg");
const containerFiveFesBgCanvas = document.querySelector(
  ".container-5-fes-bgCanvas"
);
const containerFiveFesImgBox = document.querySelectorAll(
  ".container-5-fes-imgBox"
);

const containerFiveholoFes = document.querySelector(".container-5-holoFes");
const containerFiveFesCloses = document.querySelector(
  ".container-5-fes-closes"
);
const containerFiveFesCloseFront = document.querySelector(
  ".container-5-fes-close-front "
);
const containerFiveFesCloseBack = document.querySelectorAll(
  ".container-5-fes-close-back"
);

const containerFiveFesTextBoxPageMoveOne = document.querySelectorAll(
  ".container-5-fes-textBox-pageMove-1 "
);
const containerFiveFesTextBoxPageMoveTwo = document.querySelectorAll(
  ".container-5-fes-textBox-pageMove-2 "
);

const containerFiveFesTextBoxTitle = document.querySelectorAll(
  ".container-5-fes-textBox-title"
);
const containerFiveFesTextBoxIntro = document.querySelectorAll(
  ".container-5-fes-textBox-intro"
);
const containerFiveFesTextBoxTime = document.querySelectorAll(
  ".container-5-fes-textBox-time"
);
const containerFiveFesTextBoxHolo = document.querySelectorAll(
  ".container-5-fes-textBox-holo"
);
const containerFiveFesTextBoxKeywords = document.querySelectorAll(
  ".container-5-fes-textBox-keywords"
);
const containerFiveFesTextBoxButtons = document.querySelectorAll(
  ".container-5-fes-textBox-buttons"
);

const containerFiveOhayoContent = document.querySelectorAll(
  ".container-5-ohayo-content"
);
const containerFiveOhayoContentOne = document.querySelector(
  ".container-5-ohayo-content-1"
);
const containerFiveOhayoContentTwo = document.querySelector(
  ".container-5-ohayo-content-2"
);
const containerFiveOhayoContentThree = document.querySelector(
  ".container-5-ohayo-content-3"
);
const containerFiveOhayoContentFour = document.querySelector(
  ".container-5-ohayo-content-4"
);
const containerFiveOhayoContentFive = document.querySelector(
  ".container-5-ohayo-content-5"
);
const containerFiveOhayoContentSix = document.querySelector(
  ".container-5-ohayo-content-6"
);
const containerFiveOhayoContentSeven = document.querySelector(
  ".container-5-ohayo-content-7"
);

const containerFiveOhayoContentBack = document.querySelectorAll(
  ".container-5-ohayo-content-Back"
);

const containerFiveOhayoContentBackImg = document.querySelectorAll(
  ".container-5-ohayo-content-back-img"
);
const containerFiveOhayoContentBackImgOne = document.querySelector(
  ".container-5-ohayo-content-back-img-1"
);
const containerFiveOhayoContentBackImgTwo = document.querySelector(
  ".container-5-ohayo-content-back-img-2"
);
const containerFiveOhayoContentBackImgThree = document.querySelector(
  ".container-5-ohayo-content-back-img-3"
);
const containerFiveOhayoContentBackImgFour = document.querySelector(
  ".container-5-ohayo-content-back-img-4"
);
const containerFiveOhayoContentBackImgFive = document.querySelector(
  ".container-5-ohayo-content-back-img-5"
);
const containerFiveOhayoContentBackImgSix = document.querySelector(
  ".container-5-ohayo-content-back-img-6"
);
const containerFiveOhayoContentBackImgSeven = document.querySelector(
  ".container-5-ohayo-content-back-img-7"
);

const containerFiveOhayoContentMiddle = document.querySelectorAll(
  ".container-5-ohayo-content-middle"
);
const containerFiveOhayoContentMiddleOne = document.querySelector(
  ".container-5-ohayo-content-middle-1"
);
const containerFiveOhayoContentMiddleTwo = document.querySelector(
  ".container-5-ohayo-content-middle-2"
);
const containerFiveOhayoContentMiddleThree = document.querySelector(
  ".container-5-ohayo-content-middle-3"
);
const containerFiveOhayoContentMiddleFour = document.querySelector(
  ".container-5-ohayo-content-middle-4"
);
const containerFiveOhayoContentMiddleFive = document.querySelector(
  ".container-5-ohayo-content-middle-5"
);
const containerFiveOhayoContentMiddleSix = document.querySelector(
  ".container-5-ohayo-content-middle-6"
);
const containerFiveOhayoContentMiddleSeven = document.querySelector(
  ".container-5-ohayo-content-middle-7"
);

const containerFiveOhayo = document.querySelector(".container-5-ohayo");
const containerFiveOhayoCloses = document.querySelector(
  ".container-5-ohayo-closes"
);

const containerFiveTheater = document.querySelector(".container-5-theater");
const containerFiveTheaterCloses = document.querySelector(
  ".container-5-theater-closes"
);
const containerFiveTheaterMainNumberTwoBlack = document.querySelector(
  ".container-5-theater-main-number-2-black"
);
const containerFiveTheaterMainNumberTwoBlackCopy = document.querySelector(
  ".container-5-theater-main-number-2-black-copy"
);

const containerFiveTheaterMainViewMore = document.querySelector(
  ".container-5-theater-main-viewMore"
);
const containerFiveTheaterMainViewMoreTextUnderline = document.querySelectorAll(
  ".container-5-theater-main-viewMore-text-underline"
);
const containerFiveTheaterMainViewMoreTextUnderlineTwo =
  document.querySelectorAll(
    ".container-5-theater-main-viewMore-text-underline-2"
  );

const containerFiveTheaterMainViewMoreArr = document.querySelector(
  ".container-5-theater-main-viewMore-arr"
);
const containerFiveTheaterMainArrLeft = document.querySelector(
  ".container-5-theater-main-arr-left"
);
const containerFiveTheaterMainArrRight = document.querySelector(
  ".container-5-theater-main-arr-right"
);

const containerFiveTheaterMainContents = document.querySelector(
  ".container-5-theater-main-contents"
);
const containerFiveTheaterMainContent = document.querySelectorAll(
  ".container-5-theater-main-content"
);
const containerFiveTheaterMainContent1 = document.querySelector(
  ".container-5-theater-main-content-1"
);
const containerFiveTheaterMainContent2 = document.querySelector(
  ".container-5-theater-main-content-2"
);
const containerFiveTheaterMainContent3 = document.querySelector(
  ".container-5-theater-main-content-3"
);
const containerFiveTheaterMainContent4 = document.querySelector(
  ".container-5-theater-main-content-4"
);

const containerFiveTheaterMainNumber11 = document.querySelector(
  ".container-5-theater-main-number-1-1"
);
const containerFiveTheaterMainNumber12 = document.querySelector(
  ".container-5-theater-main-number-1-2"
);
const containerFiveTheaterMainNumber13 = document.querySelector(
  ".container-5-theater-main-number-1-3"
);
const containerFiveTheaterMainNumber14 = document.querySelector(
  ".container-5-theater-main-number-1-4"
);

const containerFiveTheaterMainContentTextBoxTitleUnderline =
  document.querySelectorAll(
    ".container-5-theater-main-content-textBox-title-underline"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline1 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-1"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline2 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-2"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline3 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-3"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline4 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-4"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline11 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-1-1"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline21 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-2-1"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline31 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-3-1"
  );
const containerFiveTheaterMainContentTextBoxTitleUnderline41 =
  document.querySelector(
    ".container-5-theater-main-content-textBox-title-underline-4-1"
  );
const containerFiveTheaterMainContentImgBoxImg1 = document.querySelector(
  ".container-5-theater-main-content-imgBox-img-1"
);
const containerFiveTheaterMainContentImgBoxImg2 = document.querySelector(
  ".container-5-theater-main-content-imgBox-img-2"
);
const containerFiveTheaterMainContentImgBoxImg3 = document.querySelector(
  ".container-5-theater-main-content-imgBox-img-3"
);
const containerFiveTheaterMainContentImgBoxImg4 = document.querySelector(
  ".container-5-theater-main-content-imgBox-img-4"
);

const containerFivePhotos = document.querySelector(".container-5-photos");
const containerFivePhotosPhotoBoxs = document.querySelector(
  ".container-5-photos-photoBoxs"
);
const containerFivePhotosPhotoBox = document.querySelectorAll(
  ".container-5-photos-photoBox"
);

const containerFivePhotosPhotoBox1 = document.querySelector(
  ".container-5-photos-photoBox-1"
);
const containerFivePhotosPhotoBox2 = document.querySelector(
  ".container-5-photos-photoBox-2"
);
const containerFivePhotosPhotoBox3 = document.querySelector(
  ".container-5-photos-photoBox-3"
);
const containerFivePhotosPhotoBox4 = document.querySelector(
  ".container-5-photos-photoBox-4"
);
const containerFivePhotosCloses = document.querySelector(
  ".container-5-photos-closes"
);

const containerFiveCloses = document.querySelectorAll(".container-5-closes");

const footer = document.querySelector(".footer");

/////////
/////////////
//colorEgg
const colorEggRunButton = document.querySelector(".colorEgg-runButton");

//colorEgg-1
const colorEgg1 = document.querySelector(".colorEgg-1");
const colorEgg1AudioButtonAudio = document.querySelectorAll(
  ".colorEgg-1-audioButton-audio"
);
const colorEgg1AudioButton = document.querySelectorAll(
  ".colorEgg-1-audioButton"
);
const colorEgg1AudioButtonImgText = document.querySelectorAll(
  ".colorEgg-1-audioButton-img-text"
);
const colorEgg1AudioButtonImgTextOne = document.querySelector(
  ".colorEgg-1-audioButton-img-text-1"
);
const colorEgg1AudioButtonImgTextTwo = document.querySelector(
  ".colorEgg-1-audioButton-img-text-2"
);
const colorEgg1AudioButtonImgTextThree = document.querySelector(
  ".colorEgg-1-audioButton-img-text-3"
);
const colorEgg1AudioButtonOne = document.querySelector(
  ".colorEgg-1-audioButton-1"
);
const colorEgg1AudioButtonTwo = document.querySelector(
  ".colorEgg-1-audioButton-2"
);
const colorEgg1AudioButtonThree = document.querySelector(
  ".colorEgg-1-audioButton-3"
);
const colorEgg1AudioButtonAudioOne = document.querySelector(
  ".colorEgg-1-audioButton-audio-1"
);
const colorEgg1AudioButtonAudioTwo = document.querySelector(
  ".colorEgg-1-audioButton-audio-2"
);
const colorEgg1AudioButtonAudioThree = document.querySelector(
  ".colorEgg-1-audioButton-audio-3"
);
//colorEgg-2
const colorEgg2 = document.querySelector(".colorEgg-2");

const colorEgg2ContainerImgBoxImg = document.querySelectorAll(
  ".colorEgg-2-container-imgBox-img"
);
const colorEgg2ContainerImgBoxImg1 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-1"
);
const colorEgg2ContainerImgBoxImg2 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-2"
);
const colorEgg2ContainerImgBoxImg3 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-3"
);
const colorEgg2ContainerImgBoxImg4 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-4"
);
const colorEgg2ContainerImgBoxImg5 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-5"
);
const colorEgg2ContainerImgBoxImg6 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-6"
);
const colorEgg2ContainerImgBoxImg7 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-7"
);
const colorEgg2ContainerImgBoxImg8 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-8"
);
const colorEgg2ContainerImgBoxImg9 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-9"
);
const colorEgg2ContainerImgBoxImg10 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-10"
);
const colorEgg2ContainerImgBoxImg11 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-11"
);
const colorEgg2ContainerImgBoxImg12 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-12"
);
const colorEgg2ContainerImgBoxImg13 = document.querySelector(
  ".colorEgg-2-container-imgBox-img-13"
);

const colorEgg2ArrLeft = document.querySelector(".colorEgg-2-arr-left");
const colorEgg2ArrRight = document.querySelector(".colorEgg-2-arr-right");

const colorEgg2Close = document.querySelector(".colorEgg-2-close");

// colorEgg-3
const joji = document.querySelectorAll(".joji");
const colorEgg3 = document.querySelectorAll(".colorEgg-3");
const colorEgg3Text = document.querySelectorAll(".colorEgg-3-text");
// const colorEgg31 = document.querySelectorAll(".colorEgg-3-1");
// const colorEgg32 = document.querySelectorAll(".colorEgg-3-2");

// colorEgg-4
const colorEgg4 = document.querySelector(".colorEgg-4");
const colorEgg4Bg2 = document.querySelector(".colorEgg-4-bg-2");
const colorEgg4Close = document.querySelector(".colorEgg-4-close");

const colorEgg4MainImgBox = document.querySelector(".colorEgg-4-main-imgBox");
const colorEgg4MainImgBoxImg = document.querySelector(
  ".colorEgg-4-main-imgBox-img"
);
const colorEgg4MainMusicPlay = document.querySelector(
  ".colorEgg-4-main-musicPlay"
);
const colorEgg4MainMusicPause = document.querySelector(
  ".colorEgg-4-main-musicPause"
);
const colorEgg4MainMusicPauseButton = document.querySelector(
  ".colorEgg-4-main-musicPause-button"
);
const colorEgg4PromptButton = document.querySelector(
  ".colorEgg-4-prompt-button"
);
const colorEgg4MainImgBoxScrollBar = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar"
);
const colorEgg4MainImgBoxScrollBarPoint = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar-point"
);
const colorEgg4MainImgBoxScrollBarLine = document.querySelectorAll(
  ".colorEgg-4-main-imgBox-scrollBar-line"
);
const colorEgg4MainImgBoxScrollBarLine1 = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar-line-1"
);
const colorEgg4MainImgBoxScrollBarLine2 = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar-line-2"
);
const colorEgg4MainImgBoxScrollBarLine1Img = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar-line-1-img"
);
const colorEgg4MainImgBoxScrollBarLine2Img = document.querySelector(
  ".colorEgg-4-main-imgBox-scrollBar-line-2-img"
);
const colorEgg4MainImgBoxScrollBarLineImg = document.querySelectorAll(
  ".colorEgg-4-main-imgBox-scrollBar-line-img"
);

const colorEgg4MainTexts = document.querySelector(".colorEgg-4-main-texts");
const colorEgg4MainLrcs = document.querySelector(".colorEgg-4-main-lrcs");
const colorEgg4MainLrcsLrcBox = document.querySelector(
  ".colorEgg-4-main-lrcs-lrcBox"
);
const colorEgg4MainLrcsLrcBoxLrc = document.querySelector(
  ".colorEgg-4-main-lrcs-lrcBox-lrc"
);

const colorEgg4Prompt = document.querySelector(".colorEgg-4-prompt");

//colorEgg-5
const colorEgg5 = document.querySelector(".colorEgg-5");
//colorEgg-6
const colorEgg6 = document.querySelector(".colorEgg-6");
const colorEgg6Close = document.querySelector(".colorEgg-6-close");
const colorEgg6TextBoxText = document.querySelectorAll(
  ".colorEgg-6-textBox-text"
);
const colorEgg6TextBoxTextFrom = document.querySelector(
  ".colorEgg-6-textBox-text-from"
);
const colorEgg6Uichoko = document.querySelector(".colorEgg-6-uichoko");

const colorEgg6UichokoImg = document.querySelector(".colorEgg-6-uichoko-img");
