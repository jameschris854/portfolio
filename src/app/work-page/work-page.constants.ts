export class WorkPage {
    static ProjectsConstant =  [
        {
          name: "Chat App",
          image: "../../../assets/Projects/chatapp.png",
          technology: 'Full Stack',
          year: '2023',
          uid:'Pr1',
          git: "https://github.com/jameschris854/Chat-Proto"
        },
        {
          name: "Wally",
          image: "../../../assets/Projects/wally.png",
          technology: 'Frontend',
          year: '2022',
          uid:'Pr2',
          git: "https://github.com/jameschris854/WallpaperApp"
        },
        {
          name: "Netflix Clone",
          image: "../../../assets/Projects/netflixclonephone.gif",
          technology: 'Frontend',
          year: '2022',
          uid:'Pr3'
        },
        {
          name: "Discord-Bot",
          image: "../../../assets/Projects/hangman.png",
          technology: 'backend',
          year: '2021',
          uid:'Pr4'
        },
        {
          name: "Tesla Clone",
          image: "../../../assets/Projects/teslaclone.jpg",
          technology: 'Frontend',
          year: '2021',
          uid:'Pr5'
        },
        {
          name: "WeatherFc",
          image: "../../../assets/Projects/weatherfc.jpg",
          technology: 'Frontend',
          year: '2021',
          uid:'Pr6'
        },
        {
          name: "Crwn Clothing",
          image: "../../../assets/Projects/crwnclothing.jpg",
          technology: 'Frontend',
          year: '2021',
          uid:'Pr7'
        },
        {
          name: "Instagram Clone",
          image: "../../../assets/Projects/instacloness.jpg",
          technology: 'Fullstack',
          year: '2021',
          uid:'Pr8'
        },
        {
          name: "Dream Garden",
          image: "../../../assets/Projects/dreamgarden.jpg",
          technology: 'Frontend',
          year: '2021',
          uid:'Pr9'
        }
    ]

    static Filters = [
        {
            content: "ALL",
            uid: "WMC01",
            width: "100",
            height: "50",
            isActive: true 
        },
        {
            content: "FrontEnd",
            uid: "WMC02",
            width: "150",
            height: "50",
            isActive: false 
        },
        {
            content: "Backend",
            uid: "WMC03",
            width: "150",
            height: "50",
            isActive: false 
        }
    ]

    static Layout = [
      {
          content: "⊞",
          uid: "WMC04",
          width: "50",
          height: "50",
          isActive: true,
          textSize: "35",
          layout: 'grid'
      },
      {
          content: "☰",
          uid: "WMC05",
          width: "50",
          height: "50",
          isActive: false,
          textSize: "35",
          layout: 'list'
      },
  ]
}
