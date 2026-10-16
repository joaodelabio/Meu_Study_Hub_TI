# Meu Study Hub TI

Portfólio acadêmico e técnico versionado de João Gabriel Assunção de Labio

- Site (GitHub Pages): https://joaodelabio.github.io/Meu_Study_Hub_TI/
- Apresentação (Slides): https://joaodelabio.github.io/Meu_Study_Hub_TI/slides.html
- LinkedIn: https://www.linkedin.com/in/joaodelabio
- Repositório: https://github.com/joaodelabio/Meu_Study_Hub_TI

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Sobre o autor](#sobre-o-autor)
- [Arquitetura do repositório](#arquitetura-do-repositório)
- [Matriz de disciplinas](#matriz-de-disciplinas)
- [Certificações técnicas](#certificações-técnicas)
- [Padrões adotados](#padrões-adotados)
- [Versionamento](#versionamento)
- [Como executar o site localmente](#como-executar-o-site-localmente)
- [Contato](#contato)

---

## Sobre o projeto

O **Study Hub** é o núcleo de organização da rotina acadêmica e da evolução técnica na reta final da
graduação em Ciência da Computação. O projeto centraliza resumos analíticos, registros de laboratórios práticos,
códigos-fonte e relatórios técnicos produzidos ao longo do curso.

Ao transformar a produção acadêmica em artefatos rastreáveis e versionados, o repositório funciona como uma
vitrine viva de competências aplicadas para fins profissionais e acadêmicos.

Projeto desenvolvido para a Entrega Intermediária da disciplina **Bootcamp I** *Criação de Repositório com Versionamento*.

## Sobre o autor

| Campo | Informação |
|---|---|
| **Nome** | João Gabriel Assunção de Labio |
| **RA** | 22308940 |
| **Curso** | Bacharelado em Ciência da Computação (8º semestre) |
| **Instituição** | Centro Universitário de Brasília (UniCEUB) |
| **Disciplina** | Bootcamp I |

**Áreas de interesse:** Segurança Cibernética & SOC, Infraestrutura & Redes, Governança de TI & Conformidade,
Engenharia & Qualidade de Software.

## Arquitetura do repositório

```text
Meu_Study_Hub_TI/
├── 01_Apresentacao_e_Perfil/
│   ├── README.md
│   └── curriculo_e_contatos.md
├── 02_Disciplinas_Atuais/
│   ├── README.md
│   ├── Bootcamp_I/
│   ├── Projeto_Integrador_IV/
│   ├── Seguranca_Cibernetica/
│   ├── Teste_e_Qualidade_de_Software/
│   └── Sistemas_em_Tempo_Real_e_Embarcados/
├── 03_Projetos_e_Certificados/
│   ├── README.md
│   ├── Certificacoes/
│   └── Projetos_Pessoais/
├── assets/
├── index.html
├── slides.html
├── CHANGELOG.md
└── README.md
```

| Diretório | Finalidade |
|---|---|
| [`01_Apresentacao_e_Perfil`](01_Apresentacao_e_Perfil/) | Apresentação pessoal, biografia e contatos profissionais |
| [`02_Disciplinas_Atuais`](02_Disciplinas_Atuais/) | Atividades, entregas, laboratórios e resumos por disciplina |
| [`03_Projetos_e_Certificados`](03_Projetos_e_Certificados/) | Projetos práticos e comprovantes de certificações técnicas |

## Matriz de disciplinas

| Semestre / Módulo | Disciplina | Tipo de material | Justificativa |
|---|---|---|---|
| 1º Módulo | Bootcamp I | Planejamento da arquitetura do Study Hub e entregas do projeto | Define a base de organização profissional para todo o curso |
| 8º Semestre | Projeto Integrador IV | Relatórios práticos, atas de alinhamento e documentação arquitetural | Consolida competências multidisciplinares em entregas orientadas ao mercado |
| 8º Semestre | Segurança Cibernética | Resumos de frameworks e relatórios de labs (OWASP / MITRE) | Sistematiza reconhecimento, mitigação de ameaças e análise de incidentes |
| 8º Semestre | Teste e Qualidade de Software | Casos de teste, planos de QA e relatórios de validação | Garante rastreabilidade e robustez por meio de ciclos de testes |
| 8º Semestre | Sistemas em Tempo Real e Embarcados | Resumos de escalonamento e simulações de hardware/firmware | Desenvolve domínio sobre restrições temporais e baixo nível |

## Certificações técnicas

Lista de credenciais profissionais obtidas em segurança da informação, redes e governança:

1. **Junior Cybersecurity Analyst Career Path** - Cisco
2. **Endpoint Security** - Cisco Networking Academy
3. **ISO/IEC 27001 Information Security Associate** - SkillFront
4. **Networking Devices and Initial Configuration** - Cisco
5. **Networking Basics** - Cisco
6. **Cyber Threat Management** - Cisco

Detalhes e registros podem ser consultados na pasta [`03_Projetos_e_Certificados/Certificacoes/`](03_Projetos_e_Certificados/Certificacoes/).

## Padrões adotados

- **Pastas:** prefixos numéricos sequenciais e formato `snake_case` (`01_`, `02_`, `03_`) para garantir ordenação lógica estrita.
- **Documentação:** cada pasta principal e disciplina possui um `README.md` descritivo.
- **Entregáveis:** convenção cronológica e temática `AAAA-MM-DD_titulo_descritivo.ext`.
- **Commits:** especificação Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
- **Versões:** Versionamento Semântico formal com marcação de tags Git (`v1.0`, `v1.1`).

## Versionamento

O histórico completo de alterações encontra-se documentado no arquivo [`CHANGELOG.md`](CHANGELOG.md).

Fluxo de trabalho:
```bash
git add .
git commit -m "feat: descricao sucinta da alteracao"
git tag -a v1.x -m "Descricao da tag"
git push origin main --tags
```

## Declaração de integridade acadêmica

Gostaria de declarar que o planejamento estrutural, arquitetura hierárquica de diretórios, matriz curricular, biografia, dados acadêmicos e curadoria de certificações foram concebidos e definidos por mim, e que ferramentas computacionais e recursos de inteligência artificial foram utilizados como instrumento de apoio técnico no processo de automação de layouts de documentação e suporte sintático à codificação das páginas estáticas. A autoria intelectual, a validação de todo o conteúdo e a responsabilidade acadêmica permanecem atribuídas a mim.

## Como executar o site localmente

```bash
git clone https://github.com/joaodelabio/Meu_Study_Hub_TI.git
cd Meu_Study_Hub_TI
python -m http.server 8000
```
Acesse `http://localhost:8000` no navegador.

## Como contribuir

1. Realizar um *fork* do repositório;
2. Criar uma *branch* dedicada: `git checkout -b feature/sua-sugestao`;
3. Registrar os *commits* segundo o padrão Conventional Commits;
4. Enviar a *branch*: `git push origin feature/sua-sugestao`;
5. Submeter um *Pull Request* detalhando a alteração proposta.

## Contato

- **GitHub:** https://github.com/joaodelabio
- **LinkedIn:** https://www.linkedin.com/in/joaodelabio
