var praia = false;
var cidade = false;
var mangue = false;


function abrirCenario (inicial, cenario, chat, chatog, icone1, icone2, icone3, botao, p1, insignias) {
     inicial.style.display = 'block';
     cenario.style.display = 'none';
     chat.style.display = 'block';
     chatog.style.display = 'none';
     icone1.style.display = 'none';
     icone2.style.display = 'none';
     icone3.style.display = 'none';
     botao.style.display = 'block';
     p1.style.display = 'none';
     insignias.style.display = 'none';
    
     if (inicial == cenario1 && cidade == false){
      var videoModal = document.getElementById('videocidade');
      var meuVideo = document.getElementById('playcidade');
      setTimeout(function() {
        videoModal.style.display = 'block';
        meuVideo.play();
    }, 100);
    cidade = true;

  }

  if (inicial == cenario2 && praia == false){
    var videoModal = document.getElementById('videopraia');
    var meuVideo = document.getElementById('playpraia');
    setTimeout(function() {
      videoModal.style.display = 'block';
      meuVideo.play();
  }, 100);
  praia = true;

}

if (inicial == cenario3 && mangue == false){
  var videoModal = document.getElementById('videomangue');
  var meuVideo = document.getElementById('playmangue');
  setTimeout(function() {
    videoModal.style.display = 'block';
    meuVideo.play();
}, 100);
mangue = true;

}
    
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

function fecharModalVideo0() {
  document.getElementById('videointro').style.display = 'none';
  document.getElementById('playintro').pause();

}

function fecharModalVideo1() {
  document.getElementById('videocidade').style.display = 'none';
  document.getElementById('playcidade').pause();

}

function fecharModalVideo2() {
  document.getElementById('videopraia').style.display = 'none';
  document.getElementById('playpraia').pause();

}

function fecharModalVideo3() {
  document.getElementById('videomangue').style.display = 'none';
  document.getElementById('playmangue').pause();
}

function fecharAjudaModal0() {
  document.getElementById('ajudaModal0').style.display = 'none';
}

function fecharAjudaModal1() {
  document.getElementById('ajudaModal1').style.display = 'none';
}

function fecharAjudaModal2() {
  document.getElementById('ajudaModal2').style.display = 'none';
}

function fecharAjudaModal3() {
  document.getElementById('ajudaModal3').style.display = 'none';
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
  var lixopraia1 = document.getElementById("lixopraia1");
  var lixopraia2 = document.getElementById("lixopraia2");
  var lixopraia3 = document.getElementById("lixopraia3");
  var lixopraia4 = document.getElementById("lixopraia4");
  var lixopraia5 = document.getElementById("lixopraia5");
  var lixopraia6 = document.getElementById("lixopraia6");
  var lixopraia7 = document.getElementById("lixopraia7");
  var lixopraia8 = document.getElementById("lixopraia8");

  var praiacompleta = false; // Substitua isso com suas variáveis reais
  var cidadecompleta = false;
  var manguecompleto = false;

  var intro = false;

  if (intro == false) {
    abrirModalVideo('videointro');
    intro=true;
  }
  

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
  }, 1100);
  
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
  textopraia.textContent = "Agora estamos na praia! Um dos meus lugares favoritos… Descubra os pares das cartas pra me ajudar a limpar a praia.";
  lixopraia1.classList.remove("hidden");
  lixopraia2.classList.remove("hidden");
  lixopraia3.classList.remove("hidden");
  lixopraia4.classList.remove("hidden");
  lixopraia5.classList.remove("hidden");
  lixopraia6.classList.remove("hidden");
  lixopraia7.classList.remove("hidden");
  lixopraia8.classList.remove("hidden");
  inspraia.src = "images/inspraia_block.png";
  manguecompleto = false;
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
      else {
        textomangue.textContent = "Não foi dessa vez. Tente novamente!";
        ze3.src = "images/zetriste.png";
        manguecompleto = false;
        insmangue.src = "images/insmangue_block.png";

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
    cidadecompleta = true;
    inscidade.src = "images/ins1.png";
    textocidade.textContent = "Parabéns, você me ajudou a limpar totalmente a cidade! Muito obrigado por isso. Agora, vamos me ajudar a limpar outro lugar?";
    checarCompleto();

 }
}
// Fim fase 1


//apresentar insígnias 
var b = 0;
var c = 0;



