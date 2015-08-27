Ext.define('consultorio.controller.EmpresaController', {
    extend: 'Ext.app.Controller',
    models: [
             'EmpresaModel'
	],
	stores: [
	         'EmpresaStore',
	         'UfStore'
	],
	views: [
			 'cadastro.EmpresaCadastro',
			 'cadastro.EmpresaNovo',
			 'cadastro.EmpresaGrid'
	],
    init: function() {
        this.control({
            'empresa-cadastro': {
                afterrender: this.telaAfterRender
            },
            'empresa-cadastro button[action=inserir]': {
                click: this.inserir
            },
            'empresa-cadastro button[action=alterar]': {
                click: this.alterar
            },
            'empresa-cadastro button[action=excluir]': {
                click: this.excluir
            },
            'empresa-novo button[action=salvarEmpresa]': {
                click: this.salvarEmpresa
            },
            'empresa-alterar button[action=alterarEmpresa]': {
                click: this.alterarEmpresa
            },
            'empresa-cadastro-grid': {
                itemdblclick: this.alterar
            },
			'combo[id=cboCodUf]': {
				change: this.empresaNovo_cboCodUf_change
			}
		});
    },

	empresaNovo_cboCodUf_change: function( combo, newValue, oldValue, eOpts ) {
    	Ext.getCmp('edtCodUf').setValue(newValue);
	},
	
	telaAfterRender: function(tela) {
		var store = this.getEmpresaStoreStore();
		store.load();
	},
    
	inserir: function(){
	  Ext.create("consultorio.view.cadastro.EmpresaNovo").show();
    },
    salvarEmpresa: function(){
		var controller = this;
		var xmlHttp=null;
		try{// Firefox, Opera 8.0+, Safari
		  xmlHttp=new XMLHttpRequest();
		}catch (e){// Internet Explorer
		  try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		  }catch (e){
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		}
    	xmlHttp.onreadystatechange=function(){
		  if(xmlHttp.readyState==4){
			resp = xmlHttp.responseText;
			if( resp > 0 ){
				Ext.Msg.show({
							title:'Sucesso',
							msg: 'A empresa foi inserida com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar inserir empresa: '+resp);
			}
		  }
		}
		var url = 'rn/EmpresaCadastroRN.php?op=insereEmpresa'+
			'&DES_RAZAO_SOCIAL='+Ext.getCmp('edtDesRazaoSocial').getValue()+
			'&DES_NOME_FANTASIA='+Ext.getCmp('edtDesNomeFantasia').getValue()+
			'&DES_ENDERECO='+Ext.getCmp('edtDesEndereco').getValue()+
			'&NUM_NUMERO='+Ext.getCmp('edtNumNumero').getValue()+
			'&DES_COMPLEMENTO='+Ext.getCmp('edtDesComplemento').getValue()+
			'&DES_BAIRRO='+Ext.getCmp('edtDesBairro').getValue()+
			'&DES_CIDADE='+Ext.getCmp('edtDesCidade').getValue()+
			'&NUM_CEP='+Ext.getCmp('edtNumCep').getValue()+
			'&NUM_CNPJ_CPF='+Ext.getCmp('edtNumCnpjCpf').getValue()+
			'&COD_UF='+Ext.getCmp('edtCodUf').getValue()+
			'&NUM_TELEFONE_01='+Ext.getCmp('edtNumTelefone01').getValue()+
			'&NUM_TELEFONE_02='+Ext.getCmp('edtNumTelefone02').getValue()+
			'&NUM_CELULAR='+Ext.getCmp('edtNumCelular').getValue()+
			'&NUM_INSCRICAO_ESTADUAL='+Ext.getCmp('edtNumInscricaoEstadual').getValue()+
			'&NUM_INSCRICAO_MUNICIPAL='+Ext.getCmp('edtNumInscricaoMinicipal').getValue()+
			'&DES_SITE='+Ext.getCmp('edtDesSite').getValue()+
			'&DES_EMAIL='+Ext.getCmp('edtDesEmail').getValue();	
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},

	alterarEmpresa: function(){
		var controller = this;
		if ((Ext.getCmp('edtCodEmpresa').getValue() == "") || (Ext.getCmp('edtCodEmpresa').getValue() == null )) {
			Ext.Msg.alert('Atenção','Selecione um código de empresa...');
		} else if ((Ext.getCmp('edtDesRazaoSocial').getValue() == "") || (Ext.getCmp('edtDesRazaoSocial').getValue() == null )) {
			Ext.Msg.alert('Atenção','Informe a razão social para a empresa...');
		} else {
			this.salvarEdicaoEmpresa();
		}
	},
	
    salvarEdicaoEmpresa: function(){
		var controller = this;
		var xmlHttp=null;
		try{// Firefox, Opera 8.0+, Safari
		  xmlHttp=new XMLHttpRequest();
		}catch (e){// Internet Explorer
		  try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		  }catch (e){
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		}
		xmlHttp.onreadystatechange=function(){
		  if(xmlHttp.readyState==4){
			resp = xmlHttp.responseText;
			if( resp > 0 ){
				Ext.Msg.show({
							title:'Sucesso',
							msg: 'A empresa foi alterada com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar alterar a empresa: '+resp);
			}
		  }
		}
		var url = 'rn/EmpresaCadastroRN.php?op=alteraEmpresa&COD_EMPRESA='+Ext.getCmp('edtCodEmpresa').getValue()+'&DES_RAZAO_SOCIAL='+Ext.getCmp('edtDesRazaoSocial').getValue();
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},
	
    alterar: function(){
		var store = this.getEmpresaStoreStore();
		var record = Ext.getCmp('empresaGrid').getSelectionModel().getSelection();
		if (store.getCount() <= 0){
			Ext.Msg.alert('Atenção', 'Nenhum item foi inserido na tabela !');
		}else if (record[0] == undefined){
			Ext.Msg.alert('Atenção', 'Selecione primeiro um registro na tabela !');
		}else{
			Ext.create("consultorio.view.cadastro.EmpresaAlterar").show();
			Ext.getCmp('edtCodEmpresa').setValue(record[0].get('COD_EMPRESA'));
			Ext.getCmp('edtDesRazaoSocial').setValue(record[0].get('DES_RAZAO_SOCIAL'));
		}	
    },
    
	excluir: function(){
		var controller = this;
		var store = controller.getEmpresaStoreStore();
		var record = Ext.getCmp('empresaGrid').getSelectionModel().getSelection();
		if (store.getCount() <= 0){
			Ext.Msg.alert('Atenção', 'Nenhum item foi inserido na tabela !');
		} else {
			Ext.Msg.show({
				 title:'Confirmação',
				 msg: 'Deseja realmente excluir a empresa selecionada?',
				 minWidth: 200,
				 modal: true,
				 buttons: Ext.Msg.YESNO,
				 fn: function(btn) {
					if (btn == 'yes') {
						controller.excluirEmpresa(record);	
					};
				 },
				 icon: Ext.Msg.QUESTION
			});
		}
		
    },

    excluirEmpresa: function(record){
		var controller = this;
		var xmlHttp=null;
		try{// Firefox, Opera 8.0+, Safari
		  xmlHttp=new XMLHttpRequest();
		}catch (e){// Internet Explorer
		  try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		  }catch (e){
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		}
		xmlHttp.onreadystatechange=function(){
		  if(xmlHttp.readyState==4){
			resp = xmlHttp.responseText;
			if( resp > 0 ){
				Ext.Msg.show({
							title:'Sucesso',
							msg: 'A empresa foi excluída com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar excluir a empresa: '+resp);
			}
		  }
		}
		var url = 'rn/EmpresaCadastroRN.php?op=excluiEmpresa&COD_EMPRESA='+record[0].get('COD_EMPRESA');
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},
    
});
