import React from "react";

const heading = React.createElement('h1', null, 'Biodata Developer');
const firstList = React.createElement('li', null, 'Nama: Aditya Negara');
const secondLIst = React.createElement('li', null, 'Kelahiran: Cianjur');
const thirdList = React.createElement('li', null, 'Tagline: Amor Fati');
const unorderedList = React.createElement('ul', null, [firstList, secondLIst, thirdList]);
const container = React.createElement('div', null, [heading, unorderedList]);

export default container;