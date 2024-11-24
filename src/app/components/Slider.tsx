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
    <SliderPrimitive.Thumb  className="block h-5 w-5 rounded-full border-2 border-indigo-300 bg-indigo-500 ring-offset-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"/>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
