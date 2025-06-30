import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import CatThread from "../../Assets/Projects/cat-thread.png";
import NoteBook from "../../Assets/Projects/notebook.png";
import WildOasis from "../../Assets/Projects/the-wild-oasis.png";
import FastReactPizza from "../../Assets/Projects/fast-react-pizza.png";
import WorldWise from "../../Assets/Projects/world-wise.png";
import YelpCamp from "../../Assets/Projects/yelp-camp.png";
import RestaurantApp from "../../Assets/Projects/restoo.png";
import ITBooks from "../../Assets/Projects/itbooks.png";
import BookShelf from "../../Assets/Projects/book-shelf.png";
import UsePopcorn from "../../Assets/Projects/use-popcorn.png"; // ✅ Tambahan gambar

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Cat Thread */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Cat Thread"
              description="A web-based forum application created as part of the React Developer Expert certification at Dicoding Indonesia. It allows users to authenticate, create, and interact with threads. Built with modern tools to ensure responsive and seamless user experiences."
              imgPath={CatThread}
              ghLink="https://github.com/Alfin123-stack/cat-thread"
              demoLink="https://forum-discussion-six.vercel.app"
            />
          </Col>

          {/* NoteBook */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="NoteBook"
              description="A web application designed for managing personal notes. Developed within two days as part of a technical test, it features full CRUD capabilities and a responsive interface for efficient note management."
              imgPath={NoteBook}
              ghLink="https://github.com/Alfin123-stack/my-project-crud"
              demoLink="https://my-project-crud-peach.vercel.app"
            />
          </Col>

          {/* The Wild Oasis */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="The Wild Oasis"
              description="An internal web application developed to manage client reservations for a company. Features include booking management, dynamic PDF reporting, and interactive dashboards to support operational efficiency."
              imgPath={WildOasis}
              ghLink="https://github.com/Alfin123-stack/The-Wild-Oasis"
              demoLink="https://the-wild-oasis-kappa-henna.vercel.app"
            />
          </Col>

          {/* Fast React Pizza */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Fast React Pizza"
              description="An online pizza ordering application designed to deliver a fast, responsive, and modern experience. It features state management using Redux Toolkit, real-time database with Supabase, and interactive feedback with React Toastify."
              imgPath={FastReactPizza}
              ghLink="https://github.com/Alfin123-stack/My-Fast-React-Pizza"
              demoLink="https://fast-react-pizza.vercel.app"
            />
          </Col>

          {/* My Use Popcorn */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Use Popcorn"
              description="A lightweight React application that allows users to search for movies and manage a personal watchlist. This project demonstrates the use of React Hooks, component testing with React Testing Library, and custom hook development."
              imgPath={UsePopcorn}
              ghLink="https://github.com/Alfin123-stack/my-use-popcorn"
              demoLink="https://use-popcorn-two-xi.vercel.app/" // Tambahkan link demo jika sudah tersedia
            />
          </Col>

          {/* World Wise */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="World Wise"
              description="An interactive web application that allows users to explore geographical data visually. Features include an interactive map with Leaflet, dynamic routing, and efficient data management using JSON Server."
              imgPath={WorldWise}
              ghLink="https://github.com/Alfin123-stack/World-wise"
              demoLink="https://world-wise.vercel.app"
            />
          </Col>

          {/* Yelp-Camp */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Yelp-Camp"
              description="A full-stack web application for managing camping sites. Users can create, edit, view, and delete camps, with features such as image uploads via Cloudinary, interactive maps, and secure authentication using Passport.js."
              imgPath={YelpCamp}
              ghLink="https://github.com/Alfin123-stack/Yelp-Camp"
              demoLink="https://yelp-camp-puce-six.vercel.app"
            />
          </Col>

          {/* Restaurant App */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Restaurant App"
              description="A Progressive Web Application (PWA) designed for discovering, saving, and reviewing restaurants. It features offline access with Workbox, responsive design, and data storage using IndexedDB."
              imgPath={RestaurantApp}
              ghLink="https://github.com/Alfin123-stack/RestaurantApp"
              demoLink="https://restaurantapp8912.netlify.app"
            />
          </Col>

          {/* IT BOOKS */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="IT BOOKS"
              description="A simple web application displaying a list of IT books fetched from an external API. Features include search functionality, responsive design, and efficient API integration using Axios."
              imgPath={ITBooks}
              ghLink="https://github.com/Alfin123-stack/IT-BOOKS"
              demoLink="https://it-books-210304.netlify.app"
            />
          </Col>

          {/* BookShelf App */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="BookShelf App"
              description="A beginner-friendly web application for managing a personal book collection. Demonstrates DOM manipulation and Web Storage integration for an interactive user experience."
              imgPath={BookShelf}
              ghLink="https://github.com/Alfin123-stack/BookShelf-App"
              demoLink="https://alfin123-stack.github.io/BookShelf-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
