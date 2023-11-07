function abrirCenario (inicial, cenario, chat, chatog, icone1, icone2, icone3, botao, p1, p2, insignias) {
     inicial.style.display = 'block';
     cenario.style.display = 'none';
     chat.style.display = 'block';
     chatog.style.display = 'none';
     icone1.style.display = 'none';
     icone2.style.display = 'none';
     icone3.style.display = 'none';
     botao.style.display = 'block';
     p1.style.display = 'none';
     p2.style.display = 'none';
     insignias.style.display = 'none';
}

function fecharCenario (inicial, cenario, chat, chatog, icone1, icone2, icone3, botao, p1, insignias) {
     inicial.style.display = 'none';
     cenario.style.display = 'block';
     chat.style.display = 'none';
     chatog.style.display = 'block';
     icone1.style.display = 'block';
     icone2.style.display = 'block';
     icone3.style.display = 'block';
     botao.style.display = 'none';
     p1.style.display = 'block';
     insignias.style.display = 'block';
}

$(document).ready(function() {
     $("#texto9").hide();
     $("#texto10").hide();
     $("#texto11").hide();
     $("#texto12").hide();
     $("#texto13").hide();
});


   
// Jogo da Memória
document.addEventListener("DOMContentLoaded", function() {

  const inscidade = document.getElementById("insigcidade");
  const inspraia = document.getElementById("insigpraia");
  const insmangue = document.getElementById("insigmangue");
  const ze0 = document.getElementById("personagemchat0");
  const ze1 = document.getElementById("personagemchat1");
  const ze2 = document.getElementById("personagemchat2");
  const ze3 = document.getElementById("personagemchat3");
  var textocidade = document.getElementById('texto3');
  var textopraia = document.getElementById('texto5');
  var textomangue = document.getElementById('texto7');

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  abrirModal2();
  ze2.src = "images/zefeliz.png";
}

function unflipCards() {
  lockBoard = true;
  ze2.src = "images/zetriste.png";

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
  
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function resetGame() {
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  b  = 0;
  ze2.src = "images/zefeliz.png";

  // Embaralhar as cartas novamente
  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * cards.length);
      card.style.order = randomPos;
    });
  })();
  
  resetBoard(); // Limpar variáveis de controle
}

document.querySelector('.reset-memoria').addEventListener('click', resetGame);
cards.forEach(card => card.addEventListener('click', flipCard));


// Fase acerte o Zé

const start = document.querySelector('#reiniciar3'),
      moles = document.querySelectorAll('.mole'),
      scoreBoard = document.querySelector('.score span');

let playTime, interval, lastIndex;
let score = 0;

function startGame() {
  playTime = 9;
  scoreBoard.textContent = 0;
  score = 0;

  clearInterval(interval);
  countdown();

  showMole();
}

function showMole() {
  let mole = randomMole(moles.length),
      time = randomTime(500, 1500);

  mole.classList.add('out');

  setTimeout(() => {
    mole.classList.remove('out');

    if (playTime > 0) showMole();
  }, time);
}

function scorePoint() {
  score++;
  scoreBoard.textContent = score;

  this.classList.remove('out');
}

