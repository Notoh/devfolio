module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://notoh.dev`,
    // Your Name
    name: 'Alex Pawelko',
    // Main Site Title
    title: `Alex Pawelko`,
    // Description that goes under your name in main bio
    description: `Pure Mathematics and Computer Science student interested in differential geometry and game development living in Waterloo, Canada.`,
    // Optional: Twitter account handle
    author: `@n0toh`,
    // Optional: Github account URL
    github: `https://github.com/Notoh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-pawelko-88a1551b4/`,
    resume: `https://github.com/Notoh/devfolio/raw/master/AlexPawelko-Resume.pdf`,
    // Content of the About Me section
    about: `I'm a Pure Mathematics major and Computer Science minor (formerly double major) at the University of Waterloo who does a lot of math and coding. I fell in love with programming when I was 11 through video games, and I haven't stopped from there.
    My professional experiences include standalone game development, game modding, and backend web development. Outside of programming, I'm highly passionate about pure mathematics and I'm strongly considering pursuing graduate work in the future. I'm generally interested in all math I've seen thus far, but am especially interested in differential geometry and topology. In particular, my (limited) experience with geometric analysis has been very exciting!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Hagnus Miemann & badchessengine',
        description:
          'Two of the strongest chess playing programs in the world (ranked at ~200th and 432nd) in the world. badchessengine supports the Universal Chess Interface, whereas Hagnus Miemann features an interactive UI.',
        link: 'https://linktr.ee/alexpawelkochess',
      },
      {
        name: 'RankedCvC',
        description:
          'Ranking system (using Glicko2) for various competitive Minecraft gamemodes used to play dozens of games in multiple communities every day.',
        link: 'https://github.com/notoh/elobot',
      },
      {
        name: 'Squad Assault',
        description:
          'Counter Strike inspired gamemode within Minecraft, initially created for the Mineplex community.',
        link: 'https://github.com/podcrash/squad-assault',
      },
      {
        name: 'Podcrash Play (formerly Podcrash+ and BetterMP)',
        description:
          'Third-party Minecraft client initially designed for competitive play, featuring statistics tracking, optimizations, ' +
          'dozens of quality of life mods, a referee system, and support for almost every Minecraft setup. Initially a personal project (known as BetterMP) until it was acquired by Podcrash after reaching over 250,000 downloads.',
        link: 'https://podcrash.com/play'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
	name: 'Tactic Studios',
	description: 'Game Programmer, Sep. 2023 - Dec. 2023',
	link: 'https://tacticstudios.com',
      },	    
      {
        name: 'Eden Industries',
        description: 'Game Programmer, May 2022 - Aug. 2022 & Jan. 2023 - Apr. 2023',
        link: 'https://edenindustries.ca',
      },
      {
        name: 'Podcrash',
        description: 'Software Development Lead, April 2021 - July 2021',
        link: 'https://podcrash.com',
      },
      {
        name: 'Podcrash',
        description: 'Software Developer, September 2020 - April 2021',
        link: 'https://podcrash.com',
      },
      {
        name: 'Beyond Skyrim (volunteer)',
        description: 'Implementation Developer, July 2017 - August 2020',
        link: 'https://beyondskyrim.org',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, C, C#, C++, TypeScript, JavaScript, GLSL, HLSL, Kotlin, Scala, Groovy, Python, x86 Assembly, LaTeX',
      },
      {
        name: 'Technologies',
        description: 'Git, OpenGL, Unity, Unreal, Gradle, Maven, Jenkins, Node.js, Express, Electron, Netty, Spring, JNI, Guice, Dagger2, JDBC, jOOQ, ' +
          'SQL, MongoDB, Docker',
      },
      {
        name: 'Other Skills',
        description:
          'Continuous Integration / Continuous Deployment, Agile, Computational Mathematics',
      },
      {
        name: 'Hobbies',
        description:
          'Chess, Game Modding, Guitar, Sound Engineering, Tabletop Gaming, Classic RPGs, Speedrunning (current world record holder in Command & Conquer: Renegade)'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
