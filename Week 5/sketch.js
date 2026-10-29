//*********************************************//
// TITLE SCREEN

let titleLoadSplash = 600;
let titleLoad = true;

//*********************************************//
// MENU HANDLING

let menuActive = 1;
let menuSelect = 1;

let optionSizeA = 60;
let optionSizeB = 60;
let optionSizeC = 60; 
let optionSizeD = 60;

//*********************************************//
// OPTIONS

let optionsActive = 0;

let optionsSelect = 1;

let bgmSelected = 0;
let sfxSelected = 0;

let optionSizeE = 60;
let optionSizeF = 60;
let optionSizeG = 60; 
let optionSizeH = 60; 

//*********************************************//
// MUSIC ROOM

let mroomActive = 0;

let mroomSelect = 1;

let trackSizeA = 40;
let trackSizeB = 40;
let trackSizeC = 40; 
let trackSizeD = 40;
let trackSizeE = 40;
let trackSizeF = 40; 
let trackSizeG = 40; 

//*********************************************//
// CHARACTER SELECT SCREEN
// CHARACTERS > SPLASH > TITLE

let charSelectActive = 0;
let charSelect = 1;

let azuriEase = 0
let azuriTargetPos = 140
let azuriSplashEase = -50
let azuriSplashTargetPos = 0;
let azuriTitleEase = -200
let azuriTitlePos = -0

let milkEase = -30
let milkTargetPos = 80
let milkSplashEase = -50
let milkSplashTargetPos = 0;
let milkTitleEase = -200
let milkTitlePos = -15

let roxieEase = -120
let roxieTargetPos = 0
let roxieSplashEase = -50
let roxieSplashTargetPos = 0;
let roxieTitleEase = -200
let roxieTitlePos = 0

let kyrieEase = -30
let kyrieTargetPos = 50
let kyrieSplashEase = -50
let kyrieSplashTargetPos = 0;
let kyrieTitleEase = -200
let kyrieTitlePos = -0

//*********************************************//
// CHARACTER HANDLING

let azuriSelected = 0;
// Azuri [Highly Unresponsive to Prayers]

let milkSelected = 0;
// Milk [Deviant of Eastern Wonderland]

let roxieSelected = 0;
// Roxie [Apex of Faith]

let kyrieSelected = 0;
// Kyrie [Imperishable Knight]

//*********************************************//
// QUIZ HANDLING

let quizActive = 0;

//*********************************************//
// QUIZ HANDLING

let staffActive = 0;

let questionScore = 0;

//*********************************************//

//*********************************************//
// AZURI ROUTE (PC98, EOSD - POFV)

let currentAzuri = 0;

