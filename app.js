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

const express = require('express')
const app = express()

const http = require('http')
const { join } = require('path')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000})

const port = 3000

// make everyfile available to the public
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// WHOLE SERVER
const players = {}
let roomPassList = []

// GAMES
let passedList = [[]]

let lastBid = [-1]
let largeTricksCount = [0];
let count = [0]
let trumpCount = [0]
let round = [0]

let lastBids = [[{}]]
let bidder = [-1]
let gIndex = [0]

let bidWinner = [-1]
let finalBidAmount = [-1]
let trickStarter = [-1]
let trump = ["NaN"]

let offTeam1Score = [0]; // 0 - 2
let offTeam2Score = [0]; // 1 - 3
let tempTeam1Score = [0]; // 0 - 2
let tempTeam2Score = [0]; // 1 - 3

let centerCardIds = [[]]
let teamOneTricks = [[]]
let teamTwoTricks = [[]]

let hands = [[]]

let finishTricks = [false];

let gameState = ["joining"];

io.on('connection', (socket) => {
    console.log("A User Connected!")
    let localRoom = -1;

    players[socket.id] = {
        name: "",
        gameID: localRoom,
        positionID: -1
    }

    io.emit("updatePassList", roomPassList);
    
    // DISCONNECT (built in keyword)
    socket.on('disconnect', (reason) => {
        console.log(reason)
        let roomName = "room" + players[socket.id].gameID;
        delete players[socket.id]        
        io.in(roomName).emit('updatePlayers', players)
    })

    // ON GAME RESTART
        // called when player agrees to play again
    socket.on("restart", () => {
        // TO-DO -- redo count to keep track of who approved
        count[localRoom]++
        if(count[localRoom] == 4){
            handleRestart(localRoom)
            count[localRoom] = 0
        } else console.log("One Moment")
    })

    // INITALIZE GAME 
        // called after username is accepted
    socket.on('initGame', (username) => {
        players[socket.id].name = username

        // HANDLE RECONNECT
        if(gameState[localRoom] != "joining" && gameState[localRoom] != "loadingUp"){
            console.log("Handling reconnect: " + gameState[localRoom])
            if(gameState[localRoom] == "bidding"){
                socket.emit("initConnect");
                socket.emit("learnPartner")
                socket.emit("dealToPlayers", hands[localRoom])
                sendBid(localRoom)
            }
        }
        else {
            let roomName = "room" + localRoom.toString();

            // UPDATE PLAYER LIST
            io.in(roomName).emit('updatePlayers', players)

            checkStart(localRoom)
            console.log(players)
        }
    })

    // ON GAME START
        // called after round starts
    socket.on('readyUp', () => {
        // TO-DO -- CHANGE COUNT TO KEEP TRACK OF WHO EMITTED
        console.log("Count: " + count)
        count[localRoom]++
        if(count[localRoom] == 4){
            deal(localRoom)
            count[localRoom] = 0
        } else console.log("One Moment")
    })

    // ON NEW PASSWORD
        // called if new room pass accepted
    socket.on('setPassword', (password) => {
        // update room stuff
        pushNewRoom()
        roomPassList.push(password);
        
        localRoom = roomPassList.indexOf(password)
        let roomName = "room" + localRoom.toString();
        socket.join(roomName);

        io.emit("updatePassList", roomPassList);

        genPos(socket.id, localRoom);

        // LET USER KNOW THEIR POSITION AND ROOM
            // update to person that just connected
        socket.emit('learnPosition', players[socket.id].positionID, localRoom)

        
        // UPDATE PLAYERS
        io.in(roomName).emit('updatePlayers', players)
    })

    // ON ALREADY SET PASSWORD
        // called if password is accepted
    socket.on('joinRoom', (password) => {
        let passRoom = roomPassList.indexOf(password)
        if(roomFull(passRoom)) socket.emit("notJoinedRoom")
        else {
            socket.emit("joinedRoom")
            localRoom = passRoom

            let roomName = "room" + localRoom.toString();
            socket.join(roomName);

            genPos(socket.id, localRoom)
            
            // LET USER KNOW THEIR POSITION AND ROOM
                // update to person that just connected
            socket.emit('learnPosition', players[socket.id].positionID, localRoom)

            // UPDATE PLAYERS
            io.in(roomName).emit('updatePlayers', players)
        } 
    })

    // ON RETURN BID
        // called when someone sends a bid over
    socket.on('returnBid', (results, position) => {
        if(lastBid[localRoom] == results || results == 150) passedList[localRoom].push(position)
        
        lastBid[localRoom] = results
        if(passedList[localRoom].length == 3) wrapUpBid(results, localRoom)
        else continueBid(localRoom)
    })

    // ON SETTING TRUMP
        // called when someone has set trump
    socket.on("updateTrump", (passedTrump) => {
        trump[localRoom] = passedTrump
        gameState[localRoom] = "tradingTrump"
        io.in("room" + localRoom.toString()).emit("setTrump", passedTrump);
        io.in("room" + localRoom.toString()).emit("exchange");
    })

    // ON SENDING CARDS TO THE BID WINNER
        // called when partner clicks to send cards over
    socket.on("sendCards", (passedHand, size, partnersHand, partnersPosition) => {
        gameState[localRoom] = "returningTrade"

        hands[localRoom][partnersPosition] = partnersHand
        hands[localRoom][bidWinner[localRoom]] = hands[localRoom][bidWinner[localRoom]].concat(passedHand)
        io.in("room" + localRoom.toString()).emit("recieveCards", passedHand, size)
    })

    // ON SENDING CARDS TO THE PARTNER
        // called when bid winner clicks to send cards over
    socket.on("sendCardsBack", (passedHand, biddersHand) => {
        gameState[localRoom] = "waitToStartTricks"

        hands[localRoom][bidWinner[localRoom]] = biddersHand
        io.in("room" + localRoom.toString()).emit("takeCardsBack", passedHand);
    })

    // ON UPDATING SCORE TEMPORARILY
        // called after exchange of hands has finished
    socket.on("shareScoreTemp", (score, team) => {
        if(team == 1) tempTeam1Score[localRoom] = tempTeam1Score[localRoom] + score
        else if(team == 2) tempTeam2Score[localRoom] = tempTeam2Score[localRoom] + score
        
        io.in("room" + localRoom.toString()).emit("updateScores", tempTeam1Score[localRoom] + offTeam1Score[localRoom], tempTeam2Score[localRoom] + offTeam2Score[localRoom])
        checkSpecialEndGame(localRoom)
    })

    // ON UPDATING PARTNER HAND
        // called when bid winner sends cards over
    socket.on("updatePartnerHand", (score, partnersHand, partnersPosition) => {
        hands[localRoom][partnersPosition] = partnersHand
        io.in("room" + localRoom.toString()).emit("bidderRetreiveScore", score)
    })

    // ON NOT RUNNING TRICKS
        // called if bid winner says no to continuing
    socket.on("notPassing", () => {
        if(bidWinner[localRoom] == 0 || bidWinner[localRoom] == 2){
            offTeam1Score[localRoom] -= finalBidAmount[localRoom]
            offTeam2Score[localRoom] += tempTeam2Score[localRoom]
        }
        else {
            offTeam2Score[localRoom] -= finalBidAmount[localRoom]
            offTeam1Score[localRoom] += tempTeam1Score[localRoom]
        }

        gameState[localRoom] = "roundOver"
        io.in("room" + localRoom.toString()).emit("updateScores", offTeam1Score[localRoom], offTeam2Score[localRoom])
        io.in("room" + localRoom.toString()).emit("endRound", round[localRoom])
        
        initializeNextRound(localRoom)
    })
    
    // ON READY TO PLAY TRICKS
        // called if anyone agrees to play tricks
    socket.on("readyForPass", (winner) => {
        // TO-DO: CHANGE COUNT TO KEEP TRACK OF WHO 
        bidWinner[localRoom] = winner;
        count[localRoom]++
        if(count[localRoom] == 4){
            count[localRoom] = 0
            io.in("room" + localRoom.toString()).emit("initializeForPass")
            startTricksLoop(localRoom)
        } else {
            console.log("One Moment")
        }
    })

    // ON SEND TO CENTER DURING TRICKS
        // called when someone clicks to send a card
    socket.on("sendToCenter", (cardId, sentPosition, leading, playersHand) => {
        
        centerCardIds[localRoom].push(cardId)
        let currentWinner = evaulateCurrentHand(localRoom)[1]
       
        hands[localRoom][sentPosition] = playersHand

        io.in("room" + localRoom.toString()).emit("addCardToCenter", cardId, sentPosition)
        if(centerCardIds[localRoom].length >= 4) evaulatePlay(localRoom)
        else io.in("room" + localRoom.toString()).emit("runTrick", (sentPosition + 1) % 4, leading, currentWinner);
    })

    // ON PLAYER HAS ALL LOSERS
        // called when partner has only losers
    socket.on("passMe", (position, leading, currentWinner) => {
        hands[localRoom][position] = []
        centerCardIds[localRoom].push(-1)
        if(centerCardIds[localRoom].length >= 4) evaulatePlay(localRoom)
        else io.in("room" + localRoom.toString()).emit("runTrick", (position + 1) % 4, leading, currentWinner);
    })

    // ON CHECK OTHER HANDS FOR ANY TRUMP
        // called if bid winner only has trump left
    socket.on("checkOtherHandsForTrump", () => {  
        trumpCount[localRoom] = 0
        io.in("room" + localRoom.toString()).emit("checkForTrump")
    })

    // ON NO TRUMP LEFT
        // called after checking for trump, if they don't have any
    socket.on("noTrump", () => {
        trumpCount[localRoom]++
        if(trumpCount[localRoom] == 3) finishTricks[localRoom] = true
    })

    // ON END GAME
        // called after someone says they don't wanna play again
    socket.on("endGame", (position) => {
        let tempStr = getUserName(position) + " didn't want to play on. Thanks for playing!"
        io.in("room" + localRoom.toString()).emit("updateText", "BOTH", tempStr, "")
        io.in("room" + localRoom.toString()).emit("gameOver")
    })

})

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

