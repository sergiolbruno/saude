Ext.define('consultorio.view.cadastro.EspecialidadeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.especialidade-cadastro-grid',
    
    border: true,
    
    initComponent: function() {
        Ext.apply(this, {
            store: 'EspecialidadeStore',
            columns: [
	            {
	                text: 'Código',
	                dataIndex: 'COD_ESPECIALIDADE',
	                width : 60
	            },{
	                text: 'Especialidade',
	                dataIndex: 'DES_ESPECIALIDADE',
					flex: 1
	            }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'EspecialidadeStore',
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
