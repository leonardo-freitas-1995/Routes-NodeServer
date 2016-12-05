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
                invite: "Convidar",
                search: "Procurar"
            },
            sidenav: {
                dashboard: "Início",
                products: "Produtos"
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
            products: {
                table: {
                    name: "Nome",
                    ncm: "NCM",
                    taxRates: "Aliquotas Estaduais",
                    taxRate: "Aliquota estadual (%)"
                },
                noProduct: "Nenhum produto encontrado.",
                ts: "ST",
                taxSubstitution: "Substituição tributária",
                pagination: "Página {{page}} de {{pages}}",
                newProductSuccess: "Novo produto criado com sucesso.",
                newProduct: "Novo produto",
                errors: {
                    min: "O mínimo é 0%",
                    max: "O máximo é 100%",
                    number: "Informe um número aqui"
                },
                duplicate: "Já existe um produco cadastrado com este NCM"
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
