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
            },
            {
                nome: "Hades",
                mensagem: "O reino dos mortos não é um lugar de medo, mas de transformação. Hades guarda as almas com justiça, lembrando que a morte é uma parte essencial da vida. A aceitação do destino e a compreensão do ciclo são chaves para a verdadeira paz interior. Em sua presença, o silêncio revela segredos que a vida esqueceu."
            },
            {
                nome: "Apolo",
                mensagem: "A luz da verdade brilha na música e na arte. Apolo é o patrono da harmonia e da profecia. A busca pelo conhecimento é um caminho iluminado, e a beleza está em cada nota que ecoa. Inspire-se, e permita que a criatividade flua como um rio em seu coração."
            },
            {
                nome: "Dionísio",
                mensagem: "A vida é um festim e a alegria é o vinho que alimenta a alma. Dionísio nos ensina a celebrar a vida e a reconhecer a importância do descanso e da revelação através da alegria. Permita-se sentir, rir e dançar — pois a verdadeira liberdade reside na aceitação do momento presente."
            },
            {
                nome: "Hermes",
                mensagem: "O mensageiro dos deuses e o guia das almas, Hermes é a personificação da comunicação e do comércio. Sua astúcia e velocidade são um lembrete de que a adaptação é essencial. Siga seu exemplo e navegue entre os mundos, mantendo sempre a sabedoria como seu guia."
            },
            {
                nome: "Artemis",
                mensagem: "A deusa da caça e da natureza, Artemis nos ensina a respeitar a vida em todas as suas formas. A liberdade está nas florestas e nas montanhas, onde podemos nos conectar com o nosso verdadeiro eu. Siga suas pegadas e encontre a força dentro de você."
            },
            {
                nome: "Hefesto",
                mensagem: "O deus do fogo e da forja, Hefesto representa a criatividade e a perseverança. Mesmo diante da adversidade, ele transforma a dor em arte. Sua mensagem é clara: a verdadeira beleza surge do trabalho árduo e da paixão. Não tenha medo de criar, pois a transformação é um ato sagrado."
            },
            {
                nome: "Deméter",
                mensagem: "A deusa da colheita e da fertilidade, Deméter nos lembra da conexão entre a vida e a terra. O ciclo das estações reflete a importância do equilíbrio e da renovação. Cultive suas raízes e aprecie a abundância que a natureza oferece."
            }
        ],
        egipcio: [
            { 
                nome: "Rá", 
                mensagem: "O sol nasce, aquece e se põe, mas nunca desaparece. Assim também é a alma: mesmo nas trevas, sua luz interior jamais se apaga. Rá ilumina os caminhos daqueles que confiam na renovação. Cada amanhecer é um recomeço, e cada pôr do sol, um convite à introspecção. Confie no ciclo eterno da existência."
            },
            { 
                nome: "Ísis", 
                mensagem: "As águas do Nilo guardam segredos antigos, e o amor incondicional é a maior de todas as magias. Ísis envolve com seu véu aqueles que buscam cura e proteção. Lembre-se: aquilo que foi quebrado pode ser restaurado, e a maior força vem do coração que não teme sentir. Confie na doçura do destino."
            },
            { 
                nome: "Osíris", 
                mensagem: "A morte não é um fim, mas uma passagem. O renascimento é certo para aqueles que aceitam a transformação. Osíris ensina que cada perda carrega um novo começo e que a imortalidade não está na carne, mas no legado que deixamos. Mude, evolua, renasça — pois o tempo é um rio que nunca deixa de correr."
            },
            {
                nome: "Hórus",
                mensagem: "A proteção é um dom divino, e Hórus guia os justos com seus olhos de falcão. Veja além das ilusões e busque a verdade em cada ação. A vitória pertence àqueles que têm coragem e coração. Eleve seu espírito, pois a luz sempre prevalece sobre as trevas."
            },
            {
                nome: "Anúbis",
                mensagem: "O guardião da passagem, Anúbis cuida das almas em sua jornada. A morte é uma transformação e não um fim. Sua presença traz consolo e segurança, lembrando que a vida continua em outro plano. Aceite a mudança como parte da jornada, e encontre paz na transição."
            },
            {
                nome: "Sekhmet",
                mensagem: "A deusa da guerra e da cura, Sekhmet simboliza a dualidade da força e da compaixão. Sua ferocidade protege os justos, mas seu coração é capaz de curar as feridas. Lembre-se: a verdadeira força não é apenas no combate, mas também na capacidade de perdoar."
            },
            {
                nome: "Thoth",
                mensagem: "O deus da sabedoria e da escrita, Thoth é o guardião do conhecimento. Ele nos ensina a importância da comunicação e da reflexão. Busque a verdade e registre suas descobertas, pois o saber é uma luz que nunca se apaga."
            },
            {
                nome: "Bastet",
                mensagem: "A deusa da casa e da fertilidade, Bastet simboliza o lar e a proteção. Com seu espírito acolhedor, ela nos lembra da importância do amor e da segurança. Cuide de seus laços e permita que a harmonia prevaleça em sua vida."
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
            },
            {
                nome: "Freyja",
                mensagem: "A beleza e a guerra andam de mãos dadas, e Freyja é a deusa do amor e da batalha. A verdadeira força reside na vulnerabilidade. Amar é um ato de bravura, e a paixão é a chama que pode transformar o mundo. Não tema o conflito, pois ele pode levar a novas revelações."
            },
            {
                nome: "Tyr",
                mensagem: "O sacrifício pela justiça é a verdadeira bravura. Tyr é o deus da guerra e da ordem, ensinando que a coragem não é a ausência do medo, mas a determinação de agir em prol do que é certo. Lembre-se, a verdadeira vitória vem da integridade e do respeito."
            },
            {
                nome: "Heimdall",
                mensagem: "O guardião da Bifrost, Heimdall possui a visão e audição aguçadas. Ele observa o mundo dos mortais e está sempre alerta. Sua mensagem é sobre vigilância e proteção, lembrando-nos de que devemos estar atentos às ameaças e oportunidades que nos cercam."
            },
            {
                nome: "Baldr",
                mensagem: "O deus da luz e da beleza, Baldr representa a esperança e a pureza. Sua morte trágica traz lições sobre a fragilidade da vida e a importância do amor. Celebre cada momento e valorize os laços que criamos, pois eles são eternos."
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