/* -------------- */
/* TEAM FUNCTIONS */
/* -------------- */

function swapTeams(room){
    let ranNum = Math.floor(Math.random() * 2)
    if(ranNum == 0) swapPlayers(1, 2, room)
    else swapPlayers(2, 3, room)    
    io.in("room" + room.toString()).emit('updatePlayers', players)
}

function swapPlayers(pos1, pos2, room){
    for(const ID in players){
        if(players[ID].gameID == room){
            if(players[ID].positionID == pos1){
                players[ID].positionID = pos2
                io.to(ID).emit('learnPosition', pos2, players[ID].gameID);
            }
            else if(players[ID].positionID == pos2){
                players[ID].positionID = pos1
                io.to(ID).emit('learnPosition', pos1, players[ID].gameID);
            }
        }
        
    }
}

/* ----------------------- */
/* INITALIZATION FUNCTIONS */
/* ----------------------- */

function handleRestart(room){
    round[room] = 0
    
    offTeam1Score[room] = 0
    offTeam2Score[room] = 0

    io.in("room" + room.toString()).emit("updateScores", offTeam1Score[room], offTeam2Score[room])
    clearEverything(room)
    swapTeams(room)
    startGame(room)
}

function clearEverything(room){
    lastBids[room] = [{}]
    bidder[room] = -1
    gIndex[room] = 0

    passedList[room] = []

    lastBid[room] = -1
    largeTricksCount[room] = 0;
    count[room] = 0

    bidWinner[room] = -1
    finalBidAmount[room] = -1
    trickStarter[room] = -1
    trump[room] = "NaN"

    tempTeam1Score[room] = 0; // 0 - 2
    tempTeam2Score[room] = 0; // 1 - 3

    centerCardIds[room] = []
    teamOneTricks[room] = []
    teamTwoTricks[room] = []
    hands[room] = []

    finishTricks[room] = false
}

