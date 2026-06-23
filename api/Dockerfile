# imagem base
FROM node:lts-alpine3.23

# definição do workdir
WORKDIR /api

# copiando arquivos da API
COPY . .

# instalando bibliotecas e dependências
RUN npm install

# expondo a porta de rede para comunicação
EXPOSE 3000

# iniciando a API
CMD ["npm", "start"]




