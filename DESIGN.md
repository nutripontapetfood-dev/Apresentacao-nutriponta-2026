---
name: Nutriponta Presentation Design System
colors:
  primary: "#06264c"
  primary-dark: "#041429"
  primary-light: "#08386e"
  gold: "#f6a623"
  gold-dark: "#d98606"
  gold-light: "#fff5e4"
  neutral-bg: "#faf7f2"
  neutral-card: "#ffffff"
  text-main: "#0e2036"
  text-muted: "#4e6178"
  text-light: "#ffffff"
typography:
  headline-xl: { fontFamily: "Plus Jakarta Sans", fontSize: "38px", fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.03em" }
  headline-lg: { fontFamily: "Plus Jakarta Sans", fontSize: "28px", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em" }
  body-lg: { fontFamily: "Plus Jakarta Sans", fontSize: "16px", fontWeight: 500, lineHeight: 1.5 }
  body-md: { fontFamily: "Plus Jakarta Sans", fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }
  label-sm: { fontFamily: "Plus Jakarta Sans", fontSize: "11px", fontWeight: 800, lineHeight: 1.0, letterSpacing: "0.12em" }
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-feature:
    backgroundColor: "{colors.neutral-card}"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Nutriponta - Apresentação Institucional

## Overview
Design System mobile-first e responsivo para a Apresentação Comercial e Institucional da Nutriponta Pet Food.
Foco em excelente experiência mobile (touch/swipe, 100dvh, thumb-friendly dock navigation), alta velocidade de carregamento (pronta para Vercel) e contraste WCAG AA.

## Colors
- **Navy Dark (#041429):** Fundo principal dos slides dark e da barra de navegação.
- **Navy Institutional (#06264c):** Tom corporativo Nutriponta.
- **Gold Accent (#f6a623):** Destaques visuais, KPIs, botões de ação e progresso.
- **Cream / Off-White (#faf7f2):** Fundo dos slides claros para leitura confortável em dispositivos móveis.

## Typography
- **Plus Jakarta Sans:** Tipografia moderna de alta legibilidade em telas pequenas e grandes.

## Layout & Mobile First
- Base CSS criada prioritariamente para telas mobile (< 640px).
- Escala de breakpoints limpos: `640px` (tablet portrait), `768px` (tablet landscape / desktop pequeno), `1024px` (desktop).
- Respeito às safe areas do iOS (`env(safe-area-inset-top)` e `env(safe-area-inset-bottom)`).
- Alturas dinâmicas usando `100dvh` para evitar saltos com a barra de endereços do Safari/Chrome mobile.

## Do's and Don'ts
- **Do:** Manter alvos de toque com no mínimo 44x44px.
- **Do:** Suportar navegação por gestos (swipe), teclado (setas/espaço) e cliques.
- **Don't:** Usar `!important` desnecessários ou estilos desktop-first que sobrecarreguem telas mobile.
- **Don't:** Bloquear a rolagem interna dos conteúdos dos slides em telas muito pequenas.
