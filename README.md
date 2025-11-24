# Futquiz

Design: https://www.figma.com/design/bf74THL929V4aUCebkVzXZ/App.-Eng-Software?node-id=0-1&t=pr5BtIwzgbrJ7b2X-1

## 🚀 Como rodar o projeto pela primeira vez

1. Certifique-se de ter Docker e Docker Compose instalados

2. Clone o repositório e entre na pasta do projeto

3. Execute o build e inicie os containers:
```bash
make build

make up-logs
```


## 📱 Interagir com o terminal do frontend

Para interagir com o terminal do frontend (por exemplo, para responder prompts do Expo), abra outro terminal na pasta raiz e dê o seguinte comando:

```bash
make attach-frontend
```

**Importante:** Para sair do terminal de interação sem parar o container, pressione `Ctrl+P` seguido de `Ctrl+Q` (não use `Ctrl+C`, pois isso para todos os containers).


