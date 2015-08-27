Ext.define('consultorio.controller.EspecialidadeController', {
    extend: 'Ext.app.Controller',
	stores: [
	  'EspecialidadeStore'
	],
    init: function() {
        this.control({
            'especialidade-cadastro': {
                afterrender: this.telaAfterRender
            },
            'especialidade-cadastro button[action=inserir]': {
                click: this.inserir
            },
            'especialidade-cadastro button[action=alterar]': {
                click: this.alterar
            },
            'especialidade-cadastro button[action=excluir]': {
                click: this.excluir
            },
            'especialidade-novo button[action=salvarEspecialidade]': {
                click: this.salvarEspecialidade
            },
            'especialidade-alterar button[action=alterarEspecialidade]': {
                click: this.alterarEspecialidade
            },
            'especialidade-cadastro-grid': {
                itemdblclick: this.alterar
            }
		});
    },

	telaAfterRender: function(tela) {
		var store = this.getEspecialidadeStoreStore();
		store.load();
	},
    
	inserir: function(){
	  Ext.create("consultorio.view.cadastro.EspecialidadeNovo").show();
    },
    salvarEspecialidade: function(){
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
							msg: 'A especialidade foi inserida com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
						  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar inserir especialidade: '+resp);
			}
		  }
		}
		var url = 'rn/EspecialidadeCadastroRN.php?op=insereEspecialidade&DES_ESPECIALIDADE='+Ext.getCmp('edtDesEspecialidade').getValue();
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},

	alterarEspecialidade: function(){
		var controller = this;
		if ((Ext.getCmp('edtCodEspecialidade').getValue() == "") || (Ext.getCmp('edtCodEspecialidade').getValue() == null )) {
			Ext.Msg.alert('Atenção','Selecione um código de especialidade...');
		} else if ((Ext.getCmp('edtDesEspecialidade').getValue() == "") || (Ext.getCmp('edtDesEspecialidade').getValue() == null )) {
			Ext.Msg.alert('Atenção','Selecione uma descrição para a especialidade...');
		} else {
			this.salvarEdicaoEspecialidade();
		}
	},
	
    salvarEdicaoEspecialidade: function(){
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
							msg: 'A especialidade foi alterada com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar alterar a especialidade: '+resp);
			}
		  }
		}
		var url = 'rn/EspecialidadeCadastroRN.php?op=alteraEspecialidade&COD_ESPECIALIDADE='+Ext.getCmp('edtCodEspecialidade').getValue()+'&DES_ESPECIALIDADE='+Ext.getCmp('edtDesEspecialidade').getValue();
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},
	
    alterar: function(){
		var store = this.getEspecialidadeStoreStore();
		var record = Ext.getCmp('especialidadeGrid').getSelectionModel().getSelection();
		if (store.getCount() <= 0){
			Ext.Msg.alert('Atenção', 'Nenhum item foi inserido na tabela !');
		}else if (record[0] == undefined){
			Ext.Msg.alert('Atenção', 'Selecione primeiro um registro na tabela !');
		}else{
			Ext.create("consultorio.view.cadastro.EspecialidadeAlterar").show();
			Ext.getCmp('edtCodEspecialidade').setValue(record[0].get('COD_ESPECIALIDADE'));
			Ext.getCmp('edtDesEspecialidade').setValue(record[0].get('DES_ESPECIALIDADE'));
		}	
    },
    
	excluir: function(){
		var controller = this;
		var store = controller.getEspecialidadeStoreStore();
		var record = Ext.getCmp('especialidadeGrid').getSelectionModel().getSelection();
		if (store.getCount() <= 0){
			Ext.Msg.alert('Atenção', 'Nenhum item foi inserido na tabela !');
		} else {
			Ext.Msg.show({
				 title:'Confirmação',
				 msg: 'Deseja realmente excluir a especialidade selecionada?',
				 minWidth: 200,
				 modal: true,
				 buttons: Ext.Msg.YESNO,
				 fn: function(btn) {
					if (btn == 'yes') {
						controller.excluirEspecialidade(record);	
					};
				 },
				 icon: Ext.Msg.QUESTION
			});
		}
		
    },

    excluirEspecialidade: function(record){
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
							msg: 'A especialidade foi excluída com sucesso.',
							buttons: Ext.Msg.OK,
							animEl: 'elId',
							fn: null,
							icon: Ext.MessageBox.INFO
						  });
				controller.telaAfterRender();		  
			}else{
			  Ext.Msg.alert('Erro','Erro ao tentar excluir a especialidade: '+resp);
			}
		  }
		}
		var url = 'rn/EspecialidadeCadastroRN.php?op=excluiEspecialidade&COD_ESPECIALIDADE='+record[0].get('COD_ESPECIALIDADE');
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	},
    
});
