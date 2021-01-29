module.exports = {
  aliases: {
    styled: '@xstyled/styled-components',
  },
  namedExports: {
    react: [
      'useState',
      'useReducer',
      'useEffect',
      'useLayoutEffect',
      'useContext',
      'useRef',
      'useCallback',
      'useMemo',
      'forwardRef',
      'createContext',
      'memo',
    ],
    '@xstyled/styled-components': ['x', 'ThemeProvider', 'Preflight'],
  },
}
