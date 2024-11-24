"use client"

import { Slider } from "./Slider";



export default function MainComponent(){
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Slider defaultValue={[33]} min={0} max={100} step={1} aria-label="Slider Control" />
        </div>
    )
}