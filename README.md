# Module 13 Challenge: React Portfolio

## Description

This is a React-based portfolio website designed to showcase my projects and skills to potential employers. The project aims to demonstrate proficiency in React as well as creating a polished and professional portfolio site.

The design of tje portfolio site should prioritize the following:

* Mobile-first design
* Polished and professional appearance
* Thoughtful color palette and typography choices to enhance readability and aesthetics

## Tasks completed

The portfolio includes:
* Developer's name
* Links to developer's GitHub Profile, LinkedIn Page, and Email Address
* Optionally, a Phone Number
* PDF version of developer's resume
* List of projects, with each project featuring:
  * Project title
  * Link to the deployed version
  * Link to the GitHub repository
  * GIF or screenshot of the deployed application

## Required Components

* App: The top-level component rendering all necessary children components
* Header: Rendered across the entire site, containing a Navbar
* Home: A welcome landing page with your name, a headshot, your brand statement, and indication that it's your portfolio site
* Project Gallery: Dynamically rendering 6 instances of the Project component
* Project: A reusable component that renders a single project based on JSON data
* Contact: Contains your contact information and a contact form for handling events

## Technologies Used

* React
* React Router
* Bootstrap
* Node.js

## Links

[Link to the code repository](https://github.com/jonnoclifford/react-portfolio)

## Usage

1. Clone the project repository.
2. Navigate to the project directory.
3. Install dependencies by running npm install.
4. Start the development server with npm start.
5. Access the portfolio site at http://localhost:3000 in your web browser.

## Demo

![App Demo](./src/components/images/app-demo.png)

## Credits

Supported by Edx teaching staff and particularly Juan Delgado.

## License

MIT License

Copyright (c) 2024 Jonathan Clifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
