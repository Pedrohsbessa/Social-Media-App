// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",    // Branco Puro
10: "#F9FAFB",   // Cinza Muito Claro
50: "#F1F4F8",   // Cinza Claro
100: "#DDE4EB",  // Cinza Claro
200: "#B6C9D5",  // Azul Cinza Claro
300: "#8FAFBF",  // Azul Cinza Médio
400: "#6887A8",  // Azul Médio
500: "#4A638E",  // Azul Médio
600: "#354C72",  // Azul Escuro Médio
700: "#23344F",  // Azul Escuro
800: "#162237",  // Azul Marinho Claro
900: "#0B131D",  // Azul Marinho Escuro
1000: "#020709", // Preto Puro

      

    },
    primary: {
      50: "#F5E1F7",   // Pastel Purple Claro
100: "#E0B0F0",  // Pastel Purple Médio-Claro
200: "#CB7FE8",  // Pastel Purple Médio
300: "#B54DE1",  // Pastel Purple Médio-Escuro
400: "#9F1CD9",  // Pastel Purple Escuro
500: "#870CC2",  // Pastel Purple Muito Escuro
600: "#6E0A9E",  // Pastel Purple Muito Escuro
700: "#55087A",  // Pastel Purple Muito Escuro
800: "#3C0656",  // Pastel Purple Muito Escuro
900: "#240432",  // Pastel Purple Muito Escuro
    },
  };
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };