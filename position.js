function nextPosition(ele){



	const greenMoves = [ 
    {left: '389px',top: '38px'},      //'b2'
    {left: '389px',top: '88px'},      //'b3'
    {left: '389px',top: '138px'},     //'b4'
    {left: '389px',top: '188px'},     //'b5'
    {left: '389px',top: '238px'},     //'b6'
    {left: '439px',top: '288px'},     //'b7' 
    {left: '489px',top: '288px'},     // 'b8' 
    {left: '539px',top: '288px'},     // 'b9' 
    {left: '589px',top: '288px'},     // 'b10'
    {left: '639px',top: '288px'},     // 'b11'
    {left: '689px',top: '288px'},     // 'b12'
    {left: '689px',top: '338px'},     // 'b13'
    {left: '689px',top: '388px'},     // 'b14'
    {left: '639px',top: '388px'},     // 'b15'
    {left: '589px',top: '388px'},     // 'b16'
    {left: '539px',top: '388px'},     // 'b17'
    {left: '489px',top: '388px'},     // 'b18'
    {left: '439px',top: '388px'},     // 'b19'
    {left: '389px',top: '438px'},     // 'b20'
    {left: '389px',top: '488px'},     // 'b21'
    {left: '389px',top: '538px'},     // 'b22'
    {left: '389px',top: '588px'},     // 'b23'
    {left: '389px',top: '638px'},     // 'b24'
    {left: '389px',top: '688px'},     // 'b25'
    {left: '339px',top: '688px'},     // 'b26'
    {left: '289px',top: '688px'},     // 'b27'
    {left: '289px',top: '638px'},     // 'b28'
    {left: '289px',top: '588px'},     // 'b29'
    {left: '289px',top: '538px'},     // 'b30'
    {left: '289px',top: '488px'},     // 'b31'
    {left: '289px',top: '438px'},     // 'b32'
    {left: '239px',top: '388px'},     // 'b33'
    {left: '189px',top: '388px'},     // 'b34'
    {left: '139px',top: '388px'},     // 'b35'
    {left: '89px',top: '388px'},      // 'b36'
    {left: '39px',top: '388px'},      // 'b37'
    {left: '-12px',top: '388px'},     // 'b38'
    {left: '-12px',top: '338px'},     // 'b39'
    {left: '-12px',top: '288px'},     // 'b40'
    {left: '39px',top: '288px'},      // 'b41'
    {left: '89px',top: '288px'},      // 'b42'
    {left: '139px',top: '288px'},     // 'b43'
    {left: '189px',top: '288px'},     // 'b44'
    {left: '239px',top: '288px'},     // 'b45'
    {left: '289px',top: '238px'},     // 'b46'
    {left: '289px',top: '188px'},     // 'b47'
    {left: '289px',top: '138px'},     // 'b48'
    {left: '289px',top: '88px'},      // 'b49'
    {left: '289px',top: '38px'},      // 'b50'
    {left: '289px',top: '-12px'},     // 'b51'
    {left: '339px',top: '-12px'},     // 'b52'
    {left: '339px',top: '38px'},      // 'b53'
    {left: '339px',top: '88px'},      // 'b54'
    {left: '339px',top: '138px'},     // 'b55'
    {left: '339px',top: '188px'},     // 'b56'
    {left: '339px',top: '238px'},     // 'b57'
    {left: '339px',top: '288px'},     // 'home'  left:'339px',top: '288px
  ];

const yellowMoves = [
    {left: '639px',top: '388px'},     // 'b15'
    {left: '589px',top: '388px'},     // 'b16'
    {left: '539px',top: '388px'},     // 'b17'
    {left: '489px',top: '388px'},     // 'b18'
    {left: '439px',top: '388px'},     // 'b19'
    {left: '389px',top: '438px'},     // 'b20'
    {left: '389px',top: '488px'},     // 'b21'
    {left: '389px',top: '538px'},     // 'b22'
    {left: '389px',top: '588px'},     // 'b23'
    {left: '389px',top: '638px'},     // 'b24'
    {left: '389px',top: '688px'},     // 'b25'
    {left: '339px',top: '688px'},     // 'b26'
    {left: '289px',top: '688px'},     // 'b27'
    {left: '289px',top: '638px'},     // 'b28'
    {left: '289px',top: '588px'},     // 'b29'
    {left: '289px',top: '538px'},     // 'b30'
    {left: '289px',top: '488px'},     // 'b31'
    {left: '289px',top: '438px'},     // 'b32'
    {left: '239px',top: '388px'},     // 'b33'
    {left: '189px',top: '388px'},     // 'b34'
    {left: '139px',top: '388px'},     // 'b35'
    {left: '89px',top: '388px'},      // 'b36'
    {left: '39px',top: '388px'},      // 'b37'
    {left: '-12px',top: '388px'},     // 'b38'
    {left: '-12px',top: '338px'},     // 'b39'
    {left: '-12px',top: '288px'},     // 'b40'
    {left: '39px',top: '288px'},      // 'b41'
    {left: '89px',top: '288px'},      // 'b42'
    {left: '139px',top: '288px'},     // 'b43'
    {left: '189px',top: '288px'},     // 'b44'
    {left: '239px',top: '288px'},     // 'b45'
    {left: '289px',top: '238px'},     // 'b46'
    {left: '289px',top: '188px'},     // 'b47'
    {left: '289px',top: '138px'},     // 'b48'
    {left: '289px',top: '88px'},      // 'b49'
    {left: '289px',top: '38px'},      // 'b50'
    {left: '289px',top: '-12px'},     // 'b51'
    {left: '339px',top: '-12px'},     // 'b52'
    {left: '389px',top: '-12px'},     //'b1'
    {left: '389px',top: '38px'},      //'b2'
    {left: '389px',top: '88px'},      //'b3'
    {left: '389px',top: '138px'},     //'b4'
    {left: '389px',top: '188px'},     //'b5'
    {left: '389px',top: '238px'},     //'b6'
    {left: '439px',top: '288px'},     //'b7' 
    {left: '489px',top: '288px'},     // 'b8' 
    {left: '539px',top: '288px'},     // 'b9' 
    {left: '589px',top: '288px'},     // 'b10'
    {left: '639px',top: '288px'},     // 'b11'
    {left: '689px',top: '288px'},     // 'b12'
    {left: '689px',top: '338px'},     // 'b13'
    {left: '639px',top: '338px'},     // 'b58'
    {left: '589px',top: '338px'},     // 'b59'
    {left: '539px',top: '338px'},     // 'b60'
    {left: '489px',top: '338px'},     // 'b61'
    {left: '439px',top: '338px'},     // 'b62'
    {left: '389px',top: '338px'},     // 'home'
  ];

const blueMoves = [
    {left: '289px',top: '638px'},     // 'b28'
    {left: '289px',top: '588px'},     // 'b29'
    {left: '289px',top: '538px'},     // 'b30'
    {left: '289px',top: '488px'},     // 'b31'
    {left: '289px',top: '438px'},     // 'b32'
    {left: '239px',top: '388px'},     // 'b33'
    {left: '189px',top: '388px'},     // 'b34'
    {left: '139px',top: '388px'},     // 'b35'
    {left: '89px',top: '388px'},      // 'b36'
    {left: '39px',top: '388px'},      // 'b37'
    {left: '-12px',top: '388px'},     // 'b38'
    {left: '-12px',top: '338px'},     // 'b39'
    {left: '-12px',top: '288px'},     // 'b40'
    {left: '39px',top: '288px'},      // 'b41'
    {left: '89px',top: '288px'},      // 'b42'
    {left: '139px',top: '288px'},     // 'b43'
    {left: '189px',top: '288px'},     // 'b44'
    {left: '239px',top: '288px'},     // 'b45'
    {left: '289px',top: '238px'},     // 'b46'
    {left: '289px',top: '188px'},     // 'b47'
    {left: '289px',top: '138px'},     // 'b48'
    {left: '289px',top: '88px'},      // 'b49'
    {left: '289px',top: '38px'},      // 'b50'
    {left: '289px',top: '-12px'},     // 'b51'
    {left: '339px',top: '-12px'},     // 'b52'
    {left: '389px',top: '-12px'},     //'b1'
    {left: '389px',top: '38px'},      //'b2'
    {left: '389px',top: '88px'},      //'b3'
    {left: '389px',top: '138px'},     //'b4'
    {left: '389px',top: '188px'},     //'b5'
    {left: '389px',top: '238px'},     //'b6'
    {left: '439px',top: '288px'},     //'b7' 
    {left: '489px',top: '288px'},     // 'b8' 
    {left: '539px',top: '288px'},     // 'b9' 
    {left: '589px',top: '288px'},     // 'b10'
    {left: '639px',top: '288px'},     // 'b11'
    {left: '689px',top: '288px'},     // 'b12'
    {left: '689px',top: '338px'},     // 'b13'
    {left: '689px',top: '388px'},     // 'b14'
    {left: '639px',top: '388px'},     // 'b15'
    {left: '589px',top: '388px'},     // 'b16'
    {left: '539px',top: '388px'},     // 'b17'
    {left: '489px',top: '388px'},     // 'b18'
    {left: '439px',top: '388px'},     // 'b19'
    {left: '389px',top: '438px'},     // 'b20'
    {left: '389px',top: '488px'},     // 'b21'
    {left: '389px',top: '538px'},     // 'b22'
    {left: '389px',top: '588px'},     // 'b23'
    {left: '389px',top: '638px'},     // 'b24'
    {left: '389px',top: '688px'},     // 'b25'
    {left: '339px',top: '688px'},     // 'b26'
    {left: '339px',top: '638px'},     // 'b63'
    {left: '339px',top: '588px'},     // 'b64'
    {left: '339px',top: '538px'},     // 'b65'
    {left: '339px',top: '488px'},     // 'b66'
    {left: '339px',top: '438px'},     // 'b67'
    {left: '339px',top: '388px'},     // 'home'
  ];
const redMoves = [
    {left: '39px',top: '288px'},      // 'b41'
    {left: '89px',top: '288px'},      // 'b42'
    {left: '139px',top: '288px'},     // 'b43'
    {left: '189px',top: '288px'},     // 'b44'
    {left: '239px',top: '288px'},     // 'b45'
    {left: '289px',top: '238px'},     // 'b46'
    {left: '289px',top: '188px'},     // 'b47'
    {left: '289px',top: '138px'},     // 'b48'
    {left: '289px',top: '88px'},      // 'b49'
    {left: '289px',top: '38px'},      // 'b50'
    {left: '289px',top: '-12px'},     // 'b51'
    {left: '339px',top: '-12px'},     // 'b52'
    {left: '389px',top: '-12px'},     //'b1'
    {left: '389px',top: '38px'},      //'b2'
    {left: '389px',top: '88px'},      //'b3'
    {left: '389px',top: '138px'},     //'b4'
    {left: '389px',top: '188px'},     //'b5'
    {left: '389px',top: '238px'},     //'b6'
    {left: '439px',top: '288px'},     //'b7' 
    {left: '489px',top: '288px'},     // 'b8' 
    {left: '539px',top: '288px'},     // 'b9' 
    {left: '589px',top: '288px'},     // 'b10'
    {left: '639px',top: '288px'},     // 'b11'
    {left: '689px',top: '288px'},     // 'b12'
    {left: '689px',top: '338px'},     // 'b13'
    {left: '689px',top: '388px'},     // 'b14'
    {left: '639px',top: '388px'},     // 'b15'
    {left: '589px',top: '388px'},     // 'b16'
    {left: '539px',top: '388px'},     // 'b17'
    {left: '489px',top: '388px'},     // 'b18'
    {left: '439px',top: '388px'},     // 'b19'
    {left: '389px',top: '438px'},     // 'b20'
    {left: '389px',top: '488px'},     // 'b21'
    {left: '389px',top: '538px'},     // 'b22'
    {left: '389px',top: '588px'},     // 'b23'
    {left: '389px',top: '638px'},     // 'b24'
    {left: '389px',top: '688px'},     // 'b25'
    {left: '339px',top: '688px'},     // 'b26'
    {left: '289px',top: '688px'},     // 'b27'
    {left: '289px',top: '638px'},     // 'b28'
    {left: '289px',top: '588px'},     // 'b29'
    {left: '289px',top: '538px'},     // 'b30'
    {left: '289px',top: '488px'},     // 'b31'
    {left: '289px',top: '438px'},     // 'b32'
    {left: '239px',top: '388px'},     // 'b33'
    {left: '189px',top: '388px'},     // 'b34'
    {left: '139px',top: '388px'},     // 'b35'
    {left: '89px',top: '388px'},      // 'b36'
    {left: '39px',top: '388px'},      // 'b37'
    {left: '-12px',top: '388px'},     // 'b38'
    {left: '-12px',top: '338px'},     // 'b39'
    {left: '39px',top: '338px'},      // 'b68'
    {left: '89px',top: '338px'},      // 'b69'
    {left: '139px',top: '338px'},     // 'b70'
    {left: '189px',top: '338px'},     // 'b71'
    {left: '239px',top: '338px'},     // 'b72'
    {left: '289px',top: '338px'},     // 'home'
  ];





	const home = {left: '338px',top: '338px'};

	const b1 = {left: '389px',top: '-12px'};

	const b2 = {left: '389px',top: '38px'};

	const b3 = {left: '389px',top: '88px'};

	const b4 = {left: '389px',top: '138px'};

	const b5 = {left: '389px',top: '188px'};

	const b6 = {left: '389px',top: '238px'};

	const b7 = {left: '439px',top: '288px'};

	const b8 = {left: '489px',top: '288px'};

	const b9 = {left: '539px',top: '288px'};

	const b10 = {left: '589px',top: '288px'};

	const b11 = {left: '639px',top: '288px'};

	const b12 = {left: '689px',top: '288px'};

	const b13 = {left: '689px',top: '338px'};

	const b14 = {left: '689px',top: '388px'};

	const b15 = {left: '639px',top: '388px'};

	const b16 = {left: '589px',top: '388px'};

	const b17 = {left: '539px',top: '388px'};

	const b18 = {left: '489px',top: '388px'};

	const b19 = {left: '439px',top: '388px'};

	const b20 = {left: '389px',top: '438px'};

	const b21 = {left: '389px',top: '488px'};

	const b22 = {left: '389px',top: '538px'};

	const b23 = {left: '389px',top: '588px'};

	const b24 = {left: '389px',top: '638px'};

	const b25 = {left: '389px',top: '688px'};

	const b26 = {left: '339px',top: '688px'};

	const b27 = {left: '289px',top: '688px'};

	const b28 = {left: '289px',top: '638px'};

	const b29 = {left: '289px',top: '588px'};

	const b30 = {left: '289px',top: '538px'};

	const b31 = {left: '289px',top: '488px'};

	const b32 = {left: '289px',top: '438px'};

	const b33 = {left: '239px',top: '388px'};

	const b34 = {left: '189px',top: '388px'};

	const b35 = {left: '139px',top: '388px'};

	const b36 = {left: '89px',top: '388px'};

	const b37 = {left: '39px',top: '388px'};

	const b38 = {left: '-12px',top: '388px'};

	const b39 = {left: '-12px',top: '338px'};

	const b40 = {left: '-12px',top: '288px'};

	const b41 = {left: '39px',top: '288px'};

	const b42 = {left: '89px',top: '288px'};

	const b43 = {left: '139px',top: '288px'};

	const b44 = {left: '189px',top: '288px'};

	const b45 = {left: '239px',top: '288px'};

	const b46 = {left: '289px',top: '238px'};

	const b47 = {left: '289px',top: '188px'};

	const b48 = {left: '289px',top: '138px'};

	const b49 = {left: '289px',top: '88px'};

	const b50 = {left: '289px',top: '38px'};

	const b51 = {left: '289px',top: '-12px'};

	const b52 = {left: '339px',top: '-12px'};

	const b53 = {left: '339px',top: '38px'};

	const b54 = {left: '339px',top: '88px'};

	const b55 = {left: '339px',top: '138px'};

	const b56 = {left: '339px',top: '188px'};

	const b57 = {left: '339px',top: '238px'};

	const b58 = {left: '639px',top: '338px'};

	const b59 = {left: '589px',top: '338px'};

	const b60 = {left: '539px',top: '338px'};

	const b61 = {left: '489px',top: '338px'};

	const b62 = {left: '439px',top: '338px'};

	const b63 = {left: '339px',top: '638px'};

	const b64 = {left: '339px',top: '588px'};

	const b65 = {left: '339px',top: '538px'};

	const b66 = {left: '339px',top: '488px'};

	const b67 = {left: '339px',top: '438px'};

	const b68 = {left: '39px',top: '338px'};

	const b69 = {left: '89px',top: '338px'};

	const b70 = {left: '139px',top: '338px'};

	const b71 = {left: '189px',top: '338px'};

	const b72 = {left: '239px',top: '338px'};






	const home = {
		left: '338px',
		top: '338px'
	};

	const b1 = {
		left: '389px',
		top: '-12px'
	};

	const b2 = {
		left: '389px',
		top: '38px'
	};

	const b3 = {
		left: '389px',
		top: '88px'
	};

	const b4 = {
		left: '389px',
		top: '138px'
	};

	const b5 = {
		left: '389px',
		top: '188px'
	};

	const b6 = {
		left: '389px',
		top: '238px'
	};

	const b7 = {
		left: '439px',
		top: '288px'
	};

	const b8 = {
		left: '489px',
		top: '288px'
	};

	const b9 = {
		left: '539px',
		top: '288px'
	};

	const b10 = {
		left: '589px',
		top: '288px'
	};

	const b11 = {
		left: '639px',
		top: '288px'
	};

	const b12 = {
		left: '689px',
		top: '288px'
	};

	const b13 = {
		left: '689px',
		top: '338px'
	};

	const b14 = {
		left: '689px',
		top: '388px'
	};

	const b15 = {
		left: '639px',
		top: '388px'
	};

	const b16 = {
		left: '589px',
		top: '388px'
	};

	const b17 = {
		left: '539px',
		top: '388px'
	};

	const b18 = {
		left: '489px',
		top: '388px'
	};

	const b19 = {
		left: '439px',
		top: '388px'
	};

	const b20 = {
		left: '389px',
		top: '438px'
	};

	const b21 = {
		left: '389px',
		top: '488px'
	};

	const b22 = {
		left: '389px',
		top: '538px'
	};

	const b23 = {
		left: '389px',
		top: '588px'
	};

	const b24 = {
		left: '389px',
		top: '638px'
	};

	const b25 = {
		left: '389px',
		top: '688px'
	};

	const b26 = {
		left: '339px',
		top: '688px'
	};

	const b27 = {
		left: '289px',
		top: '688px'
	};

	const b28 = {
		left: '289px',
		top: '638px'
	};

	const b29 = {
		left: '289px',
		top: '588px'
	};

	const b30 = {
		left: '289px',
		top: '538px'
	};

	const b31 = {
		left: '289px',
		top: '488px'
	};


	const b32 = {
		left: '289px',
		top: '438px'
	};

	const b33 = {
		left: '239px',
		top: '388px'
	};

	const b34 = {
		left: '189px',
		top: '388px'
	};

	const b35 = {
		left: '139px',
		top: '388px'
	};

	const b36 = {
		left: '89px',
		top: '388px'
	};

	const b37 = {
		left: '39px',
		top: '388px'
	};

	const b38 = {
		left: '-12px',
		top: '388px'
	};

	const b39 = {
		left: '-12px',
		top: '338px'
	};

	const b40 = {
		left: '-12px',
		top: '288px'
	};

	const b41 = {
		left: '39px',
		top: '288px'
	};

	const b42 = {
		left: '89px',
		top: '288px'
	};

	const b43 = {
		left: '139px',
		top: '288px'
	};

	const b44 = {
		left: '189px',
		top: '288px'
	};

	const b45 = {
		left: '239px',
		top: '288px'
	};

	const b46 = {
		left: '289px',
		top: '238px'
	};

	const b47 = {
		left: '289px',
		top: '188px'
	};

	const b48 = {
		left: '289px',
		top: '138px'
	};

	const b49 = {
		left: '289px',
		top: '88px'
	};

	const b50 = {
		left: '289px',
		top: '38px'
	};

	const b51 = {
		left: '289px',
		top: '-12px'
	};

	const b52 = {
		left: '339px',
		top: '-12px'
	};

	const b53 = {
		left: '339px',
		top: '38px'
	};

	const b54 = {
		left: '339px',
		top: '88px'
	};

	const b55 = {
		left: '339px',
		top: '138px'
	};

	const b56 = {
		left: '339px',
		top: '188px'
	};

	const b57 = {
		left: '339px',
		top: '238px'
	};

	const b58 = {
		left: '639px',
		top: '338px'
	};

	const b59 = {
		left: '589px',
		top: '338px'
	};

	const b60 = {
		left: '539px',
		top: '338px'
	};

	const b61 = {
		left: '489px',
		top: '338px'
	};

	const b62 = {
		left: '439px',
		top: '338px'
	};

	const b63 = {
		left: '339px',
		top: '638px'
	};

	const b64 = {
		left: '339px',
		top: '588px'
	};

	const b65 = {
		left: '339px',
		top: '538px'
	};

	const b66 = {
		left: '339px',
		top: '488px'
	};

	const b67 = {
		left: '339px',
		top: '438px'
	};

	const b68 = {
		left: '39px',
		top: '338px'
	};

	const b69 = {
		left: '89px',
		top: '338px'
	};

	const b70 = {
		left: '139px',
		top: '338px'
	};

	const b71 = {
		left: '189px',
		top: '338px'
	};

	const b72 = {
		left: '239px',
		top: '338px'
	};
};