const cardObjectDefinitions = [
    {id:1, imagePath:'images/Cards/cardClubs2.png'},
    {id:2, imagePath:'images/Cards/cardClubs3.png'},
    {id:3, imagePath:'images/Cards/cardClubs4.png'},
    {id:4, imagePath:'images/Cards/cardClubs5.png'},
    {id:5, imagePath:'images/Cards/cardClubs6.png'},
    {id:6, imagePath:'images/Cards/cardClubs7.png'},
    {id:7, imagePath:'images/Cards/cardClubs8.png'},
    {id:8, imagePath:'images/Cards/cardClubs9.png'},
    {id:9, imagePath:'images/Cards/cardClubs10.png'},
    {id:10, imagePath:'images/Cards/cardClubsJ.png'},
    {id:11, imagePath:'images/Cards/cardClubsQ.png'},
    {id:12, imagePath:'images/Cards/cardClubsK.png'},
    {id:13, imagePath:'images/Cards/cardClubsA.png'},
    {id:14, imagePath:'images/Cards/cardDiamonds2.png'},
    {id:15, imagePath:'images/Cards/cardDiamonds3.png'},
    {id:16, imagePath:'images/Cards/cardDiamonds4.png'},
    {id:17, imagePath:'images/Cards/cardDiamonds5.png'},
    {id:18, imagePath:'images/Cards/cardDiamonds6.png'},
    {id:19, imagePath:'images/Cards/cardDiamonds7.png'},
    {id:20, imagePath:'images/Cards/cardDiamonds8.png'},
    {id:21, imagePath:'images/Cards/cardDiamonds9.png'},
    {id:22, imagePath:'images/Cards/cardDiamonds10.png'},
    {id:23, imagePath:'images/Cards/cardDiamondsJ.png'},
    {id:24, imagePath:'images/Cards/cardDiamondsQ.png'},
    {id:25, imagePath:'images/Cards/cardDiamondsK.png'},
    {id:26, imagePath:'images/Cards/cardDiamondsA.png'},
    {id:27, imagePath:'images/Cards/cardHearts2.png'},
    {id:28, imagePath:'images/Cards/cardHearts3.png'},
    {id:29, imagePath:'images/Cards/cardHearts4.png'},
    {id:30, imagePath:'images/Cards/cardHearts5.png'},
    {id:31, imagePath:'images/Cards/cardHearts6.png'},
    {id:32, imagePath:'images/Cards/cardHearts7.png'},
    {id:33, imagePath:'images/Cards/cardHearts8.png'},
    {id:34, imagePath:'images/Cards/cardHearts9.png'},
    {id:35, imagePath:'images/Cards/cardHearts10.png'},
    {id:36, imagePath:'images/Cards/cardHeartsJ.png'},
    {id:37, imagePath:'images/Cards/cardHeartsQ.png'},
    {id:38, imagePath:'images/Cards/cardHeartsK.png'},
    {id:39, imagePath:'images/Cards/cardHeartsA.png'},
    {id:40, imagePath:'images/Cards/cardSpades2.png'},
    {id:41, imagePath:'images/Cards/cardSpades3.png'},
    {id:42, imagePath:'images/Cards/cardSpades4.png'},
    {id:43, imagePath:'images/Cards/cardSpades5.png'},
    {id:44, imagePath:'images/Cards/cardSpades6.png'},
    {id:45, imagePath:'images/Cards/cardSpades7.png'},
    {id:46, imagePath:'images/Cards/cardSpades8.png'},
    {id:47, imagePath:'images/Cards/cardSpades9.png'},
    {id:48, imagePath:'images/Cards/cardSpades10.png'},
    {id:49, imagePath:'images/Cards/cardSpadesJ.png'},
    {id:50, imagePath:'images/Cards/cardSpadesQ.png'},
    {id:51, imagePath:'images/Cards/cardSpadesK.png'},
    {id:52, imagePath:'images/Cards/cardSpadesA.png'}
]



function deal(){
    let numberList = []

    let handOne = []
    let handTwo = []
    let handThree = []
    let handFour = []

    while(numberList.length < 52) {
        number = Math.floor(Math.random() * 52 + 1)
        console.log(number)
        if(!numberList.includes(number)){
            numberList.push(number)
            if(numberList.length % 4 == 0)
            {
                handOne.push(number)
            }
            else if(numberList.length % 4 == 1)
            {
                handTwo.push(number)
            }
            else if(numberList.length % 4 == 2)
            {
                handThree.push(number)
            }
            else if(numberList.length % 4 == 3)
            {
                handFour.push(number)
            }
        }
    }
}

let thisDic = {}
let index = 0;
function dictionaryTest(){
    console.log("Position: " + Object.keys(thisDic).length % 4)
    console.log("Game: " + Math.floor(Object.keys(thisDic).length / 4))
    thisDic[index] = {
        seshID: index + 10
    }
    index++
}

dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()
dictionaryTest()