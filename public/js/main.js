

function abrirCenario (inicial, cenario, icone1, icone2, icone3, botao, credito, p1, p2, passar) {
     inicial.style.display = 'block';
     cenario.style.display = 'none';
     icone1.style.display = 'none';
     icone2.style.display = 'none';
     icone3.style.display = 'none';
     botao.style.display = 'block';
     credito.style.display = 'none';
     p1.style.display = 'none';
     p2.style.display = 'none';
     passar.style.display = 'none';
}

function fecharCenario (inicial, cenario, icone1, icone2, icone3, botao, credito, p1, p2, passar) {
     inicial.style.display = 'none';
     cenario.style.display = 'block';
     icone1.style.display = 'block';
     icone2.style.display = 'block';
     icone3.style.display = 'block';
     botao.style.display = 'none';
     credito.style.display = 'block';
     p1.style.display = 'block';
     p2.style.display = 'block';
     passar.style.display = 'block';
}

$(document).ready(function() {
     $("#texto9").hide();
     $("#texto10").hide();
     $("#texto11").hide();
     $("#texto12").hide();
     $("#texto13").hide();
});

//movimentção de elementos
$(document).ready(function() {
     $(".lixo").draggable({containment: "parent", revert: "invalid"});
 } );

 $(document).ready(function() {
     $(".lixo2").draggable({containment: "parent", revert: "invalid"});
 } );

 $(document).ready(function() {
     $(".lixo3").draggable({containment: "parent", revert: "invalid"});
 } );

 //recolha dos elementos
 $(function() {
     $("#lixeira1").droppable({
         hoverClass: 'active',
         accept: '.lixo',
         drop: function(e, ui) {
             $(".lixo").html(ui.draggable.remove());
             abrirModal();
         }
      });
 } );

 $(function() {
     $("#lixeira2").droppable({
         hoverClass: 'active',
         accept: '.lixo2',
         drop: function(e, ui) {
             $(".lixo2").html(ui.draggable.remove());
             abrirModal2();
         }
      });
 } );

 $(function() {
     $("#lixeira3").droppable({
         hoverClass: 'active',
         accept: '.lixo3',
         drop: function(e, ui) {
             $(".lixo3").html(ui.draggable.remove());
             abrirModal3();
         }
      });
 } );

 //apresentar insígnias 
 var a = 0
 var b = 0
 var c = 0;

 function abrirModal () { 
     a++;
     if (a == 5) {
        $("#modalcidade").modal();
        $("#texto3").hide();
        $("#texto4").hide();
        $("#texto11").show();
     }
 }

 function abrirModal2 () { 
     b++;
     if (b == 5) {
        $("#modalpraia").modal();
        $("#texto5").hide();
        $("#texto6").hide();
        $("#texto12").show();
     }
 }

 function abrirModal3 () { 
     c++;
     if (c == 5) {
        $("#modalmangue").modal();
        $("#texto7").hide();
        $("#texto8").hide();
        $("#texto13").show();
     }
 }

 //Passagem dos textos
 $(function() {
     $("#passar").click(function () {
         $("#texto1").text(inicial[i])
         $("#texto2").text(inicial[i+1])
         i+=2;
      });
 });

 $(function() {
     $("#passar2").click(function () {
         $("#texto3").text(cidade[j])
         $("#texto4").text(cidade[j+1])
         j+=2;
      });
 });

 $(function() {
     $("#passar3").click(function () {
         $("#texto5").text(cidade[j])
         $("#texto6").text(cidade[j+1])
         j+=2;
      });
 });

 $(function() {
     $("#passar4").click(function () {
         $("#texto7").text(cidade[m])
         $("#texto8").text(cidade[m+1])
         m+=2;
      });
 });

 //Texto
 var inicial = ['Para se tornar um Guardião e fazer parte da nossa liga pela preservação do meio-ambiente',
                 'é preciso muita dedicação. Vamos nessa?',
                 'Mas antes, precisamos conversar sobre algo muito importante.',
                 'Nossos rios, mangues e mares estão sujos e poluídos.  Isso é triste!',
                 'Precisamos mudar essa realidade antes que seja tarde demais!',
                 'Você está disposto a me ajudar? ',
                 'Está na hora de colocar as mãos no lixo… Ops! na massa.',
                 'Vamos lá, clique em um ícone e comece a sua jornada…',
                 ] 
                 i = 0;

   var cidade = ['Bom, você sabia que grande parte do lixo produzido pelos humanos',
                 'na cidade vai parar no mar? Não?!',
                 'As pessoas precisam ter mais cuidado com o que jogam fora.',
                 'Fique atento! Nunca jogue lixo no “mato” ou nos mares.',
                 'Agora eu te pergunto: você tem ideia da quantidade de lixo',
                 'que os humanos produzem na cidade?',
                 'Cada pessoa produz mais de 1kg de lixo todos os dias.',
                 'Hm… agora multiplique isso pelo número de dias no ano…',
                 'Tem mais lixo do que pessoas na cidade!',
                 'Quanto maior é a cidade, maior é a quantidade de lixo...',
                 'O problema é que as pessoas levam esse lixo para natureza, poluindo o habitat de vários',
                 'animais, principalmente meus amigos que vivem nos mangues e no fundo do mar.',
                 'É o dever de cada cidadão não deixar que ele seja jogado em qualquer lugar. Vamos praticar?',
                 ' ',
   ]         
   j = 0;     

   var praia = ['Como eu posso aproveitar a praia com tanto lixo assim?!',
                 'Você sabia que esse lixo todo vem da cidade? As pessoas tomam banho de mar',
                 'e deixam o lixo delas na areia.',
                 'Você sabia que o plástico vive mais tempo que as tartarugas? ',
                 'Ele dura para sempre!',
                 'Além das tartarugas, meus amigos caranguejos, peixes e aves também sofrem',
                 'com o plástico na natureza. Precisamos resolver esse problema, né?',
                 'Os humanos precisam parar de fazer coisas de plástico.',
                 'Hm… que tal usar coisas que são feitas da natureza?',
                 'Por isso é muito importante reciclar, você não acha? ',
                 'Acho que é hora do pequeno aventureiro entrar em ação! Vamos limpar tudo!',
   ]         
   k = 0;     

   var mangue = ['Alguns bichos como o jacaré, a cobra, a tartaruga, a gaivota e o peixe-boi vivem em rios e manguezais.',
                 'Por isso precisamos preservar este ecossistema, pois mais uma vez as pessoas estão poluindo este lugar.',
                 'A grande poluição vem dos esgotos das cidades! ',
                 'Essa esgoto acaba chegando até a correnteza de rios, prejudicando a qualidade da água e a vida de animais. ',
                 'Você sabe como proteger os rios e manguezais? Eu te ajudo!',
                 'Precisamos conscientizar as pessoas !',
                 '1. Não despejar o esgoto em rios !',
                 'A poluição tira o oxigênio da água e matandndo alguns animais, como os peixes.',
                 '2. Não usar agrotóxicos!.',
                 'Essa substância acaba entrando nas correntes de água no solo e matando a vegetação, envenenado plantas e animais.',
                 'O mais importante: não desmatar! ',
                 'O crescimento das cidades acaba destruindo a natureza que está ao redor. ',
                 'Por isso, manter o verde a limpeza dos mares e rios é essencial.',
                 ' Você poderia me ajudar com isso?',
   ]         
   m = 0;    
