   
    var game = new Phaser.Game(1080, 1920, Phaser.CANVAS, 'game');

    game.state.add('Boot', TH.Boot);
    game.state.add('Preloader', TH.Preloader);
    game.state.add('MainMenu', TH.MainMenu);
    game.state.add('Gameplay', TH.Gameplay);
    game.state.add('Result', TH.Result);

    game.state.start('Boot');
    var gamesparks;