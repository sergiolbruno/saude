Ext.define('consultorio.store.EspecialidadeStore', {
    extend: 'Ext.data.Store',

    requires: ['consultorio.model.EspecialidadeModel'],

    model: 'consultorio.model.EspecialidadeModel',

    proxy: {
        type: 'ajax',
        url: 'rn/EspecialidadeCadastroRN.php?op=especialidadeLista',
        reader: {
            type: 'json',
            root: 'items',
			totalProperty: 'totalCount',
			successProperty: 'success'
        }
    }
});
