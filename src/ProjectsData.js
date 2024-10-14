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
    {
        name: "MagicSquare",
        url: "https://magicnikvadrat.barbuddy.net/",
        urlAvailable: true,
        description: [
            "A project made for mathematics class, explaining the magic square.",
            "In the main menu you can choose between three options: to create your own magic square, to see the algorithms and the procedure of creating a magic square and to see some examples of already made squares.",
        ],
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/MagicSquare/msmainmenu.png"), description: "Main menu" },
                { src: require("./assets/images/projects/MagicSquare/mscreateyourown.png"), description: "Create your own magic square" },
                { src: require("./assets/images/projects/MagicSquare/msalgorithms.png"), description: "Algorithm explanation" },
                { src: require("./assets/images/projects/MagicSquare/examples.png"), description: "Example of a magic square" },
            ]
        },

        finished: true
    },
    {
        name: "Plinko",
        url: "https://plinko.barbuddy.net/",
        urlAvailable: true,
        description: [
            "A project for mathematics class, explaining Gaussian curve. There is also a Plinko game, accessible from the bottom of the page.",
            "Plinko is a game where the player drops a ball into a peg board, where it will bounce around and land in a slot at the bottom.",
            "You have your budget in the top left corner of the screen, every ball drop costs as many euros as the number you set in the top right corner of the screen. The goal is to get as many balls as possible into the highest slot, which is worth the most money and the game ends when you run out of money."
        ],
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Matter.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/Plinko/gauss.png"), description: "Gauss curve" },
                { src: require("./assets/images/projects/Plinko/plinko.png"), description: "Plinko game" },
            ]
        },

        finished: true
    },
    {
        name: "ParkingGame",
        url: "https://leostricak22.github.io/ParkingGame/",
        urlAvailable: true,
        description: "A simple parking game made in JavaScript to learn how the steering wheel works for better parking.",
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/ParkingGame/parkinggame.png"), description: "Parking game" },
            ]
        },
        finished: true
    },
    {
        name: "LeoCode",
        url: "https://decoder.barbuddy.net/",
        urlAvailable: true,
        description: "A custom encryptor and decryptor made in JavaScript.",
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/LeoCode/leocode.png"), description: "LeoCode" },
            ]
        },
        finished: true
    },
    {
        name: "SQLi",
        url: "https://sqli.barbuddy.net/",
        urlAvailable: true,
        description: ["A SQL injection example form.", "Made for simpler view of the SQL payload in the login forms.", "Used only for CTF challenges and educational purposes, the published version doesn't interact with any database."],
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/SQLi/sqli.png"), description: "SQLi" },
            ]
        },
        finished: true
    },
    {
        name: "Resume",
        url: "https://resume.barbuddy.net/",
        urlAvailable: true,
        description: "My personal resume page.",
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/Resume/resume.png"), description: "Resume" },
            ]
        },
        finished: true
    },
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
    {
        name: "Smart Dog House",
        description: [
            "Project created for a Croatian Makers competition - Internet of Things: Kućni ljubimci i domaće životinje in 2018.",
            "Each of us loves our pet. According to research, 41% of the citizens of the Republic of Croatia have a dog as a pet. The smart dog house is designed so that pet owners can constantly monitor the conditions their pet has in the dog house. The model of the dog house we created uses an ultrasonic sensor that sends information to a mobile app about the pet's presence in the house. This way, the owner can know if their dog is in the house and whether it is protected from unfavorable weather conditions.",
            "Taking care of your pet is not just about whether they are in their house, but also about whether the conditions inside are suitable for them. Therefore, we installed a temperature and humidity sensor in the house, and this information is sent to a mobile app.",
            "If we are away from home, it is no longer necessary to ask someone to feed our pet. We have installed an automatic feeder in the dog house, which, by pressing a button on the mobile app, activates a motor that opens the feeder's door and releases the food. The same process is used to close the feeder. A stepper motor was used for this.",
            "Mobile application was created in Blynk, and the model of the dog house was created using Arduino."
        ],
        technologiesUsed: {
            list: [
                "Arduino",
                "C++",
                "Blynk"
            ]
        },
        team: [
            "Leo Stričak (developer, model maker)",
            "Andrija Palašek (documetation, model maker)"
        ],
        gallery: {
            images: [
                { src: require("./assets/images/projects/SmartDogHouse/house.jpg"), description: "Smart dog house" },
                { src: require("./assets/images/projects/SmartDogHouse/creationOfTheProject.jpg"), description: "Creation of the model" },
                { src: require("./assets/images/projects/SmartDogHouse/creationOfTheProject2.jpg"), description: "Creation of the model" },
                { src: require("./assets/images/projects/SmartDogHouse/mobbdog.png"), description: "Mobile app" },
                { src: require("./assets/images/projects/SmartDogHouse/shema-dogg.png"), description: "Arduino scheme" },
            ]
        },
        screencast: "https://www.youtube.com/embed/AOIWomsvg_o?si=KeLxgOZffkpF-VJk",
        awards: "2. place on Croatian Makers competition - Internet of Things: Kućni ljubimci i domaće životinje",
        finished: true
    },
    { name: "Smart Street", finished: false },
    { name: "SimonSays", finished: false },
];