let azuriScenario = [
  {
    question: "What was the very first Touhou game?",
    answers: ["Reiiden ~ Highly Responsive to Prayers, Koumakyou ~ The Embodiment of Scarlet Devil, Fuujinroku ~ Mountain of Faith, Koumakyou ~ Embodiment of Scarlet Devil New Classic"],
    correct: "Reiiden ~ Highly Responsive to Prayers",
    explanation: "Highly Responsive to Prayers was the first Touhou game, being finished in 1995. Though it would later be released alongside Fuumaroku ~ Story of Eastern Wonderland at Comiket 52, around 1997."
  },

  {
    question: "What was the original source of Bad Apple?",
    answers: ["Koumakyou ~ Embodiment of Scarlet Devil", "Gensokyo ~ Lotus Land Story", "Reiiden ~ Highly Responsive to Prayers", "Fuumaroku ~ Story of Eastern Wonderland"],
    correct: "Gensokyo ~ Lotus Land Story",
    explanation: "Highly Responsive to Prayers was the first Touhou game, being finished in 1995. Though it would later be released alongside Fuumaroku ~ Story of Eastern Wonderland at Comiket 52, around 1997."
  },

  {
    question: "What playable character was scrapped during development of Koumakyou?",
    answers: ["Reimu Hakurei", "Marisa Kirisame", "Rin Satsuki", "Sakuya Izayoi"],
    correct: "Rin Satsuki",
    explanation: "Whereas Reimu and Marisa did make the cut, Sakuya would only become playable as of Touhou Youyoumu ~ Perfect Cherry Blossom. Rin Satsuki was a scrapped playable character only found in the hex code, near Reimu's and Marisa's lines.",
  },

  {
    question: "In Fuumaroku ~ Story of Eastern Wonderland, in what way does Marisa NOT help Reimu train in her bad ending?",
    answers: ["Marisa burns Reimu at the cross", "Marisa sends Reimu to the Sun", "Marisa drowns Reimu in goop", "Marisa starts blasting Reimu with lasers"],
    correct: "Marisa starts blasting Reimu with lasers",
    explanation: "In each of Reimu's endings, Marisa comes flying back to the shrine to help Reimu train. However, unlike a standard battle of bullets, Marisa's methods are unconventional at most - putting Reimu on a cross or sending her into the stratosphere.",
  },

  {
    question: "In Fuumaroku ~ Story of Eastern Wonderland, in what way does Marisa NOT help Reimu train in her bad ending?",
    answers: ["Marisa burns Reimu at the cross", "Marisa sends Reimu to the Sun", "Marisa drowns Reimu in goop", "Marisa starts blasting Reimu with lasers"],
    correct: "Marisa starts blasting Reimu with lasers",
  },
  
  {
    question: "In Fuumaroku ~ Story of Eastern Wonderland, in what way does Marisa NOT help Reimu train in her bad ending?",
    answers: ["Marisa burns Reimu at the cross", "Marisa sends Reimu to the Sun", "Marisa drowns Reimu in goop", "Marisa starts blasting Reimu with lasers"],
    correct: "Marisa starts blasting Reimu with lasers",
  },
];

let azuriDialogue = [
  "It's kind of weird, really.",
  "Not having to use bullets for once.",
  "I guess for me, it is kind of a normality.",
  "Thus, I can't really complain.",
  "(← carefree)",
  "Complain about what?",
  "Oh. It's the shrine maiden from the mountains.",
  "Don't you have better places to be?",
  "I'm solving the incident, just like you.",
  "Though, I'm capable of succeeding, unlike you.",
  "Harsh.",
  "Knowing you, I wouldn't be surprised",
  "if all this was your doing.",
  "Well, it isn't,",
  "So find another culprit.",

  "I suppose you're stronger than I thought.",
  "There's more to me than meets the eye!",
  "Unfortunately, I can't let you pass here.",
  "This is the demo version,",
  "so there's nothing left for you to solve.",
  "Ah. I see. How unfortunate."
]

//*********************************************//
// ROXIE ROUTE (MOF - TD, LOLK, DIPP, TGOM, WOHS, SOPM)

//*********************************************//
// MILK ROUTE (DDC - FW)

//*********************************************//
// KYRIE ROUTE (DLFR, GFC, TGA, MA, NtOJ, DB"OA")

//*********************************************//


//*********************************************//
// SOUND AND SFX VOLUME

let bgmVol = 0.5;
let bgmVolSlider = 50;

let sfxVol = 0.5;
let sfxVolSlider = 50;

//*********************************************//
// SOUND TYPES

let menu;
// The Space Shrine Maiden Appears -- Touhou Kanjuuden ~ Legacy of Lunatic Kingdom (ZUN, arrangement by Azuri)

let earlyquiz;
// Desire Drive -- Touhou Shinreibyou ~ Ten Desires (ZUN, arrangement by Azuri)

let quiz;
// Shoutoku Legend ~ True Administrator -- Touhou Shinreibyou ~ Ten Desires (ZUN, arrangement by Azuri)

let staff;
// The Purest Sky and Sea -- Touhou East-West Tokaido ~ Retrospective 53 Minutes (ZUN, arrangement by Azuri)

let pb1;

let pb2;

//*********************************************//
// SFX TYPES


let menuSwitch;
// RIPPED FROM Touhou Kishinjou ~ Double Dealing Character THROUGH THE SOUND RESOURCE

let menuConfirm;
// RIPPED FROM Touhou Kishinjou ~ Double Dealing Character THROUGH THE SOUND RESOURCE

