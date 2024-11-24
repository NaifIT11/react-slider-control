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
    <SliderPrimitive.Track>
      <SliderPrimitive.Range  />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb  />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
