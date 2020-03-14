function linha_tabela(){
	var usuario = document.getElementById('usuario').value;
	var nome = document.getElementById('nome').value;
	var cpf = document.getElementById('cpf').value;
	var data = document.getElementById('data').value;
	var email = document.getElementById('email').value;

	
	var linha = '<tr>';
	linha += '<td>'+usuario+'</td>';
	linha += '<td>'+nome+'</td>';
	linha += '<td>'+cpf+'</td>';
	linha += '<td>'+data+'</td>';
	linha += '<td>'+email+'</td>';
	linha += '</tr>';

	
	var tabela = document.getElementById('tabela');
	tabela.innerHTML += linha;


}