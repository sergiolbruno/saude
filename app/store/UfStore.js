Ext.define('consultorio.store.UfStore', {
    extend: 'Ext.data.Store',

    requires: ['consultorio.model.UfModel'],

    model: 'consultorio.model.UfModel',

    proxy: {
        type: 'ajax',
        url: 'rn/UfCadastroRN.php?op=ufLista',
        reader: {
            type: 'json',
            root: 'items',
			totalProperty: 'totalCount',
			successProperty: 'success'
        }
    }
});
