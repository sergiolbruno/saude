Ext.define('consultorio.view.Viewport', {
    extend: 'Ext.container.Viewport',
	requires: [
		'consultorio.view.cadastro.EspecialidadeCadastro',
		'consultorio.view.cadastro.EspecialidadeGrid',
		
		'consultorio.view.cadastro.EmpresaCadastro',
		'consultorio.view.cadastro.EmpresaGrid'
	],
    layout: 'border',
	

    items: [{
        region: 'center',
        xtype: 'panel'
    }, {
        region: 'north',
        xtype: 'toolbar',
		items: [
			{
				text: 'Cadastro',
				iconCls: 'menu_cadastro',
				menu: [
					{
						id: 'mniCadastroEspecialidade',
						text: 'Especialidade'
					},
					{
						id: 'mniCadastroMedico',
						text: 'Médico'
					},
					{
						id: 'mniCadastroEmpresa',
						text: 'Clientes'
					},
					{
						id: 'mniCadastroPaciente',
						text: 'Paciente'
					}
				]
			},

			{
				text: 'Movimento',
				iconCls: 'menu_movimento',
				menu: [
					{
						text: 'Marcação de Consulta'
					},
					{
						text: 'Listagem de Pacientes'
					},
					{
						text: 'Estatística',
						menu: {       
							items: [
								{
									text: 'Consultas por Especialidade',
								}, {
									text: 'Consultas por Médico',
								}, {
									text: 'Consulta por Paciente',
								}
							]
						}					
					}
				]
			},

			{
				text: 'Relatório',
				iconCls: 'menu_relatorio',
				menu: [
					{
						text: 'Consulta Marcadas'
					},
					{
						text: 'Listagem de Pacientes'
					},
					{
						text: 'Financeiro'
					}					
				]
			}
			
		]
    }]
});
