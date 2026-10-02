# Aroe — site institucional

Site estático da Aroe Tecnologia, construído conforme o **Manual de Marca Aroe v1.0**.

## Estrutura

```
index.html            página única (hero, serviços, processo, portfólio, clientes, sobre, contato)
assets/styles.css     design tokens e componentes da marca
assets/fonts.css      M Miuan embutida (base64)
assets/main.js        menu mobile, revelação ao rolar, envio do formulário
assets/portfolio/     capturas dos sites do portfólio (960x645)
assets/clientes/      logos da seção "Empresas que confiam na Aroe"
vercel.json           cleanUrls e cache dos assets
```

## Rodar local

```bash
python3 -m http.server 4321
```

Abra http://localhost:4321.

## Deploy na Vercel

Não há build. Ao importar o repositório, use:

- **Framework Preset:** Other
- **Build Command:** vazio
- **Output Directory:** vazio (raiz do repositório)

## Regras de marca aplicadas

- Tokens de cor, tipografia, raio e espaçamento vindos da seção 05 do manual.
- Hero em Papel, com no máximo duas palavras em M Miuan e um único botão primário.
- Alternância de fundos Papel → Papel-2, com uma única seção em Casca na página.
- Sem sombras: profundidade vem de borda e espaçamento.
- Transições de 200–300ms, respeitando `prefers-reduced-motion`.

## Pendências

- Números da seção "Sobre" e e-mail de contato ainda são placeholders.
- Formulário abre o cliente de e-mail; falta integrar um serviço de envio.
- Verificar a licença comercial da fonte M Miuan (wepfont.com) antes do lançamento.
