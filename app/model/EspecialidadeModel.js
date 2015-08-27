Ext.define('consultorio.model.EspecialidadeModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: 'COD_ESPECIALIDADE', type: 'int', useNull: true},
		{name: 'DES_ESPECIALIDADE', type: 'string', useNull: true},
    ],
	idProperty: 'COD_ESPECIALIDADE'
});