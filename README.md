Projeto criado utilizando NodeJS e PostgreSQL. Futuramente pretendo criar um frontend usando ReactJS.

## Como rodar o projeto?

### Docker

O banco de dados roda através de um container no Docker. Se você não o tem instalado, confira a documentação do projeto [clicando aqui](https://docs.docker.com/engine/install/ubuntu/) (recomendável sistema UNIX).

Para subir o container, você vai precisar da imagem do postgres instalada:

```docker
docker pull postgres
```

Criei uma pasta chamada "database" pra armazenar meus dados (é chamado de volume, no contexto do Docker).

```linux
mkdir /tmp/database
```

Após isso, já podemos criar o container:

```
docker run -p 5432:5432 -v /tmp/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=suasenha --name auth-and-accesscontrol -d postgres
```

O usuário padrão é "postgres", a senha é definida por você (no meu caso, utilizei a senha "docker", aconselho que faça o mesmo se quiser rodar o projeto sem dores de cabeça).

Caso algo dê errado, você pode recomeçar o procedimento dando o seguinte comando:

```
docker rm auth-and-accesscontrol
```

## Instalando dependências

Feito isso, o projeto já pode ser executado normalmente, bastando instalar as dependências do projeto:

```
yarn install
```

ou

```
npm install
```

a depender do seu gerenciador de pacotes.

Feito isso, inicie o servidor utilizando:

```
yarn dev
```

ou

```
npm run dev
```

_Done!_ O projeto está devidamente configurado e rodando localmente. Aproveite!