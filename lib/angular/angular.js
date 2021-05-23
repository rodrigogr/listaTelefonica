angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Rodrigo", telefone: "9999-9999"}
    ];
    $scope.operadoras = [
        {nome: "Correios", codigo: 41, data: new Date(), categoria: "Celular"},
        {nome: "Tim", codigo: 41, data: new Date(), categoria: "Celular"},
        {nome: "Oi", codigo: 14, data: new Date(), categoria: "Celular"},
        {nome: "Vivo", codigo: 31, data: new Date(), categoria: "Celular"},
        {nome: "Claro", codigo: 21, data: new Date(), categoria: "Celular"}
    ];

    var carregarAPI = function () {
        $http.get("http://localhost:8000/api/assembleias/pautas/1").then(function(data, status){
            $scope.contatos = data;
        });        
    };
    //Três formas de adicionar contato
    //*******Primeira*******
    //$scope.adicionarContato = function() {
    //    $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
    //};
    //*******Segunda*******
    //$scope.adicionarContato = function(nome, telefone) {
    //    $scope.contatos.push({nome: nome, telefone: telefone});
    //};
    //*******Terceira e MELHOR FORMA *******
    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.formContato.$setPristine();
    };
    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado) return contato;
        });
    };
   /*  $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function (contato) {
            return contato.selecionado;
        });    
    }; */
    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
    };   
    carregarAPI();   
});