import { useThemeStore } from "../globalStore/globalStore";

const useThemeStyles = () => {
  const { isWhite } = useThemeStore();

  return {
    // Cor de fundo principal da aplicação
    // Branco no tema claro, Cinza escuro no tema escuro
    backgroundColor: isWhite ? "#ffffff" : "#333333",

    // Cor "invertida" para elementos que contrastam com o fundo
    // Cinza escuro no claro, Branco no escuro
    invert: isWhite ? "#333333" : "#ffffff",

    // Cor padrão do texto
    // Preto no claro, Branco no escuro
    textColor: isWhite ? "#000000" : "#ffffff",

    // Cor das bordas e contornos
    // Preto no claro, Branco no escuro
    borderColor: isWhite ? "#000000" : "#ffffff",

    // Fundo dos botões principais
    // Preto no claro, Verde vibrante no escuro
    buttonBg: isWhite ? "#000000" : "#39E991",

    // Cor do hover dos botões
    // Cinza escuro no claro, Verde escuro no escuro
    buttonHover: isWhite ? "#333333" : "#00CC77",

    // Cor de destaque (usada para links, ícones, etc.)
    // Verde vibrante no claro, Preto no escuro
    highlightColor: isWhite ? "#39E991" : "#000000",

    // Segunda cor de destaque (para variações sutis)
    // Verde escuro no claro, Preto mais escuro no escuro
    secondaryHighlight: isWhite ? "#00CC77" : "#111111",
  };
};

export default useThemeStyles;