function initializeNextRound(room){
    round[room]++
    clearEverything(room)

    // deal and send to players
    io.in("room" + room.toString()).emit("nextRound")
}

/* -------------- */
/* ROOM FUNCTIONS */
/* -------------- */

function roomHas(genID, room){
    for(const ID in players){
        if(players[ID].gameID == room && players[ID].positionID == genID) return true
    }
    return false
}

function roomFull(room){
    return roomHas(0, room) && roomHas(1, room) && roomHas(2, room) && roomHas(3, room)
}

function genPos(socketID, room){
    let genPosId = 0;

    // GEN POSITION
    while(roomHas(genPosId, room)){
        genPosId = Math.floor(Math.random() * 4)
    }

    players[socketID].positionID = genPosId;
    players[socketID].gameID = room;
}

function roomIsFull(room){
    let localCount = 0;
    for(const id in players){
        if(players[id].gameID == room) localCount++;
    }
    return localCount == 4;
}

function pushNewRoom(){
    passedList.push([])

    lastBid.push([-1])
    largeTricksCount.push([0]);
    count.push([0])
    trumpCount.push([0])
    round.push([0])

    lastBids.push([{}])
    bidder.push([-1])
    gIndex.push([0])

    bidWinner.push([-1])
    finalBidAmount.push([-1])
    trickStarter.push([-1])
    trump.push(["NaN"])

    offTeam1Score.push([0]); // 0 - 2
    offTeam2Score.push([0]); // 1 - 3
    tempTeam1Score.push([0]); // 0 - 2
    tempTeam2Score.push([0]); // 1 - 3

    centerCardIds.push([])
    teamOneTricks.push([])
    teamTwoTricks.push([])

    hands.push([])

    finishTricks.push([false]);

    gameState.push(["joining"]);
}

