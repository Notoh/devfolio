const { list } = require("postcss");

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://notoh.dev`,
    // Your Name
    name: 'Alex Pawelko',
    // Main Site Title
    title: `Alex Pawelko`,
    // Description that goes under your name in main bio
    description: `Mathematics student and former video game programmer interested in differential geometry (and lots of other things) living in Waterloo, Canada.`,
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/Notoh`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-pawelko-88a1551b4/`,
    cv: `https://github.com/Notoh/devfolio/raw/master/AlexPawelko-Resume.pdf`,
    researchStatement: `https://github.com/Notoh/devfolio/raw/master/Alex%20Pawelko%20Research%20Statement.pdf`,
    // Content of the About Me section
    about: `Hi, I'm Alex (he/him), and welcome to my page! Here you'll find my rather inactive blog and information about me and my work. 

	Starting in Fall 2026, I will be a PhD student in Mathematics at University College London under the supervision of Aleksander Doan. My main mathematical interests are in differential geometry, specifically at the intersection of gauge theory, calibrated geometry, and special holonomy. I received my BMath in Pure Mathematics at the University of Waterloo in 2026, where I was mentored by Professors Spiro Karigiannis and Xuemiao Chen.

    When I'm not doing math, I'm probably playing TTRPGs and video games, mostly cRPGs and singleplayer shooters. Occasionally, I write about video games, with my focus typically on the art of narrative in games. I also speedrun games, particularly Command & Conquer: Renegade, where I am a former world record holder. 
        
    My website URL comes from my old nickname Notoh (pronounced No-toe, with less emphasis on the toe). My last name is spelled either Pawełko or Pawelko, pronounced "pa-vewl-ko" or the anglicized "pa-well-ko" (I am fine with both). If you'd like to reach out to me, my email is firstname<dot>lastname<at>uwaterloo<dot>ca (with a normal l in the address).`,
    
    research: `My main mathematical interests are in the mathematical subject of differential geometry. Below you can find brief explanations of my interests aimed at both non-mathematical audiences and mathematical audiences. If you are interested in any of this and would like to talk, please send me an email! 
    
    <b>For everyone:</b>
    In one sentence, differential geometry is the use of (multivariable) calculus to study shapes. In order to use calculus effectively, the shapes under consideration need to be "smooth", without sharp edges, like the surface of a doughnut or a sphere. Differential geometry has many applications in physics (though I'm nowhere near a physicist), most notably in general relativity where it is used to describe the shape of spacetime.
    
    My particular interests lie in using differential geometry to study what are called "special geometric structures". A geometric structure is a way of measuring certain geometric information about a shape. For example, you might be able to measure distances and angles on a shape (this is a geometric structure called a metric), or you might be able to tell which way is "outward" on a shape (this is a geometric structure called an orientation). A given geometric structure may or may not exist on a given shape, for example, orientations don't exist on a shape like a Möbius strip, but it turns out that metrics exist on every shape. 
    
    As the name suggests, special geometric structures are those that are "special" in some way, often by being rare or having particularly neat properties. For example, given a metric and the ability to measure lengths and angles, one can measure how a shape bends and curves in space, and in an amazing turn of events, there are some exceptional seven and eight-dimensional shapes that curve like no others. Most of my research is about understanding these special shapes and the geometric structures they carry, and in particular trying to find new examples of them and figure out exactly what special properties they possess.

    <b>For mathematicians:</b>	
    I am interested in the study of special geometric structures within differential geometry and geometric analysis. I am fascinated with the entire field on the whole, though most of my work thus far has focused on manifolds with exceptional holonomy (G2 and Spin(7) manifolds). My current research is focused on higher dimensional gauge theories and their associated enumerative invariants as arise in calibrated geometry and special holonomy. I also frequently think about geometric quantization and its analogues within special holonomy.
	
    Outside of geometry, in my undergrad I did some research with Yizhou Zhang at Waterloo in programming language theory in computer science, where my focus was applying mathematical ideas (measure-theoretic probability theory, categorical logic) and computer formalization to probabilistic programming languages.
    
    Below, you can find a (rather out-of-date) list of links to various talk and class notes of my mine (click the names as links), though they certainly contain numerous errors, idiosyncrasies, and missing citations. Any errors are, of course, my own. Please send me an email if you have any corrections or confusions.`,
    // Optional: List your talks, they must have `name` and `description`. `link` is optional.
    talks: [
      {
        name: 'Calibrated Geometry of a Strongly Nondegenerate Knot Space',
        description: 'Notes for a board talk given September 18th, 2025 to Waterloo\'s Differential Geometry Working Seminar, based on my current research, J.-L. Brylinski\'s book "Loop Spaces, Characteristic Classes and Geometric Quantization", and Lee-Leung\'s paper "Higher dimensional knot spaces for manifolds with vector cross products". Despite the title, there is almost no calibrated geometry in this talk.',
        link: 'https://github.com/Notoh/devfolio/raw/master/knotspace2-talk.pdf'
      },
      {
        name: 'Gerbes of Coassociative Submanifolds and the First Chern Class',
        description: 'Notes for a board talk given August 14th, 2025 to Waterloo\'s Differential Geometry Working Seminar, based on G. Oliveira\'s paper "Gerbes on G2-manifolds", N. Hitchin\'s notes "Lectures on Special Lagrangian Submanifolds", and a small amount of my own work.',
        link: 'https://github.com/Notoh/devfolio/raw/master/gerbes-talk.pdf'
      },
      {
        name: 'How Special is Curvature?',
        description: 'Slides for an expository talk on holonomy given June 26th, 2025 to the Canadian Undergraduate Mathematics Conference 2025.',
        link:'https://docs.google.com/presentation/d/1AnTFcxfiIz4Za2pPrdqs1oHfHYn7lySBoMTgEWwHeBs/edit?usp=sharing',
      },
      {
        name: 'The Formal Kaehler Structure of the G2 Knot Space',
        description: 'Notes for a board talk given May 22nd, 2025 to Waterloo\'s Differential Geometry Working Seminar, based on J.-L. Brylinski\'s book "Loop Spaces, Characteristic Classes and Geometric Quantization" and a small amount of my own work.',
        link: 'https://github.com/Notoh/devfolio/raw/master/knotspace-talk.pdf'
      },
      {
        name: 'Differential Geometers Suck at Naming Things',
        description: 'Slides for a humorous talk on differential geometry (and its notation) given March 7th, 2025 to Waterloo\'s Pure Math Club as part of their 24-hour Short Attention Span Math Seminar.',
        link: 'https://docs.google.com/presentation/d/1_bVPLfICkSV4hiIGhRqIoBGQnZXc4aVMoI_M6tMMxdc/edit?usp=sharing'
      },
      {
        name: 'Prequantum Line Bundles and Geometric Quantization',
        description: 'Notes for a board talk given November 20th, 2024 to Waterloo\'s Differential Geometry Working Seminar, primarily based on the exposition in Casey Blacker\'s symplectic geometry notes.',
        link: 'https://github.com/Notoh/devfolio/raw/master/prequantum_line_bundles.pdf'
      },
      {
        name: '2-Outta-3 Ain\'t Bad',
        description: 'Notes for an expository board talk on U(n) and the linear algebra of Kaehler geometry aimed at undergrads given November 7th, 2025 to Waterloo\'s Pure Math Club as part of their Short Attention Span Math Seminar.',
        link: 'https://github.com/Notoh/devfolio/raw/master/2outta3_kahler_geometry_talk.pdf',
      },
      {
        name: 'Strongly Nondegenerate Forms and their Associated Structures on Higher Knot Spaces',
        description: 'Notes for a board talk given August 7th, 2024 to Waterloo\'s Differential Geometry Working Seminar, primarily based on Lee-Leung\'s paper "Higher dimensional knot spaces for manifolds with vector cross products".',
        link: 'https://github.com/Notoh/devfolio/raw/master/leeleung-talk.pdf'
      },
      {
        name: 'The Cross Product in R^7 (and Other Fun Adventures with Normed Division Algebras)',
        description: 'Notes for an expository board talk on the quaternions and octonions given March 14th, 2024 to Waterloo\'s Pure Math Club as part of their Short Attention Span Math Seminar.',
        link: 'https://github.com/Notoh/devfolio/raw/master/DAs_talk.pdf'
      }
    ],

    // Optional: List your notes, they must have `name` and `description`. `link` is optional.
    notes: [
      {
        name: 'CHEM 356: Quantum Chemistry (co-written with Kathryn Froese)',
        description: 'Polished notes from a first course on quantum mechanics and chemical applications, aimed at chemistry students.',
        link:'https://github.com/Notoh/devfolio/raw/master/CHEM%20356%20Notes.pdf'
      },
      {
        name: 'PMATH 965: Harmonic Maps',
        description: 'Nearly complete notes from a graduate course on harmonic maps in Riemannian geometry.',
        link: 'https://github.com/Notoh/devfolio/raw/master/harmonic-maps-notes.pdf',
      },
      {
        name: 'PMATH 453: Functional Analysis',
        description: 'Complete notes from a first course in functional analysis.',
        link: 'https://github.com/Notoh/devfolio/raw/master/453notes.pdf',
      },
      {
        name: 'PMATH 450: Lebesgue Integration and Fourier Analysis',
        description: 'Complete notes from a course in Hilbert space theory and a small amount of measure theory (unfortunately, very little Lebesgue integration or Fourier analysis was covered).',
        link: 'https://github.com/Notoh/devfolio/raw/master/450notes.pdf',
      },
      {
        name: 'PMATH 365: Differential Geometry',
        description: 'Fairly finished notes from a first course on the differential geometry of curves and surfaces.',
        link: 'https://github.com/Notoh/devfolio/raw/master/365notes.pdf'
      },
      {
        name: 'PMATH 352: Complex Analysis',
        description: 'Work-in-progress notes from a first course on complex analysis.',
        link:'https://github.com/Notoh/devfolio/raw/master/352notes.pdf',
      },
      {
        name: 'PMATH 351: Real Analysis',
        description: 'Fairly complete notes from a first course on real analysis in metric spaces.',
        link: 'https://github.com/Notoh/devfolio/raw/master/351notes.pdf',
      },
      {
        name: 'PMATH 347: Groups and Rings',
        description: 'Fairly complete notes from a course on group and ring theory, covering a standard first course in group theory, and some module and ring theory.',
        link: 'https://github.com/Notoh/devfolio/raw/master/347notes.pdf',
      },
      {
        name: 'MATH 247: Calculus 3 (Advanced)',
        description: 'Complete notes from a course on (rigorous) multivariable calculus and analysis.',
        link: 'https://github.com/Notoh/devfolio/raw/master/247notes.pdf',
      },
      {
        name: 'MATH 245: Linear Algebra 2 (Advanced)',
        description: 'Work-in-progress notes from a second course in linear algebra, covering inner product spaces and bilinear forms (and canonical forms to be added).',
        link: 'https://github.com/Notoh/devfolio/raw/master/245notes.pdf',
      },
      {
        name: 'MATH 239: Introduction to Combinatorics',
        description: 'Complete notes from a first course in enumeration and graph theory.',
        link: 'https://github.com/Notoh/devfolio/raw/master/239notes.pdf',
      }
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.	  
    experience: [
	{
        name: 'University of Waterloo, Faculty of Mathematics',
        description: 'Teaching Assistant (Calculus 1-3 for Mathematics and Science students), Jan. 2026 - Apr. 2026',
        link: 'https://uwaterloo.ca/math'
      },
      {
        name: 'University of Waterloo, Department of Pure Mathematics',
        description: 'Research Assistant (supervised by Profs. X. Chen and S. Karigiannis), Sept. 2025 - Present',
        link: 'https://uwaterloo.ca/pure-mathematics'
      },
      {
        name: 'University of Waterloo, Faculty of Mathematics',
        description: 'Teaching Assistant (Calculus 1-3 for Mathematics and Science students), May 2025 - Aug. 2025',
        link: 'https://uwaterloo.ca/math'
      },
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
