$(function() {
    var remote = require('remote');
    var imageLoader = require('./models/imageLoader.js');

    $('.browse-source-path').on('click', function() {
        var dialog = remote.require('electron').dialog;
        var sourcePath = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory' ]});
        $('.source-path').html(sourcePath);
    });

    $('.browse-destination-path').on('click', function() {
        var dialog = remote.require('electron').dialog;
        var destinationPath = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory' ]});
        $('.destination-path').html(destinationPath);
    });

    $('.load-images').on('click', function() {
        //imageLoader.salut();
        console.log(imageLoader.salut());
    });
});