/* --------------- */
/* TRICKS FUNCTION */
/* --------------- */

function finishTricksEarly(room){
    // all remaining cards need to be given to bidWinner
    if(bidWinner[room] == 0 || bidWinner[room] == 2) teamOneTricks[room] = giveAllCards(teamOneTricks[room], room)
    else if(bidWinner[room] == 1 || bidWinner[room] == 3) teamTwoTricks[room] = giveAllCards(teamTwoTricks[room], room)
    
    // hands need cleared
    hands[room] = []
    centerCardIds[room] = []

    // count score
    calculateTricksScore(bidWinner[room], room)
}

function giveAllCards(team, room){
    for(let tIdx = 0; tIdx < 4; tIdx++) {
        team = team.concat(hands[room][tIdx])
    }

    return team
}

function evaulatePlay(room){
    largeTricksCount[room] -= 1

    // get winner
    let finalWinner = evaulateCurrentHand(room)[0]
    
    // add round to correct hand
    if(finalWinner == 0 || finalWinner == 2) teamOneTricks[room] = teamOneTricks[room].concat(centerCardIds[room])
    else if(finalWinner == 1 || finalWinner == 3) teamTwoTricks[room] = teamTwoTricks[room].concat(centerCardIds[room])
    centerCardIds[room] = []

    // clear board and continue after a delay
    setTimeout(function() {
        io.in("room" + room.toString()).emit("clearBoard")
        if(finishTricks[room]) finishTricksEarly(room)
        else if(largeTricksCount[room] > 0) nextTrick(finalWinner, room)
        else calculateTricksScore(finalWinner, room)
    }, 3000);
}

