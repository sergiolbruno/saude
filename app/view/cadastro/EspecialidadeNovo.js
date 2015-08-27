Ext.define('consultorio.view.cadastro.EspecialidadeNovo', {
    extend: 'Ext.Window',
    alias: 'widget.especialidade-novo',
    layout: 'absolute',
    border: false,
	resizable: false,
	modal: true,
	title: 'Inclusão de Especialidades',
	width : 400,
	height: 150,
	items: [
				{
					x : 5,
    				y : 22,
    				xtype : "label",
    				id : "lblDesEspecialidade",
    				text : "Nome da especialidade"
				},{
					x : 5,
    				y : 40,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesEspecialidade",
    			}	
			],
	buttons: [ 
		{ 
		  width: 75,
		  height: 25,
		  text: 'Salvar',
		  iconCls: 'salvar',
		  action: 'salvarEspecialidade'
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




