import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
// import { provider } from react-redux

const theme= createTheme({});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { StyledEngineProvider } from '@mui/material/styles'
// import { CssBaseline } from '@mui/material'
// import App from './App.jsx'

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
//   // Make sure spacing is defined for your styles
//   spacing: 8,
// });

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ThemeProvider>
//     </StyledEngineProvider>
//   </StrictMode>,
// )