# App Structure

src/
├── assets/             # Imágenes, íconos, fuentes, etc.
├── components/         # Componentes reutilizables (Buttons, Modals, etc.)
├── config/             # Configuraciones (theme, rutas, axios, etc.)
├── features/           # Módulos (auth, dashboard, products, etc.)
│   ├── auth/
│   │   ├── components/   # Componentes específicos de auth (LoginForm, etc.)
│   │   ├── pages/        # Páginas relacionadas (LoginPage, etc.)
│   │   └── authSlice.ts  # (si usas Redux/Zustand o lógica propia)
│   └── products/
│       ├── components/
│       ├── pages/
│       └── productSlice.ts
├── hooks/              # Custom hooks (useAuth, useDebounce, etc.)
├── layouts/            # Layouts como MainLayout, AuthLayout, etc.
├── routes/             # Definición de rutas centralizadas
├── services/           # API calls centralizadas (authService, productService, etc.)
├── store/              # Zustand o Redux (si aplica)
├── theme/              # Material UI Theme (getDesignTokens, ThemeProvider, etc.)
├── types/              # Tipos y interfaces globales
├── utils/              # Funciones utilitarias
├── App.tsx
└── main.tsx

