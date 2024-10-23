// Deck of Cards, in order
const cardDefinitions = [
    {id: 1, imagePath:'images/Cards/cardClubsJ.png', cardType: 'JackClubs'},
    {id: 2, imagePath:'images/Cards/cardClubsJ.png', cardType: 'JackClubs'},
    {id: 3, imagePath:'images/Cards/cardClubsJ.png', cardType: 'JackClubs'},
    {id: 4, imagePath:'images/Cards/cardClubsJ.png', cardType: 'JackClubs'},
    {id: 5, imagePath:'images/Cards/cardClubsQ.png', cardType: 'QueenClubs'},
    {id: 6, imagePath:'images/Cards/cardClubsQ.png', cardType: 'QueenClubs'},
    {id: 7, imagePath:'images/Cards/cardClubsQ.png', cardType: 'QueenClubs'},
    {id: 8, imagePath:'images/Cards/cardClubsQ.png', cardType: 'QueenClubs'},
    {id: 9, imagePath:'images/Cards/cardClubsK.png', cardType: 'KingClubs'},
    {id:10, imagePath:'images/Cards/cardClubsK.png', cardType: 'KingClubs'},
    {id:11, imagePath:'images/Cards/cardClubsK.png', cardType: 'KingClubs'},
    {id:12, imagePath:'images/Cards/cardClubsK.png', cardType: 'KingClubs'},
    {id:13, imagePath:'images/Cards/cardClubs10.png', cardType: 'TenClubs'},
    {id:14, imagePath:'images/Cards/cardClubs10.png', cardType: 'TenClubs'},
    {id:15, imagePath:'images/Cards/cardClubs10.png', cardType: 'TenClubs'},
    {id:16, imagePath:'images/Cards/cardClubs10.png', cardType: 'TenClubs'},
    {id:17, imagePath:'images/Cards/cardClubsA.png', cardType: 'AceClubs'},
    {id:18, imagePath:'images/Cards/cardClubsA.png', cardType: 'AceClubs'},
    {id:19, imagePath:'images/Cards/cardClubsA.png', cardType: 'AceClubs'},
    {id:20, imagePath:'images/Cards/cardClubsA.png', cardType: 'AceClubs'},
    {id:21, imagePath:'images/Cards/cardDiamondsJ.png', cardType: 'JackDiamond'},
    {id:22, imagePath:'images/Cards/cardDiamondsJ.png', cardType: 'JackDiamond'},
    {id:23, imagePath:'images/Cards/cardDiamondsJ.png', cardType: 'JackDiamond'},
    {id:24, imagePath:'images/Cards/cardDiamondsJ.png', cardType: 'JackDiamond'},
    {id:25, imagePath:'images/Cards/cardDiamondsQ.png', cardType: 'QueenDiamond'},
    {id:26, imagePath:'images/Cards/cardDiamondsQ.png', cardType: 'QueenDiamond'},
    {id:27, imagePath:'images/Cards/cardDiamondsQ.png', cardType: 'QueenDiamond'},
    {id:28, imagePath:'images/Cards/cardDiamondsQ.png', cardType: 'QueenDiamond'},
    {id:29, imagePath:'images/Cards/cardDiamondsK.png', cardType: 'KingDiamond'},
    {id:30, imagePath:'images/Cards/cardDiamondsK.png', cardType: 'KingDiamond'},
    {id:31, imagePath:'images/Cards/cardDiamondsK.png', cardType: 'KingDiamond'},
    {id:32, imagePath:'images/Cards/cardDiamondsK.png', cardType: 'KingDiamond'},
    {id:33, imagePath:'images/Cards/cardDiamonds10.png', cardType: 'TenDiamond'},
    {id:34, imagePath:'images/Cards/cardDiamonds10.png', cardType: 'TenDiamond'},
    {id:35, imagePath:'images/Cards/cardDiamonds10.png', cardType: 'TenDiamond'},
    {id:36, imagePath:'images/Cards/cardDiamonds10.png', cardType: 'TenDiamond'},
    {id:37, imagePath:'images/Cards/cardDiamondsA.png', cardType: 'AceDiamond'},
    {id:38, imagePath:'images/Cards/cardDiamondsA.png', cardType: 'AceDiamond'},
    {id:39, imagePath:'images/Cards/cardDiamondsA.png', cardType: 'AceDiamond'},
    {id:40, imagePath:'images/Cards/cardDiamondsA.png', cardType: 'AceDiamond'},
    {id:41, imagePath:'images/Cards/cardSpadesJ.png', cardType: 'JackSpades'},
    {id:42, imagePath:'images/Cards/cardSpadesJ.png', cardType: 'JackSpades'},
    {id:43, imagePath:'images/Cards/cardSpadesJ.png', cardType: 'JackSpades'},
    {id:44, imagePath:'images/Cards/cardSpadesJ.png', cardType: 'JackSpades'},
    {id:45, imagePath:'images/Cards/cardSpadesQ.png', cardType: 'QueenSpades'},
    {id:46, imagePath:'images/Cards/cardSpadesQ.png', cardType: 'QueenSpades'},
    {id:47, imagePath:'images/Cards/cardSpadesQ.png', cardType: 'QueenSpades'},
    {id:48, imagePath:'images/Cards/cardSpadesQ.png', cardType: 'QueenSpades'},
    {id:49, imagePath:'images/Cards/cardSpadesK.png', cardType: 'KingSpades'},
    {id:50, imagePath:'images/Cards/cardSpadesK.png', cardType: 'KingSpades'},
    {id:51, imagePath:'images/Cards/cardSpadesK.png', cardType: 'KingSpades'},
    {id:52, imagePath:'images/Cards/cardSpadesK.png', cardType: 'KingSpades'},
    {id:53, imagePath:'images/Cards/cardSpades10.png', cardType: 'TenSpades'},
    {id:54, imagePath:'images/Cards/cardSpades10.png', cardType: 'TenSpades'},
    {id:55, imagePath:'images/Cards/cardSpades10.png', cardType: 'TenSpades'},
    {id:56, imagePath:'images/Cards/cardSpades10.png', cardType: 'TenSpades'},
    {id:57, imagePath:'images/Cards/cardSpadesA.png', cardType: 'AceSpades'},
    {id:58, imagePath:'images/Cards/cardSpadesA.png', cardType: 'AceSpades'},
    {id:59, imagePath:'images/Cards/cardSpadesA.png', cardType: 'AceSpades'},
    {id:60, imagePath:'images/Cards/cardSpadesA.png', cardType: 'AceSpades'},
    {id:61, imagePath:'images/Cards/cardHeartsJ.png', cardType: 'JackHeart'},
    {id:62, imagePath:'images/Cards/cardHeartsJ.png', cardType: 'JackHeart'},
    {id:63, imagePath:'images/Cards/cardHeartsJ.png', cardType: 'JackHeart'},
    {id:64, imagePath:'images/Cards/cardHeartsJ.png', cardType: 'JackHeart'},
    {id:65, imagePath:'images/Cards/cardHeartsQ.png', cardType: 'QueenHeart'},
    {id:66, imagePath:'images/Cards/cardHeartsQ.png', cardType: 'QueenHeart'},
    {id:67, imagePath:'images/Cards/cardHeartsQ.png', cardType: 'QueenHeart'},
    {id:68, imagePath:'images/Cards/cardHeartsQ.png', cardType: 'QueenHeart'},
    {id:69, imagePath:'images/Cards/cardHeartsK.png', cardType: 'KingHeart'},
    {id:70, imagePath:'images/Cards/cardHeartsK.png', cardType: 'KingHeart'},
    {id:71, imagePath:'images/Cards/cardHeartsK.png', cardType: 'KingHeart'},
    {id:72, imagePath:'images/Cards/cardHeartsK.png', cardType: 'KingHeart'},
    {id:73, imagePath:'images/Cards/cardHearts10.png', cardType: 'TenHeart'},
    {id:74, imagePath:'images/Cards/cardHearts10.png', cardType: 'TenHeart'},
    {id:75, imagePath:'images/Cards/cardHearts10.png', cardType: 'TenHeart'},
    {id:76, imagePath:'images/Cards/cardHearts10.png', cardType: 'TenHeart'},
    {id:77, imagePath:'images/Cards/cardHeartsA.png', cardType: 'AceHeart'},
    {id:78, imagePath:'images/Cards/cardHeartsA.png', cardType: 'AceHeart'},
    {id:79, imagePath:'images/Cards/cardHeartsA.png', cardType: 'AceHeart'},
    {id:80, imagePath:'images/Cards/cardHeartsA.png', cardType: 'AceHeart'}
]

