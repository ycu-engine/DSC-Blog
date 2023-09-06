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
  const [hsl, setHsl] = useState<Omit<HSLColor, 'name'>>({ h, l, s })

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
    setHsl({ h: hI, l: lI, s: sI })
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
            setHsl({ h: value[0] || h, l, s })
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
            setHsl({ h, l, s: value[0] || s })
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
            setHsl({ h, l: value[0] || l, s })
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
    { h: 0, l: 100, name: 'background', s: 0 },
    { h: 222.2, l: 4.9, name: 'foreground', s: 84 },
    { h: 210, l: 96.1, name: 'muted', s: 40 },
    { h: 215.4, l: 46.9, name: 'muted-foreground', s: 16.3 },
    { h: 0, l: 100, name: 'popover', s: 0 },
    { h: 222.2, l: 4.9, name: 'popover-foreground', s: 84 },
    { h: 0, l: 100, name: 'card', s: 0 },
    { h: 222.2, l: 4.9, name: 'card-foreground', s: 84 },
    { h: 214.3, l: 91.4, name: 'border', s: 31.8 },
    { h: 214.3, l: 91.4, name: 'input', s: 31.8 },
    { h: 222.2, l: 11.2, name: 'primary', s: 47.4 },
    { h: 210, l: 98, name: 'primary-foreground', s: 40 },
    { h: 210, l: 96.1, name: 'secondary', s: 40 },
    { h: 222.2, l: 11.2, name: 'secondary-foreground', s: 47.4 },
    { h: 210, l: 96.1, name: 'accent', s: 40 },
    { h: 222.2, l: 11.2, name: 'accent-foreground', s: 47.4 },
    { h: 0, l: 60.2, name: 'destructive', s: 84.2 },
    { h: 210, l: 98, name: 'destructive-foreground', s: 40 },
    { h: 215, l: 65.1, name: 'ring', s: 20.2 },
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
