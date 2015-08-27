Ext.define('consultorio.store.EmpresaStore', {
    extend: 'Ext.data.Store',

    requires: ['consultorio.model.EmpresaModel'],

    model: 'consultorio.model.EmpresaModel',

    proxy: {
        type: 'ajax',
        url: 'rn/EmpresaCadastroRN.php?op=empresaLista',
        reader: {
            type: 'json',
            root: 'items',
			totalProperty: 'totalCount',
			successProperty: 'success'
        }
    }
});
