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
                duplicate: "O email informado já possui uma conta na plataforma.",
                success: "Nova conta criada com sucesso!"
            }
        });
})();
