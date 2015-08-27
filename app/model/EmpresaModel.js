Ext.define('consultorio.model.EmpresaModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'COD_EMPRESA', type: 'int', useNull: true},
		{name: 'DES_RAZAO_SOCIAL', type: 'string', useNull: true},
		{name: 'DES_NOME_FANTASIA', type: 'string', useNull: true},
		{name: 'DES_ENDERECO', type: 'string', useNull: true},
		{name: 'NUM_NUMERO', type: 'int', useNull: true},
		{name: 'DES_COMPLEMENTO', type: 'string', useNull: true},
		{name: 'DES_BAIRRO', type: 'string', useNull: true},
		{name: 'DES_CIDADE', type: 'string', useNull: true},
		{name: 'NUM_CEP', type: 'string', useNull: true},
		{name: 'NUM_CNPJ_CPF', type: 'string', useNull: true},
		{name: 'COD_UF', type: 'string', useNull: true},
		{name: 'NUM_TELEFONE_01', type: 'string', useNull: true},
		{name: 'NUM_TELEFONE_02', type: 'string', useNull: true},
		{name: 'NUM_CELULAR', type: 'string', useNull: true},
		{name: 'NUM_INSCRICAO_ESTADUAL', type: 'string', useNull: true},
		{name: 'NUM_INSCRICAO_MUNICIPAL', type: 'string', useNull: true},
		{name: 'DES_SITE', type: 'string', useNull: true},
		{name: 'DES_EMAIL', type: 'string', useNull: true}
    ],
	idProperty: 'COD_EMPRESA'
});