// Player Class
class Player {
    constructor(username, position ) {
      this.username = username
      this.position = position
    }
  }

// Socket vars
const socket = io()
const players = {}

let cards = []

// Buttons Elem
const playGameButtonElem = document.getElementById('playGame')
//const reverseButtonElem = document.getElementById('reverse')
const sendCardsButtonElem = document.getElementById('sendCards')
const playOutButtonElem = document.querySelector(".playOutButtons")
const noPlayOutButtonElem = document.getElementById("noPlayOut")
const replayButtonElem = document.getElementById("replayButtonDiv")

// Containers
const cardContainerElem = document.getElementById('card-container')

const usernameInputElem = document.getElementById('usernameInput')
const passwordElem = document.getElementById('passwordInput')

const headerContainer = document.querySelector(".header-title-container")
const headerRoundContainer = document.querySelector(".header-round-info-container")
const centerCardsContainer = document.querySelector(".center-cards-display")
const instructionContainer = document.querySelector(".instructions")
const usernameElem = document.querySelector(".usernameDiv");
const gamePassElem = document.querySelector(".passwordDiv");

    // trump
const trumpSelectElem = document.querySelector('.select-trump')
const trumpDisplayElem = document.getElementById('displayTrump')
const trumpPicElem = document.querySelector('#trumpImg')
const trumpDisplayPicElem = document.querySelector(".display-trump")

    // status
const currentGameStatusElem = document.querySelector('.current-status')
const currentGameStatusElemMini = document.querySelector('.current-status-mini')

    // score
const scoreContainerElem = document.querySelectorAll('.score-container')
const score1Elem = document.querySelector('.score1')
const score2Elem = document.querySelector('.score2')

    // list elemnts
const scoreDisplayElem = document.querySelector('.score-layout')
const playerDisplayElem = document.querySelector('.player-layout')

    // bid elements
const bidDisplayElem = document.querySelector(".bid-container")
const bidInfoElem = document.getElementById("bidInfo")
const bidValue = document.getElementById("bidInput")
const bidText = document.getElementById("bidText")

    // tricks elements
const topTricks = document.getElementById("top")
const centerTricks = document.getElementById("center")
const bottomTricks = document.getElementById("bottom")

  // options elements
const cardOrder = document.getElementById("card-order");


// Bools
let gameInProgress = false 
let sortBool = true;
let sendCard = false;
let sendCardBack = false;
let turnOnTricks = false;
let allLosers = false
let redBlack = true;

// globals
let roundNum = 0
let trump = "NaN"

let myHand = []
let myTeam = []
let myGame = -1;
let gPassList = []

let passedHand = []
let leadingCard = -1
let winningCard = -1

let offScore1 = 0
let offScore2 = 0

let bidder = -1
let bidWinner = -1
let currentBid = 0
let finalBid = 0
let passLimit = 10

let myUsername = ""

let suitOrder = [0,1,2,3]

// get rid of later
let gameObj = {}
let partnerHand = []
const localStorageGameKey = "HTA"

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// SOCKET FUNCTIONS
socket.on("updateText", (type, bigString, smallString) => {
    if(type == "BIG" || type == "BOTH") currentGameStatusElem.innerHTML = bigString
    if(type == "MINI" || type == "BOTH") currentGameStatusElemMini.innerHTML = smallString
})

socket.on('updatePlayers', (backendPlayers) => {
    console.log("UPDATED PLAYERS:")
    console.log()
    for(const id in backendPlayers) {
        const backendPlayer = backendPlayers[id]
            console.log(backendPlayer.gameID);
            console.log(myGame);

            if(backendPlayer.gameID == myGame){
                if(!players[id]){
                    players[id] = new Player(backendPlayer.name, backendPlayer.positionID) 
                }
                players[id].username = backendPlayer.name
                players[id].position = backendPlayer.positionID
            }
        }
        
    for(const id in players){
        if(!backendPlayers[id]){
            delete players[id]
        }
    }
    
    printPlayerNames(-1)
})

socket.on('learnPosition', (position, room) => {
    myTeam[0] = position
    if(position == 0 || position == 2) myTeam[2] = 1
    else if(position == 1 || position == 3) myTeam[2] = 2

    myGame = room;
    console.log(myGame);
})

socket.on("learnPartner", () => {
    // add to teams
    if(myTeam[0] == 0) myTeam[1] = 2;
    if(myTeam[0] == 1) myTeam[1] = 3;
    if(myTeam[0] == 2) myTeam[1] = 0;
    if(myTeam[0] == 3) myTeam[1] = 1;

    // display
    currentGameStatusElem.innerHTML = "Your partner is " + getPlayerUsername(myTeam[1])
    
    printPlayerNames(myTeam[1])
})

socket.on('startGame', () => {
    initializeNewGame()
    startRound()
})

socket.on('initConnect', () => {
    initializeNewGame()
    initializeNewRound()
})

socket.on("dealToPlayers", (hands) => {
    myHand = hands[myTeam[0]]
    switchSort(false)
    updatePersonalScore()
})

socket.on("startBidding", (playerPosition, lastBids, lastBid) => {
    currentBid = lastBid
    let bidder = getPlayerUsername(playerPosition)
    if(myTeam[0] == playerPosition) startBid(lastBids)
    else showPastFewBids(lastBids, bidder, true)
});

socket.on("finishedBidding", (position, bid) => {
    finalBid = bid;
    bidWinner = position
    bidText.innerHTML = "<b>Final Bid: <br>" + finalBid + "</b>"
    currentGameStatusElem.innerHTML = getPlayerUsername(bidWinner) + " won the bid at " + bid
    currentGameStatusElemMini.innerHTML = ""
    if(myTeam[0] == bidWinner) selectTrump()
})

socket.on("setTrump", (trumpPassed) => {
    setTrump(trumpPassed)
    setTrumpImage()
})

socket.on("exchange", () => {
    if(myTeam[1] == bidWinner) sendCardsInitialize();
    else notSendCardsInitialize()
})

socket.on("recieveCards", (hand, size) => {
    if(myTeam[0] == bidWinner) recieveCards(hand, size)
    else notRecieveCards()
})

