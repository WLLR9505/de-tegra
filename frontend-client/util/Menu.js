const RL = require('readline-sync');
const color = require('./colors');
var menu_IO = '';

module.exports = function Menu(menuList) {
    var posSeletor = 0;
    const nItens = menuList.length;

    function AtualizaMenu() {
        for (var i2 = 0; i2 < nItens; i2++) {
            if (posSeletor == i2) {
                console.log(`${color.cor_ciano} ${menuList[i2]} ${color.cor_reset}`); //marca posição do seletor
            } else {
                console.log(`${menuList[i2]}`);
            }
        }
        console.log("\n");
    }

    function ShowMenu() {
        if (menu_IO == 'w')
            posSeletor--;
        else if (menu_IO == 's')
            posSeletor++;

        if (posSeletor == nItens) ///Seletor no fim e avança
            posSeletor = 0; //Igual ao primeiro item do menu
        else if (posSeletor < 0) //seletor no começo e volta
            posSeletor = nItens - 1; //Igual ao ultimo item do menu

        console.clear();
        AtualizaMenu();

    }

    do {
        ShowMenu();
        menu_IO = RL.keyIn('', {
            hideEchoBack: true,
            mask: ''
        });
        if(menu_IO == 'q') {
            return -1;
        }
    } while (menu_IO != 'e')

    // callBack(posSeletor);
    return posSeletor;
}