let menuInvalid;
// RIPPED FROM Touhou Kishinjou ~ Double Dealing Character THROUGH THE SOUND RESOURCE

let bossDefeat;
// RIPPED FROM Touhou Kishinjou ~ Double Dealing Character THROUGH THE SOUND RESOURCE


//*********************************************//
// BACKGROUND

let bgMenu;

function preload() {

  //*********************************************//
  // MUSIC
  title = loadSound('./bgm/menu.ogg')
  console.log('downloaded 1')

  earlyquiz = loadSound('./bgm/stage1.ogg')
  quiz = loadSound('./bgm/stage6.ogg')

  pb1 = loadSound('./bgm/prequiz1.ogg')
  pb2 = loadSound('./bgm/prequiz2.ogg')

  console.log('downloaded 2a 2b 2c 2d')

  staff = loadSound('./bgm/staffcred.ogg')
  console.log('downloaded 3')

  //*********************************************//
  // SFX
  menuSwitch = loadSound('./sound/select.wav')
  console.log('downloaded 4')

  menuConfirmed = loadSound('./sound/ok.wav')
  console.log('downloaded 5')

  menuInvalid = loadSound('./sound/invalid.wav')
  console.log('downloaded 6')

  bossDefeat = loadSound('./sound/defeat.wav')
  console.log('downloaded 7')

  //*********************************************//
  // BACKGROUNDS
  bgMenu = loadImage('./ui/menuBackground.png');

  titleMenu = loadImage('./ui/pmiraTitle.png');

  titleOptions = loadImage('./ui/optionsTitle.png');

  titleMroom = loadImage('./ui/mroomTitle.png')
  
  //*********************************************//
  // CHARACTERS

  azuriPort = loadImage("./characters/azuriDesign.png")
  milkPort = loadImage("./characters/milkDesign.png")
  roxiePort = loadImage("./characters/roxieDesign.png")
  kyriePort = loadImage("./characters/kyrieDesign.png")

  azuriSplash = loadImage("./ui/azuriSplash.png")
  milkSplash = loadImage("./ui/milkSplash.png")
  roxieSplash = loadImage("./ui/roxieSplash.png")
  kyrieSplash = loadImage("./ui/kyrieSplash.png")

  azuriTitle = loadImage("./ui/azuriTitle.png")
  milkTitle = loadImage("./ui/milkTitle.png")
  roxieTitle = loadImage("./ui/roxieTitle.png")
  kyrieTitle = loadImage("./ui/kyrieTitle.png")

  //*********************************************//
  // ANTAGONISTS

  velvetPort = loadImage("./characters/velvetDesign.png")
  trollianPort
  vexxterPort
  fezzezPort

  //*********************************************//
  // AZURI ENDINGS

  //*********************************************//
  // MILK ENDINGS

  //*********************************************//
  // ROXIE ENDINGS

  //*********************************************//
  // KYRIE ENDINGS
}

function setup() {
  createCanvas(1280, 720);
  background('#a08a8a');

  if (menuActive === 1 || optionsActive === 1) {
    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    titleMusic();
  }

  if (quizActive === 1) {
    quizMusic();
  }

  if (staffActive === 1) {
    staffMusic();
  }

}

function draw() {

  if (menuActive === 1 && optionsActive === 0) {
    textStyle(ITALIC)
    image(bgMenu, 0, 0);
    drawTitle();
    isMenuActive();
    mainMenu()
  }
  
  if (menuActive === 1 && optionsActive === 1) {
    textStyle(NORMAL)
    image(bgMenu, 0, 0);
    menuOptions();
  }

  if (menuActive === 1 && mroomActive === 1) {
    textStyle(ITALIC)
    image(bgMenu, 0, 0);
    menuMusic()
  }

  if (menuActive === 1 && charSelectActive === 1) {
    image(bgMenu, 0, 0);
    fill('#1e202467')
    rect(0, 0, 1280, 720)
    menuCharacterSelect();
  }

  if (menuActive === 0 && charSelectActive === 1) {
    image(bgMenu, 0, 0);
    fill('#1e202467')
    rect(0, 0, 1280, 720)
    menuCharacterSelect();
  }
}

