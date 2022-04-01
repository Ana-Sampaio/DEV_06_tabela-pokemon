var jogador1 = {nome:"jogador 1", vitorias:1, empates:1, derrotas:0, pontos:0};
var jogador2 = {nome:"jogador 2", vitorias:1, empates:0, derrotas:1, pontos:0};
var maquina = {nome:"maquina", vitorias:0, empates:1, derrotas:1, pontos:0};

function calculaPontos(jogador){
	var pontos = (jogador.vitorias * 3) + jogador.empates;
	return pontos;
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);
maquina.pontos = calculaPontos(maquina);

var jogadores = [jogador1, jogador2, maquina]

function exibeJogadoresNaTela(jogadores){
	
	var elemento = ""
	for(var i = 0; i < jogadores.length; i++){
	elemento += "<tr><td>" + jogadores[i].nome + "</td>";
	elemento +=	"<td>" + jogadores[i].vitorias + "</td>";
	elemento +=	"<td>" + jogadores[i].empates + "</td>";
	elemento += "<td>" + jogadores[i].derrotas +"</td>";
	elemento +=	"<td>" + jogadores[i].pontos + "</td>";
	elemento +=	"<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
	elemento +=	"<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
	elemento +=	"<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>";
	elemento +=	"<td><button onClick='zerarPlacar("+ i +")'>Zera o Placar</button></td>";
	elemento +=	"</tr>";
	}	      

	var tabelaJogadores = document.getElementById("tabelaJogadores");
	tabelaJogadores.innerHTML = elemento;

}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){

	var jogador = jogadores[i];
	jogador.vitorias++;
	jogador.pontos = calculaPontos(jogador);
	exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){

	var jogador = jogadores[i];
	jogador.empates++;
	jogador.pontos = calculaPontos(jogador);
	exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){

	var jogador = jogadores[i];
	jogador.derrotas++;
	exibeJogadoresNaTela(jogadores);
}

function limparPontos(jogador) {

	jogador.vitorias = 0;
	jogador.empates = 0;
	jogador.derrotas = 0;
	jogador.pontos = 0;
}

function zerarPlacar(i) {

	var jogador = jogadores[i];
	limparPontos(jogador);	   
  	exibeJogadoresNaTela(jogadores);
}


function adicionaJogador(){

	var nomeNovoJogador = document.getElementById("novo-jogador").value;
	var novoJogador = {
		nome: nomeNovoJogador,
		vitorias: 0,
		empates: 0,
		derrotas: 0,
		pontos: 0,
	};
	
	jogadores.push(novoJogador);
	exibeJogadoresNaTela(jogadores);
}

function limpaTabela(i){
	jogadores.splice(i);
	exibeJogadoresNaTela(jogadores);
}
