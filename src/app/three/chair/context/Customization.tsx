import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface CustomizationContextType {
  material: string
  setMaterial: (value: string) => void
  leg: string
  setLeg: (value: string) => void
  /** 椅子颜色 */
  chairColor: string
  setChairColor: (value: string) => void
  /** 垫子颜色 */
  cushionColor: string
  setCushionColor: (value: string) => void
}

export const chairColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
]

export const cushionColors = [
  {
    color: '#683434',
    name: 'brown',
  },
  {
    color: '#1a5e1a',
    name: 'green',
  },
  {
    color: '#659994',
    name: 'blue',
  },
  {
    color: '#896599',
    name: 'mauve',
  },
  {
    color: '#ffa500',
    name: 'orange',
  },
  {
    color: '#59555b',
    name: 'grey',
  },
  {
    color: '#222222',
    name: 'black',
  },
  {
    color: '#ececec',
    name: 'white',
  },
]
const CustomizationContext = createContext<CustomizationContextType>({
  material: '',
  setMaterial: () => {},
  leg: '',
  setLeg: () => {},
  chairColor: 'origin',
  setChairColor: () => {},
  cushionColor: 'origin',
  setCushionColor: () => {}
})

interface Props {
  children: ReactNode
}

export const CustomizationProvider: FC<Props> = ({ children }) => {
  const [material, setMaterial] = useState('leather')
  const [leg, setLeg] = useState('classic')
  const [chairColor, setChairColor] = useState(chairColors[0].color)
  const [cushionColor, setCushionColor] = useState(cushionColors[0].color)
  return <CustomizationContext.Provider value={{
    material,
    setMaterial,
    leg,
    setLeg,
    cushionColor,
    chairColor,
    setCushionColor,
    setChairColor
  }}>
    {children}
  </CustomizationContext.Provider>
}

export const useCustomization = () => {
  return useContext(CustomizationContext)
}