//*********************************************//
// MENU FUNCTIONS

function isMenuActive() {
  textSize(30)
  textFont('FOT-Greco Std')
}

function drawTitle() {

  image(milkPort, 650, -50);
  image(azuriPort, 550, 0);
  image(titleMenu, 0, 0)
  

  fill('#FFFFFF')
  textFont('FOT-Greco Std')
}

function mainMenu() {

  menuSelect = constrain(menuSelect, 1, 4);

//*****************************************************//

  if (menuSelect === 1) {
    fill('#caf9ff')
    optionSizeA *= 1.05;
    optionSizeA = constrain(optionSizeA, 60, 80);
  } else if (menuSelect !== 1) {
    fill('#ffffff')
    optionSizeA *= 0.95;
    optionSizeA = constrain(optionSizeA, 60, 80);
  }

  textSize(optionSizeA)
  text('START', 60, 350);

  if (menuSelect === 2) {
    fill('#caf9ff')
    optionSizeB *= 1.05;
    optionSizeB = constrain(optionSizeB, 60, 80);
  } else if (menuSelect !== 2) {
    fill('#ffffff')
    optionSizeB *= 0.95;
    optionSizeB = constrain(optionSizeB, 60, 80);
  }

  textSize(optionSizeB)
  text('MUSIC ROOM', 90, 425);

  if (menuSelect === 3) {
    fill('#caf9ff')
    optionSizeC *= 1.05;
    optionSizeC = constrain(optionSizeC, 60, 80);
  } else if (menuSelect !== 3) {
    fill('#ffffff')
    optionSizeC *= 0.95;
    optionSizeC = constrain(optionSizeC, 60, 80);
  }

  textSize(optionSizeC)
  text('OPTION', 120, 500);

  if (menuSelect === 4) {
    fill('#caf9ff')
    optionSizeD *= 1.05;
    optionSizeD = constrain(optionSizeD, 60, 80);
  } else if (menuSelect !== 4) {
    fill('#ffffff')
    optionSizeD *= 0.95;
    optionSizeD = constrain(optionSizeD, 60, 80);
  }

  textSize(optionSizeD)
  text('QUIT', 150, 575);

  //************************************//
  // CHARACTER SELECT STUFF

  if (charSelectActive === 0) {
    azuriEase = 0
    milkEase = -30
    kyrieEase = -30
    roxieEase = -120
    
    // easing reset

    azuriSplashEase = -50
    milkSplashEase = -50
    roxieSplashEase = -50
    kyrieSplashEase = -50
    
    // splash ease reset

    azuriTitleEase = -200
    milkTitleEase = -200
    roxieTitleEase = -200
    kyrieTitleEase = -200
  }
}


