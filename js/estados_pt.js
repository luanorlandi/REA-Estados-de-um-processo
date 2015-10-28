
   var estado = 0;
   var MAXESTADO = 19;
   var QTDCOLUNAS = 4;
   var buttonFade = 0.3;

   var pessoa1 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var pessoa2 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var pessoa3 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var pessoa4 = new Array(MAXESTADO);	<!-- 4Estados	-->

   var lanche1 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var lanche2 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var lanche3 = new Array(MAXESTADO);	<!-- 4Estados	-->
   var lanche4 = new Array(MAXESTADO);	<!-- 4Estados	-->

   var balao1 = new Array(MAXESTADO);
   var balaoTexto =
   [
     "<p><b>Analogia:</b> Uma pessoa chega faminta com seu lanche, e ela precisa utilizar a mesa. Ela ficará na fila até que a mesa esteja disponível.</p><p><b>SO:</b> O processo aguarda na fila de pronto enquanto a CPU não está disponível, para que então, na sua vez, possa executar.</p>",
     "<p><b>Analogia:</b> Várias pessoas podem chegar, cada uma com seu lanche, aumentando a fila.</p><p><b>SO:</b> A fila de pronto é composta por diversos processos, que vão chegando e sendo armazenados na memória, estando todos apto para executar. Evento chamado de <i>multiprogramação</i>, o qual aumenta a taxa de utilização da CPU.</p>",
     "<p><b>Analogia:</b> Uma pessoa é selecionada (escolhida pelo <i>escalonador de processos</i>) para usar a mesa e comer.</p><p><b>SO:</b> A mesa com cadeira representa a CPU, em que somente um processo pode estar usando num dado instante.</p>",
     "<p><b>Analogia:</b> A pessoa come seu lanche, porém somente uma parte dele. Outros também querem comer e precisam usar a mesa.</p><p><b>SO:</b> Isso representa o <i>time-sharing</i>, isto é, o processo ocupa a CPU por uma quantidade limitada de tempo (quantum), mesmo que ele ainda não tenha finalizado, compartilhando-a com outros processos. </p>",
     "<p><b>Analogia:</b> Após comer parte do seu lanche, a pessoa deixa a mesa e volta para o final da fila.</p><p><b>SO:</b> Ocorre uma <i>preempção</i>, isto é, o processo para de executar antes de ser completamente finalizado.</p>",
     "<p><b>Analogia:</b> A mesa será concedida para outra pessoa.</p><p><b>SO:</b> Ocorre uma <i>troca de contexto</i>, isto é, a CPU troca o processo em execução por outro, o SO então salva o estado do processo anterior e carrega o estado (guardado) do próximo processo.</p> ",
     "<p><b>Analogia:</b> Esta pessoa quer adicionar ingredientes ao lanche, então ela precisará deixar a mesa com a cadeira e ir até a mesa dos ingredientes, permitindo outra pessoa comer na mesa.</p><p><b>SO:</b> Essa operação é chamada de E/S, sendo esses ingredientes seus dispositivos. Como esse é um evento lento, o processo precisa parar de executar na CPU, ocorrendo uma troca do estado de <i>Executando</i> para <i>Bloqueado</i>.</p>",
     "<p><b>Analogia:</b> Esta outra também quer adicionar ingredientes ao lanche, então ela precisa parar de comer e ir até a mesa dos ingredientes, permitindo outra pessoa comer na mesa.</p><p><b>SO:</b> Vários processos podem estar no estado de <i>Bloqueado</i> ao mesmo tempo.</p>",
     "<p><b>Analogia:</b> A pessoa terminou de adicionar seus ingredientes e voltará para o final da fila, estando pronta para comer o lanche novamente.</p><p><b>SO:</b> O processo termina sua E/S e volta ao estado de <i>Pronto</i>, podendo ser escalonado novamente para ocupar a CPU.</p>",
     "<p><b>Analogia:</b> A mesa será concedida para outra pessoa.</p><p><b>SO:</b> Ocorre uma <i>troca de contexto</i>, isto é, a CPU troca o processo em execução por outro, o SO então salva o estado do processo anterior e carrega o estado (guardado) do próximo processo.</p> ",
     "<p><b>Analogia:</b> A pessoa terminou de adicionar seus ingredientes e voltará para o final da fila, estando pronta para comer o lanche novamente.</p><p><b>SO:</b> O processo termina sua E/S e volta ao estado de <i>Pronto</i>, podendo ser escalonado novamente para ocupar a CPU.</p>",
     "<p><b>Analogia:</b> A pessoa quer adicionar ingredientes ao lanche, então ela precisará deixar a mesa com a cadeira e ir até a mesa dos ingredientes, permitindo outra pessoa comer na mesa.</p><p><b>SO:</b> Essa operação é chamada de E/S, sendo esses ingredientes seus dispositivos. Como esse é um evento lento, o processo precisa parar de executar na CPU, ocorrendo uma troca do estado de <i>Executando</i> para <i>Bloqueado</i>.</p>",
     "<p><b>Analogia:</b> A pessoa terminou de comer o lanche todo, indo embora satisfeita e sem fome.Outra pessoa poderá comer</p><p><b>SO:</b> O processo terminou e agora é finalizado, não voltando para a fila. Outro processo irá ocupar a CPU</p>",
     "<p><b>Analogia:</b> A pessoa terminou de adicionar seus ingredientes e voltará para o final da fila, estando pronta para comer o lanche novamente.</p><p><b>SO:</b> O processo termina sua E/S e volta ao estado de <i>Pronto</i>, podendo ser escalonado novamente para ocupar a CPU.</p>",
     "<p><b>Analogia:</b> A pessoa terminou de comer o lanche todo, indo embora satisfeita e sem fome.Outra pessoa poderá comer</p><p><b>SO:</b> O processo terminou e agora é finalizado, não voltando para a fila. Outro processo irá ocupar a CPU</p>",
     "<p><b>Analogia:</b> A mesa será concedida para outra pessoa.</p><p><b>SO:</b> Ocorre uma <i>troca de contexto</i>, isto é, a CPU troca o processo em execução por outro, o SO então salva o estado do processo anterior e carrega o estado (guardado) do próximo processo.</p> ",
     "<p><b>Analogia:</b> A pessoa terminou de comer o lanche todo, indo embora satisfeita e sem fome. Outra pessoa poderá comer</p><p><b>SO:</b> O processo terminou e agora é finalizado, não voltando para a fila. Outro processo irá ocupar a CPU</p>",
     "<p><b>Analogia:</b> A pessoa terminou de comer o lanche todo, indo embora satisfeita e sem fome. Outra pessoa poderá comer</p><p><b>SO:</b> O processo terminou e agora é finalizado, não voltando para a fila. Outro processo irá ocupar a CPU</p>"
   ];

   for (var n = 0; n < MAXESTADO; n++ ) {
     pessoa1[n] = new Array(QTDCOLUNAS);
     pessoa2[n] = new Array(QTDCOLUNAS);
     pessoa3[n] = new Array(QTDCOLUNAS);
     pessoa4[n] = new Array(QTDCOLUNAS);

     lanche1[n] = new Array(QTDCOLUNAS);
     lanche2[n] = new Array(QTDCOLUNAS);
     lanche3[n] = new Array(QTDCOLUNAS);
     lanche4[n] = new Array(QTDCOLUNAS);


     balao1[n] = new Array(QTDCOLUNAS);

   }

   <!-- __________________________________PESSOAS____________________________________ -->
   <!-- _TOP = [estado][0] _RIGHT = [estado][1]    _BOTTOM = [estado][2]     _LEFT = [estado][3]    -->
   pessoa1[0][0] = 100; pessoa1[0][3] = '25%'; // estado0 MORENO --fila com 1 pessoa
   pessoa1[1][0] = 100; pessoa1[1][3] = '25%'; // estado1 MORENO --fila com 4 pessoas
   pessoa1[2][0] = 100; pessoa1[2][3] = '88%'; // estado2 MORENO --vai para mesa comer
   pessoa1[3][0] = 100; pessoa1[3][3] = '88%'; // estado3 MORENO --come por um quantum
   pessoa1[4][0] = 100; pessoa1[4][3] = '10%'; // estado4 MORENO --volta final da fila
   pessoa1[5][0] = 100; pessoa1[5][3] = '15%'; // estado5 MORENO --ruiva sai afila de pronto
   pessoa1[6][0] = 100; pessoa1[6][3] = '15%'; // estado6 MORENO --ruiva come por um quantum
   pessoa1[7][0] = 100; pessoa1[7][3] = '20%'; // estado7 MORENO --ruiva vai bloqueado e topete vai mesa
   pessoa1[8][0] = 100; pessoa1[8][3] = '25%'; // estado8 MORENO --topete vai bloqueado e loira vai comer
   pessoa1[9][0] = 100; pessoa1[9][3] = '25%'; // estado9 MORENO --topete volta fila de pronto e pessoa loira continua comendo
   pessoa1[10][0] = 100; pessoa1[10][3] = '88%'; // estado10 MORENO --loira volta fim da fila e moreno volta mesa comer
   pessoa1[11][0] = 100; pessoa1[11][3] = '88%'; // estado11 MORENO --ruiva volta fila
   pessoa1[12][0] = 350; pessoa1[12][3] = '47%'; // estado12 MORENO --moreno vai estado bloqueado e topete vai para mesa comer
   pessoa1[13][0] = 350; pessoa1[13][3] = '47%'; // estado13 MORENO --topete termina de comer e vai embora e loira vai para mesa
   pessoa1[14][0] = 100; pessoa1[14][3] = '20%'; // estado14 MORENO --loira continua comendo, moreno volta final da fila
   pessoa1[15][0] = 100; pessoa1[15][3] = '20%'; // estado15 MORENO --loira termina de comer e vai embora, ruiva volta para comer
   pessoa1[16][0] = 100; pessoa1[16][3] = '88%'; // estado16 MORENO --ruiva volta fila de pronto, moreno volta para mesa
   pessoa1[17][0] = 100; pessoa1[17][3] = '100%';// estado17 MORENO --moreno termina de comer e vai embora, ruiva volta para mesa
   // Fim evento da pessoa2                      // estado18 MORENO --ruiva terminar de comer e vai embora


   pessoa2[0][0] = 100; pessoa2[0][3] = -200; // estado0 RUIVA
   pessoa2[1][0] = 100; pessoa2[1][3] = '20%'; // estado1 RUIVA
   pessoa2[2][0] = 100; pessoa2[2][3] = '25%'; // estado2 RUIVA
   pessoa2[3][0] = 100; pessoa2[3][3] = '25%'; // estado3 RUIVA
   pessoa2[4][0] = 100; pessoa2[4][3] = '25%'; // estado4 RUIVA
   pessoa2[5][0] = 100; pessoa2[5][3] = '88%'; // estado5 RUIVA
   pessoa2[6][0] = 100; pessoa2[6][3] = '88%'; // estado6 RUIVA
   pessoa2[7][0] = 350; pessoa2[7][3] = '47%'; // estado7 RUIVA
   pessoa2[8][0] = 350; pessoa2[8][3] = '47%'; // estado8 RUIVA
   pessoa2[9][0] = 350; pessoa2[9][3] = '47%'; // estado9 RUIVA
   pessoa2[10][0] = 350; pessoa2[10][3] = '47%'; // estado10 RUIVA
   pessoa2[11][0] = 100; pessoa2[11][3] = '15%'; // estado11 RUIVA
   pessoa2[12][0] = 100; pessoa2[12][3] = '20%'; // estado12 RUIVA
   pessoa2[13][0] = 100; pessoa2[13][3] = '25%'; // estado13 RUIVA
   pessoa2[14][0] = 100; pessoa2[14][3] = '25%'; // estado14 RUIVA
   pessoa2[15][0] = 100; pessoa2[15][3] = '88%'; // estado15 RUIVA
   pessoa2[16][0] = 100; pessoa2[16][3] = '25%'; // estado16 RUIVA
   pessoa2[17][0] = 100; pessoa2[17][3] = '88%'; // estado17 RUIVA
   pessoa2[18][0] = 100; pessoa2[18][3] = '100%'; // estado18 RUIVA

   pessoa3[0][0] = 100; pessoa3[0][3] = -200; // estado0 TOPETE
   pessoa3[1][0] = 100; pessoa3[1][3] = '15%'; // estado1 TOPETE
   pessoa3[2][0] = 100; pessoa3[2][3] = '20%'; // estado2 TOPETE
   pessoa3[3][0] = 100; pessoa3[3][3] = '20%'; // estado3 TOPETE
   pessoa3[4][0] = 100; pessoa3[4][3] = '20%'; // estado4 TOPETE
   pessoa3[5][0] = 100; pessoa3[5][3] = '25%'; // estado5 TOPETE
   pessoa3[6][0] = 100; pessoa3[6][3] = '25%'; // estado6 TOPETE
   pessoa3[7][0] = 100; pessoa3[7][3] = '88%'; // estado7 TOPETE
   pessoa3[8][0] = 350; pessoa3[8][3] = '51%'; // estado8 TOPETE
   pessoa3[9][0] = 100; pessoa3[9][3] = '20%'; // estado9 TOPETE
   pessoa3[10][0] = 100; pessoa3[10][3] = '25%'; // estado10 TOPETE
   pessoa3[11][0] = 100; pessoa3[11][3] = '25%'; // estado11 TOPETE
   pessoa3[12][0] = 100; pessoa3[12][3] = '88%'; // estado12 TOPETE
   pessoa3[13][0] = 100 ; pessoa3[13][3] ='100%';// estado13 TOPETE
   // FIM eventos da pessoa 3

   pessoa4[0][0] = 100; pessoa4[0][3] = -200; // estado0 LOIRA
   pessoa4[1][0] = 100; pessoa4[1][3] = '10%'; // estado1 LOIRA
   pessoa4[2][0] = 100; pessoa4[2][3] = '15%'; // estado2 LOIRA
   pessoa4[3][0] = 100; pessoa4[3][3] = '15%'; // estado3 LOIRA
   pessoa4[4][0] = 100; pessoa4[4][3] = '15%'; // estado4 LOIRA
   pessoa4[5][0] = 100; pessoa4[5][3] = '20%'; // estado5 LOIRA
   pessoa4[6][0] = 100; pessoa4[6][3] = '20%'; // estado6 LOIRA
   pessoa4[7][0] = 100; pessoa4[7][3] = '25%'; // estado7 LOIRA
   pessoa4[8][0] = 100; pessoa4[8][3] = '88%'; // estado8 LOIRA
   pessoa4[9][0] = 100; pessoa4[9][3] = '88%'; // estado9 LOIRA
   pessoa4[10][0] = 100; pessoa4[10][3] = '20%'; // estado10 LOIRA
   pessoa4[11][0] = 100; pessoa4[11][3] = '20%'; // estado11 LOIRA
   pessoa4[12][0] = 100; pessoa4[12][3] = '25%'; // estado12 LOIRA
   pessoa4[13][0] = 100; pessoa4[13][3] = '88%'; // estado13 LOIRA
   pessoa4[14][0] = 100; pessoa4[14][3] = '88%'; // estado14 LOIRA
   pessoa4[15][0] = 100; pessoa4[15][3] = '100%'; // estado15 LOIRA
   // FIM eventos da pessoa 4

     function copiaEstadoPessoaParaLancheTempo(){

       for(var e=0; e< MAXESTADO; e++){
         //LEFT Coordenadas
         lanche1[e][3] = pessoa1[e][3];
         lanche2[e][3] = pessoa2[e][3];
         lanche3[e][3] = pessoa3[e][3];
         lanche4[e][3] = pessoa4[e][3];

         //TOP Coordenadas
         lanche1[e][0] = pessoa1[e][0] - 35;
         lanche2[e][0] = pessoa2[e][0] - 35;
         lanche3[e][0] = pessoa3[e][0] - 35;
         lanche4[e][0] = pessoa4[e][0] - 35;


       }
     }

     function alteraEstadoPessoa(){
       $('img#pessoa1').animate({ left: pessoa1[estado][3], top: pessoa1[estado][0]},700);
       $('img#pessoa2').animate({ left: pessoa2[estado][3], top: pessoa2[estado][0]},700);
       $('img#pessoa3').animate({ left: pessoa3[estado][3], top: pessoa3[estado][0]},700);
       $('img#pessoa4').animate({ left: pessoa4[estado][3], top: pessoa4[estado][0]},700);
     }

     function alteraEstadoLanche(){
       $('img#lanche1').animate({ left: lanche1[estado][3], top: lanche1[estado][0]},700);
       $('img#lanche2').animate({ left: lanche2[estado][3], top: lanche2[estado][0]},700);
       $('img#lanche3').animate({ left: lanche3[estado][3], top: lanche3[estado][0]},700);
       $('img#lanche4').animate({ left: lanche4[estado][3], top: lanche4[estado][0]},700);
     }

     function alteraEstadoBalao() {
       $('#balao1').fadeTo("slow", 0.5);
       $("#balao1").css("left", balao1[estado][3]);
     }

     function alteraEstadoBalaoTexto() {
       $("#balao1").html(balaoTexto[estado]);
     }

     function inicializarVariaveis(){
       estado = 0;
       buttonFade = 0.3;

       copiaEstadoPessoaParaLancheTempo();
       alteraEstadoPessoa();
       alteraEstadoLanche();
       alteraEstadoBalaoTexto();
       alteraEstadoBalao();


       $('#pessoa1').fadeTo('fast', 1.0);
       $('#lanche1').fadeTo('fast', 1.0);

       $('#pessoa2').fadeTo('fast', 1.0);
       $('#lanche2').fadeTo('fast', 1.0);

       $('#pessoa3').fadeTo('fast', 1.0);
       $('#lanche3').fadeTo('fast', 1.0);

       $('#pessoa4').fadeTo('fast', 1.0);
       $('#lanche4').fadeTo('fast', 1.0);

       $('#btn-voltar').fadeTo('fast', buttonFade);
       $('#btn-avancar').fadeTo('fast', 1.0);
       $('#balao1').fadeTo('fast', 1.0);
     }




