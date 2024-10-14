export const projectsData = [
    {
        name: "Imbus",
        url: "https://downloads.barbuddy.net/imbus",
        urlAvailable: false,
        description: "Imbus is a mobile application that allows users to find experts within Croatia, it was developed as part of the TVZ Mc2 competition.",
        functionalitiesAndFeatures: {
            description: ["The user creates an ad on which the expert makes an offer. Within the chat, they agree on the date of the work, which is automatically saved in the calendar after confirmation."],
            list: ["Creating ads",
                "Browse and filter ads",
                "Small defects (forum)",
                "Calendar",
                "Filtering experts by category and location",
                "Reviews",
                "Offers",
                "Edit profile"
            ]
        },
        technologiesUsed: {
            list: [
                "Java Spring Boot",
                "React Native",
                "Docker",
                "MySQL",
                "Flyway",
                "Expo"
            ]
        },
        screencast: "https://www.youtube.com/embed/HrZacMQllf0?si=AqG86td4lHqk4JRL",
        team: ["Leo Stričak (developer)", "Zvonimir Škegro (design)", "Oliver Živčić (developer & business plan)"],
        finished: true
    },
    {
        name: "SnakeGame: Zmijica",
        url: "https://zmijica.barbuddy.net/",
        urlAvailable: true,
        description: "Snake game is a simple game made in React.js. The goal of the game is to eat as many enemies as possible without hitting the walls or the snake's body.",
        functionalitiesAndFeatures: {
            description: ["Enter your name and start the game. Use arrow keys, or swipe to change direction of the snake's head","Your score is shown on the leaderboard."]
        },
        technologiesUsed: {
            list: [
                "React.js",
                "Node.js",
                "Express.js",
                "MySQL"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/SnakeGame/MainScreen.png"), description: "Snake main screen" },
                { src: require("./assets/images/SnakeGame/Game.png"), description: "Snake gameplay" },
                { src: require("./assets/images/SnakeGame/Score.png"), description: "Snake score on game over" }
            ]
        },
        finished: true
    },
    { name: "BarBuddy", finished: false },
    { name: "Formulas", finished: false },
    { name: "MicroMania", finished: false },
    { name: "EcoMedia", finished: false },
    { name: "MagicSquare", finished: false },
    { name: "Plinko", finished: false },
    { name: "ParkingGame", finished: false },
    { name: "LeoCode", finished: false },
    { name: "SQLi", finished: false },
    { name: "Resume", finished: false },
    { name: "Visitor", finished: false },
    { name: "WebShop", finished: false },
    { name: "TimeItRight", finished: false },
    { name: "RoomManagement", finished: false },
    { name: "MeetingApp", finished: false },
    { name: "Alarm", finished: false },
    { name: "ScuffedGeogebra", finished: false },
    { name: "Paint", finished: false },
    { name: "Chat", finished: false },
    { name: "TicTacToe Online", finished: false },
    { name: "TicTacToe React", finished: false },
    { name: "Smart Dog House", finished: false },
    { name: "Smart Street", finished: false },
    { name: "SimonSays", finished: false },
];