socket.on("takeCardsBack", (hand) => {
    if(bidWinner == myTeam[1]) recieveCardsFinal(hand)
    else notRecieveCardsFinal()
    updatePersonalScore()

    // UPDATE SCORES FOR EVERYONE
    tempScoreChange()
    confirmPlayOut()
})

socket.on("endRound", () => {
    let name = getPlayerUsername(bidWinner)
    currentGameStatusElem.innerHTML = name + " didn't want to play out. Moving on to next round."
})

socket.on("updateScores", (teamOneScore, teamTwoScore) => {
    if(myTeam[2] == 1) updateScore(teamOneScore, teamTwoScore)
    else if(myTeam[2] == 2) updateScore(teamTwoScore, teamOneScore)
})

socket.on("bidderRetreiveScore", (partnerScore) => {
    if(bidWinner == myTeam[0]) updateWaitingText(partnerScore)
})

socket.on("initializeForPass", () => {
    scoreDisplayElem.style.display = "none";
    bidText.style.display = "none"
    playOutButtonElem.style.display = "none"
    currentGameStatusElem.innerHTML = ""
    
    trumpDisplayPicElem.style.position = "absolute"
    centerCardsContainer.style.display = "initial"
})

socket.on("addCardToCenter", (cardId, sentFrom) => {
    // loop through cards
    cardDefinitions.forEach((card) => {
        if(card.id == cardId) {
            const addedCard = document.createElement('div')
            
            addedCard.setAttribute('id', "a" + sentFrom);
            addedCard.classList.add('center-cards');
            addedCard.style.backgroundImage = "url("+card.imagePath+")"

            // find angle and add to correct div
            if(sentFrom == myTeam[0]){
                addedCard.style.transform = "rotate(180deg)";
                bottomTricks.appendChild(addedCard)
            } 
            else if(sentFrom == myTeam[1])
                {
                addedCard.style.transform = "rotate(0deg)";
                topTricks.appendChild(addedCard)
                }
            else if(sentFrom == (myTeam[0] + 1) % 4){
                addedCard.style.transform = "rotate(270deg)";
                centerTricks.appendChild(addedCard)
            }
            else {
                addedCard.style.transform = "rotate(90deg)";
                centerTricks.appendChild(addedCard)
            }
        }
    })
})

socket.on("runTrick", (position, cardLead, cardWinner) => {
    leadingCard = cardLead
    winningCard = cardWinner
    startTricks(position)
})

socket.on("clearBoard", () => {
    while(topTricks.firstChild){
        topTricks.removeChild(topTricks.firstChild)
    }
    while(centerTricks.firstChild){
        centerTricks.removeChild(centerTricks.firstChild)
    }
    while(bottomTricks.firstChild){
        bottomTricks.removeChild(bottomTricks.firstChild)
    }
})

socket.on("displayTrickPoints", (tricksOne, tricksTwo) => {
    let tracker = 0
    
    if(myTeam[2] == 1) tracker = tricksOne
    else if(myTeam[2] == 2) tracker = tricksTwo
    currentGameStatusElem.innerHTML = "You tooks " + tracker + " tricks. Your score has been updated."
})

socket.on("nextRound", () => {
    startRound()
})

socket.on("checkForTrump", () => {
    if(myTeam[0] != bidWinner && !handContainsSuit(trump)) socket.emit("noTrump")
})

socket.on("endGame", (winner) => {
    gameOver(winner)
})

socket.on("gameOver", () => {
    replayButtonElem.style.display = "none"
})

socket.on("updatePassList", (passList) => {
    gPassList = passList;
})

socket.on("joinedRoom", () => {
    currentGameStatusElem.innerHTML = "Please enter a username to continue!";
    gamePassElem.style.display = "none";
    usernameElem.style.display = "flex";
})

socket.on("notJoinedRoom", () => {
    currentGameStatusElem.innerHTML = "Sorry, that room is full. Try a different one or create your own.";
})

// username
document.querySelector('#usernameForm').addEventListener('submit', (event) => {
    event.preventDefault()
    let tempUsername = usernameInputElem.value
    if(!isAlphaNumeric(tempUsername)) currentGameStatusElem.innerHTML = "Please enter a username."
    else if(!uniqueUsername(tempUsername)) currentGameStatusElem.innerHTML = "That name is already taken."
    else {
        myUsername = tempUsername
        socket.emit('initGame', myUsername)
    }
})

// password
function newRoom(){
    let tempPass = passwordElem.value
    if(!uniquePassword(tempPass)) currentGameStatusElem.innerHTML = "That password is unavailable. Try another."
    else {
        socket.emit('setPassword', tempPass)
        currentGameStatusElem.innerHTML = "Please enter a username to continue!";
        gamePassElem.style.display = "none";
        usernameElem.style.display = "flex";
    }
}

// password
function joinRoom(){
    let tempPass = passwordElem.value
    if(uniquePassword(tempPass)) currentGameStatusElem.innerHTML = "There is no existing room with that password."
    else {
        socket.emit('joinRoom', tempPass)
    }
}

// ON CLICKS
$(document).on('click', '.cards-display', function() {
    // if selection is allowed
    if(sendCard || sendCardBack){
        onSendCardsClick(this.id)
    } 
    else if(turnOnTricks) {
        onTricksClick(this.id)
    }
});

$( function() {
    $("#card-order").sortable();
} );

// TO DO
function endRound()
{
    if(score1 >= 1000) gameOver("1")
    else if (score2 >= 1000) gameOver("2")
    else startRound()
}

// TO DO
function checkForIncompleteGame()
{
    const serializedGameObj = getLocalStorageItemValue(localStorageGameKey)
    if(serializedGameObj)
    {
        gameObj = getObjectFromJSON(serializedGameObj)

        if(gameObj.round >= 4)
        {
            removeLocalStorageItem(localStorageGameKey)
        }
        else
        {
            if(confirm('Would you like to continue with your last game?'))
            {
                score = gameObj.score
                roundNum = gameObj.round
            }
        }

    }

}

/* --------------- */
/* INITIALIZATIONS */
/* --------------- */

function initializeNewGame(){
    //reverseButtonElem.style.display = 'initial';
    scoreDisplayElem.style.display = '';
    scoreContainerElem[0].style.display = "flex"
    scoreContainerElem[1].style.display = "flex"
    headerContainer.style.display = "none"

    usernameElem.style.display = "none"

    replayButtonElem.style.display = "none"
    instructionContainer.style.display = "none"
    // currentGameStatusElem.innerHTML = ""
}

function startRound()
{
    initializeNewRound()
    socket.emit("readyUp")
}

function initializeNewRound()
{
    roundNum++
    trumpDisplayPicElem.style.display = 'none'
    playOutButtonElem.style.display = "none"
    centerCardsContainer.style.display = "none"
    scoreDisplayElem.style.display = "initial"
    bidText.style.display = "initial"
    
    sendCard = false;
    sendCardBack = false;
    turnOnTricks = false;
    allLosers = false;

    trump = "NaN"

    myHand = []
    passedHand = []

    leadingCard = -1
    winningCard = -1

    bidder = -1
    bidWinner = -1
    currentBid = 0
    finalBid = 0
    passLimit = 10

    clearCards()
}

