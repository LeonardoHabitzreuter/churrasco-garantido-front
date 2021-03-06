# churrasco-garantido-front

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![Build Status](https://travis-ci.org/LeonardoHabitzreuter/churrasco-garantido-front.svg?branch=master)](https://travis-ci.org/LeonardoHabitzreuter/churrasco-garantido-front)
[![Coverage Status](https://coveralls.io/repos/github/LeonardoHabitzreuter/churrasco-garantido-front/badge.svg)](https://coveralls.io/github/LeonardoHabitzreuter/churrasco-garantido-front)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

# Variáveis de ambiente
 - API_URL: url de conexão para a app backend

# Rodando a app em ambiente de desenvolvimento

**Usando docker:**
 - ***docker image build -t churrasco-garantido-front -f Dockerfile-dev .***
 - ***docker container run -dp 3000:3000 --name frontend churrasco-garantido-front***
 - A aplicação se comunicará com o backend no seguinte endereço **http://localhost:3001**.
 - Caso a API backend esteja disponível em outro endereço basta que seja informada a variável de ambiente API_URL da seguinte maneira:
 - ***docker container run -dp 3000:3000 -e API_URL=http://localhost:8080 --name frontend churrasco-garantido-front***
 - A aplicação estará disponível no endereço **http://localhost:3000**
 
 **Usando docker compose:**
 - Também é necessário que você tenha o [repositório](github.com/LeonardoHabitzreuter/churrasco-garantido-node) da aplicação backend na sua máquina local
 - ***docker-compose up -d***
 - O arquivo compose lê os arquivos "Dockerfile-dev", então não é necessária alguma configuração adicional.

 **Sem usar docker:**
 - ***npm install***
 - ***npm start***
 - A aplicação se comunicará com o backend no seguinte endereço **http://localhost:3001**
 - A aplicação estará disponível no endereço **http://localhost:3000**
 - Para mudar a porta de acesso da app ou o endereço de comunicação com a API backend basta informar as variáveis da seguinte maneira:
 - ***API_URL=http://localhost:3002 PORT=3005 npm start***

 # Tecnologias e Pacotes Usados
 - React
 - Webpack e Webpack devServer
 - AntD e React bootstrap para os componentes
 - React router para fazer o roteamento das páginas
 - Axios para as requisições Rest
 - Babel para transpilar o código para ES5
 - Jest e enzyme para os testes automatizados

# Criando uma nova versão da aplicação
 - Execute o arquivo "release" passando como argumento a versao da aplicação:
 - ***sudo bash release.sh 1.0.0***
 - Este arquivo shell irá:
 * Versionar o projeto
 * Criar a imagem Docker da app para rodar em ambiente de produção
 * Fazer push da imagem para o [Docker Hub](https://hub.docker.com/r/leonardohabitzreuter/churrasco-garantido-frontend/)
 - Após isso adicione as release notes da nova versão [aqui](https://github.com/LeonardoHabitzreuter/churrasco-garantido-front/tags) e atualize o ambiente de produção para usar a nova versão da aplicação