function evaulateCurrentHand(room){
    // assume winner is the lead
    let cardToCheckAgainst = centerCardIds[room][0]
    let winner = 0
    let idx = -1; 

    centerCardIds[room].forEach((card) => {
        idx++
        if(card != -1){
        // check if same suit
            if(getCardInfo(card, "SUIT") == getCardInfo(cardToCheckAgainst, "SUIT"))
                {
                    // check if higher value card
                    if(Math.ceil(card/4) > Math.ceil(cardToCheckAgainst/4)){
                        cardToCheckAgainst = card
                        winner = idx
                    }
                } // check if trump (if lead isn't trump)
            if(getCardInfo(cardToCheckAgainst, "SUIT") != trump[room] && getCardInfo(card, "SUIT") == trump[room]){
                cardToCheckAgainst = card
                winner = idx
            } 
        }
        
    })

    winner = (winner + trickStarter[room]) % 4

    // winner pos and winning hand
    return [winner, cardToCheckAgainst]
}

function calculateTricksScore(finalPoints, room){
    let t1score = 0;

    // count teamOneTricks
    teamOneTricks[room].forEach((card) => {
        let cardFace = getCardInfo(card, "FACE")
        if(cardFace == "Ace" || cardFace == "Ten" || cardFace == "King") t1score++
    })

    // get t2Score
    let t2score = 48 - t1score
    

    // add 2 to final winner
    if(finalPoints == 0 || finalPoints == 2) t1score += 2
    else t2score += 2

    // update scores based on results
    if((bidWinner[room] == 0 || bidWinner[room] == 2)){ //t1
        if(t2score > 0) offTeam2Score[room] += tempTeam2Score[room] + t2score;
        
        if(tempTeam1Score[room] + t1score >= finalBidAmount[room]) offTeam1Score[room] += tempTeam1Score[room] + t1score
        else if(tempTeam1Score[room] < finalBidAmount[room] - 50){
            if(t2score > 0)  offTeam1Score[room] -= 500
            else offTeam1Score[room] += 500
        }
        else offTeam1Score[room] -= finalBidAmount[room]
    } else { //t2
        if(t1score > 0) offTeam1Score[room] += tempTeam1Score[room] + t1score;
        
        if(tempTeam2Score[room] + t2score >= finalBidAmount[room]) offTeam2Score[room] += tempTeam2Score[room] + t2score
        else if(tempTeam2Score[room] < finalBidAmount[room] - 50){
            
            if(t1score > 0) offTeam2Score[room] -= 500
            else offTeam2Score[room] += 500
        }
        else offTeam2Score[room] -= finalBidAmount[room]
    }

    io.in("room" + room.toString()).emit("updateScores", offTeam1Score[room], offTeam2Score[room])
    io.in("room" + room.toString()).emit("displayTrickPoints", t1score, t2score)
    checkGameOver(room)
}

function startTricksLoop(room){
    // start trick at count 20
    gameState[room] = "takingTricks"
    largeTricksCount[room] = 20
    nextTrick(bidWinner[room], room)
}

function nextTrick(startPos, room){
    trickStarter[room] = startPos
    io.in("room" + room.toString()).emit("runTrick", startPos, "NaN", "NaN")
}

/* ------------------ */
/* END GAME FUNCTIONS */
/* ------------------ */

function checkSpecialEndGame(room){
    let teamOne = offTeam1Score[room] + tempTeam1Score[room]
    let teamTwo = offTeam2Score[room] + tempTeam2Score[room]
    if(Math.abs(teamOne - teamTwo) > 50 && gameOverCondition(teamOne, teamTwo)) gameOver(Math.max(teamOne, teamTwo), room)
}

function checkGameOver(room){
    if(gameOverCondition(offTeam1Score[room], offTeam2Score[room])) gameOver(Math.max(offTeam1Score[room], offTeam2Score[room]), room)
    else initializeNextRound(room)
}

function gameOverCondition(score1, score2){
    return (score1 >= 1000 || score2 >= 1000)
}

function gameOver(winnerScore, room){
    let gameWinner = 0
    console.log(winnerScore)
    if(winnerScore == offTeam1Score[room]) gameWinner = 1
    else gameWinner = 2
    count[room] = 0
    console.log("winner: " + gameWinner)
    io.in("room" + room.toString()).emit("endGame", gameWinner)
}

