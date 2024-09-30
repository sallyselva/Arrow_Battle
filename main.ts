mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(img`
        ........cc........
        .......c11c.......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        .ccc..c1111c..ccc.
        c111c.c1111c.c111c
        c1111cc1111cc1111c
        .c1111c1111c1111c.
        ..c111111111111c..
        ...c1111111111c...
        ....c11111111c....
        .....c111111c.....
        ......c1111c......
        .......c11c.......
        ........cc........
        `)
    if (arrow.image.equals(img`
        ........cc........
        .......c11c.......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        .ccc..c1111c..ccc.
        c111c.c1111c.c111c
        c1111cc1111cc1111c
        .c1111c1111c1111c.
        ..c111111111111c..
        ...c1111111111c...
        ....c11111111c....
        .....c111111c.....
        ......c1111c......
        .......c11c.......
        ........cc........
        `)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(img`
        ........cc........
        .......c11c.......
        ......c111c.......
        .....c1111c.......
        ....c1111c........
        ...c1111c.........
        ..c1111ccccccccc..
        .c11111111111111c.
        c1111111111111111c
        c1111111111111111c
        .c11111111111111c.
        ..c1111ccccccccc..
        ...c1111c.........
        ....c1111c........
        .....c1111c.......
        ......c111c.......
        .......c11c.......
        ........cc........
        `)
    if (arrow.image.equals(img`
        ........cc........
        .......c11c.......
        ......c111c.......
        .....c1111c.......
        ....c1111c........
        ...c1111c.........
        ..c1111ccccccccc..
        .c11111111111111c.
        c1111111111111111c
        c1111111111111111c
        .c11111111111111c.
        ..c1111ccccccccc..
        ...c1111c.........
        ....c1111c........
        .....c1111c.......
        ......c111c.......
        .......c11c.......
        ........cc........
        `)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
bundles.wrap3(function () {
    arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    img`
        ........cc........
        .......c11c.......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        ......c1111c......
        .ccc..c1111c..ccc.
        c111c.c1111c.c111c
        c1111cc1111cc1111c
        .c1111c1111c1111c.
        ..c111111111111c..
        ...c1111111111c...
        ....c11111111c....
        .....c111111c.....
        ......c1111c......
        .......c11c.......
        ........cc........
        `
    ]
    arrow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
bundles.wrap4(function () {
    game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(15, carnival.WinTypes.Multi, effects.confetti)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 4750, 4783, 255, 0, 449, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
})
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
