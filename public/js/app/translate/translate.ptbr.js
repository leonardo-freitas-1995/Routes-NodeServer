(function() {
    angular
        .module('routesApp')
        .constant('translatePTBR', {
            main: {
                routesApp: "Routes"
            },
            common: {
                connectionError: "Ocorreu um erro de conexão. Tente novamente.",
                profile: "Perfil",
                logout: "Sair",
                logoutSuccess: "Desconectado com sucesso!",
                name: "Nome",
                cancel: "Cancelar",
                close: "Fechar",
                create: "Criar",
                update: "Atualizar",
                save: "Salvar",
                remove: "Remover",
                invite: "Convidar"
            },
            sidenav: {
                dashboard: "Início",
                apps: "Aplicativos",
                invite: "Convite"
            },
            index: {
                welcome: "Bem vindo",
                email: "Email",
                password: "Senha",
                forgotPassword: "Esqueci minha senha",
                enter: "Entrar",
                newAccount: "Criar uma conta",
                login: {
                    success: "Bem vindo!",
                    error: "O email e a senha informada não correspondem."
                },
                errors: {
                    required: "Preencha este campo.",
                    invalidEmail: "Email inválido",
                    fillFields: "Preecha os campos de login"
                }
            },
            profile: {
                myProfile: "Meu perfil",
                email: "Email",
                name: "Nome",
                password: "Senha",
                repeatPassword: "Repita a Senha",
                minPassword: "A senha deve ter no mínimo 6 caractéres",
                matchPassword: "As senhas devem ser iguais",
                saveSuccess: "Perfil modificado com sucesso."
            },
            signup: {
                duplicate: "O email informado já possui uma conta na plataforma."
            },
            apps: {
                common: {
                    enter: "Entrar"
                },
                priceCrawler: {
                    name: "Crawler de Preços",
                    description: "Robô que vefifica o preço de itens em sites e manda email ao registrar um preço de promoção",
                    intervals: {
                        fiveMinutes: "5 minutos",
                        tenMinutes: "10 minutos",
                        halfHour: "30 minutos",
                        oneHour: "1 hora",
                        twoHours: "2 horas",
                        halfDay: "12 horas",
                        oneDay: "1 dia",
                        oneWeek: "1 semana"
                    },
                    crawlers: {
                        kabum: "Kabum",
                        pontofrio: "Ponto Frio",
                        extra: "Extra",
                        submarino: "Sumarino",
                        americanas: "Americanas"
                    },
                    prices: {
                        old: "Preço antigo",
                        normal: "Preço normal",
                        promo: "Preço promocional"
                    },
                    newTask: "Nova tarefa",
                    updateTask: "Modificar tarefa",
                    tasks: "Tarefas do Crawler",
                    loadingError: "Não foi possível carregar as tarefas dos crawlers.",
                    noTask: "Você ainda não possui nenhuma tarefa de crawler",
                    interval: "Intervalo entre atualizações",
                    url: "Link",
                    crawlerType: "Tipo do Crawler",
                    notifyLowerPrice: "Notificar em queda de preço",
                    newTaskSuccess: "Nova tarefa criada com sucesso!",
                    updateTaskSuccess: "Tarefa modificada com sucesso!",
                    deleteTaskSuccess: "Tarefa removida com sucesso!",
                    lastUpdate: "Ultima atualização",
                    noUpdate: "Esta tarefa ainda não foi executada.",
                    history: "Ver histórico",
                    deleteTaskTitle: "Deseja remover a atividade {{task}} - {{crawler}}?",
                    deleteTaskDescription: "Não é possível reverter esta ação.",
                    editTooltip: "Editar atividades",
                    removeTooltip: "Remover atividade",
                    addTooltip: "Adicionar atividade",
                    historyTooltip: "Ver histórico de preços"
                }
            }
        });
})();
