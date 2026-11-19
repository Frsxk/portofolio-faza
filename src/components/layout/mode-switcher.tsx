import { useReducedMotion } from "motion/react"

import { Button } from "@/components/m3e/button"
import {
  useColorMode,
  type ColorMode,
} from "@/components/m3e/color-mode-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/m3e/dropdown-menu"
import { Icon } from "@/components/m3e/icon"
import { cn } from "@/lib/m3e/cn"

export function ModeSwitcher({ className }: { className?: string }) {
  const { mode, resolvedMode, setMode } = useColorMode()
  const prefersReducedMotion = useReducedMotion()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="tonal"
            size="icon-md"
            disableRipple={Boolean(prefersReducedMotion)}
            aria-label={`Color theme: ${mode} (${resolvedMode} active). Activate to switch theme.`}
            className={cn(className)}
          />
        }
      >
        <Icon
          name={
            mode === "system"
              ? "contrast"
              : resolvedMode === "dark"
                ? "dark_mode"
                : "light_mode"
          }
          size={22}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={mode}
            onValueChange={(val) => setMode(val as ColorMode)}
          >
            <DropdownMenuRadioItem value="light" className="min-h-11 py-3">
              <Icon name="light_mode" size={18} />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark" className="min-h-11 py-3">
              <Icon name="dark_mode" size={18} />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system" className="min-h-11 py-3">
              <Icon name="contrast" size={18} />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
