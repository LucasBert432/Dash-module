import { useThemeStore } from "../globalStore/globalStore";

const useThemeStyles = () => {
  const { isWhite } = useThemeStore();

  return {
    // Cor de fundo principal da aplicação
    // Branco no tema claro, Cinza escuro no tema escuro
    backgroundColor: isWhite ? "#ffffff" : "#333333",

    // Cor "invertida" para elementos que contrastam com o fundo
    // Cinza escuro no claro, Branco no escuro
    invertBackgroundColor: isWhite ? "#333333" : "#ffffff",

    // Cor padrão do texto
    // Preto no claro, Branco no escuro
    textColor: isWhite ? "rgba(51, 51, 51, 1);" : "#ffffff",

    // Cor padrão do texto
    // Branco no claro, Preto no escuro
    invertTextColor: isWhite ? "#ffffff" : "rgba(51, 51, 51, 1);",

    // Fundo dos botões principais
    // Preto no claro, Verde vibrante no escuro
    buttonBg: isWhite ? "rgba(51, 51, 51, 1);" : "#39E991",

    // Cor do hover dos botões
    // Cinza escuro no claro, Verde escuro no escuro
    buttonHover: isWhite ? "#333333" : "#00CC77",

    // Branco escuro no claro, Verde escuro no escuro
    backGroundBox: isWhite ? "rgb(209, 206, 206);" : "#00CC77",

    // Cor de destaque (usada para links, ícones, etc.)
    // Verde vibrante no claro, Preto no escuro
    highlightColor: isWhite ? "#39E991" : "#000000",

    // Cor de destaque (usada para links, ícones, etc.)
    //  Preto no escuro,  Verde vibrante no claro
    highlightColorInvert: isWhite ? "rgb(209, 206, 206);" : "#39E991",

    // Segunda cor de destaque (para variações sutis)
    // Verde escuro no claro, Preto mais escuro no escuro
    secondaryHighlight: isWhite ? "#00CC77" : "rgba(51, 51, 51, 1);",

    // verde escuro
    defaultWhite: "#333333",
    // verde escuro
    defaultDarkGreen: "#00CC77",
    // preto
    defaultDark: "rgba(51, 51, 51, 1);",
    //cinza
    defaultGray: "rgb(143, 143, 143);",

    invertDarkGray: isWhite ? "rgba(51, 51, 51, 1);" : "rgb(143, 143, 143);",
  };
};

export default useThemeStyles;
