import DottedGlowBackground from '@/components/ui/dotted-glow-background'
import React from 'react'

const DottedBackgound = () => {
    return (
        <>
            <DottedGlowBackground
                className="pointer-events-none mask-radial-to-90% mask-radial-at-center z-[-2]"
                opacity={1}
                gap={10}
                radius={2}
                colorLightVar="#ffff"
                glowColorLightVar="--color-neutral-100"
                colorDarkVar="--color-neutral-400"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1} />

        </>
    )
}

export default DottedBackgound