function abrirModal2 () { 
  b++;
  if (b == 0) {
    textopraia.textContent = "Agora estamos na praia! Um dos meus lugares favoritos… Descubra os pares das cartas pra me ajudar a limpar a praia.";
   }
  if (b == 1) {
    textopraia.textContent = "A água é essencial para a vida. Menos de 3% da água na Terra é doce e adequada para beber. É importante economizar água sempre que possível.";
    lixopraia1.classList.add("hidden");
    lixopraia2.classList.add("hidden");
   }
   if (b == 2) {
    textopraia.textContent = "Escovar os dentes com a torneira fechada pode economizar até 11 litros de água por dia.";
    lixopraia3.classList.add("hidden");
   }
   if (b == 3) {
    textopraia.textContent = "A camada de ozônio é como um cobertor que mantém a Terra aquecida, mas a poluição pode torná-lo mais espesso, causando o aquecimento global.";
    lixopraia4.classList.add("hidden");
   }
   if (b == 4) {
    textopraia.textContent = "O plástico nos oceanos pode ser ingerido por animais marinhos, prejudicando-os. Sempre jogue o lixo no local certo!";
    lixopraia5.classList.add("hidden");
   }
   if (b == 5) {
    textopraia.textContent = "A areia da praia não é apenas um lugar para brincar, mas também desempenha um papel na purificação da água e na formação de habitats para pequenos organismos.";
    lixopraia6.classList.add("hidden");
   }
  if (b == 6) {
    lixopraia7.classList.add("hidden");
    lixopraia8.classList.add("hidden");
     $("#modalpraia").modal();
     inspraia.src = "images/ins3.png";
     praiacompleta = true;
     textopraia.textContent = "Parabéns, você se tornou um Guardião da Praia, agora vamos para outra região!"
     checarCompleto();

  }
}

function abrirModal3 () { 
  
  $("#modalmangue").modal();
  manguecompleto = true;
  insmangue.src = "images/ins2.png";
  textomangue.textContent = "Parabéns, você se tornou um Guardião do Mangue, obrigado por me ajudar a salvar meu lar!"
  checarCompleto();

}

function posicaoAleatoria(minX, maxX, minY, maxY) {
  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
  return { top: randomY, left: randomX };
}


function resetLixeiras() {
   // Loop através dos lixos e atribua novas posições aleatórias
   $(".lixopapel, .lixoplastico, .lixometal, .lixovidro, .lixoorganico").each(function () {
    // Atribua a nova posição ao lixo dentro do intervalo especificado
    const novaPosicao = posicaoAleatoria(10, 95, 10, 38);
    
    // Atribua a nova posição ao lixo
    $(this).css({
      top: novaPosicao.top + "vh",
      left: novaPosicao.left + "vw",
    });
  });
  $(".lixopapel, .lixoplastico, .lixometal, .lixovidro, .lixoorganico").removeClass("hidden");
  textocidade.textContent = " Você escolheu a cidade! Arraste o lixo para a lixeira correta.";
  inscidade.src = "images/inscidade_block.png";
  cidadecompleta = false;
}

function abrirModalVideo(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModalVideo(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = 'none';
}
// Associar a função de redefinição ao botão
document.querySelector('.reset-arrasta').addEventListener('click', resetLixeiras);

function abrirParabensModal() {
  abrirModalVideo('parabensModal');
}

function abrirAjuda0() {
  abrirModalVideo('ajudaModal0');
}

function abrirAjuda1() {
  abrirModalVideo('ajudaModal1');
}

function abrirAjuda2() {
  abrirModalVideo('ajudaModal2');
}

function abrirAjuda3() {
  abrirModalVideo('ajudaModal3');
}


document.querySelector('#fecharajuda0').addEventListener('click', function() {
  fecharModalVideo('ajudaModal0');
});

document.querySelector('#rever0').addEventListener('click', function() {
  abrirModalVideo('videointro');
  fecharAjudaModal0();
});

document.querySelector('#rever1').addEventListener('click', function() {
  abrirModalVideo('videocidade');
  fecharAjudaModal1();
});

document.querySelector('#rever2').addEventListener('click', function() {
  abrirModalVideo('videopraia');
  fecharAjudaModal2();
});

document.querySelector('#rever3').addEventListener('click', function() {
  abrirModalVideo('videomangue');
  fecharAjudaModal3();
});

document.getElementById('ajuda1').addEventListener('click', abrirAjuda1);
document.getElementById('ajuda2').addEventListener('click', abrirAjuda2);
document.getElementById('ajuda3').addEventListener('click', abrirAjuda3);

document.querySelector('#fecharajuda1').addEventListener('click', function() {
  fecharModalVideo('ajudaModal1');
});

document.querySelector('#fecharajuda2').addEventListener('click', function() {
  fecharModalVideo('ajudaModal2');
});

document.querySelector('#fecharajuda3').addEventListener('click', function() {
  fecharModalVideo('ajudaModal3');
});

// Adicione essa função ao botão de fechar ou evento desejado dentro do modal
document.querySelector('#fecharparabens').addEventListener('click', function() {
  fecharModalVideo('parabensModal');
});


// Adicione essa função ao botão ou evento desejado
document.getElementById('parabensimg').addEventListener('click', abrirParabensModal);

document.getElementById('ajuda0').addEventListener('click', abrirAjuda0);




function checarCompleto(){
  if (praiacompleta && cidadecompleta && manguecompleto) {
    $(".parabens").removeClass("hidden");
}
  return;
}


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





