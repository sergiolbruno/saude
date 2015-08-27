Ext.define('consultorio.view.cadastro.EspecialidadeCadastro', {
    extend: 'Ext.Window',
    alias: 'widget.especialidade-cadastro',
    layout: 'absolute',
    border: false,
	resizable: false,
	modal: true,
	title: 'Cadastro de Especialidades',
	width : 440,
	height: 350,
	items: [
		{
			xtype: 'especialidade-cadastro-grid',
			x: 15,
			y: 15,
			width : 400,
			height: 250,
			id: "especialidadeGrid"
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