function countdown() {
  const timer = document.querySelector('.timer');

  interval = setInterval(() => {
    if (playTime < 0) {
      clearInterval(interval);
      if (score >= 5) {
        abrirModal3();
      }
      return;
    }

    timer.textContent = playTime;
    playTime--;
  }, 1000);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomMole(molesCount) {
  let index = Math.floor(Math.random() * molesCount),
      mole = moles[index];

  if (index === lastIndex) return randomMole(molesCount);
  lastIndex = index;

  return mole;
}

start.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', scorePoint));

// Fase 1

//movimentção de elementos
$(document).ready(function() {
  $(".lixopapel").draggable({containment: "parent", revert: "invalid"});
} );

$(document).ready(function() {
  $(".lixoplastico").draggable({containment: "parent", revert: "invalid"});
} );

$(document).ready(function() {
  $(".lixometal").draggable({containment: "parent", revert: "invalid"});
} );

$(document).ready(function() {
$(".lixovidro").draggable({containment: "parent", revert: "invalid"});
} );

$(document).ready(function() {
$(".lixoorganico").draggable({containment: "parent", revert: "invalid"});
} );

// Armazene as posições originais dos elementos em um objeto
const posicoesOriginais = {};

$(".lixopapel, .lixoplastico, .lixometal, .lixovidro, .lixoorganico").each(function() {
const id = $(this).attr("id");
const posicao = $(this).position();
posicoesOriginais[id] = posicao;
});

//recolha dos elementos
$(function() {
  $("#lixeira1").droppable({
      hoverClass: 'active',
      accept: '.lixopapel',
      drop: function(e, ui) {
          $(".lixopapel").html(ui.draggable.addClass("hidden"));
          abrirModal();
      }
   });
} );

$(function() {
  $("#lixeira2").droppable({
      hoverClass: 'active',
      accept: '.lixoplastico',
      drop: function(e, ui) {
          $(".lixoplastico").html(ui.draggable.addClass("hidden"));
          abrirModal();
      }
   });
} );

$(function() {
  $("#lixeira3").droppable({
      hoverClass: 'active',
      accept: '.lixometal',
      drop: function(e, ui) {
          $(".lixometal").html(ui.draggable.addClass("hidden"));
          abrirModal();
      }
   });
} );


$(function() {
$("#lixeira4").droppable({
   hoverClass: 'active',
   accept: '.lixovidro',
   drop: function(e, ui) {
       $(".lixovidro").html(ui.draggable.addClass("hidden"));
       abrirModal();
   }
});
} );

$(function() {
$("#lixeira5").droppable({
   hoverClass: 'active',
   accept: '.lixoorganico',
   drop: function(e, ui) {
       $(".lixoorganico").html(ui.draggable.addClass("hidden"));
       abrirModal();
   }
});
} );


//apresentar insígnias 
var a = 0;
function abrirModal () { 
 a++;
 if (a == 1) {
  textocidade.textContent = "Você acertou o primeiro lixo, continue assim e você conseguirá ajudar a tornar o mundo um lugar mais sustentável!";
 }
 if (a == 2) {
  textocidade.textContent = "Você sabia que reciclar uma tonelada de papel pode salvar a vida de 17 árvores?";
 }
 if (a == 4) {
  textocidade.textContent = "As plantas realizam a fotossíntese, transformando a luz solar em comida. Sem elas, não teríamos ar puro para respirar! Então, nunca arranque as plantas e cuide bem delas!";
 }
 if (a == 6) {
  textocidade.textContent = "Plantar uma árvore é como dar um abraço na Terra. Elas ajudam a absorver o dióxido de carbono e nos fornecem oxigênio.";
 }
 if (a == 8) {
  textocidade.textContent = "As abelhas são verdadeiras super-heroínas do mundo natural, polinizando flores e ajudando a produzir muitos dos alimentos que amamos, como maçãs, morangos e até mesmo chocolate. Por isso, ao ver uma abelha, nunca as mate!";
 }
 if (a == 10) {
  textocidade.textContent = "Reciclar pode ser divertido! Muitos materiais reciclados podem ser transformados em brinquedos legais, como carros feitos de caixas de papelão.";
 }
 if (a == 12) {
    $("#modalcidade").modal();
    $("#texto3").hide();
    $("#texto4").hide();
    $("#texto11").show();
    inscidade.src = "images/ins1.png";
 }
}
// Fim fase 1


//apresentar insígnias 
var b = 0;
var c = 0;



function abrirModal2 () { 
  b++;
  if (b == 6) {
     $("#modalpraia").modal();
     $("#texto5").hide();
     $("#texto6").hide();
     $("#texto12").show();
     inspraia.src = "images/ins3.png";
  }
}

function abrirModal3 () { 
  
     $("#modalmangue").modal();
     $("#texto7").hide();
     $("#texto8").hide();
     $("#texto13").show();
     insmangue.src = "images/ins2.png";

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

function resetLixeiras() {
  // Restaure as posições originais dos elementos
  $(".lixopapel, .lixoplastico, .lixometal, .lixovidro, .lixoorganico").each(function() {
    const id = $(this).attr("id");
    const posicaoOriginal = posicoesOriginais[id];
    $(this).css({
      top: posicaoOriginal.top + "px",
      left: posicaoOriginal.left + "px",
    });
  });
  $(".lixopapel, .lixoplastico, .lixometal, .lixovidro, .lixoorganico").removeClass("hidden");
}

// Associar a função de redefinição ao botão
document.querySelector('.reset-arrasta').addEventListener('click', resetLixeiras);



});

// Função para verificar a orientação do dispositivo
function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    // O dispositivo está na orientação retrato (vertical)
    $('#orientation-modal').modal('show');
   
  }
  else {
    setTimeout(function() {
      $('#orientation-modal').modal('hide');
    }, 300);  }
}

// Verifique a orientação inicialmente
checkOrientation();

// Verifique a orientação quando o tamanho da janela for alterado
$(window).on('resize orientationchange', function() {
  checkOrientation();
});





