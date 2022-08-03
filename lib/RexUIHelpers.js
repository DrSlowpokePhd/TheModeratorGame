/*
 * This function serves as a wrapper for creating buttons
 * for the rex-ui buttons class
 * properties:
 * x, y
 * height, width
 * anchor
 * icon, iconMask
 * background
 * text
 * */

function addButton(config, scene) {
    return scene.rexUI.add.label(config);
}

// premade button function example
function premadeButton(ax, ay, bg-key, ltext, scene) {
    let config = {
        x: ax,
        y: ay,
        height: 40,
        width: 100, 
        background: bg-key, 
        text: ltext
    }

    return addButton(config, scene);
}
