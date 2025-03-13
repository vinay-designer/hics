// utils/typography.js

/**
 * A standardized typography system for consistent text styling across components.
 * Import this in any component to ensure typographic consistency.
 */

export const typography = {
    // Main headings
    h1: "text-5xl md:text-6xl font-bold text-gray-800 tracking-tight",
    h2: "text-4xl md:text-5xl font-bold text-gray-800 tracking-tight",
    h3: "text-3xl font-semibold text-gray-800 tracking-tight",
    h4: "text-2xl font-semibold text-gray-800",
    
    // Subtitles and subheaders
    subtitle1: "text-xl font-medium text-gray-600",
    subtitle2: "text-lg font-medium text-gray-600",
    
    // Body text variations
    bodyLarge: "text-lg text-gray-600 leading-relaxed",
    body: "text-base text-gray-600 leading-relaxed",
    bodySmall: "text-sm text-gray-500",
    
    // Special text styles
    caption: "text-sm text-gray-400",
    overline: "text-xs uppercase tracking-widest text-gray-400 font-medium",
    
    // Brand accent - for highlighting text with your brand color
    accent: "text-orange-600", // Your brand color #ff712a
    
    // Gradient text for special headings
    gradient: "bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent",
    
    // Button text
    buttonText: "font-medium"
  };
  
  // Commonly used color values
  export const brandColors = {
    primary: "#ff712a", // Orange primary brand color
    secondary: "#4299e1" // Blue secondary color
  };
  
  // Font weight utilities
  export const fontWeights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold", 
    bold: "font-bold"
  };
  
  // Line heights
  export const lineHeights = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  
  // Heading styles with common variations
  export const headings = {
    // Standard headings
    primary: "text-gray-800 font-bold tracking-tight",
    secondary: "text-gray-700 font-semibold",
    
    // Brand colored headings
    branded: "text-orange-600 font-bold",
    
    // Section dividers
    divider: "after:block after:w-16 after:h-1 after:bg-orange-500 after:mt-4"
  };
  
  // Common text combinations
  export const textStyles = {
    // Hero section text
    heroText: "text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed",
    
    // Feature section text
    featureTitle: "text-xl font-semibold text-gray-800 mb-2",
    featureText: "text-gray-600 leading-relaxed",
    
    // Card text
    cardTitle: "text-lg font-medium text-gray-800",
    cardText: "text-sm text-gray-600"
  };