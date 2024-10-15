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
    {
        name: "Formulas",
        url: "https://formulas.barbuddy.net/",
        urlAvailable: true,
        logo: require("./assets/images/projects/Formulas/logo.png"),
        description: [
            "Formulas is a web application designed to assist with solving physics and mathematics problems. The application is divided into three categories: \"My Formulas,\" \"Calculator,\" and \"My Tasks.\"",
            "The first visible page is the login page. If the user does not have an account, they can register. After logging in, the user is redirected to the main menu.",
            "In the \"My Formulas\" category, users can add, modify, or delete their formulas. The tab contains tables sorted by groups in which the formulas are stored. Below the tables is a form for adding formulas. Formulas are added to the database based on the following information: formula, formula description, and the group in which the formulas are categorized. Formulas can be saved in .pdf format by groups or all formulas at once.",
            "In the \"Calculator\" category, this calculator is not similar to other \"regular\" calculators; it is designed based on user-defined formulas. In the calculator, the user enters values, selects the group of formulas they want to use, and specifies the unknowns that need to be calculated. The number of values is defined using the \"+\" and \"-\" buttons below the calculator form. When the \"Calculate\" button is pressed, the user receives the solution to the problem on the screen along with the procedure. If desired, they can save it to their tasks. The calculator is organized to correspond to the user's formulas; an algorithm has been created to search through all the formulas, structured so that if a solution cannot be obtained with the entered formulas, the algorithm will try to incorporate other formulas into each formula. If a solution does not exist, a message will be displayed indicating that the solution could not be obtained, and it cannot be saved as a task. Tasks are saved by having the user enter the task title and problem description and then press the \"Save Task\" button.",
            "In the \"My Tasks\" category, there is a table displaying the task name, problem description, and options for opening, modifying, or deleting the task. When a task is opened, all data related to that task is displayed, along with an additional option to save the task in .pdf format.\n",
        ],
        documentation: "https://drive.google.com/file/d/148fW7FEbID4asd1kTdxPqdOoTCT1acwX/view?usp=sharing",
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MySQL"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/Formulas/formulasLogin.png"), description: "Login page." },
                { src: require("./assets/images/projects/Formulas/formulasHomepage.png"), description: "Home page." },
                { src: require("./assets/images/projects/Formulas/formulasFormulas.png"), description: "Formulas and constants page." },
                { src: require("./assets/images/projects/Formulas/formulasCalc.png"), description: "Calculator." },
                { src: require("./assets/images/projects/Formulas/formulasCalcSolve.png"), description: "The solution." },
                { src: require("./assets/images/projects/Formulas/formulasTasks.png"), description: "All tasks." },
                { src: require("./assets/images/projects/Formulas/formulasTask.png"), description: "Specific task." },
            ]
        },
        screencast: "https://www.youtube.com/embed/o2CqNJ4mSdk?si=twf5AN7ohht58w3a",
        finished: true
    },
    {
        name: "MicroMania",
        logo: require("./assets/images/projects/MicroMania/MicroManiaLogo.png"),
        documentation: "https://drive.google.com/file/d/1b6smmZvWEEDNlu1IhSP2q9KYZCxWk-ob/view?usp=sharing",
        description: [
            "Micromania is an online tool used for creating, editing, and playing quizzes using Microbits. To access the tool, users are required to register, with their data being stored in a database. After registration, logging in is necessary to enter the site.",
            "The quiz, or the quiz questions, are created using the web tool, and for students to answer the quiz questions, there must be as many Microbits as there are players in the quiz, along with one main Microbit that is used to receive their answers.",
            "Each player (student) has their own Microbit, and they use it to answer questions displayed on a computer. At the end of the quiz, a results table is shown where students can see their scores."
        ],
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "SQLite",
                "Flask",
                "Python"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/MicroMania/homepage.png"), description: "Homepage of MicroMania." },
                { src: require("./assets/images/projects/MicroMania/microbitPrograms.png"), description: "Programs to download for Microbits." },
                { src: require("./assets/images/projects/MicroMania/Quizz.png"), description: "Quiz creation." },
                { src: require("./assets/images/projects/MicroMania/QuizzInfo.png"), description: "Quiz information." },
                { src: require("./assets/images/projects/MicroMania/StartOfQuizz.png"), description: "Start of the quiz." },
                { src: require("./assets/images/projects/MicroMania/Question.png"), description: "Question example." },
                { src: require("./assets/images/projects/MicroMania/microbit.png"), description: "Selecting the answers with Microbits." },
                { src: require("./assets/images/projects/MicroMania/Results.png"), description: "Quiz results." },
            ]
        },
        team: [
            "Leo Stričak (developer)",
            "Andrija Palašek (documentation)"
        ],
        screencast: "https://www.youtube.com/embed/fRz-gd85QJg?si=0f1YgWXlvPgXzMMK",
        finished: true
    },
    {
        name: "EcoMedia",
        documentation: "https://drive.google.com/file/d/1DQAalb6-lTFFTOy15tOTsue9ztYA906-/view?usp=sharing",
        description: [
            "EcoMedia is a mobile app that allows users to log in, take a photo with their mobile device showing themselves or someone else contributing to environmental preservation (e.g., throwing trash in a bin, sorting waste...), upload the image, and wait for a rating from the administrator. Ratings are given using stars (from 1 to 5). A leaderboard displays which user has the most points. Through this app, users can actively track their contribution to environmental preservation by the points they accumulate."
        ],
        technologiesUsed: {
            list: [
                "Java",
                "MySQL",
                "PHP",
                "Android Studio"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/EcoMedia/login.png"), description: "Login page." },
                { src: require("./assets/images/projects/EcoMedia/leaderboard.png"), description: "Leaderboard, points of every user." },
                { src: require("./assets/images/projects/EcoMedia/camera.png"), description: "Camera." },
                { src: require("./assets/images/projects/EcoMedia/viewTakenPhoto.png"), description: "View taken photo." },
                { src: require("./assets/images/projects/EcoMedia/viewWithEveryImageRating.png"), description: "Images screen before admin rates it, and after." },
                { src: require("./assets/images/projects/EcoMedia/adminList.png"), description: "Admin list for images to rate." },
                { src: require("./assets/images/projects/EcoMedia/adminRate.png"), description: "Admins feature to rate the image." },
            ]
        },
        finished: true
    },
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
    {
        name: "Visitor",
        url: "https://visitor.barbuddy.net",
        urlAvailable: true,
        description: [
            "App build in React.js that helps you create your personal collection of places in Croatia that you would like to visit.",
            "Add places that you would like to visit by clicking on available places.",
            "Remove places from your list by clicking on the place in your list.",
            "Available places are sorted by your location."
        ],
        technologiesUsed: {
            list: [
                "JavaScript",
                "React.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/Visitor/visitor.png"), description: "Visitor." },
            ]
        },
        finished: true
    },
    {
        name: "WebShop",
        url: "https://webshop.barbuddy.net",
        urlAvailable: true,
        description: [
            "WebShop is a simple web application that allows users to add products to the cart and see the total price of the products.",
            "The user can add products to the cart by clicking on the button under the product image and more quantity, or remove it in the cart.",
            "The total price is calculated automatically."
        ],
        technologiesUsed: {
            list: [
                "JavaScript",
                "React.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/WebShop/webshop.png"), description: "WebShop." },
            ]
        },
        finished: true
    },
    {
        name: "TimeItRight",
        url: "https://timeitright.barbuddy.net",
        urlAvailable: true,
        description: [
            "Time it Right is a simple game where you have to stop the timer before the countdown ends.",
            "The closer you are to the end of the countdown, the more points you get."
        ],
        technologiesUsed: {
            list: [
                "JavaScript",
                "React.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/TimeItRight/timeitright1.png"), description: "Time it Right homepage." },
                { src: require("./assets/images/projects/TimeItRight/timeitright2.png"), description: "Score." },
            ]
        },
        finished: true
    },
    { name: "RoomManagement", finished: false },
    { name: "MeetingApp", finished: false },
    { name: "Alarm", finished: false },
    {
        name: "ScuffedGeogebra",
        url: "https://geogebra.barbuddy.net",
        urlAvailable: true,
        description: [
            "Scuffed Geogebra is a simple web application that allows users to create straight lines from equations.",
            "The user can add multiple points to the graph"
        ],
        technologiesUsed: {
            list: [
                "HTML",
                "CSS",
                "JavaScript",
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/ScuffedGeogebra/geogebra.png"), description: "Scuffed Geogebra." },
            ]
        },
        finished: true
    },
    { name: "Paint", finished: false },
    { name: "Chat", finished: false },
    { name: "TicTacToe Online", finished: false },
    {
        name: "TicTacToe React",
        url: "https://tictactoe.barbuddy.net",
        urlAvailable: true,
        description: "A simple TicTacToe game made in React.js.",
        technologiesUsed: {
            list: [
                "JavaScript",
                "React.js"
            ]
        },
        gallery: {
            images: [
                { src: require("./assets/images/projects/TicTacToeReact/tictactoe.png"), description: "TicTacToe." },
            ]
        },
        finished: true
    },
    {
        name: "Smart Dog House",
        description: [
            "Project created for a Croatian Makers competition - Internet of Things: Kućni ljubimci i domaće životinje",
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
        awards: "2. place on Croatian Makers competition - Internet of Things: Kućni ljubimci i domaće životinje (2018.)",
        finished: true
    },
    {
        name: "Smart Street",
        description: [
            "Smart Street is an IoT project for the “Smart City” competition. This system is designed for the citizens of a city to keep them well-informed about conditions and events occurring in the city. Our envisioned street is located next to a river and near the main city bridge. In many cases, there is a need for citizens to be quickly and timely informed about everything happening in their city (power outages, threatening weather conditions, etc.). This is especially important in the event of any extraordinary occurrence that requires all residents to be informed rapidly. We have created a system in which, from a mobile device through the Blynk application, the city administrator (the person responsible for informing residents in the city administration) can manage the display and input messages or notifications for the citizens.",
            "In our “smart street,” the monitor displays data on temperature, humidity, and the exact time (hours, minutes, and seconds).",
            "We read the humidity and temperature from the DHT22 sensor. The RGB LED lights up depending on the temperature (for example, when the outdoor temperature is below 10 degrees Celsius, the LED lights up blue). Our envisioned street is located next to a movable bridge, and the concept of a “smart city” is also applied in traffic regulation. We have created a movable bridge that rises and lowers depending on the river traffic. When a boat approaches close enough to the bridge, it begins to rise. Once the boat is a sufficient distance away from the bridge, it starts to lower, allowing road traffic to continue. We measure the distance of the boat from the bridge using an ultrasonic sensor, and the movement of the bridge is controlled by a servo motor.",
            "The main components of the project, along with the Arduino MKR1000 microcontroller, include an ultrasonic sensor, a humidity and temperature sensor, an RGB LED module, an LCD display, and a servo motor. The most challenging part of the project was displaying notifications sent by the user through the Blynk application on the LCD display. The prototype was created using a 3D printer.",
            "We developed the mobile application in Blynk. The application consists of six widgets. Two widgets are \"gauges\" that graphically display the temperature and humidity. One widget is used for entering text (notifications). Two widgets allow users to select between displaying the time, temperature, and humidity or text (notifications), and one widget shows whether the bridge is rising, lowering, or is closed.",
        ],
        technologiesUsed: {
            list: [
                "Arduino",
                "C++",
                "Blynk"
            ]
        },
        team: [
            "Leo Stričak (developer)",
            "Andrija Palašek (documetation)"
        ],
        gallery: {
            images: [
                { src: require("./assets/images/projects/SmartStreet/SmartStreet-1.jpg"), description: "Smart street" },
                { src: require("./assets/images/projects/SmartStreet/SmartStreetCreation-1.png"), description: "Developing the project." },
                { src: require("./assets/images/projects/SmartStreet/SmartStreetCreation-2.png"), description: "Developing the project." },
                { src: require("./assets/images/projects/SmartStreet/SmartStreetCreation-3.png"), description: "Creating the model." },
                { src: require("./assets/images/projects/SmartStreet/SmartStreetCreation-4.png"), description: "Testing the Blynk app." },
                { src: require("./assets/images/projects/SmartStreet/SmartStreetShema.png"), description: "Arduino scheme." },
            ]
        },
        screencast: "https://www.youtube.com/embed/-gM6au11Anc?si=NIyYVnWFwl8IKfoi",
        awards: "1. place on the Croatian Makers competition - Internet of Things: Pametan grad (2019.)",
        finished: true
    },
    { name: "SimonSays", finished: false },
];