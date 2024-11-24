import * as SliderPrimitive from "@radix-ui/react-slider"
import { forwardRef } from "react"



const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    {...props}
    className="relative flex w-full touch-none items-center"
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-indigo-400">
      <SliderPrimitive.Range className="absolute h-full bg-indigo-400"  />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb  />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
