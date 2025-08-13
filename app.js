document.addEventListener('DOMContentLoaded', function() {
    const width = document.getElementById('width');
    const height = document.getElementById('height');

    width.addEventListener('input', function() {
        const widthValue = Number(width.value);
        console.log("Width = " + widthValue);
    });
    height.addEventListener('input', function(){
        const heightValue = Number(height.value);
        console.log("Height = " + heightValue);
    });

    const startBoardButton = document.getElementById("startBoardButton");
    let squares = [];
    const grid = document.querySelector('.grid');

    startBoardButton.addEventListener('click', function(){
        if (width.value == 0 || height.value == 0) {
            alert("Set width and Height First!");
        } else {
            grid.innerHTML = '';

            const boardSize = width.value * height.value;
            const minesAmount = Math.round(0.2 * boardSize);
            
            grid.style.gridTemplateColumns = `repeat(${width.value}, 40px)`;

            const minesArray = Array(minesAmount).fill("mines");
            const saveFieldArray = Array(boardSize-minesAmount).fill("save");
            const boardArray = saveFieldArray.concat(minesArray);
            const shuffledArray = boardArray.sort(() => Math.random() -0.5)


            console.log("board size = " + boardSize);
            console.log("mines amount = " + minesAmount);
            console.log("board array = " + boardArray);
            console.log("shuffled array = " + shuffledArray);

            for(let i = 0; i<boardSize; i++){
                const square = document.createElement('div');
                square.setAttribute('id', i);
                square.classList.add(shuffledArray[i]);
                grid.appendChild(square);
                squares.push(square);
            }
        }
    });

});