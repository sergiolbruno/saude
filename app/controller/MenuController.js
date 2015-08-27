Ext.define('consultorio.controller.MenuController', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'menuitem[id=mniCadastroEspecialidade]': {
                click: this.onEspecialidadeClick
            },
			
            'menuitem[id=mniCadastroEmpresa]': {
                click: this.onEmpresaClick
            },

            'menuitem[id=mniCadastroMedico]': {
                click: this.onMedicoClick
            }
        });
    },

	onEspecialidadeClick: function() {
		Ext.create("consultorio.view.cadastro.EspecialidadeCadastro").show();
	},

	onEmpresaClick: function() {
		Ext.create("consultorio.view.cadastro.EmpresaCadastro").show();
	},
	
	onMedicoClick: function() {
	}
	
});
