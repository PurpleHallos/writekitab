<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown link keeping keys at the bottom of the page for clean reading.
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an elegant GFM feature.
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PurpleHallos/writekitab">
    <img src="app/assets/images/WriteKitab-logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">WriteKitab</h3>

  <p align="center">
    A feature-rich, RTL-first fork of Writebook, beautifully tailored for bilingual authors, Arabic typography, and premium custom layouts.
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

WriteKitab is a premium, multilingual evolution of Basecamp's Writebook. It enables writers to instantly publish their own books on the web for free with native support for both Left-to-Right (LTR) and Right-to-Left (RTL) text flows.

Whether you're writing in English or Arabic, WriteKitab formats your chapters, images, and layout dynamically to align with your chosen language. In addition, it features a complete dashboard redesign for admin settings, including inline CSS customization, iOS-style toggle switches, color preset dots, and user administration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Ruby][Ruby-badge]][Ruby-url]
* [![Ruby on Rails][Rails-badge]][Rails-url]
* [![SQLite][SQLite-badge]][SQLite-url]
* [![Docker][Docker-badge]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- KEY FEATURES -->
## Key Features

- **RTL-First & Arabic Layouts**: Full dynamic text direction mirroring (RTL) and Arabic localization support out of the box.
- **Premium Settings Panel**: A completely redesigned, full-screen settings dashboard split into organized tabs (General, Users & Roles, Buy Me a Coffee, Custom CSS).
- **Tab State Persistence**: Uses a modern Stimulus controller storing active tab views in `localStorage` to handle seamless page reloads on auto-save.
- **Buy Me a Coffee Widget**: Fully customizable support widget configuration directly in your admin settings, including positioning and hex color presets.
- **Clean Markdown Authoring**: Content is authored in clean, elegant Markdown. Supports image layouts, title pages, and interactive search indexing.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Docker and Docker Compose installed on your host machine.

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Running in Development (Native)
If you prefer running Ruby locally without Docker, follow these steps:
1. Install dependencies:
   ```sh
   bin/setup
   ```
2. Start the development server:
   ```sh
   bin/dev
   ```

### Admin Settings
- Access the redesigned settings panel at `http://localhost:3007/account/custom_styles/edit`.
- Switch tabs between general language configs, support widget styles, CSS overrides, and user access roles.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Rename project to WriteKitab
- [x] Add full Arabic/RTL direction support
- [x] Redesign admin settings modal to full-page dashboard layout
- [x] Add unified tab navigation with client-side state persistence
- [x] Add inline color picker and custom widgets
- [ ] Add more fonts and custom themes presets
- [ ] Add EPUB and PDF export capabilities

See the [open issues](https://github.com/PurpleHallos/writekitab/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` or `MIT-LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Hallos - [hallospurpleyard@gmail.com](mailto:hallospurpleyard@gmail.com)

Project Link: [https://github.com/PurpleHallos/writekitab](https://github.com/PurpleHallos/writekitab)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Basecamp Writebook](https://github.com/basecamp/writebook) - The original open-source base.
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - For the markdown structure.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/PurpleHallos/writekitab.svg?style=for-the-badge
[contributors-url]: https://github.com/PurpleHallos/writekitab/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PurpleHallos/writekitab.svg?style=for-the-badge
[forks-url]: https://github.com/PurpleHallos/writekitab/network/members
[stars-shield]: https://img.shields.io/github/stars/PurpleHallos/writekitab.svg?style=for-the-badge
[stars-url]: https://github.com/PurpleHallos/writekitab/stargazers
[issues-shield]: https://img.shields.io/github/issues/PurpleHallos/writekitab.svg?style=for-the-badge
[issues-url]: https://github.com/PurpleHallos/writekitab/issues
[license-shield]: https://img.shields.io/github/license/PurpleHallos/writekitab.svg?style=for-the-badge
[license-url]: https://github.com/PurpleHallos/writekitab/blob/main/MIT-LICENSE
[Ruby-badge]: https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white
[Ruby-url]: https://www.ruby-lang.org/
[Rails-badge]: https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white
[Rails-url]: https://rubyonrails.org/
[SQLite-badge]: https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/
[Docker-badge]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