$(document).ready(function(){
<!-- ___________________________INICIALIZAR_ESTADOS______________________________ -->

   inicializarVariaveis();



   $('#btn-reiniciar').click(function(){
     inicializarVariaveis();
   });


   $(':button#btn-avancar').click(function(){
     if(estado <= MAXESTADO && estado < MAXESTADO-1){
       estado = estado + 1;
       copiaEstadoPessoaParaLancheTempo();
       alteraEstadoPessoa();
       alteraEstadoLanche();
       alteraEstadoBalaoTexto();
       alteraEstadoBalao();

       if(estado === 13){
         $('#pessoa3').fadeTo('fast', 0.0);
         $('#lanche3').fadeTo('fast', 0.0);
       }

       if(estado === 15){
         $('#pessoa4').fadeTo('fast', 0.0);
         $('#lanche4').fadeTo('fast', 0.0);
       }

       if(estado === 17){
         $('#pessoa1').fadeTo('fast', 0.0);
         $('#lanche1').fadeTo('fast', 0.0);
       }

       if(estado === 18){
         $('#pessoa2').fadeTo('fast', 0.0);
         $('#lanche2').fadeTo('fast', 0.0);
       }

       // reduzir visibilidade do balao
       if(estado >= 9 && estado != 12){
         $('#balao1').fadeTo('fast', 0.7);
       }
       else{
         $('#balao1').fadeTo('fast', 1.0);
       }

    }

     $('#btn-voltar').fadeTo('fast', 1.0);

         if(estado === MAXESTADO-1) {
           $('#btn-avancar').fadeTo('fast', buttonFade);
         }
      });






   $(':button#btn-voltar').click(function(){
     if(estado > 0){
       estado = estado - 1;
       copiaEstadoPessoaParaLancheTempo();
       alteraEstadoPessoa();
       alteraEstadoLanche();
       alteraEstadoBalaoTexto();
       alteraEstadoBalao();

       // Voltar visibilidade
       if(estado < 13){
         $('#pessoa3').fadeTo('fast', 1.0);
         $('#lanche3').fadeTo('fast', 1.0);
       }

       if(estado < 15){
         $('#pessoa4').fadeTo('fast', 1.0);
         $('#lanche4').fadeTo('fast', 1.0);
       }

       if(estado < 17){
         $('#pessoa1').fadeTo('fast', 1.0);
         $('#lanche1').fadeTo('fast', 1.0);
       }

       if(estado < 18){
         $('#pessoa2').fadeTo('fast', 1.0);
         $('#lanche2').fadeTo('fast', 1.0);
          $('#fim').css("visibility", "hidden");
       }

       // voltar visibilidade do balão
       if(estado < 9 || estado === 12){
         $('#balao1').fadeTo('fast', 1.0);
       }
       else{
         $('#balao1').fadeTo('fast', 0.7);
       }

     }

     $('#btn-avancar').fadeTo('fast', 1.0);

     if(estado === 0) {
       $('#btn-voltar').fadeTo('fast', buttonFade);
     }
    });


});
