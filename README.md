<<<<<<< HEAD
# 💻 Aula 09: Conclusão e Próximos Passos no React Native

Parabéns! 🎉 Você chegou ao final do projeto e concluiu o desenvolvimento do aplicativo **Money**. Nós saímos do zero, entendemos os fundamentos do React Native com Expo, criamos interfaces responsivas, gerenciamos estados globais e até geramos um aplicativo instalável. 

Mas lembre-se: nenhum curso te leva do "zero ao Sênior" magicamente. A base você já tem, agora é hora de praticar e voar mais alto! Abaixo, listamos os próximos passos recomendados para a sua jornada como pessoa desenvolvedora mobile.

## 🚀 Passo 1: Crie Projetos com a Sua Cara
A melhor forma de fixar o conhecimento e enriquecer o seu portfólio é criando aplicativos que resolvam problemas reais seus ou de pessoas próximas a você.
* **Aprenda sob demanda:** Decidiu fazer um app de rede social e precisa de *Push Notifications* (aquelas notificações que pulam na tela)? Vá no Google, pesquise a documentação, entenda e implemente. O aprendizado guiado pela necessidade é o mais efetivo!

## 📸 Passo 2: Sem ideias? Faça o Tutorial Oficial do Expo!
Se você está sem ideias para um projeto autoral agora, a documentação do Expo possui um tutorial prático incrível.
Neste tutorial, você constrói um aplicativo diferente do nosso: um app que acessa a galeria de imagens do seu celular, permite escolher uma foto, adicionar adesivos (*stickers*) e salvar o resultado. É um ótimo exercício para aprender a lidar com a câmera e os arquivos do aparelho.
🔗 **[Acessar o Tutorial Oficial do Expo](https://docs.expo.dev/tutorial/introduction/)**

## 🗺️ Passo 3: O Mapa da Mina (`roadmap.sh`)
Para saber exatamente o que o mercado de trabalho exige de um desenvolvedor React Native, recomendamos fortemente o uso do **Roadmap.sh**. Ele é um mapa visual de tecnologias.

Neste curso, nós já cobrimos as bases principais:
✅ Core Components (`View`, `Text`, `TextInput`, etc.)
✅ Estilização nativa (`StyleSheet`)
✅ Listas Otimizadas (`FlatList`)
✅ Armazenamento Local (`AsyncStorage`)
✅ Navegação e CLI do Expo

**O que você pode explorar a seguir usando o Roadmap:**
* **Estilização Avançada:** Pesquise sobre bibliotecas como `styled-components` ou `NativeWind` (Tailwind para React Native).
* **Networking (Requisições HTTP):** Estude como conectar seu app a APIs externas usando `axios` ou `fetch` (ou até `Apollo Client` para GraphQL).
* **Testes Automatizados:** Aprenda a garantir que seu app não quebre usando `Jest` e `React Native Testing Library`. (Para testes End-to-End, pesquise sobre `Detox` ou `Appium`).
* **Recursos Nativos Avançados:** *Deep Linking* (abrir o app através de um link de site), Animações fluidas (`Reanimated`) e uso de bibliotecas de mapas e localização.
🔗 **[Acessar o Roadmap de React Native](https://roadmap.sh/react-native)**

---

### 🌟 Muito Obrigado!
Chegamos ao fim da nossa jornada de desenvolvimento do App **Money**. Não se esqueça de avaliar o curso, deixar o seu feedback e compartilhar o seu projeto rodando lá no LinkedIn!

Até a próxima oportunidade e bons códigos! 👨‍💻👩‍💻

---

## 🔗 Links Úteis e Referências desta Aula
* **Roadmap de Estudos React Native:** [https://roadmap.sh/react-native](https://roadmap.sh/react-native)
* **Tutorial de App com Câmera/Galeria (Expo):** [https://docs.expo.dev/tutorial/introduction/](https://docs.expo.dev/tutorial/introduction/)
=======
# 📱 Programação para Dispositivos Móveis (React Native)
Repositório base destinado às aulas teóricas e às atividades práticas da disciplina. Ao longo do semestre, utilizaremos este ambiente para construir, passo a passo, um **Aplicativo de Lista de Tarefas (To-Do List)**.

## 🛠️ Ambiente de Desenvolvimento
Para acompanhar a disciplina, você precisará das seguintes ferramentas:

| Ferramenta | O que é? | Recomendação |
| :--- | :--- | :--- |
| **Editor de código** | Ambiente onde você escreverá seu código (JS, JSX, TSX). | [Visual Studio Code](https://code.visualstudio.com/) | 
| **Ambiente de Execução** | Necessário para rodar o Metro Bundler e gerenciar pacotes. | [Node.js (versão LTS)](https://nodejs.org/pt-br/) |
| **Versionador** | Controla e registra o histórico de alterações do código. | [Git](https://git-scm.com/) |
| **Testes Físicos** | App para espelhar o código do seu computador direto no celular. | [Expo Go (Android/iOS)](https://expo.dev/go) |

## 📂 Estrutura de Pastas
Este repositório está organizado da seguinte forma:
- **`aulas/`**: Contém os resumos teóricos e conceitos abordados em cada encontro.
- **`praticas/`**: Contém o código das atividades práticas desenvolvidas (nosso App de Tarefas).

## 🚀 Fluxo de Trabalho Acadêmico
As atividades seguem um fluxo de trabalho profissional baseado no modelo [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

### 1. Configuração Inicial (Realizar apenas uma vez)
1. **Criar Repositório**: Clique no botão verde `Use this template`, no topo desta página, e escolha `Create a new repository` para criar a sua cópia.
2. **Clonar Repositório**: Faça o clone do *seu* repositório para a sua máquina:
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git)
```

### 2.Configurar Git: Certifique-se de que seu nome e e-mail estão corretos:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

## Ciclo de Cada Prática (Repetir a cada aula)
Para cada nova funcionalidade do nosso App, siga este fluxo:
1. **Crie a Issue:** Acesse a aba Issues no seu GitHub, clique em New issue e use o template da prática do dia.
2. **Crie a Branch:** A partir da branch main (ou develop), crie uma nova branch para a funcionalidade:
```bash
git checkout -b feature/praticaXX
```
3. Rode o Projeto: Acesse a pasta correspondente, instale as dependências e inicie o Expo:
```bash
npm install
npx expo start
```
4. Desenvolva e Teste: Escreva o código solicitado na prática e teste no seu celular usando o Expo Go.
5. Salve e Envie (Commit & Push):
```bash
git add .
git commit -m "Feat: Finaliza a implementação da Prática XX"
git push origin feature/praticaXX
```
6. Solicite a Revisão (Pull Request): No GitHub, abra um Pull Request da sua branch feature/praticaXX para a branch principal.

- ⚠️ Atenção!
- Se o check ✅ não aparecer no `Pull Request`, há erros que precisam ser corrigidos antes da avaliação.

## Feedback e Avaliação
Envie o link do seu Pull Request pela plataforma de ensino. A avaliação usará o sistema de **Code Review:**
- **Approve (Aprovado):** Código cumpre os requisitos. Faça o merge!
- **Request Changes (Solicitação de Ajustes):** Há bugs ou melhorias necessárias. Corrija localmente, faça um novo commit e push na mesma branch, e avise no PR para nova revisão.


>>>>>>> 24bb6bdf9385db428546de4ad07d06aa0b0f2cba
