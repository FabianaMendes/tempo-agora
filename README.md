<h1 align="center">Tempo Agora App</h1>

<img align="center" alt="./src/assets/TempoAgora.gif" src="./src/assets/TempoAgora.gif">

<p align="center">  
    <a href="#descrição">Descrição</a> • 
    <a href="#status">Status</a> • 
    <a href="#como_rodar_o_app_localmente">Como rodar o App localmente</a> • 
    <a href="#tecnologias">Tecnologias</a> • 
    <a href="#versão">Versão</a>
</p>


## Descrição
- Aplicação construída em **React Native + Typescript** para consulta de temperaturas das cidades salvas
- Exemplo de uso:
    1. Usuário abre a aplicação
    2. Clica em adicionar cidade
    3. Digita o CEP
    4. Clica no botão salvar
    5. Retorna para tela inicial, a cidade estará listada com as informações de temperatura sendo exibidas (Temperatura, data última atualização)
    6. Usuário fecha completamente a aplicação
    7. Usuário abre a aplicação novamente
    8. As cidades são listadas com suas informações atualizadas (Temperatura, data última atualização)
- Requisitos:
    1. Permitir cadastrar vários endereços/cidades através do CEP
    2. Permitir excluir cidades cadastradas
    3. Mostrar horário da última consulta das informações
    4. Salvar as cidades cadastradas em um storage local ou cache, permitindo fechar e reabrir a aplicação e manter as cidades cadastradas
    5. Ao entrar na aplicação, atualizar todas as cidades e horário da última consulta
    6. Criar evento de Pulldown (Puxar a tela para baixo com o dedo) na tela inicial das cidades, para atualizar as informações de temperatura de todas as cidades e horário de última consulta
    7. Tratar erros de atualização, cadastro, exclusão, cep inexistente
- API's utilizadas:
    [][https://viacep.com.br/](https://viacep.com.br/)
    [][https://console.hgbrasil.com/documentation/weather](https://console.hgbrasil.com/documentation/weather)
- [Clique aqui](https://www.figma.com/file/7D99mWn1065XzOiLIBA4wS/Telas-Testes?node-id=310%3A28) para ver o layout de referência utilizado para a construção da interface de usuário



## Status

⚡✅  Finalizado - Concluído  ✅⚡



## Como rodar o App localmente

- Instale o aplicativo do expo em seu smartphone.
- Abra o terminal de comando e instale o Expo CLI em sua máquina:
`` $ npm install --global expo-cli``
- Clone o repositório:
``` $ git clone https://github.com/FabianaMendes/tempo-agora ```
- Acesse a pasta do projeto pelo terminal: 
``` $ cd tempo-agora ```
- Instale as dependências:
``` $ expo install ```
- Para abrir o projeto no seu editor de código: 
``` $ code . ``` 
- Para rodar a aplicação localmente:
``` $ npm start ```
- O servidor irá iniciar automaticamente na porta:19002 - acesse [http://localhost:19002](http://localhost:19002)
- Abra a câmera do seu celular e aponte para o QRcode gerado na tela, clique na mensagem que irá aparecer para abrir o aplicativo pelo expo.
- Para parar a aplicação pressione Ctrl + c no terminal
- Se a chave de consulta de temperatura expirar você pode gerar uma nova no site da [HG Brasil](https://console.hgbrasil.com/documentation/weather).Abra o arquivo api.ts e substitua o valor de 'const HG_KEY = "" ' pela nova chave gerada.



## Tecnologias

O que foi utilizado na construção desse projeto?

**[React Native](https://reactnative.dev/) + [Typescript]()**
- [React Navigation](https://reactnavigation.org/)
- [Expo Google Fonts](https://docs.expo.io/guides/using-custom-fonts/)
- [Styled Components](https://styled-components.com/)
- [React Native Async Storage](https://github.com/react-native-async-storage/async-storage)
- [Axios](https://www.npmjs.com/package/react-native-axios)
- [React Native svg Transformer](https://github.com/kristerkari/react-native-svg-transformer)

**Utilitários**
- [Visual Studio Code](https://code.visualstudio.com/)
- [Npm](https://www.npmjs.com/)
- [Figma](https://www.figma.com/)



## Versão 
<p>Versão 1.0</p>