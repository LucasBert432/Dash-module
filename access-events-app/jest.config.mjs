export default {
  testEnvironment: "jsdom", // Define o ambiente de teste como jsdom
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Caminho para o arquivo de setup
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Padrão para encontrar arquivos de teste
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transforma arquivos TypeScript
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Mapeia imports com @/ para a pasta src/
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@testing-library|@mui|@emotion)/)", // Ignora node_modules, exceto bibliotecas específicas
  ],
};
