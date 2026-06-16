
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PurpleHallos/writekitab">
    <img src="public/favicon.svg" alt="Logo" width="80" height="80" style="background-color: #9B5DE5; border-radius: 20%; padding: 10px;">
  </a>

<h3 align="center">WriteKitab</h3>

  <p align="center">
    An RTL-first fork of Writebook for bilingual authors.
    <br />
    <a href="https://github.com/PurpleHallos/writekitab"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PurpleHallos/writekitab/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/PurpleHallos/writekitab/issues/new">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

WriteKitab is a fork of Basecamp's Writebook that supports Left-to-Right (LTR) and Right-to-Left (RTL) text layouts. It dynamically formats chapters and images to match the text direction, and includes a redesigned admin dashboard for settings and customization.

### Built With

* [![Ruby][Ruby-badge]][Ruby-url]
* [![Ruby on Rails][Rails-badge]][Rails-url]
* [![SQLite][SQLite-badge]][SQLite-url]
* [![Docker][Docker-badge]][Docker-url]

<!-- KEY FEATURES -->
## Key Features

- RTL or LTR layout automatically detected based on title language
- Dark and white theme
- Reading warm filter
- Buy Me a Coffee Widget

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Docker and Docker Compose are required.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/PurpleHallos/writekitab.git
   cd writekitab
   ```
2. Start the application using Docker Compose:
   ```sh
   docker compose up --build
   ```
3. Visit the local server in your browser at `http://localhost:3007`.

<!-- ROADMAP -->
## Roadmap

- [x] Add full Arabic/RTL direction support
- [x] Redesign admin settings modal to full-page dashboard layout
- [x] Add inline color picker and custom widgets
- [ ] Add more fonts and custom themes presets
- [ ] Add EPUB and PDF export capabilities
- [ ] Implementing better design for admin setting

<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contributors

<a href="https://github.com/PurpleHallos/writekitab/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PurpleHallos/writekitab" width="500" />
</a>

<!-- LICENSE -->
## License

MIT License. See `LICENSE` or `MIT-LICENSE` for details.

<!-- CONTACT -->
## Contact

Hallos - [hallospurpleyard@gmail.com](mailto:hallospurpleyard@gmail.com)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Basecamp Writebook](https://github.com/basecamp/writebook)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
[Ruby-badge]: https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white
[Ruby-url]: https://www.ruby-lang.org/
[Rails-badge]: https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white
[Rails-url]: https://rubyonrails.org/
[SQLite-badge]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/
[Docker-badge]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