function gameOver(winner)
{
    console.log(winner);
    clearCards()
    playOutButtonElem.style.display = "none"
    //reverseButtonElem.style.display = "none"
    scoreDisplayElem.style.display = "none"
    trumpDisplayPicElem.style.display = "none"

    currentGameStatusElem.style.display = "block";
    if(winner == myTeam[2]) currentGameStatusElem.innerHTML = "You won!"
    else currentGameStatusElem.innerHTML = "You lost."
    
    currentGameStatusElemMini.innerHTML = "Would everyone like to play again?"

    gameInProgress = false
    replayButtonElem.style.display = "initial"
}

/* ---------------- */
/* PLAYER FUNCTIONS */
/* ---------------- */

function printPlayerNames(partner){
    let playerList = getPlayerList()

    // remove player element
    while(playerDisplayElem.firstChild){
        playerDisplayElem.removeChild(playerDisplayElem.firstChild)
    }

    // create list
    const ulItem = document.createElement('ul')
    ulItem.classList.add('player-layout');

    playerList.forEach((elem) =>{
        let elemsPos = Number(elem.split(" ")[1][0]) - 1
        if(elemsPos == partner || elemsPos == myTeam[0]) elem = "<b>" + elem + "<b>";
        const listItem = document.createElement('li')
        listItem.innerHTML = elem
        ulItem.appendChild(listItem) 
    })

    // display
    playerDisplayElem.appendChild(ulItem) 
    playerDisplayElem.style.display = '';
}

function getPlayerList(){
    let playerList = ["<b>You are " + myUsername + "<b>"]
    let index = 0;
    for(const id in players){
        for(const useId in players){
            let player = players[useId]
            if(player.position == index){
                index++
                if(isAlphaNumeric(player.username)) playerList.push("Player " + index + ": " + player.username)
            }
        }
    }

    return playerList
}

function uniqueUsername(name){
    for(const id in players) {
        let theName = players[id].username.toLowerCase()
        if(theName == name.toLowerCase() && name.toLowerCase() != myUsername.toLowerCase()) return false
    }
    return true
}

function getPlayerUsername(player){
    for(const ID in players){
        if(players[ID].position == player) return players[ID].username
    }
    return "NaN"
}


/* -------------- */
/* HAND FUNCTIONS */
/* -------------- */

function switchSort(sort){
    // toggle bool
    if(sort) sortBool = !sortBool;
    
    // check new order
    if(redBlack) checkCustomOrder()
    
    customSort();

    // updateCards
    updateCards(myHand)
    updateCardSize(myHand.length)
}

function customSort(){
    let tempHand = [...myHand]
    let partHand = [];
    myHand = []
    for(var i = 0; i < 4; i++){
        if(suitOrder[i] == 0) partHand = grabAll('CLUBS', tempHand)
        if(suitOrder[i] == 1) partHand = grabAll('DIAMOND', tempHand)
        if(suitOrder[i] == 2) partHand = grabAll('SPADES', tempHand)
        if(suitOrder[i] == 3) partHand = grabAll('HEART', tempHand)
        
        partHand.sort(function(a, b) {
            if(sortBool) return a - b;
            else return b - a;
          });

        myHand = myHand.concat(partHand);
    }
}

function grabAll(suite, hand){
    let allOfSuit = [];
    hand.forEach((card) => {
        if(suite == 'CLUBS' && card < 21) allOfSuit.push(card);
        if(suite == 'DIAMOND' && (card > 20 && card < 41)) allOfSuit.push(card);
        if(suite == 'SPADES' && (card > 40 && card < 61)) allOfSuit.push(card);
        if(suite == 'HEART' && card > 60) allOfSuit.push(card);
    })

    return allOfSuit;
}

function updateCardSize(cardCount){
    // update size based on cardCount
    let savedLength = 100/(cardCount)

    let cardsLeft = document.querySelectorAll(".cards-display")
    cardsLeft.forEach((card) => {
        card.style.width = savedLength + "%";
    })
}

function updateCards(hand) {
    clearCards()
    displayCards(hand)
}

function clearCards(){
    while(cardContainerElem.firstChild){
        cardContainerElem.removeChild(cardContainerElem.firstChild)
    }
}

function displayCards(cards)
{
    cards.forEach((card) =>{
        const addedCard = document.createElement('div')
        cardDefinitions.forEach((x) => {
            if(card == x.id){
                addedCard.setAttribute('id', x.id);
                addedCard.classList.add('cards-display');
                addedCard.style.display = 'inline-block';
                addedCard.style.backgroundImage = "url("+x.imagePath+")"
                cardContainerElem.appendChild(addedCard)
            }
        })
    })
}

function checkCustomOrder() {
    // check for any color missing
    let missingSuit = checkForMissingSuit();

    if(missingSuit != "NaN"){
        //Check if leading or last suit is missing
        if( ((suitOrder[0] == 0 || suitOrder[3] == 0) && missingSuit == "Clubs") ||
            ((suitOrder[0] == 1 || suitOrder[3] == 1) && missingSuit == "Diamond") ||
            ((suitOrder[0] == 2 || suitOrder[3] == 2) && missingSuit == "Spades") ||
            ((suitOrder[0] == 3 || suitOrder[3] == 3) && missingSuit == "Heart")){
                return;
            }
        if(suitOrder[0] == 0 || suitOrder[0] == 2){
            if(missingSuit == "Diamond"){
                suitOrder[1] = 3;
                suitOrder[3] = 1;
            }
            else if(missingSuit == "Heart"){
                suitOrder[1] = 1;
                suitOrder[3] = 3;
            }
            if(suitOrder[0] == 0) suitOrder[2] = 2;
            else suitOrder[2] = 0;
        }
        else if(suitOrder[0] == 1 || suitOrder[0] == 3){
            if(missingSuit == "Clubs"){
                suitOrder[1] = 2;
                suitOrder[3] = 0;
            }
            else if(missingSuit == "Spades"){
                suitOrder[1] = 0;
                suitOrder[3] = 2;
            }
            if(suitOrder[0] == 1) suitOrder[2] = 3;
            else suitOrder[2] = 1;
        }
    }
}

function checkForMissingSuit(){
    // check for any amount of each suit
    if(!handContainsSuit("Clubs")) return "Clubs"
    if(!handContainsSuit("Diamond")) return "Diamond"
    if(!handContainsSuit("Spades")) return "Spades"
    if(!handContainsSuit("Heart")) return "Heart"

    return "NaN"
}

/* --------------- */
/* SCORE FUNCTIONS */
/* --------------- */

