
## SSG :static side generation
- Modelo que gera uma pagina statica
  - `revalidate: 60 * 60 * 8, `: opção após esse tempo será gerada uma nova pagina statica

### Esse recurso só funciona em produção
- Geramos uma `build` do projeto
  - yarn build
    - dessa forma serão geradas as paginas staticas

### Após a geração da build
- yarn start
  - utilizar esse formato para simular o projeto em produção.

#### Conclusão
- Todos clientes utilização a mesma pagina statica <br />
e após o tempo do `revalidate` o ultimo cliente a acessar a rota, <br/>
a pagina será gerada novamente com informações atualizadas e statica 

- Isso ajuda e muito na redução de requisições ao servidor, <br />
economia e banda, e agilidade no mecanismo de busca

### EXEMPLO

Magazine e Luiza, alterou todos seu front-end para essa tecnologia NEXT.JS