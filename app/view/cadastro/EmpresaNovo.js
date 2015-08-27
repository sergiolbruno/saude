Ext.define('consultorio.view.cadastro.EmpresaNovo', {
    extend: 'Ext.Window',
    alias: 'widget.empresa-novo',
    layout: 'absolute',
    border: false,
	resizable: false,
	modal: true,
	title: 'Inclusão de Empresas',
	width : 790,
	height: 350,
	items: [
				{
					x : 5,
    				y : 22,
    				xtype : "label",
    				id : "lblDesRazaoEmpresa",
    				text : "Razão social da empresa"
				},{
					x : 5,
    				y : 40,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesRazaoSocial"
    			},	
				
				{
					x : 390,
    				y : 22,
    				xtype : "label",
    				id : "lblDesNomeFantasia",
    				text : "Nome de fantasia"
				},{
					x : 390,
    				y : 40,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesNomeFantasia"
    			},	
				
				{
					x : 5,
    				y : 70,
    				xtype : "label",
    				id : "lblNumCnpjCpf",
    				text : "CNPJ/CPF"
				},{
					x : 5,
    				y : 88,
    				width: 130,
					xtype : "textfield",
    				id : "edtNumCnpjCpf"
    			},	
				
				{
					x : 140,
    				y : 70,
    				xtype : "label",
    				id : "lblNumInscricaoEstadual",
    				text : "Insc. Estadual"
				},{
					x : 140,
    				y : 88,
    				width: 130,
					xtype : "textfield",
    				id : "edtNumInscricaoEstadual"
    			},	
				
				{
					x : 275,
    				y : 70,
    				xtype : "label",
    				id : "lblNumInscricaoMunicipal",
    				text : "Insc. Municipal"
				},{
					x : 275,
    				y : 88,
    				width: 110,
					xtype : "textfield",
    				id : "edtNumInscricaoMinicipal"
    			},	

				{
					x : 390,
    				y : 70,
    				xtype : "label",
    				id : "lblNumTelefone01",
    				text : "Telefone"
				},{
					x : 390,
    				y : 88,
    				width: 130,
					xtype : "textfield",
    				id : "edtNumTelefone01",
					plugins: "textmask",
					mask: "(99) 99999-9999"
    			},	
				
				{
					x : 530,
    				y : 70,
    				xtype : "label",
    				id : "lblNumTelefone02",
    				text : "Telefone"
				},
				{
					x : 530,
    				y : 88,
    				width: 130,
					xtype : "textfield",
    				id : "edtNumTelefone02",
					plugins: "textmask",
					mask: "(99) 99999-9999"
    			},	
				{
					x : 665,
    				y : 70,
    				xtype : "label",
    				id : "lblNumCelular",
    				text : "Celular"
				},{
					x : 665,
    				y : 88,
    				width: 106,
					xtype : "textfield",
    				id : "edtNumCelular",
					plugins: "textmask",
					mask: "(99) 99999-9999"
    			},	
    			
				{
					x : 5,
    				y : 118,
    				xtype : "label",
    				id : "lblDesSite",
    				text : "Site"
				},{
					x : 5,
    				y : 136,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesSite"
    			},	
				
				{
					x : 390,
    				y : 118,
    				xtype : "label",
    				id : "lblDesEmail",
    				text : "E-mail"
				},{
					x : 390,
    				y : 136,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesEmail"
    			},	
				{
					x : 5,
    				y : 164,
    				xtype : "label",
    				id : "lblDesEndereco",
    				text : "Rua, Av. Travessa"
				},{
					x : 5,
    				y : 182,
    				width: 380,
					xtype : "textfield",
    				id : "edtDesEndereco"
    			},	
				
				{
					x : 390,
    				y : 164,
    				xtype : "label",
    				id : "lblNumNumero",
    				text : "Nº"
				},{
					x : 390,
    				y : 182,
    				width: 40,
					xtype : "textfield",
    				id : "edtNumNumero"
    			},	
    			
				{
					x : 435,
    				y : 164,
    				xtype : "label",
    				id : "lblDesComplemento",
    				text : "Complemento"
				},{
					x : 435,
    				y : 182,
    				width: 335,
					xtype : "textfield",
    				id : "edtDesComplemento"
    			},	
    			
				{
					x : 5,
    				y : 210,
    				xtype : "label",
    				id : "lblDesBairro",
    				text : "Bairro"
				},{
					x : 5,
    				y : 228,
    				width: 235,
					xtype : "textfield",
    				id : "edtDesBairro"
    			},	
    			
				{
					x : 246,
    				y : 210,
    				xtype : "label",
    				id : "lblDesCidade",
    				text : "Cidade"
				},{
					x : 246,
    				y : 228,
    				width: 235,
					xtype : "textfield",
    				id : "edtDesCidade"
    			},	
				{
					x : 487,
    				y : 210,
    				xtype : "label",
    				id : "lblNumCep",
    				text : "CEP"
				},
				{
					x : 487,
    				y : 228,
    				width: 75,
					xtype : "textfield",
    				id : "edtNumCep",
					plugins: "textmask",
					mask: "99.999-999"
    			},	

    			{
					xtype : "textfield",
					//itemId : "edtCodUf",
					id : "edtCodUf",
					name: 'COD_UF',
					hidden: true
				},
				{
					x : 568,
    				y : 210,
    				xtype : "label",
    				id : "lblUf",
    				text : "UF"
				},				
				{
					x:568,
					y:228,
					fieldLabel: '',
					//itemId : "cboCodUf",
					id : "cboCodUf",
					width: 200,
					allowBlank: false,
					xtype : "combobox",
					store: 'UfStore',
					displayField: 'DES_UF',
					valueField: 'COD_UF',
					queryDelay: 250,
					pageSize: 30,
					queryParam: 'cdUf',
					forceSelection: true,
					minChars: 3,
					trigger2Cls: 'x-form-clear-trigger',
					onTrigger2Click : function(e) {
						this.clearValue();
					}
				}
			],
	buttons: [ 
		{ 
		  width: 75,
		  height: 25,
		  text: 'Salvar',
		  iconCls: 'salvar',
		  action: 'salvarEmpresa'
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




