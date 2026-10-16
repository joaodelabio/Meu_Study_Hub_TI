<div align="center">

# 📚 Meu Study Hub TI

**Portfólio acadêmico e profissional versionado de João Gabriel Assunção de Labio**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-1fd3f5?style=for-the-badge&logo=github)](https://joaodelabio.github.io/Meu_Study_Hub_TI/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaodelabio-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/joaodelabio)
![Versão](https://img.shields.io/github/v/tag/joaodelabio/Meu_Study_Hub_TI?style=for-the-badge&label=vers%C3%A3o&color=a66bff)

🌐 **Site:** https://joaodelabio.github.io/Meu_Study_Hub_TI/ · 🎞️ **Slides:** https://joaodelabio.github.io/Meu_Study_Hub_TI/slides.html

</div>

---

## 📖 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Sobre o autor](#-sobre-o-autor)
- [Arquitetura do repositório](#-arquitetura-do-repositório)
- [Matriz de disciplinas](#-matriz-de-disciplinas)
- [Padrões adotados](#-padrões-adotados)
- [Versionamento](#-versionamento)
- [Como executar o site localmente](#-como-executar-o-site-localmente)
- [Como contribuir](#-como-contribuir)
- [Contato](#-contato)

---

## 🎯 Sobre o projeto

O **Study Hub** é o núcleo de organização da minha rotina acadêmica e da minha evolução técnica na reta final da
graduação em Ciência da Computação. Ele centraliza **resumos analíticos, registros de laboratórios práticos,
códigos-fonte e relatórios técnicos** produzidos ao longo do curso.

Ao transformar a produção acadêmica em artefatos **rastreáveis e versionados**, o repositório funciona como uma
vitrine viva de competências aplicadas para recrutadores e pares técnicos.

> Projeto desenvolvido como **Entrega Intermediária** da disciplina **Bootcamp I** — *Criação de Repositório com Versionamento*.

## 👤 Sobre o autor

| Campo | Informação |
|---|---|
| **Nome** | João Gabriel Assunção de Labio |
| **RA** | 22308940 |
| **Curso** | Bacharelado em Ciência da Computação (8º semestre) |
| **Instituição** | Centro Universitário de Brasília (UniCEUB) |
| **Disciplina** | Bootcamp I |

**Áreas de interesse:** Segurança Cibernética & SOC · Infraestrutura & Redes · Governança de TI & Conformidade ·
Engenharia & Qualidade de Software.

## 🗂️ Arquitetura do repositório

```text
Meu_Study_Hub_TI/
├── 01_Apresentacao_e_Perfil/          # Perfil, currículo e contatos
│   ├── README.md
│   └── curriculo_e_contatos.md
├── 02_Disciplinas_Atuais/             # Uma pasta por disciplina do semestre
│   ├── Bootcamp_I/
│   ├── Projeto_Integrador_IV/
│   ├── Seguranca_Cibernetica/
│   ├── Teste_e_Qualidade_de_Software/
│   └── Sistemas_em_Tempo_Real_e_Embarcados/
├── 03_Projetos_e_Certificados/        # Projetos pessoais e certificações
│   ├── Certificacoes/
│   └── Projetos_Pessoais/
├── assets/                            # CSS, JS e imagens do GitHub Pages
├── index.html                         # Página principal (GitHub Pages)
├── slides.html                        # Apresentação em slides
├── CHANGELOG.md                       # Histórico de versões
└── README.md                          # Este arquivo
```

| Pasta | Finalidade |
|---|---|
| [`01_Apresentacao_e_Perfil`](01_Apresentacao_e_Perfil/) | Apresentação pessoal, biografia e contatos profissionais |
| [`02_Disciplinas_Atuais`](02_Disciplinas_Atuais/) | Atividades, entregas, labs e resumos de cada disciplina |
| [`03_Projetos_e_Certificados`](03_Projetos_e_Certificados/) | Projetos pessoais e comprovantes de certificações |

## 📊 Matriz de disciplinas

| Semestre / Módulo | Disciplina | Tipo de material | Justificativa |
|---|---|---|---|
| 1º Módulo | Bootcamp I | Planejamento da arquitetura do Study Hub e entregas do projeto | Define a base de organização profissional para todo o curso |
| 8º Semestre | Projeto Integrador IV | Relatórios práticos, atas de alinhamento e documentação arquitetural | Consolida competências multidisciplinares em entregas orientadas ao mercado |
| 8º Semestre | Segurança Cibernética | Resumos de frameworks e relatórios de labs (OWASP / MITRE) | Sistematiza reconhecimento, mitigação de ameaças e análise de incidentes |
| 8º Semestre | Teste e Qualidade de Software | Casos de teste, planos de QA e relatórios de validação | Garante rastreabilidade e robustez por meio de ciclos de testes |
| 8º Semestre | Sistemas em Tempo Real e Embarcados | Resumos de escalonamento e simulações de hardware/firmware | Desenvolve domínio sobre restrições temporais e baixo nível |

## 📐 Padrões adotados

- **Pastas:** prefixos numéricos sequenciais + `snake_case` (`01_`, `02_`, ...) para ordenação estrita.
- **Documentação:** toda pasta principal possui um `README.md` explicando seu conteúdo.
- **Entregáveis:** convenção `AAAA-MM-DD_titulo_descritivo.ext` (ex.: `2026-10-17_entrega_intermediaria.pdf`).
- **Commits:** padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/) — `feat:`, `fix:`, `docs:`, `style:`, `chore:`.
- **Versões:** [Versionamento Semântico](https://semver.org/lang/pt-BR/) com *tags* Git (`v1.0`, `v1.1`, ...).

## 🔖 Versionamento

O histórico completo está em [`CHANGELOG.md`](CHANGELOG.md). Fluxo utilizado:

```bash
git add .
git commit -m "feat: descrição da alteração"
git tag -a v1.x -m "Descrição da versão"
git push origin main --tags
```

## 💻 Como executar o site localmente

```bash
git clone https://github.com/joaodelabio/Meu_Study_Hub_TI.git
cd Meu_Study_Hub_TI
python -m http.server 8000
# acesse http://localhost:8000
```

## 🤝 Como contribuir

1. Faça um *fork* do repositório;
2. Crie uma *branch*: `git checkout -b feature/minha-sugestao`;
3. Faça *commit* seguindo Conventional Commits;
4. Envie a *branch*: `git push origin feature/minha-sugestao`;
5. Abra um *Pull Request* descrevendo a alteração.

## 📬 Contato

- **GitHub:** [github.com/joaodelabio](https://github.com/joaodelabio)
- **LinkedIn:** [linkedin.com/in/joaodelabio](https://www.linkedin.com/in/joaodelabio)

---

<div align="center"><sub>© 2026 João Gabriel Assunção de Labio · UniCEUB · Bootcamp I</sub></div>