function menuCharacterSelect() {
  charSelect = constrain(charSelect, 1, 4)

  azuriTitle.resize(720, 720)
  milkTitle.resize(720, 720)
  roxieTitle.resize(720, 720)
  kyrieTitle.resize(720, 720)

  if (charSelectActive === 1 && charSelect === 1) {

    milkEase = -30
    roxieEase = -120
    kyrieEase = -30 

    kyrieSplashEase = -50
    milkSplashEase = -50
    roxieSplashEase = -50

    kyrieTitleEase = -200
    milkTitleEase = -200
    roxieTitleEase = -200
  
    azuriSplashEase = lerp(azuriSplashEase, azuriSplashTargetPos, 0.4)
    image(azuriSplash, azuriSplashEase, 0)

    azuriTitleEase = lerp(azuriTitleEase, azuriTitlePos, 0.2)
    image(azuriTitle, 0, azuriTitleEase)

    azuriEase = lerp(azuriEase, azuriTargetPos, 0.2)
    image(azuriPort, azuriEase, -30, 800 * azuriPort.width / azuriPort.height, 800)

    fill('#9fe0ff')
    textSize(40)
    textStyle(ITALIC)
    text("..Can someone tell me how.. y'know..", 550, 300)
    text("How is this supposed to affect me. At all.", 550, 340)

    fill('#ffffff')
    textSize(30)
    textStyle(ITALIC)
    text("For those who want to take it easy.", 550, 380)
    
    text("HRTP - MS, EOSD, PCB, IAMP, IN, POFV", 560, 700)
  }

  if (charSelectActive === 1 && charSelect === 2) {

    azuriEase = -30
    roxieEase = -120
    kyrieEase = -30 

    azuriSplashEase = -50
    kyrieSplashEase = -50
    roxieSplashEase = -50

    kyrieTitleEase = -200
    azuriTitleEase = -200
    roxieTitleEase = -200

    milkSplashEase = lerp(milkSplashEase, milkSplashTargetPos, 0.4)
    image(milkSplash, milkSplashEase, 0)

    milkTitleEase = lerp(milkTitleEase, milkTitlePos, 0.2)
    image(milkTitle, 0, milkTitleEase)

    milkEase = lerp(milkEase, milkTargetPos, 0.2)
    image(milkPort, milkEase, -20, 800 * milkPort.width / milkPort.height, 800)

    fill('#c99fff')
    textSize(40)
    textStyle(ITALIC)
    text("I was hoping things would lay low...", 550, 300)
    text("Guess we'll need a fresh coat of paint!", 550, 340)

    fill('#ffffff')
    textSize(30)
    textStyle(ITALIC)
    text("A difficulty that is both calm and cruel.", 550, 380)
    
    text("MOF - TD, DIPP, TGOM", 560, 700)

  }

  if (charSelectActive === 1 && charSelect === 3) {
    azuriEase = 0
    milkEase = -30
    kyrieEase = -30 

    azuriSplashEase = -50
    kyrieSplashEase = -50
    milkSplashEase = -50

    kyrieTitleEase = -200
    milkTitleEase = -200
    azuriTitleEase = -200

    roxieSplashEase = lerp(roxieSplashEase, roxieSplashTargetPos, 0.4)
    image(roxieSplash, roxieSplashEase, 0)

    roxieTitleEase = lerp(roxieTitleEase, roxieTitlePos, 0.2)
    image(roxieTitle, 0, roxieTitleEase)

    roxieEase = lerp(roxieEase, roxieTargetPos, 0.2)
    image(roxiePort, roxieEase, -20, 800 * roxiePort.width / roxiePort.height, 800)

    fill('#9fffc5')
    textSize(40)
    textStyle(ITALIC)
    text("Shame I can't use my spell cards..", 550, 300)
    text("Maybe I'll actually have to try this time!", 550, 340)

    fill('#ffffff')
    textSize(30)
    textStyle(ITALIC)
    text("For those who know what they're doing.", 550, 380)

    text("DDC - FW, WOOHA, SOPM, SSIB", 560, 700)
  }

  if (charSelectActive === 1 && charSelect === 4) {
    azuriEase = 0
    milkEase = -30
    roxieEase = -120
    
    azuriSplashEase = -50
    milkSplashEase = -50
    roxieSplashEase = -50

    azuriTitleEase = -200
    milkTitleEase = -200
    roxieTitleEase = -200

    kyrieSplashEase = lerp(kyrieSplashEase, kyrieSplashTargetPos, 0.4)
    image(kyrieSplash, kyrieSplashEase, 0)

    kyrieTitleEase = lerp(kyrieTitleEase, kyrieTitlePos, 0.2)
    image(kyrieTitle, 0, kyrieTitleEase)

    kyrieEase = lerp(kyrieEase, kyrieTargetPos, 0.2)
    image(kyriePort, kyrieEase, -40, 810 * kyriePort.width / kyriePort.height, 810)

    fill('#ff9f9f')
    textSize(40)
    textStyle(ITALIC)
    text("Was hoping things would die down for a bit.", 550, 300)
    text("Can't win 'em all, I s'pose.", 550, 340)

    fill('#ffffff')
    textSize(30)
    textStyle(ITALIC)
    text("Just give up already!! Are you crazy?!", 550, 380)

    text("DLFR, GFC, TGA, MA, NtOJ, DB'OA'", 560, 700)
  }

}

