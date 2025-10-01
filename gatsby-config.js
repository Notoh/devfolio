module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://notoh.dev`,
    // Your Name
    name: 'Alex Pawelko',
    // Main Site Title
    title: `Alex Pawelko`,
    // Description that goes under your name in main bio
    description: `Pure Mathematics and Computer Science student interested in differential geometry (and lots of other things) living in Waterloo, Canada.`,
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/Notoh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-pawelko-88a1551b4/`,
    resume: `https://github.com/Notoh/devfolio/raw/master/AlexPawelko-Resume.pdf`,
    // Content of the About Me section
    about: `Hi, I'm Alex (he/him), though I also go my old nickname Notoh (no-toe with less emphasis on the toe), and welcome to my page! Here you'll find my rather inactive blog (I'll write more one day...) and information about me. 
    
    Broadly, I'm a Pure Mathematics major and Computer Science minor (formerly double major) at the University of Waterloo who does a lot of math and coding. 
    
    I'm highly passionate about mathematics, and I'm planning to pursue graduate work in the future. I'm generally interested in all the math I've seen thus far, but I'm especially interested in differential geometry, where in particular my experiences with special holonomy, complex geometry, and gauge theory have been very exciting!
    In technical terms, I'm currently working on questions surrounding constructing analogues of prequantum line bundles over moduli spaces arising from special-holonomic geometric structures. I'll maybe write a blog post one day about this.
    Outside of geometry, I'm currently doing research in programming language theory in computer science, where my main focus has been applying mathematical ideas (measure-theoretic probability theory, categorical logic) and computer formalization to probabilistic programming languages.
    
    If any of these projects sound interesting and you'd like to talk about them, please send me an email! (firstname<dot>lastname<at>uwaterloo<dot>ca)
    Before my current mathematical journey took off, I was a professional programmer, mostly within game development, where I've been fortunate to work on many cool projects over the years. You'll find some of the personal ones below!

    In my free time, I spend a lot of time playing TTRPGs and video games, mostly cRPGs and singleplayer shooters. I also have taken many volunteer roles advocating for the undergraduate students of the University of Waterloo, both inside and outside of student government.
    I'm particularly passionate about student disability rights, and ensuring that the University systematically takes student voices and stances seriously.`,
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
	name: 'University of Waterloo, School of Computer Science',
	description: 'Research Fellow (supervised by Prof. Y. Zhang), Jan. 2025 - Apr. 2025',
	link: 'https://uwaterloo.ca/cs'
      },
      {
	name: 'University of Waterloo, Department of Pure Mathematics',
	description: 'Research Assistant (supervised by Prof. S. Karigiannis), May 2024 - Aug. 2024',
	link: 'https://uwaterloo.ca/pure-mathematics',
      },
      {
	name: 'Conrad Grebel University College',
	description: 'Residence Don, Jan. 2024 - Apr. 2024',
	link: 'https://uwaterloo.ca/grebel',
      },
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
        name: 'Programming Languages',
        description:
          'Java, C, C#, C++, TypeScript, JavaScript, GLSL, HLSL, Kotlin, Scala, Groovy, Python, x86 Assembly, LaTeX, Maple, Matlab',
      },
      {
        name: 'Technologies',
        description: 'Git, OpenGL, Unity, Unreal, Gradle, Maven, Jenkins, Node.js, Express, Electron, Netty, Spring, JNI, Guice, Dagger2, JDBC, jOOQ, ' +
          'SQL, MongoDB, Docker',
      },
      {
	name: 'Certifications',
	description:
	  'Canadian Red Cross - First Aid & CPR/AED Level C, Oracle Certified Professional - Java SE 8 Programmer II',
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                title: node.frontmatter.title,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ 'content:encoded': node.html }],
              })),
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter { title date }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Devfolio RSS Feed',
          },
        ],
      },
    },
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
