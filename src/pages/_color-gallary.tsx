import { NextPage } from 'next'
import { FC, useCallback, useState } from 'react'
import { z } from 'zod'
import { Slider } from '@/components/ui/slider'

type HSLColor = {
  name: string
  h: number
  s: number
  l: number
}

const Color: FC<HSLColor> = ({ name, h, s, l }) => {
  const [hsl, setHsl] = useState<Omit<HSLColor, 'name'>>({ h, s, l })

  const handleChangeHex = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = z.string().startsWith('#').length(7).safeParse(e.target.value)
    if (!isValid.success) return
    const hex = isValid.data
    const rgb = hex
      .replace(/^#/, '')
      .match(/.{2}/g)
      ?.map((v) => parseInt(v, 16))
    if (!rgb) return
    const [r, g, b] = rgb as [number, number, number]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)

    const hI = (() => {
      if (max === min) return 0
      if (max === r) return 60 * ((g - b) / (max - min)) + 360
      if (max === g) return 60 * ((b - r) / (max - min)) + 120
      if (max === b) return 60 * ((r - g) / (max - min)) + 240
      return 0
    })()
    const sI = (() => {
      if (max === 0) return 0
      return (max - min) / max
    })()
    const lI = max / 2.55
    setHsl({ h: hI, s: sI, l: lI })
  }, [])
  return (
    <div className="flex w-48 flex-col gap-4">
      <div
        className="grid aspect-square w-full place-content-center rounded-full text-teal-300 ring-4 ring-black"
        style={{
          backgroundColor: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        }}
      >
        {name}
      </div>
      <div className="">
        <span className="text-xs">Hue</span>
        <Slider
          defaultValue={[h]}
          min={0}
          max={360}
          onValueChange={(value) => {
            setHsl({ h: value[0] || h, s, l })
          }}
        />
        {hsl.h}
      </div>
      <div className="">
        <span className="text-xs">Saturation</span>
        <Slider
          defaultValue={[s]}
          min={0}
          max={100}
          onValueChange={(value) => {
            setHsl({ h, s: value[0] || s, l })
          }}
        />
        {hsl.s}
      </div>
      <div className="">
        <span className="text-xs">Lightness</span>
        <Slider
          defaultValue={[l]}
          min={0}
          max={100}
          onValueChange={(value) => {
            setHsl({ h, s, l: value[0] || l })
          }}
        />
        {hsl.l}
      </div>
      <label htmlFor={name} className="flex items-center">
        <span className="text-xs">Hex</span>
        <input className="ring-1" type="text" id={name} onChange={handleChangeHex} />
      </label>
    </div>
  )
}

/**
 * カラーギャラリー
 */
const Page: NextPage = () => {
  const colors: readonly HSLColor[] = [
    { name: 'background', h: 0, s: 0, l: 100 },
    { name: 'foreground', h: 222.2, s: 84, l: 4.9 },
    { name: 'muted', h: 210, s: 40, l: 96.1 },
    { name: 'muted-foreground', h: 215.4, s: 16.3, l: 46.9 },
    { name: 'popover', h: 0, s: 0, l: 100 },
    { name: 'popover-foreground', h: 222.2, s: 84, l: 4.9 },
    { name: 'card', h: 0, s: 0, l: 100 },
    { name: 'card-foreground', h: 222.2, s: 84, l: 4.9 },
    { name: 'border', h: 214.3, s: 31.8, l: 91.4 },
    { name: 'input', h: 214.3, s: 31.8, l: 91.4 },
    { name: 'primary', h: 222.2, s: 47.4, l: 11.2 },
    { name: 'primary-foreground', h: 210, s: 40, l: 98 },
    { name: 'secondary', h: 210, s: 40, l: 96.1 },
    { name: 'secondary-foreground', h: 222.2, s: 47.4, l: 11.2 },
    { name: 'accent', h: 210, s: 40, l: 96.1 },
    { name: 'accent-foreground', h: 222.2, s: 47.4, l: 11.2 },
    { name: 'destructive', h: 0, s: 84.2, l: 60.2 },
    { name: 'destructive-foreground', h: 210, s: 40, l: 98 },
    { name: 'ring', h: 215, s: 20.2, l: 65.1 },
  ] as const

  return (
    <div className="flex h-screen w-screen flex-wrap gap-8 p-10">
      {colors.map((color) => (
        <Color key={color.name} {...color} />
      ))}
    </div>
  )
}

export default Page