function menuOptions() {

  optionsSelect = constrain(optionsSelect, 1, 3);

  bgmVol = constrain(bgmVol, 0, 2);
  sfxVol = constrain(sfxVol, 0, 2);
  bgmVolSlider = constrain(bgmVolSlider, 0, 200);
  sfxVolSlider = constrain(sfxVolSlider, 0, 200);

  image(titleOptions, 0, 0)


  if (optionsSelect === 1 && optionsActive == 1) {
    fill('#caf9ff')
    optionSizeE *= 1.05;
    optionSizeE = constrain(optionSizeE, 60, 80);
  } else if (optionsSelect !== 1 && optionsActive == 1) {
    fill('#ffffff')
    optionSizeE *= 0.95;
    optionSizeE = constrain(optionSizeE, 60, 80);
  }

  textSize(optionSizeE)

  text('BGM VOLUME', 60, 350);
  text(bgmVolSlider, 800, 350);

  if (optionsSelect === 2 && optionsActive == 1) {
    fill('#caf9ff')
    optionSizeF *= 1.05;
    optionSizeF = constrain(optionSizeF, 60, 80);
  } else if (optionsSelect !== 2 && optionsActive == 1) {
    fill('#ffffff')
    optionSizeF *= 0.95;
    optionSizeF = constrain(optionSizeF, 60, 80);
  }

  textSize(optionSizeF)
  text('SFX VOLUME', 90, 425);
  text(sfxVolSlider, 800, 425);

  if (optionsSelect === 3 && optionsActive == 1) {
    fill('#caf9ff')
    optionSizeG *= 1.05;
    optionSizeG = constrain(optionSizeG, 60, 80);
  } else if (optionsSelect !== 3 && optionsActive == 1) {
    fill('#ffffff')
    optionSizeG *= 0.95;
    optionSizeG = constrain(optionSizeG, 60, 80);
  }

  textSize(optionSizeG)
  text('BACK TO MENU', 120, 500);
}
  
function menuMusic() {
  image(titleMroom, 0, 0)
  mroomSelect = constrain(mroomSelect, 1, 7);

  if (mroomActive === 1 && mroomSelect === 1) {
    fill('#caf9ff')
    trackSizeA *= 1.05;
    trackSizeA = constrain(trackSizeA, 40, 60);
  } else if (mroomSelect !== 1 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeA *= 0.95;
    trackSizeA = constrain(trackSizeA, 40, 60);
  }

  text('1. Menu Theme', 60, 230);

  if (mroomActive === 1 && mroomSelect === 2) {
    fill('#caf9ff')
    trackSizeB *= 1.05;
    trackSizeB = constrain(trackSizeB, 40, 60);
  } else if (mroomSelect !== 2 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeB *= 0.95;
    trackSizeB = constrain(trackSizeB, 40, 60);
  }

  text('2. Dialogue A', 80, 300);

  if (mroomActive === 1 && mroomSelect === 3) {
    fill('#caf9ff')
    trackSizeC *= 1.05;
    trackSizeC = constrain(trackSizeC, 40, 60);
  } else if (mroomSelect !== 3 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeC *= 0.95;
    trackSizeC = constrain(trackSizeC, 40, 60);
  }

  text('3. Dialogue B', 100, 370);

  if (mroomActive === 1 && mroomSelect === 4) {
    fill('#caf9ff')
    trackSizeD *= 1.05;
    trackSizeD = constrain(trackSizeD, 40, 60);
  } else if (mroomSelect !== 4 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeD *= 0.95;
    trackSizeD = constrain(trackSizeD, 40, 60);
  }

  text('4. Difficulty A Theme', 120, 440);

  if (mroomActive === 1 && mroomSelect === 5) {
    fill('#caf9ff')
    trackSizeE *= 1.05;
    trackSizeE = constrain(trackSizeE, 40, 60);
  } else if (mroomSelect !== 5 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeE *= 0.95;
    trackSizeE = constrain(trackSizeE, 40, 60);
  }

  text('5. Difficulty B Theme', 140, 510);

  if (mroomActive === 1 && mroomSelect === 6) {
    fill('#caf9ff')
    trackSizeF *= 1.05;
    trackSizeF = constrain(trackSizeF, 40, 60);
  } else if (mroomSelect !== 6 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeF *= 0.95;
    trackSizeF = constrain(trackSizeF, 40, 60);
  }

  text('6. Ending Theme', 160, 580);

  if (mroomActive === 1 && mroomSelect === 7) {
    fill('#caf9ff')
    trackSizeG *= 1.05;
    trackSizeG = constrain(trackSizeG, 40, 60);
  } else if (mroomSelect !== 7 && mroomActive === 1) {
    fill('#ffffff')
    trackSizeG *= 0.95;
    trackSizeG = constrain(trackSizeG, 40, 60);
  }

  text('BACK TO MENU', 220, 650);

}

