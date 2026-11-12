# SH2 Remake: Guia de Platina

Hub estático (sem backend) para Silent Hill 2 Remake (2024): rota de platina, 8 finais, puzzles por dificuldade, coletáveis, atlas de mapas, bestiário, segredos e diferenças em relação ao original.

Projeto de fã, sem vínculo com Konami ou Bloober Team. Os dados são resumos próprios com link para as fontes (IGN, PowerPyx, Silent Hill Memories). O que não foi confirmado em fonte está marcado no app (abas Segredos, Original vs Remake e Fontes).

## Rodar localmente

```bash
python -m http.server 8765
# abra http://127.0.0.1:8765
```

Os módulos ES não funcionam abrindo `index.html` por `file://`; use um servidor local.

## Testes

```bash
node tests/run.mjs
```

## Publicar no GitHub Pages

Em Settings > Pages, escolha a branch (por exemplo `main`) e a pasta raiz `/`. Não há etapa de build.

## Estrutura

- `index.html`, `assets/css/main.css`
- `assets/js/app.js`: abas e painel de parâmetros da run
- `assets/js/state.js`: estado e persistência em `localStorage` (`sh2r_platinum_v1`), com exportar/importar JSON
- `assets/js/filter.js`: filtros puros da rota (rádio, armas, tempo, ciclo)
- `assets/js/data/*`: dados por tema, cada item aponta para uma fonte
- `assets/js/views/*`: uma view por aba

## Limites conhecidos

- Cloud Sync não existe (exigiria servidor). Use Exportar/Importar progresso.
- Mapas são exibidos a partir do Silent Hill Memories; se o site sair do ar, o app mostra um link.
- Alguns valores de puzzle na dificuldade Difícil não constam nas fontes consultadas; o app avisa.
