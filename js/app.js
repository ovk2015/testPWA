var path2root = 'http://localhost/kwork/RudenkoMaxim/PWA/testPWA/';

if('serviceWorker' in navigator)
{
	navigator.serviceWorker.register(path2root + 'js/SW.js', {scope: path2root}).
		then(function(reg) 
		{			
			console.log('Зарегестрировались ' + reg.scope);
		}).
		catch(function(error) 
		{			
			console.log('Ошибка регистрации ' + error);
		});
};