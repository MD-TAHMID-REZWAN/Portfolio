'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem {...props}>
      <MuiThemeWrapper>{children}</MuiThemeWrapper>
    </NextThemesProvider>
  );
}

function MuiThemeWrapper({ children }) {
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const muiTheme = createTheme({
    palette: {
      mode: resolvedTheme === 'dark' ? 'dark' : 'light',
      // You can extend this with your custom palette if needed
    },
  });

  if (!mounted) return null;

  return (
    <MuiThemeProvider theme={muiTheme}>
      {/* The Three.js Canvas as fixed background */}
      <Canvas
        className="fixed inset-0 -z-10"
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true }}
      >
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      {/* Your app content */}
      {children}
    </MuiThemeProvider>
  );
}

