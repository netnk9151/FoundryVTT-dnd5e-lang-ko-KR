Hooks.on('init', () => {

	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'dnd5e_ko-KR',
			lang: 'ko',
			dir: 'compendium'
		}); 
	}
});