function calculateScore(hand)
{
    let cardTypeList = []
    let displayScore = ["<b>Hand Score:<b>"]

    let marriageScore = [];

    hand.forEach((card) => {     
        cardDefinitions.forEach((deckCard) => {
            if(deckCard.id == card){
                cardTypeList.push(deckCard.cardType);
            }
        })
    })

    // Pinochle
    function pinochle()
    {
        let pinochleCount = 0;
        let tempCardList = [...cardTypeList];
        while(tempCardList.includes("JackDiamond") && tempCardList.includes("QueenSpades")){
            pinochleCount++

            // check for double
            let jackIndex = tempCardList.indexOf("JackDiamond")
            tempCardList.splice(jackIndex, 1);
            
            let queenIndex = tempCardList.indexOf("QueenSpades")
            tempCardList.splice(queenIndex, 1);
        }
        
        return countPinochle(pinochleCount)
    }

    function countPinochle(pinochleCount){
        if(pinochleCount == 0) return 0
        if(pinochleCount == 1) return 4
        if(pinochleCount == 2) return 30
        if(pinochleCount == 3) return 60
        
        if(trump == "Spades") return 200
        if(trump == "Diamond") return 190
        if(trump == "Clubs" || trump == "Hearts") return 190

        return 0
        }

    let pinochleScore = pinochle()
    displayScore.push("Pinochle: " + pinochleScore);

    // Family
    function family(suite){
        let familyCount = 0
        let suiteSave = [] // A K Q J 10
        let tempCardList = [...cardTypeList];

        if(suite == "Clubs"){
            suiteSave[0] = "AceClubs";
            suiteSave[1] = "KingClubs";
            suiteSave[2] = "QueenClubs";
            suiteSave[3] = "JackClubs";
            suiteSave[4] = "TenClubs";
        }
        else if(suite == "Diamond"){
            suiteSave[0] = "AceDiamond";
            suiteSave[1] = "KingDiamond";
            suiteSave[2] = "QueenDiamond";
            suiteSave[3] = "JackDiamond";
            suiteSave[4] = "TenDiamond";            
        }
        else if(suite == "Spades"){
            suiteSave[0] = "AceSpades";
            suiteSave[1] = "KingSpades";
            suiteSave[2] = "QueenSpades";
            suiteSave[3] = "JackSpades";
            suiteSave[4] = "TenSpades";  
        }
        else if(suite == "Heart") {
            suiteSave[0] = "AceHeart";
            suiteSave[1] = "KingHeart";
            suiteSave[2] = "QueenHeart";
            suiteSave[3] = "JackHeart";
            suiteSave[4] = "TenHeart"; 
        }

        while(tempCardList.includes(suiteSave[0]) && tempCardList.includes(suiteSave[1]) 
                                                    && tempCardList.includes(suiteSave[2]) 
                                                    && tempCardList.includes(suiteSave[3]) 
                                                    && tempCardList.includes(suiteSave[4])){
            familyCount++

            // check for double
            let aceIndex = tempCardList.indexOf(suiteSave[0])
            tempCardList.splice(aceIndex, 1);
            
            let kingIndex = tempCardList.indexOf(suiteSave[1])
            tempCardList.splice(kingIndex, 1);

            let queenIndex = tempCardList.indexOf(suiteSave[2])
            tempCardList.splice(queenIndex, 1);
            
            let jackIndex = tempCardList.indexOf(suiteSave[3])
            tempCardList.splice(jackIndex, 1);
            
            let tenIndex = tempCardList.indexOf(suiteSave[4])
            tempCardList.splice(tenIndex, 1);
            
        }

        return countFamily(familyCount, tempCardList, suiteSave[1], suiteSave[2])
    }

    function countFamily(amount, leftList, kingName, queenName) {
        let start = 0
        if(amount == 0) return 0
        if(amount == 1) {
            start = 15
            leftOvers = checkExtraForFamily(leftList, kingName, queenName, "M")
            leftList = leftOvers[2]
            if(leftOvers[0] == 3) start = start + (60 * leftOvers[1])
            if(leftOvers[0] == 3 && leftOvers[1] == 3) start += 60;
           
            leftOvers = checkExtraForFamily(leftList, kingName, queenName, "KQ")
            leftList = leftOvers[2]
            if(leftOvers[0] == 1 || leftOvers[0] == 2) start = start + (4 * leftOvers[1])
            
            return start
        }
        if(amount == 2) {
            start = 150
            leftOvers = checkExtraForFamily(leftList, kingName, queenName, "M")
            leftList = leftOvers[2]
            if(leftOvers[0] == 3 && leftOvers[1] == 1) start += 30
            else if(leftOvers[0] == 3 && leftOvers[1] == 2) start += 240
           
            leftOvers = checkExtraForFamily(leftList, kingName, queenName, "KQ")
            leftList = leftOvers[2]
            if(leftOvers[0] == 1 || leftOvers[0] == 2) start = start + (4 * leftOvers[1])
            
            return start
        }     
        if(amount == 3){
            start = 300
            leftOvers = checkExtraForFamily(leftList, kingName, queenName, "M")
            leftList = leftOvers[2]
            if(leftOvers[0] == 3 && leftOvers[1] == 1) start += 240
            return start
        } 
        if(amount == 4) return 1280
        return 0
    }

    function checkExtraForFamily(thisList, kingName, queenName, searching){
        let count = 0;
        while(searching == "M" && thisList.includes(kingName) && thisList.includes(queenName)) {
            let thisIndex = thisList.indexOf(kingName)
            thisList.splice(thisIndex, 1);

            thisIndex = thisList.indexOf(queenName)
            thisList.splice(thisIndex, 1);

            count++
        } 
        
        if(count > 0) return [3, count, thisList]

        while(thisList.includes(kingName) && searching == "KQ"){
            let thisIndex = thisList.indexOf(kingName)
            thisList.splice(thisIndex, 1);
            count++
        }
        
        if(count > 0 && !fourType("King")) {
            return [1, count, thisList]
        }

        count = 0;
        while(thisList.includes(queenName) && searching == "KQ"){
            let thisIndex = thisList.indexOf(queenName)
            thisList.splice(thisIndex, 1);
            count++
            } 
        
        if(count > 0 && !fourType("Queen")) {
            return [2, count, thisList]
        }

        return [0, 0, thisList]
    }

    function fourType(cardFace){
        let tempCardList = [...cardTypeList];
        let count = 0
        tempCardList.forEach((playerCard) => {
            if(playerCard.includes(trump) && playerCard.includes(cardFace)){
                count++
            }
        })

        return count == 4
        
    }

    let familyScore = family(trump)
    displayScore.push("Family: " + familyScore);

    // marriages
    function marriage(kingType, queenType, suite){
        if(suite != trump || familyScore == 0){
            let marriageCount = 0
            let tempCardList = [...cardTypeList];
            while(tempCardList.includes(kingType) && tempCardList.includes(queenType)){
                marriageCount++
                // check for double
                kingIndex = tempCardList.indexOf(kingType)
                tempCardList.splice(kingIndex, 1);
                
                queenIndex = tempCardList.indexOf(queenType)
                tempCardList.splice(queenIndex, 1);
            }
            return countMarriages(suite, marriageCount)
        }
        return 0
    }

    function countMarriages(suite, marriageCount){
        let marriageScore = 0
        if(marriageCount == 1) marriageScore = 2
        else if(marriageCount == 2) marriageScore = 30
        else if(marriageCount == 3) marriageScore = 60
        else if(marriageCount == 4) marriageScore = 190
    
        if(trump == suite) marriageScore *= 2
    
        return marriageScore
    }

    marriageScore[0] = marriage("KingClubs", "QueenClubs", "Clubs")
    marriageScore[1] = marriage("KingDiamond", "QueenDiamond", "Diamond")
    marriageScore[2] = marriage("KingSpades", "QueenSpades", "Spades")
    marriageScore[3] = marriage("KingHeart", "QueenHeart", "Heart")

    let marriageScoreTotal = marriageScore.reduce((total, current) => total + current)
    displayScore.push("Marriages: " + marriageScoreTotal);

    // round robin
    function roundRobin(marriageArray){
        if(marriageArray[0] > 0 && marriageArray[1] > 0 && marriageArray[2] > 0 && marriageArray[3] > 0) return 24
        if(marriageArray[0] > 4 && marriageArray[1] > 4 && marriageArray[2] > 4 && marriageArray[3] > 4) return 290
        return 0
    }

    let roundRobinScore = roundRobin(marriageScore)
    displayScore.push("Round Robins: " + roundRobinScore);
    
    // Sets
    function numberAllAround(amount, clubCard, diamondCard, spadesCard, heartCard){
        let amountCount = 0
        let tempCardList = [...cardTypeList];

        while(tempCardList.includes(clubCard)
            && tempCardList.includes(diamondCard) 
            && tempCardList.includes(spadesCard)
            && tempCardList.includes(heartCard)){
            amountCount++

            // check for double
            let clubIndex = tempCardList.indexOf(clubCard)
            tempCardList.splice(clubIndex, 1);
            
            let diamondIndex = tempCardList.indexOf(diamondCard)
            tempCardList.splice(diamondIndex, 1);
            
            let spadeIndex = tempCardList.indexOf(spadesCard)
            tempCardList.splice(spadeIndex, 1);
            
            let heartIndex = tempCardList.indexOf(heartCard)
            tempCardList.splice(heartIndex, 1);
        }

        return numberAllAroundCalc(amount, amountCount)
    }

    function numberAllAroundCalc(multiplier, count){
        if(count == 0) return 0
        if(count == 1) return 1 * multiplier
        if(count == 2) return 10 * multiplier
        if(count == 3) return 20 * multiplier
        if(count == 4) return 65 * multiplier
        return 0
    }

    function numberSameSuite(amount, clubCard, diamondCard, spadesCard, heartCard){
        let total = 0

        total += numberSameSuiteCalc(amount,"Clubs", clubCard)
        total += numberSameSuiteCalc(amount,"Diamond", diamondCard)
        total += numberSameSuiteCalc(amount,"Spades", spadesCard)
        total += numberSameSuiteCalc(amount,"Heart", heartCard)

        return total
    }

    function numberSameSuiteCalc(amount, suite, cardType){
        
        let amountCount = 0
        let tempCardList = [...cardTypeList];
        while(tempCardList.includes(cardType)){
            amountCount++

            // check for double
            let thisIndex = tempCardList.indexOf(cardType)
            tempCardList.splice(thisIndex, 1);
        }

        if(amountCount == 4){
            if(trump == suite) return amount * 2
            return amount
        }
        return 0
    }

    // Set of Jacks
    function jacks(){
        let score = numberAllAround(4, "JackClubs", "JackDiamond", "JackSpades", "JackHeart")
        score += numberSameSuite(20, "JackClubs", "JackDiamond", "JackSpades", "JackHeart")

        return score
    }

    let jackScore = jacks()
    displayScore.push("Jacks: " + jackScore);

    // Set of Queens
    function queens(){
        let score = numberAllAround(6, "QueenClubs", "QueenDiamond", "QueenSpades", "QueenHeart")
        score += numberSameSuite(30, "QueenClubs", "QueenDiamond", "QueenSpades", "QueenHeart")

        return score
    }

    let queenScore = queens()
    displayScore.push("Queens: " + queenScore);

    // Set of Kings
    function kings(){
        let score = numberAllAround(8, "KingClubs", "KingDiamond", "KingSpades", "KingHeart")
        score += numberSameSuite(40, "KingClubs", "KingDiamond", "KingSpades", "KingHeart")

        return score
    }

    let kingScore = kings()
    displayScore.push("Kings: " + kingScore);

    // Set of 10's
    function tens(){
        let score = numberAllAround(2, "TenClubs", "TenDiamond", "TenSpades", "TenHeart")
        score += numberSameSuite(10, "TenClubs", "TenDiamond", "TenSpades", "TenHeart")

        return score
    }

    let tensScore = tens()
    displayScore.push("Tens: " + tensScore);

    // Set of Aces
    function aces(){
        let score = numberAllAround(10, "AceClubs", "AceDiamond", "AceSpades", "AceHeart")
        score += numberSameSuite(50, "AceClubs", "AceDiamond", "AceSpades", "AceHeart")

        return score
    }

    let aceScore = aces()
    displayScore.push("Aces: " + aceScore);

    // Total
    function calculateTotal(){
        return marriageScoreTotal + roundRobinScore + pinochleScore + familyScore + tensScore + jackScore + queenScore + kingScore + aceScore;
    }

    let roundScore = calculateTotal()
    displayScore.push("Total: " + roundScore);

    return displayScore

}

