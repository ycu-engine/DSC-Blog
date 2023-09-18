import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/shadcn/utils'

/**
 * HeadingのVariant
 */
export const HeadingVariants = cva('inline-flex', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      title: 'text-title font-extrabold tracking-tight',
    },
  },
})

/**
 *  HeadingのProps
 */
export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof HeadingVariants> & {
    asChild?: boolean
  }

/**
 * Headingの活用コンポーネント
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, asChild, ...props }, ref) => {
    const key = HeadingVariants({ variant })
    const Comp = asChild ? Slot : 'h1'
    return <Comp className={cn(key, className)} ref={ref} {...props} />
  },
)

Heading.displayName = 'Heading'
