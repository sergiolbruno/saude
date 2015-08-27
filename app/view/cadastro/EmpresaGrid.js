Ext.define('consultorio.view.cadastro.EmpresaGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.empresa-cadastro-grid',
    
    border: true,
    
    initComponent: function() {
        Ext.apply(this, {
        	autoScroll: true,
            store: 'EmpresaStore',
            columns: [
              {
                text: 'Código',
                dataIndex: 'COD_EMPRESA',
                width : 60
              },
              {
                text: 'Razão social',
                dataIndex: 'DES_RAZAO_SOCIAL',
                width : 200
              },
              {
			    text: 'Nome de fantasia',
			    dataIndex: 'DES_NOME_FANTASIA',
			    width : 200
			  },
              {
                text: 'CNPJ/CPF',
                dataIndex: 'NUM_CNPJ_CPF',
                width : 100
              },
			  {
			    text: 'Endereço',
			    dataIndex: 'DES_ENDERECO',
			    width : 200
			  },
			  {
			    text: 'Número',
			    dataIndex: 'NUM_NUMERO',
			    width : 50
			  },
			  {
			    text: 'Complemento',
			    dataIndex: 'DES_COMPLEMENTO',
			    width : 150
			  },
			  {
			    text: 'Bairro',
			    dataIndex: 'DES_BAIRRO',
			    width : 150
			  },
			  {
			    text: 'Cidade',
			    dataIndex: 'DES_CIDADE',
			    width : 150
			  },
			  {
			    text: 'CEP',
			    dataIndex: 'NUM_CEP',
			    width : 50
			  },
			  {
			    text: 'UF',
			    dataIndex: 'COD_UF',
			    width : 30
			  },
			  {
			    text: 'Telefone',
			    dataIndex: 'NUM_TELEFONE_01',
			    width : 60
			  },
			  {
			    text: 'Telefone',
			    dataIndex: 'NUM_TELEFONE_02',
			    width : 60
			  },
			  {
			    text: 'Celular',
			    dataIndex: 'NUM_CELULAR',
			    width : 60
			  },
			  {
			    text: 'IE',
			    dataIndex: 'NUM_INSCRICAO_ESTADUAL',
			    width : 80
			  },
			  {
			    text: 'IM',
			    dataIndex: 'NUM_INSCRICAO_MUNICIPAL',
			    width : 80
			  },
			  {
			    text: 'Site',
			    dataIndex: 'DES_SITE',
			    width : 200
			  },
			  {
			    text: 'E-mail',
			    dataIndex: 'DES_EMAIL',
			    width : 200
			  }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'EmpresaStore',
                dock: 'bottom',
                displayInfo: true,
				pageSize: 10,
                displayMsg: 'Mostrando {0} - {1} de {2}',
                emptyMsg: 'Nenhum registro de dados'
			}]
        });

        this.callParent(arguments);
    }
});