//************************************//
// QUIZ STUFF
// ALL THIS JUST TO FAIL THE ASSIGNMENT BTW
// NEVER OVERDOSING AGAIN I THINK IT KINDA SUCKED. ALOT

function quizActiveAzuri() {
  
}

//*********************************************//
// KEY FUNCTIONS

function keyPressed() {

  //*********************************************//
  // MAIN MENU

  if (keyCode === DOWN_ARROW && menuActive === 1 && optionsActive === 0 && mroomActive === 0 && charSelectActive == 0) {
    menuSelect += 1;
    menuScroll();
  }

  if (keyCode === UP_ARROW && menuActive === 1 && optionsActive === 0 && mroomActive === 0 && charSelectActive == 0) {
    menuSelect -= 1;
    menuScroll();
  }

  if (key === 'z' && menuActive === 1 && menuSelect === 1 && optionsActive === 0 && mroomActive === 0 && charSelectActive == 0) {
    menuOk();
    charSelect = 1;
    charSelectActive = 1;
  }

  if (key === 'z' && menuActive === 1 && menuSelect === 2 && optionsActive === 0 && mroomActive === 0 && charSelectActive == 0) {
    menuOk();
    mroomActive = 1;
    mroomSelect = 1;
  }

  if (key === 'z' && menuActive === 1 && menuSelect === 3 && optionsActive === 0 && mroomActive === 0 && charSelectActive == 0) {
    menuOk();
    optionsActive = 1;
    optionsSelect = 1;
  }

  //*********************************************//
  // CHAR SEL

  if (keyCode === RIGHT_ARROW && charSelectActive === 1 && charSelect < 4) {
    charSelect += 1;
    menuScroll();
  } else if (keyCode === RIGHT_ARROW && charSelectActive === 1 && charSelect === 4) {
    menuFalse()
  }

  if (keyCode === LEFT_ARROW && charSelectActive === 1  && charSelect > 1) {
    charSelect -= 1;
    menuScroll();
  } else if (keyCode === LEFT_ARROW && charSelectActive === 1 && charSelect === 1) {
    menuFalse()
  }

  if (key === 'x' && charSelectActive === 1) {
    charSelectActive = 0;
    menuOk();
  }

  //*********************************************//
  // OKAY NOW ITS ACTUALLY SELECTING THE CHARACTERS

  if (key === 'c' && charSelectActive === 1 && charSelect === 1) {
    azuriSelected = 1;
    menuOk();
    menuActive === 0;
    charSelectActive = 0;
    quizActive = 1;
  } 

  //*********************************************//
  // OPTIONS MENU

  if (keyCode === DOWN_ARROW && optionsActive === 1) {
    optionsSelect += 1;
    menuScroll();
  }

  if (keyCode === UP_ARROW && optionsActive === 1) {
    optionsSelect -= 1;
    menuScroll();
  }

  if (key === 'z' && optionsActive === 1 && optionsSelect === 3) {
    menuOk();
    optionsActive = 0;
  }

  //*********************************************//
  // MUSIC ROOM MENU

  if (keyCode === DOWN_ARROW && mroomActive === 1) {
    mroomSelect += 1;
    menuScroll();
  }

  if (keyCode === UP_ARROW && mroomActive === 1) {
    mroomSelect -= 1;
    menuScroll();
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 1) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    titleMusic();
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 2) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    preQuiz1()
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 3) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    preQuiz2()
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 4) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    quizEarlyMusic()
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 5) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    quizMusic()
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect == 6) {
    menuOk();

    title.stop()
    quiz.stop()
    earlyquiz.stop()
    pb1.stop()
    pb2.stop()
    staff.stop()

    staffMusic()
  }

  if (key === 'z' && mroomActive === 1 && mroomSelect === 7) {
    menuOk();

    title.stop();
    quiz.stop();
    earlyquiz.stop();
    pb1.stop();
    pb2.stop();
    staff.stop();

    titleMusic();
    mroomActive = 0;
  }

  //*********************************************//
  // BGM VOLUME

  if (keyCode === RIGHT_ARROW && optionsActive === 1 && optionsSelect === 1) {
    menuScroll();
    bgmVol += 0.05;
    bgmVolSlider += 5;

    title.setVolume(bgmVol);
    quiz.setVolume(bgmVol);
    earlyquiz.setVolume(bgmVol);
    pb1.setVolume(bgmVol);
    pb2.setVolume(bgmVol);
    staff.setVolume(bgmVol);
  }

  if (keyCode === LEFT_ARROW && optionsActive === 1 && optionsSelect === 1) {
    menuScroll();
    bgmVol -= 0.05;
    bgmVolSlider -= 5;

    title.setVolume(bgmVol);
    quiz.setVolume(bgmVol);
    earlyquiz.setVolume(bgmVol);
    pb1.setVolume(bgmVol);
    pb2.setVolume(bgmVol);
    staff.setVolume(bgmVol);
  }

  if (keyCode === RIGHT_ARROW && optionsActive === 1 && optionsSelect === 2) {
    menuScroll();
    sfxVol += 0.05;
    sfxVolSlider += 5;

    menuSwitch.setVolume(sfxVol)
    menuConfirmed.setVolume(sfxVol)
    menuInvalid.setVolume(sfxVol)
  }

  if (keyCode === LEFT_ARROW && optionsActive === 1 && optionsSelect === 2) {
    menuScroll();
    sfxVol -= 0.05;
    sfxVolSlider -= 5;

    menuSwitch.setVolume(sfxVol)
    menuConfirmed.setVolume(sfxVol)
    menuInvalid.setVolume(sfxVol)
  }

  //*********************************************//
  // SFX VOLUME

  if (key === 'z' && optionsActive === 1 && optionsSelect === 2) {
    menuOk();
    sfxSelected = 1;
  }

  if (key === 'x' && optionsActive === 1 && optionsSelect === 2) {
    sfxSelected = 0;
  }

}

//*********************************************//
// FUNCTIONS RELATED TO HANDING THE OSTS

function titleMusic() {
  title.play();
  title.setVolume(bgmVol);
  userStartAudio();
}

function quizMusic() {
  quiz.play();
  quiz.setVolume(bgmVol);
  userStartAudio();
}

function quizEarlyMusic() {
  earlyquiz.play();
  earlyquiz.setVolume(bgmVol);
  userStartAudio();
}

function preQuiz1() {
  pb1.play();
  pb1.setVolume(bgmVol);
  userStartAudio();
}

function preQuiz2() {
  pb2.play();
  pb2.setVolume(bgmVol);
  userStartAudio();
}

function staffMusic() {
  staff.play();
  staff.setVolume(bgmVol);
  userStartAudio();
}

//*********************************************//
// FUNCTIONS RELATED TO HANDING THE SFX

function menuScroll() {
  menuSwitch.play();
  menuSwitch.setVolume(sfxVol);
  userStartAudio();
}

function menuOk() {
  menuConfirmed.play();
  menuConfirmed.setVolume(sfxVol);
  userStartAudio();
}

function menuFalse() {
  menuInvalid.play();
  menuInvalid.setVolume(sfxVol);
  userStartAudio();
}