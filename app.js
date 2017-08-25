var path2root = 'https://ovk2015.github.io/testPWA/';

if('serviceWorker' in navigator)
{
	navigator.serviceWorker.register(path2root + 'SW.js').
		then(function(reg) 
		{			
			console.log('Зарегестрировались ' + reg.scope);
		}).
		catch(function(error) 
		{			
			console.log('Ошибка регистрации ' + error);
		});
};
