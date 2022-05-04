module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://notoh.dev`,
    // Your Name
    name: 'Alex Pawelko',
    // Main Site Title
    title: `Alex Pawelko | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineering student focused on Game Dev living in Waterloo, Canada.`,
    // Optional: Twitter account handle
    author: `@n0toh`,
    // Optional: Github account URL
    github: `https://github.com/Notoh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-pawelko-88a1551b4/`,
    // Content of the About Me section
    about: `I'm a Software Engineering student at the University of Waterloo who codes more than is healthy. I fell in love with programming when I was 11 through video games, and I haven't stopped from there.
    My experiences include web development, game modding, and some standalone game development. Currently working at Eden Industries.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'badchessengine',
        description:
          'The 432nd strongest chess-playing program in the world, supporting the Universal Chess Interface',
        link: 'https://github.com/Notoh/badchessengine',
      },
      {
        name: 'RankedCvC',
        description:
          'Ranking system for various competitive Minecraft gamemodes used to play dozens of games every day',
        link: 'https://github.com/notoh/elobot',
      },
      {
        name: 'Squad Assault',
        description:
          'Counter Strike inspired gamemode within Minecraft, initially created for the Mineplex community',
        link: 'https://github.com/podcrash/squad-assault',
      },
      {
        name: 'Podcrash Play (formerly Podcrash+ and BetterMP)',
        description:
          'Third-party Minecraft client initially designed for competitive play, featuring statistics tracking, optimizations, ' +
          'dozens of quality of life mods, a referee system, and support for almost every Minecraft setup',
        link: 'https://podcrash.com/play'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
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
        description: 'Implementor, July 2017 - August 2020',
        link: 'https://beyondskyrim.org',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, C, C#, C++, TypeScript, JavaScript, GLSL, HLSL, Kotlin, Scala, Groovy, Python, x86 Assembly',
      },
      {
        name: 'Technologies',
        description: 'Git, OpenGL, Gradle, Maven, Jenkins, Node.js, Express, Electron, Netty, Spring, JNI, Guice, Dagger2, JDBC, jOOQ, ' +
          'SQL, MongoDB, Docker, Unity',
      },
      {
        name: 'Other Skills',
        description:
          'Continuous Integration / Continuous Deployment, Agile',
      },
      {
        name: 'Hobbies',
        description:
          'Chess, Game Modding, Guitar, Sound Engineering, Tabletop Gaming, Classic RPGs'
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
