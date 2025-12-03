# CarePaw - Plataforma de Cuidados para Pets

## Sobre o Projeto

CarePaw é uma plataforma digital colaborativa que conecta donos de pets, cuidadores profissionais e ONGs para promover o bem-estar de cães e gatos. O nome vem da junção de "Care" (cuidado) e "Paw" (pata), simbolizando nosso compromisso com o cuidado das patinhas que dependem de nós.

## Funcionalidades

### 🏠 Homepage
- Hero section atrativo com call-to-action
- Navegação intuitiva e responsiva
- Design moderno e profissional

### 🐕 Serviços
- **Passeios**: Conexão com cuidadores qualificados
- **Cuidados Domiciliares**: Cuidadores visitam sua casa
- **Adoção Responsável**: Galeria de pets para adoção
- **Apoio a ONGs**: Visibilidade para organizações parceiras

### 📊 Dashboard Interativo
- Estatísticas sobre bem-estar animal no Brasil
- Gráficos interativos com Chart.js:
  - População pet por região (gráfico de pizza)
  - Casos de maus-tratos (gráfico de linha)
  - Adoções por ano (gráfico de barras)
  - ONGs por estado (gráfico horizontal)

### 🎨 Design System
- **Cores**: Verde água (#2a9d8f), Verde escuro (#264653), Coral (#e76f51)
- **Tipografia**: Poppins (títulos) e Inter (texto)
- **Ícones**: Font Awesome
- **Animações**: AOS (Animate On Scroll)

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos e responsivos
- **JavaScript**: Interatividade e funcionalidades
- **Chart.js**: Gráficos interativos
- **Font Awesome**: Ícones
- **AOS**: Animações de scroll
- **Google Fonts**: Tipografia

## Como Usar

### 1. Visualização Local
```bash
# Abra o arquivo index.html em qualquer navegador moderno
open index.html
# ou
firefox index.html
# ou
google-chrome index.html
```

### 2. Servidor Local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiver o http-server instalado)
npx http-server

# Acesse: http://localhost:8000
```

## Estrutura do Projeto

```
carepaw/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos principais
│   └── responsive.css     # Estilos responsivos
├── js/
│   ├── main.js           # JavaScript principal
│   └── charts.js         # Configuração dos gráficos
├── images/
│   ├── icons/            # Ícones e logo
│   ├── hero-pets.png     # Imagem principal
│   ├── pets-together.jpg # Imagens de pets
│   └── ...               # Outras imagens
├── data/                 # Dados para futuras integrações
└── README.md            # Este arquivo
```

## Funcionalidades JavaScript

### Navegação
- Menu mobile responsivo
- Scroll suave entre seções
- Header transparente no scroll

### Interatividade
- Formulário de contato funcional
- Sistema de notificações
- Hover effects nos cards
- Animações de entrada

### Gráficos
- Dados realistas sobre pets no Brasil
- Tooltips informativos
- Cores consistentes com o design
- Responsivos para mobile

## Melhorias Implementadas

Comparado à versão original:

1. **Arquitetura Modular**: CSS e JS separados
2. **Gráficos Funcionais**: Chart.js com dados reais
3. **Design Moderno**: Sistema de cores e tipografia
4. **Imagens Reais**: Fotos de pets e ONGs
5. **Interatividade**: JavaScript para UX aprimorada
6. **Responsividade**: Design mobile-first
7. **Acessibilidade**: ARIA labels e navegação por teclado
8. **Performance**: Otimizações de carregamento

## Próximos Passos

Para transformar em uma aplicação completa:

1. **Backend**: API para gerenciar usuários, pets e serviços
2. **Banco de Dados**: Armazenamento de dados reais
3. **Autenticação**: Sistema de login para usuários
4. **Pagamentos**: Integração com gateways de pagamento
5. **Geolocalização**: Busca de cuidadores por proximidade
6. **Chat**: Comunicação entre usuários
7. **Mobile App**: Versão nativa para smartphones

## Contato

Este é um projeto acadêmico do Centro Universitário de Brasília (CEUB) para o curso de Ciência da Computação.

---

**CarePaw** - Conectando corações e patinhas para um mundo melhor para nossos pets. 🐾

