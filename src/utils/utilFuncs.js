const avalibleTecnologies = [ 
  {
    id: 1,
    tecName: 'react',
    icon: 'reactIcon'
  },
  {
    id:2 ,
    tecName: 'html',
    icon : 'htmlIcon'
  },
  {
    id: 3,
    tecName: 'css',
    icon : 'cssIcon'
  },
  {
    id: 4,
    tecName: 'shopify',
    icon: 'shopifyIcon'
  },
  {
    id: 5 ,
    tecName: 'vanillaJs',
    icon: 'vanillaJsIcon'
  },
  {
    id: 6,
    tecName: 'tailwind',
    icon: 'tailwindIcon'
  },
  {
    id: 7,
    tecName: 'express',
    icon: 'expressIcon'
  },
  {
    id: 8,
    tecName: 'firebase',
    icon: 'firebase'
  },
  {
    id: 9, 
    tecName: 'jquery',
    icon: 'jquery'
  }
]

export const getTecnologyPropertys = (...tecnologies) => {
  const allprojectTects = []
  for (let i = 0; i < tecnologies.length; i++) {
    const currentTec = tecnologies[i];
    const tecs = avalibleTecnologies.find((item) => item.tecName === currentTec )
    allprojectTects.push(tecs)
  }
  return allprojectTects;
}