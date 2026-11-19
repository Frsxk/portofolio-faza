import type { ReactNode } from "react"
import { MotionConfig } from "motion/react"

import { M3eProvider } from "@/components/m3e/m3e-provider"
import { Toaster } from "@/components/m3e/sonner"
import { tidalInkTheme } from "@/lib/design/theme.config"

export function DesignProviders({ children }: { children: ReactNode }) {
  return (
    <M3eProvider
      colorMode={{ defaultMode: "system", toggleKey: false }}
      theme={{ defaultTheme: tidalInkTheme, persist: false }}
    >
      <MotionConfig reducedMotion="user">
        {children}
        <Toaster position="bottom-center" />
      </MotionConfig>
    </M3eProvider>
  )
}