function updateScore(myScore, theirScore){
    
    offScore1 = myScore
    offScore2 = theirScore

    score1Elem.innerHTML = "Our Score<br><span class='badge'>"+myScore+"</span>";
    score2Elem.innerHTML = "Their Score<br><span class='badge'>"+theirScore+"</span>";
}

function updatePersonalScore()
{
    let score = calculateScore(myHand)

    // remove score element
    while(scoreDisplayElem.firstChild){
        scoreDisplayElem.removeChild(scoreDisplayElem.firstChild)
    }

    // create list
    const ulItem = document.createElement('ul')
    ulItem.classList.add('score-layout');

    score.forEach((elem) =>{
        const listItem = document.createElement('li')
        listItem.innerHTML = elem
        ulItem.appendChild(listItem) 
    })
    
    // display
    scoreDisplayElem.appendChild(ulItem) 
    scoreDisplayElem.style.display = '';
}

function tempScoreChange(){
    sendScore = scoreAsNum()
    socket.emit("shareScoreTemp", sendScore, myTeam[2])
}

function scoreAsNum(){
    let score = calculateScore(myHand)
    return Number(score[score.length - 1].split(" ")[1])
}

/* --------------- */
/* TRUMP FUNCTIONS */
/* --------------- */

function selectTrump(){
    // tempElem.style.display = "none";
    currentGameStatusElem.innerHTML = 'You won the bid! Pick trump!';
    trumpSelectElem.style.display = "initial"
}

function setTrump(trumpPassed){
    trump = trumpPassed
    updatePersonalScore()
}

function enterTrump(){
    if(trump != "NaN"){
        trumpSelectElem.style.display = "none"
        currentGameStatusElemMini.innerHTML = "";
        socket.emit("updateTrump", trump)
    }
    else currentGameStatusElemMini.innerHTML = "Please select Trump";
}

function setTrumpImage(){
    let backgroundImage = "NAN"
    if(trump == "NaN") return
    trumpDisplayPicElem.style.display = 'initial'
    trumpDisplayPicElem.style.position = "static"

    if(trump=='Clubs') backgroundImage = "url(images/clubsSymbol.png)"
    else if(trump=='Diamond') backgroundImage = "url(images/diamondSymbol.png)"
    else if(trump=='Spades') backgroundImage = "url(images/spadesSymbol.png)"
    else if(trump=='Heart') backgroundImage = "url(images/heartSymbol.png)"
    
    trumpPicElem.style.backgroundImage = backgroundImage;
}

/* ------------- */
/* BID FUNCTIONS */
/* ------------- */

function checkBid(num){
    if(isNaN(Number(num))) {
        if(num.toLowerCase() == "barely") return 151
        else return -1
    }
    return Number(num)
}

function finishBidding(value){
    if(value == "pass") currentGameStatusElem.innerHTML = "You passed "
    else currentGameStatusElem.innerHTML = "You bid " + value

    bidValue.value = ""
    bidDisplayElem.style.display = "none"
}

