    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    const deuses = {
        grego: [
            { 
                nome: "Zeus", 
                mensagem: "O trovão ruge em suas mãos, e a ordem do mundo repousa em seu olhar. Liderar não é apenas comandar, mas equilibrar justiça e poder. Como os ventos do Olimpo, sua força pode construir ou destruir. Use-a com sabedoria, pois um líder de verdade é aquele que protege, e não aquele que apenas impõe sua vontade."
            },
            { 
                nome: "Afrodite", 
                mensagem: "O amor não é um espelho, mas um oceano onde se navega sem medo. A verdadeira beleza não está na forma, mas na essência que transcende o tempo. Afrodite sussurra: ame sem reservas, mas lembre-se que o amor-próprio é a fonte de onde tudo nasce. Olhe para dentro, pois é aí que o divino floresce."
            },
            { 
                nome: "Atena", 
                mensagem: "A guerra e a paz são faces da mesma moeda, e o verdadeiro guerreiro vence antes mesmo de erguer sua espada. Sabedoria não é acumular conhecimento, mas saber usá-lo no momento certo. A coruja pousa em seu ombro, trazendo a visão que corta as sombras da ignorância. Escute-a, e a verdade será sua aliada."
            }
        ],
        egipcio: [
            { 
                nome: "Rá", 
                mensagem: "O sol nasce, aquece e se põe, mas nunca desaparece. Assim também é a alma: mesmo nas trevas, sua luz interior jamais se apaga. Rá ilumina os caminhos daqueles que confiam na renovação. Cada amanhecer é um recomeço, e cada pôr do sol, um convite à introspecção. Confie no ciclo eterno da existência."
            },
            { 
                nome: "Ísis", 
                mensagem: "As águas do Nilo guardam segredos antigos, e o amor incondicional é a maior de todas as magias. Isis envolve com seu véu aqueles que buscam cura e proteção. Lembre-se: aquilo que foi quebrado pode ser restaurado, e a maior força vem do coração que não teme sentir. Confie na doçura do destino."
            },
            { 
                nome: "Osíris", 
                mensagem: "A morte não é um fim, mas uma passagem. O renascimento é certo para aqueles que aceitam a transformação. Osíris ensina que cada perda carrega um novo começo e que a imortalidade não está na carne, mas no legado que deixamos. Mude, evolua, renasça — pois o tempo é um rio que nunca deixa de correr."
            }
        ],
        nordico: [
            { 
                nome: "Odin", 
                mensagem: "O sacrifício pelo conhecimento é o caminho dos sábios. Odin entregou um olho para enxergar além do véu da ilusão. O verdadeiro saber exige entrega, coragem e humildade. Se deseja respostas, esteja pronto para as perguntas que o vento trará. E lembre-se: nem toda verdade será confortável, mas toda verdade será libertadora."
            },
            { 
                nome: "Thor", 
                mensagem: "O trovão não pede permissão para rugir, assim como a coragem não espera por momentos ideais. A força está naqueles que seguem em frente, mesmo quando a tempestade ameaça engolir o mundo. Segure seu martelo, firme seus pés, e enfrente a vida com o coração ardente. O verdadeiro guerreiro não luta por glória, mas por aquilo que ama."
            },
            { 
                nome: "Loki", 
                mensagem: "O caos dança nas sombras da ordem, e a mudança se esconde nos detalhes invisíveis. Loki ensina que nada é tão sólido quanto parece e que questionar é um ato de poder. A dúvida pode ser sua maior aliada ou sua maior ruína. O truque está em aprender a jogar com o destino, sem perder sua própria essência no processo."
            }
        ]
    };
    
    function sortearCartas() {
        const panteao = document.getElementById("panteao-opcao").value;
        const cartasSelecionadas = deuses[panteao].sort(() => 0.5 - Math.random()).slice(0, 3);
        
        document.getElementById("cartas-container").innerHTML = cartasSelecionadas.map(deus =>
            `<div class="carta">${deus.nome}</div>`
        ).join("");
    
        document.getElementById("cartas-meanings").innerHTML = cartasSelecionadas.map(deus =>
            `<h3>${deus.nome}</h3><p>${deus.mensagem}</p>`
        ).join("");
    }