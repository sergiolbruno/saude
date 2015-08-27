Ext.define('consultorio.model.UfModel', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'COD_UF', type: 'string', useNull: true},
		{name: 'DES_UF', type: 'string', useNull: true}
    ],
	idProperty: 'COD_UF'
});