function sendBid(){
    let finalBid = checkBid(bidValue.value)
    bidText.innerHTML = "<b>Final Bid: <br>" + finalBid + "</b>"
    if(finalBid <= currentBid) bidInfoElem.innerHTML = "Please put a number greater than " + currentBid
    else {
        socket.emit("returnBid", finalBid, myTeam[0])
        finishBidding(finalBid)
    }
}

function passBid(){
    socket.emit("returnBid", currentBid, myTeam[0])
    finishBidding("pass")
}

function startBid(lastBids) {
    
    showPastFewBids(lastBids, myTeam[0], false)
    if(lastBids[0].username == "You're opening the bid. Enter your bid or pass"){
        // start bid
        bidInfoElem.innerHTML = lastBids[0].username
        currentBid = 150;
    } else if (lastBids.length == 1 && lastBids[0].amount == 150){
        // bidder passed
        bidInfoElem.innerHTML = lastBids[lastBids.length -1].username + " passed. Enter your bid or pass."
    } else {
        if(checkForPass(lastBids, (lastBids.length - 1), (lastBids.length - 2))) bidInfoElem.innerHTML = lastBids[lastBids.length -1].username + " passed. Bid is at " + currentBid + ". Enter your bid or pass."
        else bidInfoElem.innerHTML = lastBids[lastBids.length -1].username + " bid " + lastBids[lastBids.length -1].amount + ". Enter your bid or pass."
    }
    
    bidDisplayElem.style.display = "initial"
}

function checkForPass(lastBids, pos1, pos2){
    let maxPos = Math.max(pos1, pos2)
    if(pos1 >= 0 && pos1 < lastBids.length && pos2 >= 0 && pos2 < lastBids.length) {
        if(lastBids[pos1].amount == lastBids[pos2].amount) return true
    } else if(lastBids[maxPos].amount == 150) return true
    return false
}

function showPastFewBids(lastBids, bidder, bool){
    let bidList = []
    let indexStart = Math.max(lastBids.length - 4, 0)

    if(lastBids[0].amount != -1){
        for(let index = indexStart; index < lastBids.length; index++){
            if(checkForPass(lastBids, index -1, index)) bidList.push("<br>" + lastBids[index].username + " passed")
            else bidList.push("<br>" + lastBids[index].username + " bid " + lastBids[index].amount)
        }
    }

    if(bool) bidList.push("<br>" + bidder + " is bidding")
    currentGameStatusElemMini.innerHTML = bidList
}

/* ------------------ */
/* EXCHANGE FUNCTIONS */
/* ------------------ */

function onSendCardsClick(thisCardId){
    // get clicked element
    thisId = document.getElementById(thisCardId);

    // if not already clicked
    if(!passedHand.includes(Number(thisCardId))) {
        // check limit isn't hit. If not, update size and array
        if(passedHand.length == passLimit) currentGameStatusElemMini.innerHTML = "You already have " + passLimit + " cards selected."
        else {
            currentGameStatusElemMini.innerHTML = ""
            thisId.style.height = '220px';
            passedHand.push(Number(thisCardId))
        }
    } // if was clicked, unselect it
    else {
        currentGameStatusElemMini.innerHTML = ""
        idIndex = passedHand.indexOf(Number(thisCardId))
        passedHand.splice(idIndex, 1);
        thisId.style.height = '190px';
    }
}

function notSendCardsInitialize(){
    let notIt = [];
    let name = ""
    notIt.push(myTeam[0])
    notIt.push(myTeam[1])
    if(myTeam[0] == bidWinner) name = getPlayerUsername(myTeam[1])
    else {
        notIt.push(bidWinner);
        if(!notIt.includes(0)) name = getPlayerUsername(0)
        else if(!notIt.includes(1)) name = getPlayerUsername(1)
        else if(!notIt.includes(2)) name = getPlayerUsername(2)
        else if(!notIt.includes(3)) name = getPlayerUsername(3)
    }

    currentGameStatusElem.innerHTML = name + ' is picking cards for their partner';
    
}

function sendCardsInitialize(){
    sendCard = true
    
    sendCardsButtonElem.style.display = "initial"
    currentGameStatusElem.style.display = "block";
    currentGameStatusElem.innerHTML = 'Trump is ' + trump + ". Send up to 10 cards to your partner";
}

function sendCards(){
    
    // if sending cards back to partner (Have to send correct amount)
    if(sendCardBack && passedHand.length != passLimit) {
        currentGameStatusElemMini.innerHTML = "Please select " + (passLimit - passedHand.length) + " more cards."
        return;
    }
    if(passedHand.length == 0) {
        currentGameStatusElemMini.innerHTML = "Please select at least one card to pass."
        return;
    }

    // remove all the passed items from hand
    passedHand.forEach((card) =>{
        idIndex = myHand.indexOf(card)
        myHand.splice(idIndex, 1);
    })

    // check if special order
    switchSort(false)

    // update size and player score
    updateCardSize(myHand.length);
    updatePersonalScore()

    // change elements
    sendCardsButtonElem.style.display = "none"
    currentGameStatusElem.innerHTML = 'Cards are sent!';
    currentGameStatusElemMini.innerHTML = ""

    if(sendCard) socket.emit("sendCards", passedHand, passedHand.length, myHand, myTeam[0])
    else if(sendCardBack) socket.emit("sendCardsBack", passedHand, scoreAsNum(), myHand)

    // reset vars
    sendCard = false;
    sendCardBack = false;

    passedHand = []
}

function recieveCards(hand, amount){
    myHand = myHand.concat(hand);
    passLimit = amount
    passedHand = []
    
    switchSort(false)
    updatePersonalScore()
    sendCardsInitialize()

    sendCardBack = true;
    sendCard = false

    currentGameStatusElem.innerHTML = 'Cards were recieved! Send ' + amount + ' back.';
}

function notRecieveCards(){
    let name = getPlayerUsername(bidWinner)
    currentGameStatusElem.innerHTML = 'Cards were sent! Waiting for ' + name + " to send cards back.";
}

function recieveCardsFinal(hand){
    myHand = myHand.concat(hand);
    passLimit = 10
    passedHand = []
    
    switchSort(false)
    updatePersonalScore()
    sendCardBack = false;
    sendCard = false


    currentGameStatusElem.innerHTML = 'Cards were recieved! Ready to play it out?';

    socket.emit("updatePartnerHand", scoreAsNum(), myHand, myTeam[0])
}

function notRecieveCardsFinal(){
    
    if(myTeam[0] != bidWinner) currentGameStatusElem.innerHTML = 'Cards were sent back! Ready to play it out?';
    else currentGameStatusElem.innerHTML = 'Cards were sent back! Waiting on partners score';
}

/* -------------------- */
/* IN-BETWEEN FUNCTIONS */
/* -------------------- */

function updateWaitingText(score){
    let myScore = score + scoreAsNum()
    let toPull = finalBid - myScore;
    if(toPull > 0) currentGameStatusElem.innerHTML = 'You have to pull ' + toPull+  '. Do you want to play it out?';
    else currentGameStatusElem.innerHTML = 'You made it! Your total was ' + myScore + '. Do you want to play it out?';
}

function confirmPlayOut(){
    // toggle yes
    playOutButtonElem.style.display = "initial"
    noPlayOutButtonElem.style.display = "none"
    // toggle no
    if(bidWinner == myTeam[0]) noPlayOutButtonElem.style.display = "initial"
}

