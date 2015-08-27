Ext.define('consultorio.view.cadastro.EmpresaCadastro', {
    extend: 'Ext.Window',
    alias: 'widget.empresa-cadastro',
    layout: 'absolute',
    border: false,
	resizable: false,
	modal: true,
	title: 'Cadastro de Empresas',
	width : 840,
	height: 350,
	items: [
		{
			xtype: 'empresa-cadastro-grid',
			x: 15,
			y: 15,
			width : 800,
			height: 250,
			id: "empresaGrid"
		}
	],
	buttons: [ 
		{ 
		  width: 75,
		  height: 25,
		  text: 'Novo',
		  iconCls: 'inserir',
		  action: 'inserir'
		},
		{ 
		  width: 75,
		  height: 25,
		  text: 'Editar',
		  iconCls: 'alterar',
		  action: 'alterar'
		},
		{ 
		  width: 75,
		  height: 25,
		  text: 'Excluir',
		  iconCls: 'excluir',
		  action: 'excluir'
		},
		{ 
		  width: 75,
		  height: 25,
		  text: 'Sair',
		  iconCls: 'sair',
 		  handler: function() {
			this.up('window').close();
		  }		  
		}
	]
});