/* ----------------- */
/* GENERAL FUNCTIONS */
/* ----------------- */

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

function getUserName(player){
    for(const ID in players){
        if(players[ID].positionID == player) return players[ID].name
    }
}

function allPlayersHaveUserNames(room){
    for(const id in players){
        if(!isAlphaNumeric(players[id].name) && players[id].gameID == room) return false
    }
    return true
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

/* ------------- */
/* BID FUNCTIONS */
/* ------------- */

function startBid(room){
    gameState[room] = "bidding"
    lastBids[room] = [
        {id: 0, username: "You're opening the bid. Enter your bid or pass", amount: -1}
    ];
    bidder[room] = round[room] % 4
    sendBid(room)
}

function continueBid(room){
    console.log(gIndex[room]);
    console.log(bidder);
    lastBids[room] = updateBid(lastBids[room], bidder[room], lastBid[room], gIndex[room])
    
    bidder[room] = getBidder(bidder[room], room)
    sendBid(room)
}

function sendBid(room){
    console.log(lastBids)
    console.log(lastBid)
    io.in("room" + room.toString()).emit("startBidding", bidder[room], lastBids[room], lastBid[room])
}

function wrapUpBid(bidAmount, room){
    // find who didn't pass
    if(!passedList[room].includes(0)) bidWinner[room] = 0
    else if(!passedList[room].includes(1)) bidWinner[room] = 1
    else if(!passedList[room].includes(2)) bidWinner[room] = 2
    else if(!passedList[room].includes(3)) bidWinner[room] = 3

    // save bid amount
    finalBidAmount[room] = bidAmount

    // have bid winner select trump
    gameState[room] = "selectingTrump"
    io.in("room" + room.toString()).emit("finishedBidding", bidWinner[room], lastBid[room])
}

function getBidder(startBidder, room){
    // go next, looping around the edge
    let thisBidder = (startBidder + 1) % 4
    while(passedList[room].includes(thisBidder)) thisBidder = (thisBidder + 1) % 4
    return thisBidder
}

function updateBid(lastBidsHere, person, num, inx) {
    if(inx > 0){
        lastBidsHere.push({
            id: inx,
            username: "un",
            amount: 0
        });
    }
    
    lastBidsHere[inx].username = getUserName(person)
    lastBidsHere[inx].amount = num
    
    inx++
    return lastBidsHere
}

/* --------------- */
/* START FUNCTIONS */
/* --------------- */

function startGame(room){
    io.in("room" + room.toString()).emit("learnPartner")
    io.in("room" + room.toString()).emit("startGame")
    gameState[room] = "loadingUp"
}

function checkStart(room){
    console.log(allPlayersHaveUserNames());
    console.log(Object.keys(players).length);
    if(allPlayersHaveUserNames(room) && Object.keys(players).length >= 4 && roomIsFull(room)){
        startGame(room)
    }
    else io.in("room" + room.toString()).emit("updateText", "BIG", "Waiting for other players", "")
}

function deal(room){
    let numberList = []

    let handOne = []
    let handTwo = []
    let handThree = []
    let handFour = []
    hands[room] = []

    // generate numbers
    while(numberList.length < 80) {
        number = Math.floor(Math.random() * 80 + 1)
        if(!numberList.includes(number)){
            numberList.push(number)

            // move across the hands in order
            if(numberList.length % 4 == 0) handOne.push(number)
            else if(numberList.length % 4 == 1) handTwo.push(number)
            else if(numberList.length % 4 == 2) handThree.push(number)
            else if(numberList.length % 4 == 3) handFour.push(number)
        }
    }

    // update hands
    hands[room].push(handOne)
    hands[room].push(handTwo)
    hands[room].push(handThree)
    hands[room].push(handFour)
    
    // send to players
    io.in("room" + room.toString()).emit('dealToPlayers', hands[room])
    startBid(room)
}



