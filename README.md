### Aula 20 - SSR (starter code)

Devcontainer (Node + TypeScript) com recursos iniciais para a aula de laboratório.

* Modelo que utiliza templates (HTML + CODIGO) para gerar a pagina no server e mandar para o browser
* Foi substituido pois nao tem muita responsividade, tendo que ser re-renderizado o tempo todo
* Grande vantagem do ssr -> melhor para search engines
* express tem tecnologias de template:
    * EJS: mais antigo
    * Pug: 
    * Handlebars: utilizado na disciplina (é baseado em linguagem template mustache) minimalista
* Parece com a template string, mas a sintaxe é com duas chaves {{variavel}}
* só aceita valores, com comandos feitos de elementos funcionais tipo:
    * {{#if valor}} {{else}} {{/if}}
    * {{#each items}} {{/each}}
    * {{formatDate createdAt}} -> criado um helper separado e referenciado aqui

* Handlebars: registrar, dizer que e padrao e dizer onde a pasta views esta
    * app.engine('handlebars', engine());
    * app.set('view engine', 'handlebars');
    * app.set('views', path.resolve(__dirname, '..', 'views') );
   
* mapear pasta statica do css
    * app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));

* iniciando server : nodemon src/server.ts


* {{{body}}} nao da o escape do html. renderizando o html na pagina
* todos os templates injetados no body