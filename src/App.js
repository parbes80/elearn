import React from 'react';
import './App.css';

const LearnDashLogo = () => {
  return (
    <div className="logo">
      <img src="./assets/logo.png.png" alt="LearnDash" />
    </div>
  );
};

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>All Courses</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>My Account</li>
      </ul>
    </nav>
  );
};

const SignInSignUp = () => {
  return (
    <button>Sign In / Sign Up</button>
  );
};

const Banner = () => {
  return (
    <section className="banner">
      <h1>Be in Demand with Our Professional Training</h1>
      <button>Get Started</button>
    </section>
  );
};

const Course = ({ course }) => {
  return (
    <div className="course">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.instructor}</p>
      <p>{course.price}</p>
      <button>View Course</button>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      image: './assets/basicwebdevelopment.png',
      title: 'Basic Web Development',
      instructor: 'Instructor 1',
      price: 'Rs 150'
    },
    {
      image: './assets/versioncontrol.png',
      title: 'Version Control',
      instructor: 'Instructor 2',
      price: 'Rs 300'
    },
    {
      image: './assets/Digitalmarketing.jpg',
      title: 'Digital Marketing',
      instructor: 'Instructor 3',
      price: 'Rs 300'
    }
  ];

  return (
    <section className="courses">
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </section>
  );
};

const Instructor = ({ instructor }) => {
  return (
    <div className="instructor">
      <img src={instructor.image} alt={instructor.name} />
      <div className='profile'><h2>{instructor.name}</h2>
      <h3>{instructor.title}</h3>
      </div>
      <p>"Welcome to the world of front-end development! As your instructor, 
        I'm here to guide you through the exciting journey of crafting immersive web experiences. 
        From mastering the intricacies of HTML and CSS to diving into the dynamic world of JavaScript, 
        together, we'll unlock the potential of modern web development. Get ready to unleash your creativity, 
        solve real-world problems, and build the responsive, user-friendly interfaces of tomorrow.
         Let's dive in and make your mark on the digital landscape!"</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Elearno</p>
      <ul>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
      <form>
        <label htmlFor="email">Join our newsletter:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <LearnDashLogo />
        <NavigationMenu />
        <SignInSignUp />
      </header>
      <Banner />
      <h2>Course We Offer</h2>
      <Courses />
      <Instructor
        instructor={{
          image: './assets/profile.png',
          name: 'Prabesh Thapa',
          title: 'Front End Developer',
          message:''
        }}
      />
      <Footer />
    </div>
  );
}

export default App;