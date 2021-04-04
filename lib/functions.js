export const scrollToSection = (sectionId, sectionRefs) => {
	for (const sectionRef of sectionRefs) {
		if (sectionId === sectionRef.current.id) {
			window.scrollTo({
				top: sectionRef.current.offsetTop - 100,
				behavior: 'smooth'
			});
			break;
		} 
	}
};