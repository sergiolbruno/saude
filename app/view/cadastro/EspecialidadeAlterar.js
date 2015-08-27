Ext.define('consultorio.view.cadastro.EspecialidadeAlterar', {
    extend: 'Ext.Window',
    alias: 'widget.especialidade-alterar',
    layout: 'absolute',
    border: false,
	resizable: false,
	modal: true,
	title: 'Alteração de Especialidades',
	width : 400,
	height: 150,
	items: [
				{
					x : 5,
    				y : 22,
    				xtype : "label",
    				id : "lblCodEspecialidade",
    				text : "Código"
				},{
					x : 5,
    				y : 40,
    				width: 60,
					xtype : "textfield",
					readOnly: true,
    				id : "edtCodEspecialidade",
    			},
				{
					x : 70,
    				y : 22,
    				xtype : "label",
    				id : "lblDesEspecialidade",
    				text : "Nome da especialidade"
				},{
					x : 70,
    				y : 40,
    				width: 310,
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
		  action: 'alterarEspecialidade'
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
