export const sizeClasses = {
  sm: "h-[60px] w-[36px]",
  md: "aspect-[2/3]",
  lg: "aspect-[2/3] w-48"
} as const;

export const baseCardStyles = {
  wrapper: "relative overflow-hidden transition-transform hover:scale-105 bg-gray-800 border-gray-700",
  name: {
    small: "absolute bottom-0 left-0 right-0 bg-black/70 p-1 text-center text-[8px] text-white opacity-0 group-hover:opacity-100",
    normal: "absolute bottom-0 left-0 right-0 p-2 text-center text-sm bg-black/50 text-white"
  }
} as const;