function readyUp(){
    currentGameStatusElem.innerHTML = "Waiting for other players"
    playOutButtonElem.style.display = "none"
    noPlayOutButtonElem.style.display = "initial"

    socket.emit("readyForPass", bidWinner)
}

function endRoundEarly(){
    socket.emit("notPassing")
}

function playAgain(){
    socket.emit("restart")
    currentGameStatusElem.innerHTML = 'Waiting for other players';
    replayButtonElem.style.display = "none"
}

function dontPlayAgain(){
    socket.emit("endGame", myTeam[0])
}

/* ----------------- */
/* OPTIONS FUNCTIONS */
/* ----------------- */

function toggleDropdown() {
    document.getElementById("optionsMenu").classList.toggle("show");
    checkChangeInOrder();
    switchSort(false)
}

function checkChangeInOrder(){
    suitOrder = [];
    if(cardOrder.hasChildNodes()){
        let children = cardOrder.childNodes;
        for(const child of children){
            if(child.nodeName != "#text") {
                if(child.id=="clubsCard") suitOrder.push(0)
                if(child.id=="diamondCard") suitOrder.push(1)
                if(child.id=="spadesCard") suitOrder.push(2)
                if(child.id=="heartCard") suitOrder.push(3)
            }
        }
    }
}

function readCheckBox(){
    var c = document.getElementById('altRedBlack');
    redBlack = c.checked;
}

/* ---------------- */
/* TRICKS FUNCTIONS */
/* ---------------- */

function startTricks(goPosition){
    if(myTeam[0] == goPosition && !allLosers) {
        currentGameStatusElem.innerHTML = 'Your turn to play';
        turnOnTricks = true;
    } else if(allLosers && myTeam[0] == goPosition){
        socket.emit("passMe", myTeam[0], leadingCard, winningCard)
    } else {currentGameStatusElem.innerHTML = 'Waiting for ' + getPlayerUsername(goPosition) + ' to play'; }
}

function sendToCenter(cardId){
    socket.emit("sendToCenter", cardId, myTeam[0], leadingCard, myHand);
    turnOnTricks = false
}

function onTricksClick(thisCardId){
    // check user clicks a valid card
    if(leadingCard != "NaN") {
        let leadingSuit = getCardInfo(leadingCard, "SUIT")
        let winningSuit = getCardInfo(winningCard, "SUIT")

        if(leadingSuit != getCardInfo(thisCardId, "SUIT") && handContainsSuit(leadingSuit)){
            currentGameStatusElemMini.innerHTML = leadingSuit + " led. Please play a " + leadingSuit;
            return
        }
        else if(dontBeatButCan(winningSuit, winningCard, Number(thisCardId)) && (winningSuit == leadingSuit || !handContainsSuit(leadingSuit))){
            currentGameStatusElemMini.innerHTML = "You have to beat it if you can"
            return
        } else if(winningSuit != trump && handContainsSuit(trump) && !handContainsSuit(leadingSuit) && getCardInfo(thisCardId, "SUIT") != trump){
            currentGameStatusElemMini.innerHTML = "You have to play trump if you can"
            return
        }
    }

    currentGameStatusElemMini.innerHTML = "";
    idIndex = myHand.indexOf(Number(thisCardId))
    myHand.splice(idIndex, 1);

    // ALL LOSERS
    checkForLosers()
    
    // ALL TRUMP (and only trump)
    if(myTeam[0] == bidWinner) checkForOnlyTrump()    

    if(!allLosers) switchSort(false)
    
    if(leadingCard == "NaN" || leadingCard == -1) leadingCard = Number(thisCardId)
    if(winningCard == "NaN" || winningCard == -1) winningCard = Number(thisCardId)
    
    sendToCenter(thisCardId)
}

function checkForLosers(){
    // if only contains losers, and your the partner of the bidder
    if(bidWinner == myTeam[1] && !handContainsFace("Ace") && !handContainsFace("Ten") && !handContainsFace("King")) {
        allLosers = true
        currentGameStatusElemMini.innerHTML = "You have all losers";
        clearCards()
    }
}

function checkForOnlyTrump(){
    let boolArray = [false, false, false]
    let xindex = 0

    // ONLY TRUMP
    if("Clubs" != trump) {
        boolArray[xindex] = !handContainsSuit("Clubs")
        xindex++
    }
    if("Diamond" != trump) {
        boolArray[xindex] = !handContainsSuit("Diamond")
        xindex++
    }
    if("Spades" != trump) {
        boolArray[xindex] = !handContainsSuit("Spades")
        xindex++
    }
    if("Heart" != trump) {
        boolArray[xindex] = !handContainsSuit("Heart")
        xindex++
    }

    if(boolArray[0] && boolArray[1] && boolArray[2]){
        socket.emit("checkOtherHandsForTrump")
    }
}

function dontBeatButCan(suit, toBeat, myId){
    // find val of cards
    let toBeatVal = Math.ceil((((toBeat -1) % 20) + 1) / 4)
    let myIdVal = Math.ceil((((myId -1) % 20) + 1) / 4)
    let theBool = false

    // if doesn't beat but can return true
    if(toBeatVal >= myIdVal && toBeatVal < 5) {
        if(toBeatVal == 1)
            if(handContainsCard(suit, "Queen")) theBool = true
        if(toBeatVal <= 2)
            if(handContainsCard(suit, "King")) theBool = true
        if(toBeatVal <= 3)
            if(handContainsCard(suit, "Ten")) theBool = true
        if(toBeatVal <= 4)
            if(handContainsCard(suit, "Ace")) theBool = true

    }
    return theBool
}


/* ------------------ */
/* REUSABLE FUNCTIONS */
/* ------------------ */

function getCardInfo(cardId, info){
    let returned = "NaN"
    cardDefinitions.forEach((card) => {
        if(card.id == cardId) {
            if(info == "ALL") returned =  card.cardType
            else if(info == "SUIT"){
                if(card.cardType.includes("Clubs")) returned =  "Clubs"
                else if(card.cardType.includes("Diamond")) returned =  "Diamond"
                else if(card.cardType.includes("Spades")) returned =  "Spades"
                else if(card.cardType.includes("Heart")) returned =  "Heart"
            }
            else if(info == "FACE"){
                if(card.cardType.includes("Jack")) returned =  "Jack"
                else if(card.cardType.includes("Queen")) returned =  "Queen"
                else if(card.cardType.includes("King")) returned =  "King"
                else if(card.cardType.includes("Ten")) returned =  "Ten"
                else if(card.cardType.includes("Ace")) returned =  "Ace"
            }
        }
    })
    return returned
}

function handContainsSuit(suit){
    let returnVal = false
    myHand.forEach((card) => {
        if(getCardInfo(card, "SUIT") == suit) returnVal = true
    })
    return returnVal
}

function handContainsFace(face){
    let returnVal = false
    myHand.forEach((card) => {
        if(getCardInfo(card, "FACE") == face) returnVal = true
    })
    return returnVal
}

function handContainsCard(suit, face){
    let returnVal = false
    myHand.forEach((card) => {
        if(getCardInfo(card, "SUIT") == suit && getCardInfo(card, "FACE") == face) returnVal = true
    })
    return returnVal
}

function isAlphaNumeric(str){
    var code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
            return true;
        }
    }
    return false;
}

function uniquePassword(pass){
    return !gPassList.includes(pass) && isAlphaNumeric(pass);
}