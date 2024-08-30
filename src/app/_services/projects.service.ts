import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0,
    name: 'VR Cloudy Park',
    summary: 'Explore a rainy VR park filled with nature! Look around a cloudy park with your laser pointer and interact with a dog. (Note: movement not possible in this experience).',
    description: 'This project utilises C# in Unity to develop a VR park, which also involves the use of 3D models and image editing. Before entering the environment, the user can adjust the graphic parameters, including level of detail, field of view, framerate limit, resolution scale. In a cloudy and rainy weather, the player will be in a park next to a small town surrounded by trees and grass. The player is not able to move but can look around and use a laser pointer (controller) to interact with a stray dog. The dog will randomly display sad-looking movements and sounds, such as whining, falling to the ground, and crawling in fear.',
    projectlink: 'https://bitbucket.org/rick-project/myproject_cloudyversion-output/src/main/',
    tags: [Tag.UNITY, Tag.CSHARP],
    pictures: ["/assets/Images/Cloudy Park.png","/assets/Images/Cloudy Park GIF.gif"]},

    {id: 1,
    name: 'Dungeon Cauldron',
    summary: 'This 2D drag-and-drop game puts you in a sticky situation. Trapped by a demon, you must create the right potion before time runs out. Otherwise, the unhappy demon might just... eat you!',
    description: 'Created a 2D drag-and-drop game using C# in Unity engine through a wonderful teamwork, following agile development methodology by Scrum. Team members did daily stand to catch up the latest update of the task and manage it with scrum board using Trello. The developers utilised Github to do the version control and make sure each branch is managed well until the final pull request. The game consists of an initial interface (New game, Quite), and an animation that introduces the story. Operation is as simple as clicking and dragging the materials on the screen into the slots on either side of the cauldron. Since the player is trapped by the demon, the goal is to keep mixing materials and obtaining new materials until the final potion is obtained. Once the demon gets the potion, it will be happy to release the player, otherwise the demon will eat the player if it cannot make the potion within three minutes. Try your best to escape!',
    projectlink: 'https://github.com/RickMaguro/Dungeon-Cauldron',
    tags: [Tag.UNITY, Tag.CSHARP],
    pictures: ["/assets/Images/Dungeon Cauldron start.png","/assets/Images/Dungeon Cauldron.png","/assets/Images/Dungeon Cauldron GIF.gif"]},

    {id: 2,
    name: 'Sudoku Solver',
    summary: 'This is a Sudoku Puzzle Solver! Fill in the grid or generate a puzzle (Easy, Medium, Hard), and the program will solve it for you using a clever backtracking algorithm.',
    description: 'Implemented a Sudoku Solver in Python, this program swiftly tackles puzzles using a Backtracking Algorithm. The solver boasts an intuitive interface that permits users to input puzzles manually or generate them at three difficulty levels: Easy, Medium, and Hard. By seamlessly integrating intuitive functionality with robust algorithms, the solver optimizes puzzle-solving experiences, ensuring both efficiency and enjoyment.',
    projectlink: 'https://github.com/RickMaguro/Sudoku_solver',
    tags: [Tag.PYTHON],
    pictures: ["/assets/Images/Sudoku Solver1.png","/assets/Images/Sudoku Solver GIF.gif"]},

    {id: 3,
    name: 'Connect 4',
    summary: 'Play Connect 4 against the computer! It is a classic strategy game where you take turns dropping colored discs. Get 4 in a row horizontally, vertically, or diagonally to win.',
    description: 'Incorporating object-oriented programming (OOP) principles, a terminal-based Connect 4 game has been developed in Java, offering an engaging player versus computer gameplay experience. This implementation enables players to strategically drop coloured discs into a grid with the objective of connecting four discs of the same colour either horizontally, vertically, or diagonally. The game\'s architecture leverages Java\'s object-oriented features to encapsulate game logic and facilitate modular design, ensuring maintainability and extensibility.',
    projectlink: 'https://github.com/RickMaguro/Connect4',
    tags: [Tag.JAVA],
    pictures: ["/assets/Images/Connet4.png","/assets/Images/Connet4 GIF.gif"]},

    {id: 4,
    name: 'Flight Manager Simulator',
    summary: 'This is not a game, but a flight management simulator for airlines. It is a text-based program where airlines can manage flights, crews, and aircraft.',
    description: 'Developed a terminal-based flight management system targeted for airlines. The system is implemented using Python and SQLite. It offers a user-friendly interface accessible through the command line, enabling users to input and update flight information such as flight ID, schedules, and destinations. Additionally, the system handles aircraft data, including model and airline company. It also maintains a database of pilots, assisting in scheduling and ensuring flights are adequately staffed. With functionalities for inserting, updating, deleting, and viewing flight data.',
    projectlink: 'https://github.com/RickMaguro/Flight_Manager',
    tags: [Tag.PYTHON, Tag.SQLITE],
    pictures: ["/assets/Images/Flight Manager Simulator.png","/assets/Images/Flight Manager Simulator GIF.gif"]},

    {id: 5,
    name: 'Personal Website',
    summary: 'A sleek and professional personal website showcasing my projects, resume, and contact information. Features dynamic content, interactive elements, and links to my LinkedIn, GitHub, and Bitbucket profiles.',
    description: `
    <p>Welcome to my personal website, a dynamic and interactive platform that showcases my professional portfolio with cutting-edge web technologies. This site is built using <strong>Angular</strong>, a powerful framework known for its robust component-based architecture and efficient two-way data binding, ensuring a seamless and responsive user experience across all devices.</p>
    <br>
    <h2><b><u>Technical Highlights:</u></b></h2>
    <ul>
      <li><strong>Dynamic Content Binding:</strong> Using Angular’s powerful data-binding capabilities, the website dynamically updates and reflects the latest information, ensuring that all content is always up-to-date without requiring page reloads.</li>
      <li><strong>Responsive Design:</strong> The website is crafted with responsive design principles, making use of Angular’s flexibility and CSS to adapt seamlessly to various screen sizes and devices, from desktops to mobile phones.</li>
      <li><strong>Component-Based Architecture:</strong> Leveraging Angular’s component-based approach, each section of the website is modular and reusable, leading to efficient code management and easier maintenance.</li>
      <li><strong>Interactive Elements:</strong> The portfolio section includes interactive elements like modals and carousels to provide an engaging and immersive user experience, highlighting my projects in a user-friendly manner.</li>
    </ul>
    <br>
    <p>This website not only serves as a professional portfolio but also demonstrates my proficiency in modern web development practices using Angular. Whether you're here to explore my projects or learn more about my professional journey, this site provides a comprehensive and engaging experience.</p>
  `,
    projectlink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS],
    pictures: []},

    {id: 6,
      name: 'Tasks management web app',
      summary: 'This project is a secure, web-based task management application with user authentication, allowing users to add, manage, and report on tasks through a series of password-protected pages.',
      description: `
      <p>Welcome to the Task Management App, a secure and efficient platform designed to help you manage and monitor your tasks effectively. This application is built with <strong>Django</strong>, a high-level Python web framework known for its security, scalability, and rapid development capabilities.</p>
      <br>
      <h2><b><u>Key Features:</u></b></h2>
      <ul>
        <li><strong>Secure Access:</strong> The application utilises Django's robust authentication system, ensuring that only authorized users can access task management and reporting features, thereby protecting your sensitive data.</li>
        <li><strong>Task Management:</strong> Users can add new tasks with comprehensive details including email, task description, due date, priority level, and urgency. The process is streamlined to ensure quick and accurate task entry.</li>
        <li><strong>Interactive Dashboard:</strong> The dashboard offers a detailed overview of tasks due in the next 30 days, featuring dynamic charts and tables powered by Django, helping users prioritize and manage their workload effectively.</li>
        <li><strong>Data Integrity:</strong> Built on Django’s reliable ORM (Object-Relational Mapping), the application ensures data integrity and consistency, providing users with accurate and up-to-date task information at all times.</li>
      </ul>
      <br>
      <p>This Task Management App not only simplifies your task organization process but also demonstrates the capabilities of Django in building secure, scalable, and interactive web applications. Whether you're managing individual tasks or overseeing a team, this app is designed to help you stay organised and efficient.</p>
    `,
      projectlink: 'https://github.com/RickMaguro/Tasks_management_app',
      tags: [Tag.DJANGO, Tag.PYTHON, Tag.SQLITE],
      pictures: ["/assets/Images/Tasks Management Home.png","/assets/Images/Tasks Management Login.png", "/assets/Images/Tasks Management Tasks.png", "/assets/Images/Tasks Management Dashboard.png"]},
  ];
  
  constructor() { }


  GetProjects() {
    return this.projects
  }

  GetProjectById(id: number) : Project {
    let projects = this.projects.find(project => project.id === id);

    if (projects === undefined) {
      throw new TypeError("There is no project that match the id" + id);
    }

    return projects
  }
}
