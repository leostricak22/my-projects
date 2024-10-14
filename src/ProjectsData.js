export const projectsData = [
    {
        name: "Imbus",
        logo: require("./assets/images/projects/Imbus/logo.png"),
        url: "https://downloads.barbuddy.net/imbus",
        urlAvailable: false,
        description: "Imbus is a mobile application that allows users to find experts within Croatia, it was developed as part of the TVZ Mc2 competition.",
        functionalitiesAndFeatures: {
            description: "The user creates an ad on which the expert makes an offer. Within the chat, they agree on the date of the work, which is automatically saved in the calendar after confirmation.",
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
            description: [
                "Enter your name and start the game. Use arrow keys, or swipe to change direction of the snake's head",
                "Your score is shown on the leaderboard."
            ]
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
                { src: require("./assets/images/projects/SnakeGame/MainScreen.png"), description: "Snake main screen" },
                { src: require("./assets/images/projects/SnakeGame/Game.png"), description: "Snake gameplay" },
                { src: require("./assets/images/projects/SnakeGame/Score.png"), description: "Snake score on game over" }
            ]
        },
        finished: true
    },
    {
        name: "BarBuddy",
        logo: require("./assets/images/projects/BarBuddy/BarBuddyLogo.png"),
        url: "https://barbuddy.net/",
        urlAvailable: true,
        inDevelopment: true,
        description: [
            "BarBuddy is a web application designed to make ordering easier in hospitality venues.",
            "With this application, a customer in any venue that supports the BarBuddy app can order anything from the menu via their mobile phone. All they need to do is scan the QR code on their table and select their order. This way, they can order without waiting for a waiter and receive their order without long delays. While ordering, the customer can see the price of each item displayed in euros. Ordering is initiated by scanning the QR code using their mobile device's camera, and no additional app is required on the customer's end. The waiter has our app, through which they can see the placed order.",
            "A new order consists of the ordered items, table number, total quantity, and the total bill amount. Every table in the venue is numbered and marked with its own QR code. The app allows the creation of a floor plan, enabling waiters to see the exact location of the table and the number where the order was placed. Before the app's first use, the venue's admin must set up the menu (price list), where all items and prices are displayed. Once the order is marked as complete, the customer can rate the waiter with stars, from one to five.",
            "The venue's administrator can see all orders from each waiter, along with all their reviews. The admin can view the history of all orders made through the app, sorted by dates and months. Additionally, BarBuddy offers the option to create a custom floor plan to help waiters navigate the venue more easily. Each table can be labeled with a number, allowing the waiter to see exactly where the table with an open order is located."
        ],
        documentation: "https://drive.google.com/file/d/1dX2yVNMDoPzi5YJG9r_bdYKNm0OX_MKw/view?usp=sharing",
        technologiesUsed: {
            list: [
                "Node.js",
                "Express.js",
                "OpenLayers",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript",
                "Chart.js"
            ]
        },
        screencast: "https://www.youtube.com/embed/LwYKsQZ1G1g?si=QMeciFOZSMuCHNwP",
        team: [
            "Leo Stričak (developer)",
            "Andrija Palašek (bussiness plan, marketing)",
        ],
        gallery: {
            images: [
                { src: require("./assets/images/projects/BarBuddy/QRcode.png"), description: "Example of a QR code sticker that would be placed on tables in the venue." },
                { src: require("./assets/images/projects/BarBuddy/OrderMaking.png"), description: "Order screen where the customer can select items from the menu." },
                { src: require("./assets/images/projects/BarBuddy/orderFinish.png"), description: "Screen where the customer can see the state of the order." },
                { src: require("./assets/images/projects/BarBuddy/orderStaff.png"), description: "Order screen for staff." },
                { src: require("./assets/images/projects/BarBuddy/email.png"), description: "Email confirmation." },
            ]
        },
        finished: true
    },
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