// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.
//
// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:
//<h2> tag’as su tekstu;
//<p> tag’as su tekstu;
//<ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
//<p> tag’as su tekstu.

let main = document.querySelector('#main');
let hh_2 = document.createElement('h2');
    hh_2.innerText = 'Some text';
    main.appendChild(hh_2);

let pp_2 = document.createElement('p');
    pp_2.innerText = 'Some text';
    main.appendChild(pp_2);

let listOfImg = document.createElement('ul');

    for (let i = 1; i <= 5; i++) {
        let liElem = document.createElement('li');

        let image = document.createElement('img');
        image.src = `assets/logo-social.png`;
        image.style.width = '150px';

        liElem.appendChild(image);
        listOfImg.appendChild(liElem);
    }

    listOfImg.style['list-style-type'] = 'none';
    main.appendChild(listOfImg);

let pp_3 = document.createElement('p');
    pp_3.innerText = 'Some text';
    document.getElementById('main').appendChild(pp_3);